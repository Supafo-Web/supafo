"use client"

import PartnerLogin from "@/public/lottie/Login.json"
import dynamic from "next/dynamic"

const Lottie = dynamic(() => import("lottie-react"), {
   ssr: false,
})

const PartnerLoginAnimation = () => {
   return (
      <Lottie
         animationData={PartnerLogin}
         loop
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
