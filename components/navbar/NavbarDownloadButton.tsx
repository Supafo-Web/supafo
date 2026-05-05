"use client"

import Button from "@/components/button/Button"
import { useState } from "react"
import downloadAnimation from "@/public/lottie/Download.json"
import downloadWhite from "@/public/lottie/Download-white.json"
import dynamic from "next/dynamic"
import Lottie from "lottie-react"
import { useLottieRefreshKey } from "@/components/hooks/UseLottieRefreshKey"

interface NavbarDownloadButtonProps {
   text: string
   href?: string
   onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const NavbarDownloadButton = ({
   text,
   href,
   onClick
}: NavbarDownloadButtonProps) => {
   const [isHovered, setIsHovered] = useState<boolean>(false)
   const refreshKey = useLottieRefreshKey()

   return (
      <Button
         className="cursor-pointer js-close-lang-dropdown"
         text={text}
         href={href}
         ariaLabel={text}
         onClick={onClick}
      >
         <div
            aria-hidden='true'
            className="
                     group flex h-12 w-12 items-center justify-center rounded-full bg-white
                     shadow-[0_0_20px_rgba(0,0,0,0.08)]
                     transition-all duration-300 ease-in-out
                     hover:bg-[#578B23]
                  "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
         >
            <Lottie
               key={`download-${isHovered ? "white" : "green"}-${refreshKey}`}
               animationData={isHovered ? downloadWhite : downloadAnimation}
               loop
               autoplay
               renderer="svg"
            />
         </div>
      </Button>
   )
}

export default NavbarDownloadButton
