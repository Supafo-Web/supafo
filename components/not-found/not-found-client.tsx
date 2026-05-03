'use client'

import notFound from '@/public/lottie/NotFound.json'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import("lottie-react"), {
   ssr: false,
})

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
