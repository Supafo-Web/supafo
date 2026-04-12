"use client"

import Settings from "@/components/utils/SettingsType"
import React, { createContext, useContext, useState, ReactNode } from "react"

export interface UIContextType {
   settings: Settings | null
   setSettings: React.Dispatch<React.SetStateAction<Settings | null>>
}

const UIContext = createContext<UIContextType | undefined>(undefined)

export const UIProvider = ({ children }: { children: ReactNode }) => {
   const [settings, setSettings] = useState<Settings | null>(null)

   return (
      <UIContext.Provider value={{
         settings,
         setSettings
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
