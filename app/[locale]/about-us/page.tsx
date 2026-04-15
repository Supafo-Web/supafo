import { getTranslations } from 'next-intl/server'
import styles from './page.module.scss'
import Image from 'next/image'
import NavbarDownloadButton from '@/components/navbar/NavbarDownloadButton'
import TeamMembers from '@/app/[locale]/about-us/TeamMembers'

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
               className={`w-full h-auto max-w-12 lg:max-w-17.5 ${styles.leftFlower4}`}
               priority
               style={{ width: 69, height: 115 }}
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
                  className="w-80 h-auto md:w-100 lg:w-56"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
               <div className="flex flex-col gap-10 leading-10">
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
               className={`w-full h-auto max-w-12 lg:max-w-17.5 ${styles.rightFlower4}`}
               priority
               style={{ width: 69, height: 115 }}
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
                  className="w-80 h-auto md:w-100 lg:w-56"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  className="w-36 h-auto sm:w-40 md:w-48 lg:w-74"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
               <div className="flex flex-col gap-10">
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
               <div className="flex flex-col items-center gap-10">
                  <Image
                     alt="mission"
                     src="/icons/about-us/small/1.svg"
                     width={98}
                     height={105}
                     className="w-60 h-auto sm:w-40 md:w-48"
                     priority
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
               <div className="flex flex-col items-center gap-10">
                  <Image
                     alt="mission"
                     src="/icons/about-us/small/2.svg"
                     width={98}
                     height={105}
                     className="w-60 h-auto sm:w-40 md:w-48"
                     priority
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
               className={`w-full h-auto max-w-12 lg:max-w-17.5 ${styles.leftFlower3}`}
               priority
               style={{ width: 69, height: 115 }}
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
                  className="w-80 h-auto md:w-100 lg:w-56"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
            </div>
            <div className="flex items-center gap-12.5">
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
                  <div className={`ps-8 ${styles.articleSubTitle}`}>
                     <li>
                        <span>
                           {t('principle_1_title')} {' '}
                        </span>
                        {t('principle_1_desc')}
                     </li>
                     <li>
                        <span>
                           {t('principle_2_title')} {' '}
                        </span>
                        {t('principle_2_desc')}
                     </li>
                     <li>
                        <span>
                           {t('principle_3_title')} {' '}
                        </span>
                        {t('principle_3_desc')}
                     </li>
                  </div>
               </div>
               <div className="hidden lg:flex">
                  <Image
                     alt="about-us-group"
                     src="/icons/about-us/3-4-5.svg"
                     width={452}
                     height={494}
                     className="w-full h-auto"
                     priority
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
               </div>
            </div>
            <div className="flex justify-between lg:hidden mt-10">
               <Image
                  alt="about-us-small-group"
                  src="/icons/about-us/small/3.svg"
                  width={98}
                  height={105}
                  className="w-30 h-auto sm:w-40 md:w-48"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
               <Image
                  alt="about-us-small-group"
                  src="/icons/about-us/small/4.svg"
                  width={98}
                  height={105}
                  className="w-30 h-auto sm:w-40 md:w-48"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
               <Image
                  alt="about-us-small-group"
                  src="/icons/about-us/small/5.svg"
                  width={98}
                  height={105}
                  className="w-30 h-auto sm:w-40 md:w-48"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
            </div>
            <Image
               alt='flower'
               src='/images/RightFlower.svg'
               width={69}
               height={115}
               className={`w-full h-auto max-w-12 lg:max-w-17.5 ${styles.rightFlower3}`}
               priority
               style={{ width: 69, height: 115 }}
            />
         </section>

         <section
            className={`px-10 sm:px-30 lg:px-40 xl:px-50 2xl:px-80 pb-10`}
         >
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
                  className="w-80 h-auto md:w-100 lg:w-56"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10">
               <Image
                  alt="mission"
                  src="/icons/about-us/small/6.svg"
                  width={98}
                  height={105}
                  className="w-60 h-auto sm:w-80 lg:w-200"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
               <div className="flex flex-col items-center lg:items-start gap-10">
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

         <section
            className={`px-10 sm:px-30 lg:px-40 xl:px-50 2xl:px-80 py-20 mb-30 relative`}
         >
            <Image
               alt='flower'
               src='/images/LeftFlower.svg'
               width={69}
               height={115}
               className={`w-full h-auto max-w-12 lg:max-w-17.5 ${styles.leftFlower5}`}
               priority
               style={{ width: 69, height: 115 }}
            />
            <div
               className="flex flex-col items-center mb-12.5 gap-3"
            >
               <h1
                  className={`text-center ${styles.title}`}
               >
                  {t('title_5')}
               </h1>

               <Image
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="w-80 h-auto md:w-100 lg:w-56"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
            </div>
            <div
               className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-12"
            >
               <TeamMembers />
            </div>
            <Image
               alt='flower'
               src='/images/RightFlower.svg'
               width={69}
               height={115}
               className={`w-full h-auto max-w-12 lg:max-w-17.5 ${styles.rightFlower5}`}
               priority
               style={{ width: 69, height: 115 }}
            />
         </section>
      </main>
   )
}

export default AboutUs
