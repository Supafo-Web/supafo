'use client'

import { getCountries, getSettings } from '@/components/services/Api'
import { useUI } from '@/components/services/contexts/UIContexts'
import { useEffect } from 'react'

export default function AppInitializer() {
   const {
      setSettings,
      setCountries,
      setIsLoading,
   } = useUI()

   useEffect(() => {
      const initApp = async () => {
         try {
            const [settingsResponse, countriesResponse] = await Promise.all([
               getSettings(),
               getCountries(),
            ])

            if (settingsResponse) {
               setSettings(settingsResponse?.settings)
            }

            if (countriesResponse) {
               setCountries(countriesResponse?.countries)
            }
         } catch (error) {
            if (process.env.NODE_ENV === 'development') {
               console.error(error)
            }
         } finally {
            setIsLoading(true)
         }
      }

      initApp()
   }, [setSettings, setCountries, setIsLoading])

   return null
}
