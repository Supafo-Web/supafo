"use client"

import NavbarDownloadButton from "./NavbarDownloadButton"
import { getDownloadUrl } from "@/components/store/AppStore"

type Props = {
   text: string
   navbar?: boolean
}

const NavbarDownloadButtonClient = ({ text, navbar }: Props) => {
   return (
      <NavbarDownloadButton
         text={text}
         navbar={navbar}
         href={getDownloadUrl()}
      />
   )
}

export default NavbarDownloadButtonClient
