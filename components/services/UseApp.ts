import { useUISelector } from "@/components/services/contexts/UseUI"

const useApp = () => {
   return {
      ui: useUISelector
   }
}

export default useApp
