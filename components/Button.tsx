import Link from "next/link"
import { ReactNode } from "react"

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
      "inline-flex items-center justify-center rounded-[10px] px-4 py-3 text-white transition hover:opacity-90"

   const content = children ?? text
   const notChildren = !children

   if (href) {
      return (
         <Link
            href={href}
            className={`
               ${baseClass}
               ${className}
               ${notChildren && 'privateButton'}
            `}
         >
            {content}
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
            ${notChildren && 'privateButton'}
         `}
      >
         {content}
      </button>
   )
}

export default Button
