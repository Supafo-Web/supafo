import { getLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'
import styles from '@/components/modules/partner.module.scss'
import Dropdown from '@/components/dropdown/Dropdown'
import Button from '@/components/button/Button'

const Partner = async () => {
   const t = await getTranslations('Partner')
   const locale = await getLocale()
   const modal = await getTranslations('Navbar')

   return (
      <main>
         <section className="flex h-dvh">
            <video
               className="hidden lg:flex w-[40%]! h-full shrink-0 object-fill"
               autoPlay
               muted
               loop
               playsInline
            >
               <source
                  src="/videos/partner/PartnerDoor.mp4"
                  type="video/mp4"
               />
            </video>

            <div className={`flex-1 flex justify-center items-center relative ${styles.container}`}>
               <div className="flex justify-between items-center absolute top-0 left-0 right-0 px-6 py-2">
                  <Button
                     href={`/${locale}/`}
                  >
                     <Image
                        alt="logo"
                        src="/logo/logo.svg"
                        width={80}
                        height={67}
                        className={`${styles.logoImage} w-20`}
                        style={{ height: "auto" }}
                     />
                  </Button>
                  <Dropdown />
               </div>
               <div
                  className={`flex flex-col max-w-xl items-center ${styles.partnerPortalContainer}`}
               >
                  <Image
                     alt="mission-vision"
                     src="/partner/PartnerClock.svg"
                     width={100}
                     height={100}
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     style={{ height: 'auto' }}
                  />
                  <div className="flex flex-col items-center gap-5 mt-5">
                     <h1>{t('title')}</h1>
                     <h6>{t('subtitle')}</h6>
                     <p>{t('description')}</p>
                     <small
                        className={`mt-10`}
                     >
                        {t('notice')}
                     </small>
                  </div>
                  <Button
                     href={`/${locale}`}
                     text={modal("home")}
                     className={`mt-8 mb-4 px-16`}
                  />
               </div>
            </div>
         </section>
      </main>
   )
}

export default Partner
