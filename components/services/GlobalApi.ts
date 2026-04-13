import axios from 'axios'

export const BASE_URL = '/api/proxy'

const apiClient = axios.create({
   baseURL: BASE_URL,
   timeout: 15000,
   withCredentials: false,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
   },
})

export const api = {
   get: async <T = any>(url: string) =>
      (await apiClient.get<T>(url)).data,

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
