"use client"

import { CountriesResponse, Country } from "@/components/types/Country"
import Settings, { OpenPositions, TeamMembers } from "@/components/utils/UIType"
import React, { createContext, useContext, useState, ReactNode } from "react"

export interface UIContextType {
   settings: Settings | null
   setSettings: React.Dispatch<React.SetStateAction<Settings | null>>
   teamMembers: TeamMembers[]
   setTeamMembers: React.Dispatch<React.SetStateAction<TeamMembers[]>>
   openPositions: OpenPositions[]
   setOpenPositions: React.Dispatch<React.SetStateAction<OpenPositions[]>>
   countries: Country[]
   setCountries: React.Dispatch<React.SetStateAction<Country[]>>
   isLoading: boolean
   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const UIContext = createContext<UIContextType | undefined>(undefined)

export const UIProvider = ({ children }: { children: ReactNode }) => {
   const [settings, setSettings] = useState<Settings | null>(null)
   const [teamMembers, setTeamMembers] = useState<TeamMembers[]>([])
   const [openPositions, setOpenPositions] = useState<OpenPositions[]>([])
   const [countries, setCountries] = useState<Country[]>([])
   const [isLoading, setIsLoading] = useState<boolean>(false)

   return (
      <UIContext.Provider value={{
         settings,
         setSettings,
         teamMembers,
         setTeamMembers,
         openPositions,
         setOpenPositions,
         countries,
         setCountries,
         isLoading,
         setIsLoading
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
