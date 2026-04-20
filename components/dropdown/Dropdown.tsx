"use client"

import Button from "@/components/button/Button"
import styles from "@/components/modules/dropdown.module.scss"
import navbarStyles from '@/components/modules/navbar.module.scss'
import { ReactNode, useEffect, useRef, useState } from "react"

interface DropdownProps {
   image?: ReactNode | boolean
   children?: ReactNode
   navbarText?: string
   href?: string
}

const Dropdown = ({ image, children, navbarText, href }: DropdownProps) => {
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
         {image ? (
            <button
               type="button"
               className="group cursor-pointer rounded-full bg-white p-2.5 transition-all duration-300 ease-in-out hover:bg-[#578B23]"
               onMouseEnter={handleOpen}
               onClick={handleOpen}
            >
               <div
                  className="relative h-7.5 w-7.5"
               >
                  {image}
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
