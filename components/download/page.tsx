'use client'

import { useEffect } from "react"
import styles from './download.module.scss'
import Image from "next/image"
import { appStoreUrl, data, playStoreUrl } from "@/components/store/AppStore"

interface DownloadType {
   modal?: boolean
   footer?: boolean
}

const DownloadApp = ({ modal, footer }: DownloadType) => {
   useEffect(() => {
      const ua = navigator.userAgent || navigator.vendor || ''

      const isIOS = /iPhone|iPad|iPod/i.test(ua)
      const isAndroid = /Android/i.test(ua)

      if (isIOS) {
         window.location.replace(appStoreUrl)
         return
      }

      if (isAndroid) {
         window.location.replace(playStoreUrl)
         return
      }
   }, [appStoreUrl, playStoreUrl])

   return (
      <div
         className={`${modal && 'flex-col md:flex-row'} ${styles.storeArea}`}
      >
         {data.map((item, index) => (
            <a
               key={item.id || index}
               href={item.href}
               target="_blank"
               rel="noreferrer"
               className={`${footer ? styles.footerAppStore : styles.generalAppStore}`}
            >
               <Image
                  alt={item.alt}
                  src={item.src}
                  width={20}
                  height={20}

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
