'use client'

import { getCountries, getSettings } from '@/components/services/Api'
import { useUI } from '@/components/services/contexts/UIContexts'
import { useEffect } from 'react'

export default function AppInitializer() {
   const {
      setSettings,
      setCountries
   } = useUI()

   useEffect(() => {
      const initApp = async () => {
         try {
            const settingsResponse = await getSettings()
            if (settingsResponse) {
               setSettings(settingsResponse?.settings)
            }

            const countriesResponse = await getCountries()
            if (countriesResponse) {
               setCountries(countriesResponse?.result)
            }
         } catch (error) {
            if (process.env.NODE_ENV === 'development') {
               console.error(error)
            }
         }
      }

      initApp()
   }, [])

   return null
}
