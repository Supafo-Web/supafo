"use client"

import Button from "@/components/button/Button"
import { useState } from "react"
import Lottie from "lottie-react"
import downloadAnimation from "@/public/lottie/Download.json"
import downloadWhite from "@/public/lottie/Download-white.json"
import { handleDownload } from "@/components/store/AppStore"

interface NavbarDownloadButtonProps {
   text: string
   navbar?: boolean
   href?: string
   onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const NavbarDownloadButton = ({
   text,
   navbar,
   href,
   onClick
}: NavbarDownloadButtonProps) => {
   const [isHovered, setIsHovered] = useState<boolean>(false)

   return (
      <>
         {navbar ? (
            <Button
               className="cursor-pointer js-close-lang-dropdown"
               text={text}
               href={href}
               ariaLabel={text}
               onClick={onClick}
            >
               <div
                  aria-hidden='true'
                  className={`w-12 h-12 rounded-full transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(0,0,0,0.08)] ${isHovered ? "bg-[#578B23]" : "bg-white"
                     }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
               >
                  <Lottie
                     animationData={isHovered ? downloadWhite : downloadAnimation}
                     loop
                  />
               </div>
            </Button>
         ) : (
            <Button
               className="cursor-pointer"
               text={text}
               href={href}
               ariaLabel={text}
               onClick={onClick}
            />
         )}
      </>
   )
}

export default NavbarDownloadButton
