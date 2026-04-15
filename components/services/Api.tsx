import { api } from '@/components/services/GlobalApi'

export const getSettings = async () => {
   return await api.get('/settings')
}

export const getTeamMembers = async () => {
   return await api.get('/team-members')
}
