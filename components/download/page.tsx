'use client'

import styles from '@/components/modules/download.module.scss'
import Image from "next/image"
import { data } from "@/components/store/AppStore"

interface DownloadType {
   modal?: boolean
   footer?: boolean
}

const DownloadApp = ({ modal, footer }: DownloadType) => {
   return (
      <div className={`${modal ? 'flex-col md:flex-row' : ''} ${styles.storeArea}`}>
         {data.map((item, index) => (
            <a
               key={item.id || index}
               href={item.href}
               target="_blank"
               rel="noreferrer"
               className={`
                  ${footer ? styles.footerAppStore : styles.generalAppStore}
                  ${styles.storeButton}
               `}
            >
               <div className={styles.iconFlip}>
                  <div className={styles.iconFlipInner}>
                     <Image
                        alt={item.alt}
                        src={item.icon}
                        width={20}
                        height={20}
                        className={styles.iconFront}
                        style={{ height: "auto" }}
                     />
                     <Image
                        alt={`${item.alt} hover`}
                        src={item.src}
                        width={20}
                        height={20}
                        className={styles.iconBack}
                        style={{ height: "auto" }}
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
