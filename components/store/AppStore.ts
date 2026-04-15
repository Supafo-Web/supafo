'use client'

import { config } from "@/config"

export const appStoreUrl = `https://apps.apple.com/app/id${config.iosAppId}`

export const playStoreUrl = `https://play.google.com/store/apps/details?id=${config.androidPackage}`

export const data = [
   {
      id: 1,
      title: 'App Store',
      alt: 'app store',
      src: '/icons/apple/AppStore.svg',
      href: appStoreUrl
   },
   {
      id: 2,
      title: 'Google Play',
      alt: 'google play',
      src: '/icons/google/PlayStore.svg',
      href: playStoreUrl
   }
]
