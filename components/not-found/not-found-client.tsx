'use client'

import notFound from '@/public/lottie/NotFound.json'
import Lottie from 'lottie-react'
import dynamic from 'next/dynamic'

const NotFoundClient = () => {
   return (
      <div
         className="w-120 h-full bg-white items-center justify-center"
      >
         <Lottie
            animationData={notFound}
            loop
         />
      </div>
   )
}

export default NotFoundClient
