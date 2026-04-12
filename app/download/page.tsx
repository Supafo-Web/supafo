'use client'

import { useEffect } from "react"
import styles from './download.module.scss'
import Image from "next/image"
import { appGalleryUrl, appStoreUrl, data, playStoreUrl } from "@/components/store/AppStore"

interface DownloadType {
   modal?: boolean
}

const DownloadApp = ({ modal }: DownloadType) => {
   useEffect(() => {
      const ua = navigator.userAgent || navigator.vendor || ''

      const isIOS = /iPhone|iPad|iPod/i.test(ua)
      const isAndroid = /Android/i.test(ua)
      const isHuawei = /Huawei|HMSCore|HarmonyOS/i.test(ua)

      if (isIOS) {
         window.location.replace(appStoreUrl)
         return
      }

      if (isHuawei && appGalleryUrl) {
         window.location.replace(appGalleryUrl)
         return
      }

      if (isAndroid) {
         window.location.replace(playStoreUrl)
      }
   }, [appStoreUrl, playStoreUrl, appGalleryUrl])

   return (
      <div
         className={`${!modal && 'flex-col'} ${styles.storeArea}`}
      >
         {data.map((item, index) => (
            <a
               key={item.id || index}
               href={item.href}
               target="_blank"
               rel="noreferrer"
               className={styles.generalAppStore}
            >
               <Image
                  alt={item.alt}
                  src={item.src}
                  width={20}
                  height={20}
                  priority
                  style={{ width: 20, height: 20 }}
               />
               <p
                  className={styles.title}
               >
                  {item.title}
               </p>
            </a>
         ))}
      </div>
   )
}

export default DownloadApp
