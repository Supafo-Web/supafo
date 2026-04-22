"use client"

import { loadGoogleMaps } from "@/components/map/googleMaps"
import { useEffect, useState } from "react"

const fallbackCenter = {
   lat: 41.0082,
   lng: 28.9784,
}

type ParsedLocation = {
   lat?: number
   lng?: number
   rawAddress?: string
}

type UseGoogleMapLocationResult = {
   lat: number
   lng: number
   address: string
   displayAddress: string
   loading: boolean
}

const isUrl = (value?: string) => {
   if (!value) return false

   try {
      new URL(value)
      return true
   } catch {
      return false
   }
}

const normalizeAddress = (value: string) => {
   return value
      .trim()
      .replace(/\s+/g, " ")
      .replace(/\bAzerbaycan\b/gi, "Azerbaijan")
}

const formatDisplayAddress = (address?: string) => {
   if (!address) return ""

   const cleaned = address
      .replace(/\b[0-9A-Z]{4}\+[0-9A-Z]{2,}\b/gi, "")
      .replace(/\s+,/g, ",")
      .replace(/,+/g, ",")
      .trim()

   const parts = cleaned
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean)

   if (parts.length === 0) return ""

   const shortParts = parts.slice(0, 3)

   return shortParts.join(", ")
}

const getLocationFromValue = (value?: string): ParsedLocation => {
   if (!value) return fallbackCenter

   const trimmedValue = value.trim()

   if (!isUrl(trimmedValue)) {
      return {
         rawAddress: normalizeAddress(trimmedValue),
      }
   }

   try {
      let lat: number | null = null
      let lng: number | null = null
      let rawAddress: string | undefined

      const decodedUrl = decodeURIComponent(trimmedValue)
      const parsedUrl = new URL(trimmedValue)

      const queryValue =
         parsedUrl.searchParams.get("query") ||
         parsedUrl.searchParams.get("q")

      if (queryValue) {
         const coordsMatch = queryValue.match(
            /^\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*$/
         )

         if (coordsMatch) {
            lat = Number(coordsMatch[1])
            lng = Number(coordsMatch[2])
         } else {
            rawAddress = normalizeAddress(queryValue.replace(/\+/g, " ").trim())
         }
      }

      const placeCoordsMatch = decodedUrl.match(
         /!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/
      )
      if ((lat === null || lng === null) && placeCoordsMatch) {
         lat = Number(placeCoordsMatch[1])
         lng = Number(placeCoordsMatch[2])
      }

      const atMatch = decodedUrl.match(
         /@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/
      )
      if ((lat === null || lng === null) && atMatch) {
         lat = Number(atMatch[1])
         lng = Number(atMatch[2])
      }

      const placePathMatch = parsedUrl.pathname.match(/\/maps\/place\/([^/]+)/)
      if (placePathMatch && !rawAddress) {
         rawAddress = normalizeAddress(
            placePathMatch[1].replace(/\+/g, " ").trim()
         )
      }

      if (
         lat !== null &&
         lng !== null &&
         Number.isFinite(lat) &&
         Number.isFinite(lng)
      ) {
         return { lat, lng, rawAddress }
      }

      if (rawAddress) {
         return { rawAddress }
      }

      return fallbackCenter
   } catch (error) {
      console.error("Konum değeri parse edilemedi:", error)
      return fallbackCenter
   }
}

export const useGoogleMapLocation = (
   mapValue?: string
): UseGoogleMapLocationResult => {
   const [location, setLocation] = useState<UseGoogleMapLocationResult>({
      lat: fallbackCenter.lat,
      lng: fallbackCenter.lng,
      address: "",
      displayAddress: "",
      loading: true,
   })

   useEffect(() => {
      let isMounted = true

      const resolveLocation = async () => {
         try {
            const parsedLocation = getLocationFromValue(mapValue)

            await loadGoogleMaps()
            if (!isMounted) return

            const geocoder = new google.maps.Geocoder()

            if (
               parsedLocation.lat !== undefined &&
               parsedLocation.lng !== undefined
            ) {
               setLocation({
                  lat: parsedLocation.lat,
                  lng: parsedLocation.lng,
                  address: parsedLocation.rawAddress || "",
                  displayAddress: formatDisplayAddress(parsedLocation.rawAddress),
                  loading: true,
               })

               geocoder.geocode(
                  {
                     location: {
                        lat: parsedLocation.lat,
                        lng: parsedLocation.lng,
                     },
                  },
                  (results, status) => {
                     if (!isMounted) return

                     if (status === "OK" && results?.[0]) {
                        const formatted = results[0].formatted_address

                        setLocation({
                           lat: parsedLocation.lat!,
                           lng: parsedLocation.lng!,
                           address: formatted,
                           displayAddress: formatDisplayAddress(formatted),
                           loading: false,
                        })
                        return
                     }

                     setLocation({
                        lat: parsedLocation.lat!,
                        lng: parsedLocation.lng!,
                        address: parsedLocation.rawAddress || "",
                        displayAddress: formatDisplayAddress(
                           parsedLocation.rawAddress
                        ),
                        loading: false,
                     })
                  }
               )

               return
            }

            if (parsedLocation.rawAddress) {
               setLocation({
                  lat: fallbackCenter.lat,
                  lng: fallbackCenter.lng,
                  address: parsedLocation.rawAddress,
                  displayAddress: formatDisplayAddress(parsedLocation.rawAddress),
                  loading: true,
               })

               geocoder.geocode(
                  {
                     address: parsedLocation.rawAddress,
                     region: "az",
                  },
                  (results, status) => {
                     if (!isMounted) return

                     if (
                        status === "OK" &&
                        results?.[0]?.geometry?.location
                     ) {
                        const resolvedLat = results[0].geometry.location.lat()
                        const resolvedLng = results[0].geometry.location.lng()
                        const formatted = results[0].formatted_address

                        setLocation({
                           lat: resolvedLat,
                           lng: resolvedLng,
                           address: formatted,
                           displayAddress: formatDisplayAddress(formatted),
                           loading: false,
                        })
                        return
                     }

                     setLocation({
                        lat: fallbackCenter.lat,
                        lng: fallbackCenter.lng,
                        address: parsedLocation.rawAddress || "",
                        displayAddress: formatDisplayAddress(
                           parsedLocation.rawAddress
                        ),
                        loading: false,
                     })
                  }
               )

               return
            }

            setLocation({
               lat: fallbackCenter.lat,
               lng: fallbackCenter.lng,
               address: "",
               displayAddress: "",
               loading: false,
            })
         } catch (error) {
            console.error("Lokasyon çözümlenemedi:", error)

            if (!isMounted) return

            setLocation({
               lat: fallbackCenter.lat,
               lng: fallbackCenter.lng,
               address: "",
               displayAddress: "",
               loading: false,
            })
         }
      }

      resolveLocation()

      return () => {
         isMounted = false
      }
   }, [mapValue])

   return location
}
