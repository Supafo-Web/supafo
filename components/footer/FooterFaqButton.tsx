"use client"

import Button from "@/components/button/Button"

type FooterFaqButtonProps = {
   text: string
   href: string
   locale: string
   className?: string
}

const FooterFaqButton = ({
   text,
   href,
   locale,
   className = ""
}: FooterFaqButtonProps) => {
   const handleFaqClick = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()

      if (window.location.pathname !== `/${locale}`) {
         window.location.href = `/${locale}#faq`
         return
      }

      const el = document.getElementById("faq")

      if (el) {
         el.scrollIntoView({ behavior: "smooth", block: "start" })
         window.history.replaceState(null, "", `/${locale}#faq`)
      }
   }

   return (
      <Button
         text={text}
         href={href}
         footer
         onClick={handleFaqClick}
         className={className}
      />
   )
}

export default FooterFaqButton
