import { api } from '@/components/services/GlobalApi'

export const getSettings = async () => {
   return await api.get('/settings')
}
