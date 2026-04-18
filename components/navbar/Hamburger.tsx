"use client"

import Button from "@/components/button/Button"
import { getNavbarMenu } from "@/components/utils/Navbar"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { useState } from "react"
import styles from '@/components/modules/navbar.module.scss'

const Hamburger = () => {
   const [open, setOpen] = useState<boolean>(false)
   const t = useTranslations('Navbar')
   const locale = useLocale()

   const navbarMenu = getNavbarMenu({ locale, t })

   return (
      <div
         className={`flex justify-center items-center js-close-lang-dropdown`}
      >
         <Button
            type="button"
            className={`cursor-pointer z-50`}
            onClick={() => setOpen(!open)}
         >
            {open ? (
               <button
                  onClick={() => setOpen(false)}
                  className={`rounded-full p-1.5 cursor-pointer ${styles.modalCloseButton}`}
               >
                  <Image
                     alt="close"
                     src="/icons/Close.svg"
                     width={30}
                     height={30}
                     style={{ width: 30, height: 30 }}
                  />
               </button>
            ) : (
               <Image
                  alt="hamburger"
                  src="/icons/HamburgerMenu.svg"
                  width={36}
                  height={36}
                  style={{ width: 36, height: 36 }}
               />
            )}
         </Button>

         {open && (
            <div
               className="fixed inset-0 bg-white z-40 flex flex-col items-start pt-24 ps-16 gap-12"
            >
               {navbarMenu.map((item, index) => (
                  <Button
                     key={item.id || index}
                     href={item.href}
                     text={item.text}
                     navbar
                     className={`${styles.navbarButton} js-close-lang-dropdown`}
                  />
               ))}
            </div>
         )}
      </div>
   )
}

export default Hamburger
