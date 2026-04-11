"use client"

import { ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import styles from './modal.module.scss'

interface ModalProps {
   open: boolean
   onClose: () => void
   title?: string
   children: ReactNode
}

const Modal = ({
   open,
   onClose,
   title,
   children,
}: ModalProps) => {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   useEffect(() => {
      if (!open) return

      const onKeyDown = (e: KeyboardEvent) => {
         if (e.key === "Escape") onClose()
      }

      document.addEventListener("keydown", onKeyDown)
      document.body.style.overflow = "hidden"

      return () => {
         document.removeEventListener("keydown", onKeyDown)
         document.body.style.overflow = ""
      }
   }, [open, onClose])

   if (!mounted || !open) return null

   return createPortal(
      <div
         className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 p-4"
         onClick={onClose}
      >
         <div
            className={`w-full max-w-2xl rounded-2xl p-6 shadow-2xl ${styles.modalArea}`}
            onClick={(e) => e.stopPropagation()}
         >
            <div
               className="mb-12 flex items-center justify-between"
            >
               <h3
                  className="text-xl text-white w-[80%] font-semibold"
               >
                  {title}
               </h3>
               <button
                  onClick={onClose}
                  className="rounded text-2xl text-white cursor-pointer pe-2"
               >
                  ✕
               </button>
            </div>

            {children}
         </div>
      </div>,
      document.body
   )
}

export default Modal
