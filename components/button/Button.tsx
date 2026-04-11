import Link from "next/link"
import { ReactNode } from "react"
import styles from "@/components/button/button.module.scss"

type ButtonProps = {
   text?: string
   children?: ReactNode
   href?: string
   onClick?: () => void
   type?: "button" | "submit" | "reset"
   className?: string
   navbar?: boolean
   footer?: boolean
}

const Button = ({
   text,
   children,
   href,
   onClick,
   type = "button",
   className = "",
   navbar = false,
   footer = false
}: ButtonProps) => {
   const baseClass =
      `inline-flex items-center justify-center rounded-[20px] transition`

   const notChildren = !children
   const contentNode = !children ? (
      <span
         className={`
            ${(!navbar && !footer) && styles.textButton}
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
