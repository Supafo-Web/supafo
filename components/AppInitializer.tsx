'use client'

import { getOpenPositions, getSettings, getTeamMembers } from '@/components/services/Api'
import { useUI } from '@/components/services/contexts/UIContexts'
import { useEffect } from 'react'

export default function AppInitializer() {
   const {
      setSettings,
      setTeamMembers,
      setOpenPositions
   } = useUI()

   useEffect(() => {
      const initApp = async () => {
         try {
            const settingsResponse = await getSettings()
            if (settingsResponse) {
               setSettings(settingsResponse?.settings)
            }

            const teamMembersResponse = await getTeamMembers()
            if (teamMembersResponse) {
               setTeamMembers(teamMembersResponse?.team)
            }

            const openPositionResponse = await getOpenPositions()
            if (openPositionResponse) {
               setOpenPositions(openPositionResponse?.positions)
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
