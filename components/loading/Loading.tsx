'use client'

import { useLottieRefreshKey } from '@/components/hooks/UseLottieRefreshKey'
import { useUI } from '@/components/services/contexts/UIContexts'
import Lottie from 'lottie-react'
import LogoLoading from "@/public/lottie/LogoLoading.json"

const Loading = ({
   children,
}: {
   children: React.ReactNode
}) => {
   const { isLoading } = useUI()
   const refreshKey = useLottieRefreshKey()

   if (!isLoading) {
      return (
         <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white">
            <Lottie
               key={`lottie-${refreshKey}`}
               animationData={LogoLoading}
               loop
               autoplay
               className="w-40 h-40"
            />
         </div>
      )
   }

   return <>{children}</>
}

export default Loading
