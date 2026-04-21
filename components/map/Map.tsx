"use client"

import { useEffect, useRef } from "react"
import { config } from "@/config"
import { useUI } from "@/components/services/contexts/UIContexts"
import { useGoogleMapLocation } from "@/components/map/useGoogleMapLocation"
import { loadGoogleMaps } from "@/components/map/googleMaps"

const Map = () => {
   const { settings } = useUI()
   const mapRef = useRef<HTMLDivElement | null>(null)

   const { lat, lng } = useGoogleMapLocation(
      settings?.google_maps_url
   )

   useEffect(() => {
      let marker: google.maps.marker.AdvancedMarkerElement | null = null

      const initMap = async () => {
         await loadGoogleMaps()

         if (!mapRef.current) return

         const center = { lat, lng }

         const map = new google.maps.Map(mapRef.current, {
            center,
            zoom: 15,
            mapId: config.mapId,
         })

         marker = new google.maps.marker.AdvancedMarkerElement({
            map,
            position: center,
         })

         const openMaps = () => {
            if (settings?.google_maps_url) {
               window.open(settings.google_maps_url, "_blank")
            }
         }

         map.addListener("click", openMaps)
         marker.addListener("click", openMaps)
      }

      initMap()
   }, [lat, lng, settings?.google_maps_url])

   return (
      <div
         ref={mapRef}
         style={{
            width: "100%",
            height: 400,
            borderRadius: 30,
            overflow: "hidden",
         }}
      />
   )
}

export default Map
