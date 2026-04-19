import Link from "next/link"
import { ReactNode } from "react"
import styles from "@/components/modules/button.module.scss"

type ButtonProps = {
   text?: string
   children?: ReactNode
   href?: string
   onClick?: (e: React.MouseEvent<HTMLElement>) => void
   type?: "button" | "submit" | "reset"
   className?: string
   navbar?: boolean
   footer?: boolean
   textClass?: string
}

const Button = ({
   text,
   children,
   href,
   onClick,
   type = "button",
   className = "",
   navbar = false,
   footer = false,
   textClass = ""
}: ButtonProps) => {
   const baseClass =
      `inline-flex items-center justify-center rounded-[10px] transition cursor-pointer`

   const notChildren = !children
   const contentNode = !children ? (
      <span
         className={`
            ${(!navbar && !footer) && styles.textButton}
            ${textClass}
         `}
      >
         {text}
      </span>
   ) : (
      children
   )

   if (href) {
      return (
         <Link
            href={href}
            onClick={onClick}
            className={`
               ${navbar ? styles.navbarButton
                  : footer ? styles.footerButton
                     : baseClass
               }
               ${className}
               ${notChildren && styles.privateButton}
            `}
         >
            {contentNode}
         </Link>
      )
   }

   return (
      <button
         type={type}
         onClick={onClick}
         className={`
            ${navbar ? styles.navbarButton
               : footer ? styles.footerButton
                  : baseClass
            }
            ${className}
            ${notChildren && styles.privateButton}
         `}
      >
         {contentNode}
      </button>
   )
}

export default Button
