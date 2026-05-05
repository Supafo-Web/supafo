import { getLocale, getTranslations } from 'next-intl/server'
import styles from '@/components/modules/career.module.scss'
import Image from 'next/image'
import OpenPositions from '@/app/[locale]/(site)/career/OpenPositions'
import Button from '@/components/button/Button'
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/career")

const Career = async () => {
   const t = await getTranslations('Career')
   const locale = await getLocale()

   const whySupafo = [
      { id: 1, icon: '/career/Clock.svg', title: t('why_1'), alt: 'clock' },
      { id: 2, icon: '/career/Gift.svg', title: t('why_2'), alt: 'gift' },
      { id: 3, icon: '/career/Book.svg', title: t('why_3'), alt: 'book' },
      { id: 4, icon: '/career/Global.svg', title: t('why_4'), alt: 'global' }
   ]

   const staj = [
      { id: 1, icon: '/career/Rocket.svg', title: t('intern_1_title'), subTitle: t('intern_1_subtitle') },
      { id: 2, icon: '/career/Book2.svg', title: t('intern_2_title'), subTitle: t('intern_2_subtitle') },
      { id: 3, icon: '/career/Star.svg', title: t('intern_3_title'), subTitle: t('intern_3_subtitle') }
   ]

   return (
      <main>
         <section
            className="px-10 sm:px-30 lg:px-40 xl:px-50 2xl:px-80 py-15 lg:py-30 relative"
         >
            <img
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower} ${styles.swingLeaf}`}
            />

            <div
               className="flex flex-col items-center mb-12.5 gap-0 lg:gap-3"
            >
               <h1
                  className={`text-center ${styles.title}`}
               >
                  {t('title')}
               </h1>

               <img
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="block w-70.75 max-w-full h-auto mx-auto"
               />
            </div>

            <div
               className="flex flex-col gap-6 lg:gap-12.5"
            >
               <h6
                  className={`text-center lg:text-left ${styles.subtitle}`}
               >
                  {t('subtitle')}
               </h6>

               <div
                  className="flex flex-col gap-5 lg:gap-10 leading-10"
               >
                  <p
                     className={`text-center lg:text-left ${styles.paragraph}`}
                  >
                     {t('desc_1')}
                  </p>
                  <p
                     className={`text-center lg:text-left ${styles.paragraph}`}
                  >
                     {t('desc_2')}
                  </p>
               </div>
            </div>

            <img
               alt="flower"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.rightFlower} ${styles.swingLeaf2}`}
            />
         </section>

         <section
            className="px-10 py-15 lg:pb-30"
         >
            <div
               className="flex flex-col items-center mb-12.5 gap-0 lg:gap-3"
            >
               <h1
                  className={`text-center ${styles.title}`}
               >
                  {t.rich('why_title', {
                     brand: (chunks) => <span className={styles.brand}>{chunks}</span>
                  })}
               </h1>

               <img
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="block w-70.75 max-w-full h-auto mx-auto"
               />
            </div>

            <div
               className="flex justify-center items-center"
            >
               <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
               >
                  {whySupafo.map((item, index) => (
                     <div
                        key={item.id || index}
                        className={`flex flex-col gap-7.5 items-center px-3.5 py-11.25 rounded-[30px] ${styles.whySupafoArea}`}
                     >
                        <img
                           alt={item.alt}
                           src={item.icon}
                           width={60}
                           height={60}
                           className="w-12 sm:w-14 md:w-15 h-auto"
                        />
                        <p
                           className={styles.whySupafoTitle}
                        >
                           {item.title}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section
            className="px-10 py-15 lg:pb-30 relative"
         >
            <img
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower2} ${styles.swingLeaf}`}
            />

            <div
               className="flex flex-col items-center mb-12.5 gap-0 lg:gap-3"
            >
               <h1
                  className={`text-center ${styles.title}`}
               >
                  {t('positions_title')}
               </h1>

               <img
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="block w-70.75 max-w-full h-auto mx-auto"
               />
            </div>

            <div
               className="flex"
            >
               <OpenPositions />
            </div>

            <img
               alt="flower"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.rightFlower2} ${styles.swingLeaf2}`}
            />
         </section>

         <section
            className="px-10 py-15 lg:pb-30 relative"
         >
            <div
               className="w-full max-w-280 mx-auto"
            >
               <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-12"
               >
                  {staj.map((item, index) => {
                     const isLastOddItem =
                        staj.length % 2 !== 0 && index === staj.length - 1

                     return (
                        <div
                           key={item.id || index}
                           className={`
                              flex flex-col items-center
                              ${styles.lastSection}
                              ${isLastOddItem ? 'md:col-span-2' : ''}
                           `}
                        >
                           <img
                              alt={item.title}
                              src={item.icon}
                              width={110}
                              height={110}
                              className="w-18 sm:w-20 md:w-24 lg:w-28 h-auto"
                              sizes="(max-width: 640px) 72px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                           />
                           <h5>
                              {item.title}
                           </h5>
                           <p>
                              {item.subTitle}
                           </p>
                        </div>
                     )
                  })}
               </div>
            </div>
            <div
               className="flex flex-col md:flex-row gap-12 md:gap-0 justify-around items-center mt-25 mb-15 lg:mb-0"
            >
               {/* <Button
                  text={t('button_intern')}
                  className={`${styles.button} w-full max-w-60`}
                  textClass={`${styles.buttonText}`}
               /> */}
               <Button
                  href={`/${locale}/career/team`}
                  text={t('button_team')}
                  textClass={`${styles.buttonText}`}
                  className={`${styles.button} w-full max-w-60`}
               />
            </div>

            <img
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower3} ${styles.swingLeaf}`}
            />
         </section>
      </main>
   )
}

export default Career
