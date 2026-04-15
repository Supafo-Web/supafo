"use client"

import styles from "@/components/dropdown/dropdown.module.scss"
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

      document.addEventListener("mousedown", handleClickOutside)

      return () => {
         document.removeEventListener("mousedown", handleClickOutside)
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
            className={`flex items-center justify-center hover:cursor-pointer bg-white p-2.5 rounded-full`}
            onMouseEnter={handleOpen}
            onClick={handleOpen}
         >
            <Image
               alt="language"
               src="/icons/Language.svg"
               width={30}
               height={30}

               style={{ width: 30, height: 30 }}
            />
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
