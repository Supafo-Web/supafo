"use client"

import { useEffect, useRef } from "react"
import { config } from "@/config"
import { useUI } from "@/components/services/contexts/UIContexts"
import { useGoogleMapLocation } from "@/components/map/useGoogleMapLocation"
import { loadGoogleMaps } from "@/components/map/googleMaps"

const isUrl = (value?: string) => {
   if (!value) return false

   try {
      new URL(value)
      return true
   } catch {
      return false
   }
}

const Map = () => {
   const { settings } = useUI()
   const mapRef = useRef<HTMLDivElement | null>(null)

   const mapValue = settings?.address
   const { lat, lng, address, loading } = useGoogleMapLocation(mapValue)

   useEffect(() => {
      let marker: google.maps.marker.AdvancedMarkerElement | null = null

      const initMap = async () => {
         await loadGoogleMaps()

         if (!mapRef.current) return
         if (!Number.isFinite(lat) || !Number.isFinite(lng)) return

         const center = { lat, lng }

         const map = new google.maps.Map(mapRef.current, {
            center,
            zoom: 15,
            mapId: config.mapId,
            disableDefaultUI: true,
            gestureHandling: "none",
            clickableIcons: false,
         })

         marker = new google.maps.marker.AdvancedMarkerElement({
            map,
            position: center,
         })
      }

      if (!loading) {
         initMap()
      }

      return () => {
         if (marker) {
            marker.map = null
         }
      }
   }, [lat, lng, loading])

   const openMapsUrl = (() => {
      if (!mapValue) return ""

      if (isUrl(mapValue)) {
         return mapValue
      }

      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
         mapValue
      )}`
   })()

   if (!mapValue) return null

   return (
      <a
         href={openMapsUrl}
         target="_blank"
         rel="noopener noreferrer"
         style={{
            display: "block",
            position: "relative",
            width: "100%",
            height: 400,
            borderRadius: 30,
            overflow: "hidden",
            cursor: "pointer",
         }}
         className="border border-[#82B74C] rounded-[30px] overflow-hidden"
      >
         <div
            ref={mapRef}
            style={{
               width: "100%",
               height: "100%",
               pointerEvents: "none",
            }}
         />
      </a>
   )
}

export default Map
