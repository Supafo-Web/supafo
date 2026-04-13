"use client"

import Button from "@/components/button/Button"
import Image from "next/image"
import { useState } from "react"

const Hamburger = () => {
   const [open, setOpen] = useState<boolean>(false)


   return (
      <div
         className={`flex justify-center items-center`}
      >
         <Button
            type="button"
            className={`cursor-pointer z-50`}
            onClick={() => setOpen(!open)}
         >
            <Image
               alt="hamburger"
               src="/icons/HamburgerMenu.svg"
               width={36}
               height={36}
               priority
               style={{ width: 36, height: 36 }}
            />
         </Button>

         {open && (
            <div
               className="fixed inset-0 bg-white z-40 flex items-center justify-center"
            >
               wdadw
            </div>
         )}
      </div>
   )
}

export default Hamburger
