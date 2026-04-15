"use client"

import { useUI } from "@/components/services/contexts/UIContexts"

const OpenPositions = () => {
   const { openPositions } = useUI()

   return (
      <div>OpenPositions</div>
   )
}

export default OpenPositions
