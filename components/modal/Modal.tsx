"use client"

import { ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import styles from '@/components/modules/modal.module.scss'
import Image from "next/image"

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
         onClick={(e) => e.stopPropagation()}
      >
         <div
            className={`relative w-full max-w-3xl rounded-[60px] py-30 md:py-38.75 shadow-2xl ${styles.modalArea}`}
            onClick={(e) => e.stopPropagation()}
         >
            <div
               className="absolute top-10 right-15 w-full flex items-center justify-end"
            >
               <button
                  onClick={onClose}
                  className="rounded-full p-2.5 cursor-pointer"
               >
                  <Image
                     alt="close"
                     src="/icons/Close.svg"
                     width={30}
                     height={30}

                     style={{ width: 30, height: 30 }}
                  />
               </button>
            </div>
            <h3
               className={`px-12 lg:px-35`}
            >
               {title}
            </h3>

            {children}
         </div>
      </div>,
      document.body
   )
}

export default Modal
