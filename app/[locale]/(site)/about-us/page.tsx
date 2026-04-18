import { getTranslations } from 'next-intl/server'
import styles from '@/components/modules/about-us.module.scss'
import Image from 'next/image'
import NavbarDownloadButton from '@/components/navbar/NavbarDownloadButton'

const AboutUs = async () => {
   const t = await getTranslations("AboutUs")
   const modal = await getTranslations("Modal")

   return (
      <main>
         <section
            className={`px-10 sm:px-30 lg:px-40 xl:px-50 2xl:px-80 py-30 relative`}
         >
            <Image
               alt='flower'
               src='/images/LeftFlower.svg'
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower4}`}
            />
            <div
               className="flex flex-col items-center mb-12.5 gap-3"
            >
               <h1
                  className={`text-center ${styles.title}`}
               >
                  {t('title_1')}
               </h1>

               <Image
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="w-40 sm:w-52 md:w-60 lg:w-72 h-auto"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 288px"
               />
            </div>
            <div
               className="flex flex-col gap-12.5"
            >
               <h6
                  className={`text-center lg:text-left ${styles.subtitle}`}
               >
                  {t('subtitle_1')}
               </h6>
               <div
                  className="flex flex-col gap-10 leading-10"
               >
                  <p
                     className={`text-center lg:text-left ${styles.paragraph}`}
                  >
                     {t.rich('desc_1', {
                        brand: (chunks) => <span className={styles.brand}>{chunks}</span>
                     })}
                  </p>
                  <p
                     className={`text-center lg:text-left ${styles.paragraph}`}
                  >
                     {t.rich('desc_2', {
                        brand: (chunks) => <span className={styles.brand}>{chunks}</span>
                     })}
                  </p>
               </div>
            </div>
            <Image
               alt='flower'
               src='/images/RightFlower.svg'
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.rightFlower4}`}
            />
         </section>

         <section
            className={`px-10 sm:px-30 lg:px-40 xl:px-50 2xl:px-80 pb-30`}
         >
            <div
               className="flex flex-col items-center mb-12.5 gap-3"
            >
               <h1
                  className={`text-center ${styles.title}`}
               >
                  {t('title_2')}
               </h1>

               <Image
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="w-40 sm:w-52 md:w-60 lg:w-72 h-auto"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 288px"
               />
            </div>

            <div
               className="hidden lg:flex items-center gap-8.75"
            >
               <Image
                  alt="mission-vision"
                  src="/icons/about-us/1-2.svg"
                  width={379}
                  height={398}
                  className="w-40 xl:w-56 2xl:w-74 h-auto"
                  sizes="(max-width: 1280px) 224px, (max-width: 1536px) 296px, 379px"
               />
               <div
                  className="flex flex-col gap-10"
               >
                  <h6
                     className={`text-center lg:text-left ${styles.subtitle}`}
                  >
                     {t('mission_title')}
                  </h6>
                  <p
                     className={`text-center lg:text-left ${styles.paragraph}`}
                  >
                     {t('mission_desc')}
                  </p>

                  <h6
                     className={`text-center lg:text-left ${styles.subtitle}`}
                  >
                     {t('vision_title')}
                  </h6>
                  <p
                     className={`text-center lg:text-left ${styles.paragraph}`}
                  >
                     {t.rich('vision_desc', {
                        brand: (chunks) => <span className={styles.brand}>{chunks}</span>
                     })}
                  </p>
               </div>
            </div>

            <div
               className="flex flex-col lg:hidden gap-5"
            >
               <h6
                  className={`text-left mb-6 ${styles.subtitle}`}
               >
                  {t('mission_title')}
               </h6>
               <div
                  className="flex flex-col items-center gap-10"
               >
                  <Image
                     alt="mission"
                     src="/icons/about-us/small/1.svg"
                     width={98}
                     height={105}
                     className="w-24 sm:w-28 md:w-32 h-auto"
                     sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                  <p
                     className={`leading-10 text-center ${styles.paragraph}`}
                  >
                     {t('mission_desc')}
                  </p>
               </div>

               <h6
                  className={`text-left mb-6 mt-12 ${styles.subtitle}`}
               >
                  {t('vision_title')}
               </h6>
               <div
                  className="flex flex-col items-center gap-10"
               >
                  <Image
                     alt="mission"
                     src="/icons/about-us/small/2.svg"
                     width={98}
                     height={105}
                     className="w-24 sm:w-28 md:w-32 h-auto"
                     sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                  <p
                     className={`leading-10 text-center ${styles.paragraph}`}
                  >
                     {t.rich('vision_desc', {
                        brand: (chunks) => <span className={styles.brand}>{chunks}</span>
                     })}
                  </p>
               </div>
            </div>
         </section>

         <section
            className={`px-10 sm:px-30 lg:px-40 xl:px-50 2xl:px-80 pb-30 relative`}
         >
            <Image
               alt='flower'
               src='/images/LeftFlower.svg'
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower3}`}
            />
            <div
               className="flex flex-col items-center mb-12.5 gap-3"
            >
               <h1
                  className={`text-center ${styles.title}`}
               >
                  {t('title_3')}
               </h1>

               <Image
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="w-40 sm:w-52 md:w-60 lg:w-72 h-auto"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 288px"
               />
            </div>
            <div
               className="flex items-center gap-12.5"
            >
               <div
                  className="flex flex-col gap-7.5"
               >
                  <p
                     className={`${styles.articleTitle}`}
                  >
                     {t.rich('principles_title', {
                        brand: (chunks) => <span className={styles.brand}>{chunks}</span>
                     })}
                  </p>
                  <div
                     className={`ps-8 ${styles.articleSubTitle}`}
                  >
                     <li>
                        <span>
                           {t('principle_1_title')}{' '}
                        </span>
                        {t('principle_1_desc')}
                     </li>
                     <li>
                        <span>
                           {t('principle_2_title')}{' '}
                        </span>
                        {t('principle_2_desc')}
                     </li>
                     <li>
                        <span>
                           {t('principle_3_title')}{' '}
                        </span>
                        {t('principle_3_desc')}
                     </li>
                  </div>
               </div>
               <div
                  className="hidden lg:flex"
               >
                  <Image
                     alt="about-us-group"
                     src="/icons/about-us/3-4-5.svg"
                     width={452}
                     height={494}
                     className="w-64 xl:w-80 2xl:w-113 h-auto"
                     sizes="(max-width: 1280px) 320px, (max-width: 1536px) 384px, 452px"
                  />
               </div>
            </div>
            <div
               className="flex justify-between lg:hidden mt-10 gap-4"
            >
               <Image
                  alt="about-us-small-group"
                  src="/icons/about-us/small/3.svg"
                  width={98}
                  height={105}
                  className="w-20 sm:w-24 md:w-28 h-auto"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
               />
               <Image
                  alt="about-us-small-group"
                  src="/icons/about-us/small/4.svg"
                  width={98}
                  height={105}
                  className="w-20 sm:w-24 md:w-28 h-auto"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
               />
               <Image
                  alt="about-us-small-group"
                  src="/icons/about-us/small/5.svg"
                  width={98}
                  height={105}
                  className="w-20 sm:w-24 md:w-28 h-auto"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
               />
            </div>
            <Image
               alt='flower'
               src='/images/RightFlower.svg'
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.rightFlower3}`}
            />
         </section>

         <section
            className={`px-10 sm:px-30 lg:px-40 xl:px-50 2xl:px-80 pb-30 relative`}
         >
            <Image
               alt='flower'
               src='/images/LeftFlower.svg'
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower5}`}
            />
            <div
               className="flex flex-col items-center mb-12.5 gap-3"
            >
               <h1
                  className={`text-center ${styles.title}`}
               >
                  {t('title_4')}
               </h1>

               <Image
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="w-40 sm:w-52 md:w-60 lg:w-72 h-auto"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 288px"
               />
            </div>

            <div
               className="flex flex-col lg:flex-row items-center gap-10"
            >
               <Image
                  alt="mission"
                  src="/icons/about-us/small/6.svg"
                  width={98}
                  height={105}
                  className="w-28 sm:w-36 md:w-44 lg:w-64 xl:w-96 2xl:w-105 h-auto"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, (max-width: 1024px) 176px, (max-width: 1280px) 256px, (max-width: 1536px) 384px, 420px"
               />
               <div
                  className="flex flex-col items-center lg:items-start gap-10"
               >
                  <p
                     className={`leading-10 text-center lg:text-left ${styles.paragraph}`}
                  >
                     {t('join_desc')}
                  </p>
                  <NavbarDownloadButton
                     text={modal('download_app')}
                     title={modal('download_app_title')}
                  />
               </div>
            </div>
         </section>
      </main>
   )
}

export default AboutUs
