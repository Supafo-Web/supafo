'use client'

import { getSettings } from '@/components/services/Api'
import { useUI } from '@/components/services/contexts/UIContexts'
import { useEffect } from 'react'

export default function AppInitializer() {
   const { setSettings } = useUI()

   useEffect(() => {
      const initApp = async () => {
         try {
            const settingsResponse = await getSettings()

            if (settingsResponse) {
               setSettings(settingsResponse?.settings)
            }

            // burada başka global apiler de çağrılabilir
            // const categories = await getCategories()
            // const company = await getCompanyInfo()
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
