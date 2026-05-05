"use client"

import { useLottieRefreshKey } from "@/components/hooks/UseLottieRefreshKey"
import PartnerLogin from "@/public/lottie/Login.json"
import Lottie from "lottie-react"
import dynamic from "next/dynamic"

const PartnerLoginAnimation = () => {
   const refreshKey = useLottieRefreshKey()

   return (
      <Lottie
         key={`partner-login-${refreshKey}`}
         animationData={PartnerLogin}
         loop
         autoplay
         renderer="svg"
         className="
            absolute
            opacity-100
            scale-100
            transition-all
            duration-400
            ease-in-out
            group-hover:opacity-0
            group-hover:scale-75
         "
      />
   )
}

export default PartnerLoginAnimation
