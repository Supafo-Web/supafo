"use client"

import NavbarDownloadButton from "./NavbarDownloadButton"
import { handleDownload } from "@/components/store/AppStore"

type Props = {
   text: string
   navbar?: boolean
}

const NavbarDownloadButtonClient = ({ text, navbar }: Props) => {
   return (
      <NavbarDownloadButton
         text={text}
         navbar={navbar}
         onClick={handleDownload}
      />
   )
}

export default NavbarDownloadButtonClient
