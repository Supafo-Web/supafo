'use client'

import { UIContextType, useUI } from "@/components/services/contexts/UIContexts"


export const useUISelector = <T>(selector: (store: UIContextType) => T): T => {
   const store = useUI()
   return selector(store)
}
