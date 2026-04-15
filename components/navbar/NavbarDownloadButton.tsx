"use client"

import DownloadApp from '@/components/download/page'
import Button from '@/components/button/Button'
import Modal from '@/components/modal/Modal'
import { useState } from 'react'
import Lottie from 'lottie-react'
import downloadAnimation from "@/public/lottie/Download.json"

interface NavbarDownloadButtonProps {
   text: string
   title: string
   modal?: boolean
   navbar?: boolean
}

const NavbarDownloadButton = ({
   text,
   title,
   modal,
   navbar
}: NavbarDownloadButtonProps) => {
   const [open, setOpen] = useState<boolean>(false)

   return (
      <>
         {navbar ? (
            <Button
               className={`cursor-pointer`}
               text={text}
               onClick={() => setOpen(true)}
            >
               <div
                  className="w-12 h-12 bg-white rounded-full"
               >
                  <Lottie
                     animationData={downloadAnimation}
                     loop
                  />
               </div>
            </Button>
         ) : (
            <Button
               className={`cursor-pointer`}
               text={text}
               onClick={() => setOpen(true)}
            />
         )}

         <Modal
            open={open}
            onClose={() => setOpen(false)}
            title={title}
         >
            <DownloadApp
               modal={modal}
            />
         </Modal>
      </>
   )
}

export default NavbarDownloadButton
