import { api } from '@/components/services/GlobalApi'

export const getSettings = async () => {
   return await api.get('/settings')
}

export const getTeamMembers = async () => {
   return await api.get('/team-members')
}

export const getOpenPositions = async () => {
   return await api.get('/open-positions')
}

export const getCareerDetails = async (id: number) => {
   return await api.get(`/career/details/${id}`)
}
