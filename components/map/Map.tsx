"use client"

import Image from "next/image"
import { useUI } from "@/components/services/contexts/UIContexts"

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
   const mapValue = settings?.address

   if (!mapValue) return null

   const openMapsUrl = isUrl(mapValue)
      ? mapValue
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapValue)}`

   return (
      <a
         href={openMapsUrl}
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Supafo konumunu Google Haritalar’da aç"
         className="
            relative block w-full h-[570px] overflow-hidden rounded-[30px]
            border border-[#82B74C] mx-auto
         "
      >
         <Image
            src="/contact/Map.webp"
            alt="Supafo konum haritası"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
         />
      </a>
   )
}

export default Map
