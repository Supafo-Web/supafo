"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { logEvent } from "firebase/analytics"
import { getFirebaseAnalytics } from "@/components/utils/Firebase"

export default function FirebaseAnalyticsProvider() {
   const pathname = usePathname()
   const searchParams = useSearchParams()

   useEffect(() => {
      const trackPageView = async () => {
         const analytics = await getFirebaseAnalytics()
         if (!analytics) return

         const queryString = searchParams.toString()
         const pagePath = queryString ? `${pathname}?${queryString}` : pathname

         logEvent(analytics, "page_view", {
            page_path: pagePath,
            page_location: window.location.href,
            page_title: document.title,
         })
      }

      trackPageView()
   }, [pathname, searchParams])

   return null
}
