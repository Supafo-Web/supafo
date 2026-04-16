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
         className={`flex flex-col min-h-screen justify-center items-center ${styles.notFoundBody} relative`}
      >
         <Image
            alt="flower"
            src="/images/LeftFlower.svg"
            width={69}
            height={115}
            className={`w-full h-auto max-w-12 lg:max-w-17.5 ${styles.leftFlower}`}
            style={{ height: 'auto' }}
         />
         <NotFoundClient />
         <div
            className="flex flex-col items-center mb-12.5 gap-3"
         >
            <h1
               className={`text-center ${styles.title}`}
            >
               Sayfa Bulunamadı!
            </h1>

            <Image
               alt="title-under"
               src="/icons/about-us/Title-Under.svg"
               width={283}
               height={40}
               className="w-80 h-auto md:w-100 lg:w-56"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
         </div>
         <p
            className={`${styles.smallText}`}
         >
            "Aradığın sayfa mevcut değil veya kaldırılmış olabilir"
         </p>
         <Button
            href={`/${locale}`}
            text='Ana Sayfa'
            className={`mt-12 ${styles.notFoundButton}`}
         />
         <Image
            alt='flower'
            src='/images/RightFlower.svg'
            width={69}
            height={115}
            className={`w-full h-auto max-w-12 lg:max-w-17.5 ${styles.rightFlower}`}

            style={{ width: 69, height: 115 }}
         />
      </div>
   )
}

export default NotFoundPage
