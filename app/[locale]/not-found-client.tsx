'use client'

import Lottie from 'lottie-react'
import notFound from '@/public/lottie/NotFound.json'

const NotFoundClient = () => {
   return (
      <div
         className="w-80 h-80 bg-white rounded-full"
      >
         <Lottie
            animationData={notFound}
            loop
         />
      </div>
   )
}

export default NotFoundClient
