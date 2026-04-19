"use client"

import Link from "next/link"
import styles from "@/components/modules/navbar.module.scss"

type NavbarSubmenuItem = {
   id: number
   href: string
   text: string
}

type NavbarSubmenuLinksProps = {
   items: NavbarSubmenuItem[]
}

const NavbarSubmenuLinks = ({ items }: NavbarSubmenuLinksProps) => {
   const handleAnchorClick = (
      e: React.MouseEvent<HTMLAnchorElement>,
      href: string
   ) => {
      const url = new URL(href, window.location.origin)
      const targetId = url.hash.replace("#", "")
      const basePath = url.pathname

      if (!targetId) return

      e.preventDefault()

      if (window.location.pathname !== basePath) {
         window.location.href = `${basePath}#${targetId}`
         return
      }

      const el = document.getElementById(targetId)

      if (el) {
         el.scrollIntoView({ behavior: "smooth", block: "start" })
         window.history.replaceState(null, "", `${basePath}#${targetId}`)
      }
   }

   return (
      <div className="h-full w-full flex flex-col justify-end">
         <div className="grid grid-flow-col grid-rows-3 gap-6 justify-evenly items-end mb-10 auto-cols-max">
            {items.map((subItem) => (
               <Link
                  key={subItem.id}
                  href={subItem.href}
                  className={`${styles.textButton} js-close-lang-dropdown w-fit`}
                  onClick={(e) => handleAnchorClick(e, subItem.href)}
               >
                  {subItem.text}
               </Link>
            ))}
         </div>
      </div>
   )
}

export default NavbarSubmenuLinks
