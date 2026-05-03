import Image from "next/image"
import mapImage from "@/public/contact/Map.webp"

type ContactMapProps = {
   href?: string
}

const Map = ({
   href = "https://www.google.com/maps/search/?api=1&query=Supafo"
}: ContactMapProps) => {
   return (
      <a
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Supafo konumunu Google Maps üzerinde aç"
         className="
            block relative w-full overflow-hidden rounded-[30px]
            border border-[#82B74C]
            max-w-112.5 mx-auto
         "
      >
         <Image
            src={mapImage}
            alt="Supafo konum haritası"
            width={450}
            height={500}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 450px, 450px"
            className="block w-full h-auto rounded-[30px]"
         />
      </a>
   )
}

export default Map
