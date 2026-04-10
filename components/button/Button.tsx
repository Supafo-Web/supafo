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
}

const Button = ({
   text,
   children,
   href,
   onClick,
   type = "button",
   className = "",
}: ButtonProps) => {
   const baseClass =
      `inline-flex items-center justify-center rounded-[10px] transition`

   const notChildren = !children
   const contentNode = !children ? (
      <span
         className={styles.textButton}
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
               ${baseClass}
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
            ${baseClass}
            ${className}
            ${notChildren && styles.privateButton}
         `}
      >
         {contentNode}
      </button>
   )
}

export default Button
