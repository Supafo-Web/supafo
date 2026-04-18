import axios from 'axios'

const isServer = typeof window === 'undefined'

const BASE_URL = isServer
   ? `${process.env.INTERNAL_APP_URL}/api/proxy`
   : '/api/proxy'

const getLocaleFromPath = () => {
   if (typeof window === 'undefined') return 'tr'

   const segments = window.location.pathname.split('/')
   const locale = segments[1]

   if (['tr', 'en', 'az', 'de'].includes(locale)) {
      return locale
   }

   return 'tr'
}

const apiClient = axios.create({
   baseURL: BASE_URL,
   timeout: 15000,
   withCredentials: false,
   headers: {
      Accept: 'application/json',
   },
})

apiClient.interceptors.request.use((config) => {
   config.headers = config.headers ?? {}
   config.headers['X-Locale'] = getLocaleFromPath()

   return config
})

export const api = {
   get: async <T = any>(url: string) => (await apiClient.get<T>(url)).data,

   post: async <T = any, B = any>(url: string, data?: B) =>
      (await apiClient.post<T>(url, data)).data,

   put: async <T = any, B = any>(url: string, data?: B) =>
      (await apiClient.put<T>(url, data)).data,

   delete: async <T = any>(url: string) =>
      (await apiClient.delete<T>(url)).data,

   deleteBody: async <T = any, B = any>(url: string, data?: B) =>
      (await apiClient.request<T>({ url, method: 'DELETE', data })).data,
}

export default apiClient
