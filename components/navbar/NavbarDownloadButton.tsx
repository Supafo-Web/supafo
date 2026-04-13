"use client"

import DownloadApp from '@/app/download/page'
import Button from '@/components/button/Button'
import Modal from '@/components/modal/Modal'
import { useState } from 'react'

interface NavbarDownloadButtonProps {
   text: string
   title: string
}

const NavbarDownloadButton = ({
   text,
   title
}: NavbarDownloadButtonProps) => {
   const [open, setOpen] = useState(false)

   return (
      <>
         <Button
            className={`cursor-pointer`}
            text={text}
            onClick={() => setOpen(true)}
         />

         <Modal
            open={open}
            onClose={() => setOpen(false)}
            title={title}
         >
            <DownloadApp
               modal
            />
         </Modal>
      </>
   )
}

export default NavbarDownloadButton
