"use client"

import { useEffect, useState } from "react"

export const useLottieRefreshKey = () => {
   const [key, setKey] = useState(0)

   useEffect(() => {
      const refresh = () => {
         setKey((prev) => prev + 1)
      }

      const handleVisibilityChange = () => {
         if (document.visibilityState === "visible") {
            refresh()
         }
      }

      window.addEventListener("pageshow", refresh)
      window.addEventListener("focus", refresh)
      document.addEventListener("visibilitychange", handleVisibilityChange)

      return () => {
         window.removeEventListener("pageshow", refresh)
         window.removeEventListener("focus", refresh)
         document.removeEventListener("visibilitychange", handleVisibilityChange)
      }
   }, [])

   return key
}
