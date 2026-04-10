"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const LangSwitch = () => {
   const pathname = usePathname()

   const redirectedPathname = (locale: string) => {
      const segments = pathname.split("/")
      segments[1] = locale

      return segments.join("/")
   }

   return (
      <div className="flex items-center gap-4">
         <Link href={redirectedPathname("tr")}>TR</Link>
         <Link href={redirectedPathname("en")}>EN</Link>
         <Link href={redirectedPathname("az")}>AZ</Link>
      </div>
   )
}

export default LangSwitch
