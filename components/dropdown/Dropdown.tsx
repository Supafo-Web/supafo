"use client"

import Button from "@/components/button/Button"
import styles from "@/components/modules/dropdown.module.scss"
import navbarStyles from '@/components/modules/navbar.module.scss'
import Lottie from "lottie-react"
import { ReactNode, useEffect, useRef, useState } from "react"
import LanguageAnimation from "@/public/lottie/Language.json"
import LanguageAnimationWhite from "@/public/lottie/Language-white.json"

interface DropdownProps {
   image?: ReactNode | boolean
   children?: ReactNode
   navbarText?: string
   href?: string
   language?: boolean
}

const Dropdown = ({
   image,
   children,
   navbarText,
   href,
   language
}: DropdownProps) => {
   const [open, setOpen] = useState<boolean>(false)
   const dropdownRef = useRef<HTMLDivElement | null>(null)

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
         ) {
            setOpen(false)
         }
      }

      const handleCloseFromNavbarHover = (event: Event) => {
         const target = event.currentTarget as HTMLElement

         if (dropdownRef.current && dropdownRef.current.contains(target)) {
            return
         }

         setOpen(false)
      }

      document.addEventListener("mousedown", handleClickOutside)

      const closeTargets = document.querySelectorAll(".js-close-lang-dropdown")
      closeTargets.forEach((item) => {
         item.addEventListener("mouseenter", handleCloseFromNavbarHover)
      })

      return () => {
         document.removeEventListener("mousedown", handleClickOutside)

         closeTargets.forEach((item) => {
            item.removeEventListener("mouseenter", handleCloseFromNavbarHover)
         })
      }
   }, [])

   const handleOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   return (
      <div
         ref={dropdownRef}
         className={`relative`}
      >
         {(image || language) ? (
            <button
               type="button"
               aria-label={language ? "Open the language selection menu" : "Open menu"}
               aria-expanded={open}
               aria-haspopup="menu"
               className={`group cursor-pointer rounded-full transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(0,0,0,0.08)] ${open ? "bg-[#578B23]" : "bg-white"
                  }`}
               onMouseEnter={handleOpen}
               onClick={handleOpen}
            >
               <div
                  className="relative h-12 w-12 flex items-center justify-center"
               >
                  {image ? image : language && (
                     <Lottie
                        animationData={open ? LanguageAnimationWhite : LanguageAnimation}
                        loop
                        aria-hidden='true'
                        className={`w-7.5 h-7.5`}
                     />
                  )}
               </div>
            </button>
         ) : (
            <div
               onMouseEnter={handleOpen}
               onClick={handleOpen}
            >
               <Button
                  href={href}
                  text={navbarText}
                  navbar
                  className={`${navbarStyles.textButton} js-close-lang-dropdown`}
               />
            </div>
         )}
         <div
            className={`${styles.dropdownArea} ${open ? styles.open : ""}`}
         >
            <div
               className={`${styles.dropdownMenu}`}
               onMouseEnter={handleOpen}
               onMouseLeave={handleClose}
            >
               {children}
            </div>
         </div>
      </div>
   )
}

export default Dropdown
