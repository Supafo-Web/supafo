"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from './lang.module.scss'

const LangSwitch = () => {
   const pathname = usePathname()

   const redirectedPathname = (locale: string) => {
      const segments = pathname.split("/")
      segments[1] = locale

      return segments.join("/")
   }

   return (
      <div className="flex flex-col items-center h-full justify-center gap-12 pt-16">
         <Link
            href={redirectedPathname("tr")}
            className={`${styles.lang}`}
         >
            Türkçe
         </Link>
         <Link
            href={redirectedPathname("en")}
            className={`${styles.lang}`}
         >
            English

         </Link>
         <Link
            href={redirectedPathname("az")}
            className={`${styles.lang}`}
         >
            Azərbaycan dili
         </Link>
      </div>
   )
}

export default LangSwitch
