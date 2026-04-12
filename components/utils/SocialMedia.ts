'use client'

import useApp from '@/components/services/UseApp'

const openExternalLink = (url?: string, fallback?: string) => {
   try {
      if (typeof window === 'undefined') return

      window.open(url?.trim() || fallback || '/', '_blank', 'noopener,noreferrer')
   } catch (error: any) {
      const message =
         error?.response?.data?.message || error?.message || 'Bir hata oluştu'

      if (process.env.NODE_ENV === 'development') {
         console.error(message)
      }
   }
}

export const useSocialMedia = () => {
   const app = useApp()
   const settings = app.ui((s) => s.settings)

   const openWhatsApp = () =>
      openExternalLink(settings?.whatsapp_url, 'https://chat.whatsapp.com/')

   const openInstagram = () =>
      openExternalLink(settings?.instagram_url, 'https://www.instagram.com/')

   const openX = () =>
      openExternalLink(settings?.x_url, 'https://x.com/')

   const openTiktok = () =>
      openExternalLink(settings?.tiktok_url, 'https://www.tiktok.com/')

   const openDiscord = () =>
      openExternalLink(settings?.discord_url, 'https://discord.com/')

   return {
      openWhatsApp,
      openInstagram,
      openX,
      openTiktok,
      openDiscord,
   }
}
