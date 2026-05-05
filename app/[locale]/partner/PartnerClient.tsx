"use client"

import Lottie from "lottie-react"
import PartnerLoading from "@/public/lottie/Partner1.json"

const PartnerClient = () => {
   return (
      <Lottie
         animationData={PartnerLoading}
         loop
         autoplay
         aria-hidden="true"
         className="w-40 h-auto"
      />
   )
}

export default PartnerClient
