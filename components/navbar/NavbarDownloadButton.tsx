"use client"

import Button from "@/components/button/Button"
import { useState } from "react"
import downloadAnimation from "@/public/lottie/Download.json"
import downloadWhite from "@/public/lottie/Download-white.json"
import dynamic from "next/dynamic"

interface NavbarDownloadButtonProps {
   text: string
   href?: string
   onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Lottie = dynamic(() => import("lottie-react"), {
   ssr: false,
})

const NavbarDownloadButton = ({
   text,
   href,
   onClick
}: NavbarDownloadButtonProps) => {
   const [isHovered, setIsHovered] = useState<boolean>(false)

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
               animationData={isHovered ? downloadWhite : downloadAnimation}
               loop
            />
         </div>
      </Button>
   )
}

export default NavbarDownloadButton
