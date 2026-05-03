'use client'

import { config } from '@/config'

export const APP_STORE_URL = `https://apps.apple.com/app/${config.iosAppId}`

export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${config.androidPackage}`

export const MAC_APP_STORE_URL = `https://apps.apple.com/app/${config.iosAppId}`

export const WINDOWS_URL = 'https://www.supafo.com/download/windows'

export const DEFAULT_URL = '/download'

export const getDownloadUrl = () => {
   if (typeof window === 'undefined') return DEFAULT_URL

   const userAgent = window.navigator.userAgent.toLowerCase()
   const platform = window.navigator.platform.toLowerCase()

   const isIOS =
      /iphone|ipad|ipod/.test(userAgent) ||
      (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)

   const isAndroid = /android/.test(userAgent)
   const isMacOS = platform.includes('mac') && !isIOS
   const isWindows = platform.includes('win')

   if (isIOS) return APP_STORE_URL
   if (isAndroid) return PLAY_STORE_URL
   if (isMacOS) return MAC_APP_STORE_URL
   if (isWindows) return WINDOWS_URL

   return DEFAULT_URL
}

export const data = [
   {
      id: 1,
      title: 'App Store',
      alt: 'app store',
      src: '/icons/apple/AppStore.svg',
      icon: '/icons/apple/Apple.svg',
      href: APP_STORE_URL
   },
   {
      id: 2,
      title: 'Google Play',
      alt: 'google play',
      src: '/icons/google/PlayStore.svg',
      icon: '/icons/google/PlayStore.svg',
      href: PLAY_STORE_URL
   }
]
