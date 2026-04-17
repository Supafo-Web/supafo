'use client'

import Lottie from 'lottie-react'
import notFound from '@/public/lottie/NotFound.json'

const NotFoundClient = () => {
   return (
      <div
         className="w-full md:w-140 h-full bg-white items-center justify-center"
      >
         <Lottie
            animationData={notFound}
            loop
         />
      </div>
   )
}

export default NotFoundClient
