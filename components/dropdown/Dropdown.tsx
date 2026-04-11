"use client"

import styles from "@/components/dropdown/dropdown.module.scss"
import LangSwitch from "@/components/lang/LangSwitch"
import Image from "next/image"
import { useState } from "react"

const Dropdown = () => {
   const [open, setOpen] = useState<boolean>(false)

   return (
      <div
         className={`relative`}
      >
         <button
            type="button"
            className={`flex items-center justify-center hover:cursor-pointer`}
            onClick={() => setOpen(!open)}
         >
            <Image
               alt="language"
               src="/icons/Language.svg"
               width={33}
               height={33}
               priority
               style={{ width: 33, height: 33 }}
            />
            <Image
               alt="down arrow"
               src="/icons/DownArrow.svg"
               width={24}
               height={24}
               priority
               style={{ width: 24, height: 24 }}
            />
         </button>
         {open && (
            <div
               className={`
                  ${styles.dropdownMenu}
               `}
            >
               <LangSwitch />
            </div>
         )}
      </div>
   )
}

export default Dropdown
