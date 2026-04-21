"use client"

import { loadGoogleMaps } from "@/components/map/googleMaps"
import { useEffect, useState } from "react"

const fallbackCenter = {
   lat: 41.0082,
   lng: 28.9784,
}

type ParsedLocation = {
   lat: number
   lng: number
   rawAddress?: string
}

type UseGoogleMapLocationResult = {
   lat: number
   lng: number
   address: string
   loading: boolean
}

const getLocationFromGoogleMapsUrl = (url?: string): ParsedLocation => {
   if (!url) return fallbackCenter

   try {
      let lat: number | null = null
      let lng: number | null = null
      let rawAddress: string | undefined

      const atMatch = url.match(/@(-?\d+\.?\d*),(-?\d+\.?\d*)/)
      if (atMatch) {
         lat = Number(atMatch[1])
         lng = Number(atMatch[2])
      }

      const parsedUrl = new URL(url)

      const queryValue =
         parsedUrl.searchParams.get("query") ||
         parsedUrl.searchParams.get("q")

      if (queryValue) {
         const coordsMatch = queryValue.match(
            /^\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*$/
         )

         if (coordsMatch) {
            lat = Number(coordsMatch[1])
            lng = Number(coordsMatch[2])
         } else {
            rawAddress = decodeURIComponent(queryValue.replace(/\+/g, " "))
         }
      }

      const placeMatch = parsedUrl.pathname.match(/\/maps\/place\/([^/]+)/)
      if (placeMatch && !rawAddress) {
         rawAddress = decodeURIComponent(placeMatch[1].replace(/\+/g, " "))
      }

      if (lat !== null && lng !== null) {
         return { lat, lng, rawAddress }
      }

      return {
         ...fallbackCenter,
         rawAddress,
      }
   } catch (error) {
      console.error("Google Maps URL parse edilemedi:", error)
      return fallbackCenter
   }
}

export const useGoogleMapLocation = (
   googleMapsUrl?: string
): UseGoogleMapLocationResult => {
   const [location, setLocation] = useState<UseGoogleMapLocationResult>({
      lat: fallbackCenter.lat,
      lng: fallbackCenter.lng,
      address: "",
      loading: true,
   })

   useEffect(() => {
      let isMounted = true

      const resolveLocation = async () => {
         try {
            const parsedLocation = getLocationFromGoogleMapsUrl(googleMapsUrl)

            if (!isMounted) return

            setLocation({
               lat: parsedLocation.lat,
               lng: parsedLocation.lng,
               address: parsedLocation.rawAddress || "",
               loading: true,
            })

            await loadGoogleMaps()

            const geocoder = new google.maps.Geocoder()

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
                     setLocation({
                        lat: parsedLocation.lat,
                        lng: parsedLocation.lng,
                        address: results[0].formatted_address,
                        loading: false,
                     })
                     return
                  }

                  setLocation({
                     lat: parsedLocation.lat,
                     lng: parsedLocation.lng,
                     address: parsedLocation.rawAddress || "",
                     loading: false,
                  })
               }
            )
         } catch (error) {
            console.error("Lokasyon çözümlenemedi:", error)

            if (!isMounted) return

            setLocation({
               lat: fallbackCenter.lat,
               lng: fallbackCenter.lng,
               address: "",
               loading: false,
            })
         }
      }

      resolveLocation()

      return () => {
         isMounted = false
      }
   }, [googleMapsUrl])

   return location
}
