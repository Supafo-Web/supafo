'use client'

import styles from '@/components/modules/download.module.scss'
import Image from "next/image"
import { data } from "@/components/store/AppStore"

const DownloadApp = () => {
   return (
      <div
         className={`${styles.storeArea}`}
      >
         {data.map((item, index) => (
            <a
               key={item.id || index}
               href={item.href}
               target="_blank"
               rel="noreferrer"
               aria-label={`${item.title} app download link`}
               className={`
                  ${styles.footerAppStore}
                  ${styles.storeButton}
               `}
            >
               <div
                  className={`
                     ${styles.iconFlip}
                     ${item?.title === 'App Store' && styles.appStore}`}
               >
                  <div className={styles.iconFlipInner}>
                     <img
                        alt=""
                        aria-hidden="true"
                        src={item.icon}
                        width={20}
                        height={20}
                        className={`w-5 h-auto ${styles.iconFront}`}
                     />
                     <img
                        alt=""
                        aria-hidden="true"
                        src={item.src}
                        width={20}
                        height={20}
                        className={`w-5 h-auto ${styles.iconBack}`}
                     />
                  </div>
               </div>

               <p className={styles.title}>
                  {item.title}
               </p>
            </a>
         ))}
      </div>
   )
}

export default DownloadApp
