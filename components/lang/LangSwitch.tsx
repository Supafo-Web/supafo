"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from '@/components/modules/lang.module.scss'
import { useTranslations } from "next-intl"

const LangSwitch = () => {
   const pathname = usePathname()
   const t = useTranslations('Languages')

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
            {t('tr')}
         </Link>
         <Link
            href={redirectedPathname("en")}
            className={`${styles.lang}`}
         >
            {t('en')}
         </Link>
         <Link
            href={redirectedPathname("az")}
            className={`${styles.lang}`}
         >
            {t('az')}
         </Link>
      </div>
   )
}

export default LangSwitch
