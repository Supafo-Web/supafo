import NotFoundClient from '../../components/not-found/not-found-client'
import { getLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'
import styles from '@/components/modules/not-found.module.scss'
import Button from '@/components/button/Button'

const NotFoundPage = async () => {
   const t = await getTranslations('NotFound')
   const locale = await getLocale()

   return (
      <div
         className={`flex flex-col min-h-screen justify-center items-center overflow-hidden ${styles.notFoundBody} relative`}
      >
         <div className={styles.topLeftGlow} />
         <div className={styles.bottomRightGlow} />

         <img
            alt=""
            aria-hidden="true"
            src="/images/LeftFlower.svg"
            width={69}
            height={115}
            className={`w-full h-auto max-w-12 lg:max-w-17.5 ${styles.leftFlower} ${styles.swingLeaf}`}
         />

         <NotFoundClient />

         <Button
            href={`/${locale}`}
            text={t('home')}
            className={`mt-8 ${styles.notFoundButton} mt-20 z-30`}
            textClass={`${styles.buttonText}`}
         />

         <img
            alt=""
            aria-hidden="true"
            src="/images/RightFlower.svg"
            width={69}
            height={115}
            className={`w-full h-auto max-w-12 lg:max-w-17.5 ${styles.rightFlower} ${styles.swingLeaf2}`}
         />
      </div>
   )
}

export default NotFoundPage
