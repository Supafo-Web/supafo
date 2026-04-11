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
      <div className="flex flex-col items-center justify-center gap-4">
         <Link
            href={redirectedPathname("tr")}
            className={`text-white`}
         >
            TR
         </Link>
         <Link
            href={redirectedPathname("en")}
            className={`text-white`}
         >
            EN

         </Link>
         <Link
            href={redirectedPathname("az")}
            className={`text-white`}
         >
            AZ
         </Link>
      </div>
   )
}

export default LangSwitch
