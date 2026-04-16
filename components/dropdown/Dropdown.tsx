"use client"

import styles from "@/components/modules/dropdown.module.scss"
import LangSwitch from "@/components/lang/LangSwitch"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const Dropdown = () => {
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
         <button
            type="button"
            className="group cursor-pointer rounded-full bg-white p-2.5 transition-all duration-300 ease-in-out hover:bg-[#578B23]"
            onMouseEnter={handleOpen}
            onClick={handleOpen}
         >
            <div className="relative h-7.5 w-7.5">
               <Image
                  alt="language"
                  src="/icons/Language.svg"
                  width={30}
                  height={30}
                  className="absolute inset-0 opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
               />
               <Image
                  alt="language hover"
                  src="/icons/Language-white.svg"
                  width={30}
                  height={30}
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
               />
            </div>
         </button>
         <div
            className={`${styles.dropdownArea} ${open ? styles.open : ""}`}
         >
            <div
               className={`${styles.dropdownMenu}`}
               onMouseEnter={handleOpen}
               onMouseLeave={handleClose}
            >
               <LangSwitch />
            </div>
         </div>
      </div>
   )
}

export default Dropdown
