"use client"

import Settings, { OpenPositions, TeamMembers } from "@/components/utils/UIType"
import React, { createContext, useContext, useState, ReactNode } from "react"

export interface UIContextType {
   settings: Settings | null
   setSettings: React.Dispatch<React.SetStateAction<Settings | null>>
   teamMembers: TeamMembers[]
   setTeamMembers: React.Dispatch<React.SetStateAction<TeamMembers[]>>
   openPositions: OpenPositions[]
   setOpenPositions: React.Dispatch<React.SetStateAction<OpenPositions[]>>
}

const UIContext = createContext<UIContextType | undefined>(undefined)

export const UIProvider = ({ children }: { children: ReactNode }) => {
   const [settings, setSettings] = useState<Settings | null>(null)
   const [teamMembers, setTeamMembers] = useState<TeamMembers[]>([])
   const [openPositions, setOpenPositions] = useState<OpenPositions[]>([])

   return (
      <UIContext.Provider value={{
         settings,
         setSettings,
         teamMembers,
         setTeamMembers,
         openPositions,
         setOpenPositions
      }}>
         {children}
      </UIContext.Provider>
   )
}

export const useUI = () => {
   const ctx = useContext(UIContext)
   if (!ctx) throw new Error('useUI must be used within a UIProvider')
   return ctx
}
