import styles from '@/components/modules/what-is-food-waste.module.scss'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/what-is-food-waste")

const WhatIsFoodWaste = () => {
   const t = useTranslations("WhatIsFoodWaste")

   const richText = {
      brand: (chunks: React.ReactNode) => (
         <span className={styles.brand}>{chunks}</span>
      ),
      br: () => <br />
   }

   return (
      <main>
         <section
            className="relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60 py-15 lg:py-30"
         >
            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`w-9 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower} ${styles.swingLeaf}`}
            />

            <div
               className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-15 items-center"
            >
               <div
                  className="w-full max-w-80 shrink-0"
               >
                  <Image
                     alt="what-is-food-waste"
                     src="/what-is-food-waste/1.svg"
                     width={422}
                     height={462}
                     className="w-80 h-auto"
                     sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 422px"
                  />
               </div>

               <div
                  className="flex flex-col gap-6 md:gap-7 w-full"
               >
                  <h6
                     className={`text-center lg:text-left ${styles.subtitle}`}
                  >
                     {t.rich("section1Title", richText)}
                  </h6>

                  <p
                     className={`text-center lg:text-left ${styles.paragraph}`}
                  >
                     {t.rich("section1Text", richText)}
                  </p>
               </div>
            </div>

            <Image
               alt="flower"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`w-9 sm:w-12 lg:w-17.5 h-auto ${styles.rightFlower} ${styles.swingLeaf2}`}
            />
         </section>

         <section
            className="relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60 py-15 lg:py-30"
         >
            <div
               className="flex flex-col lg:flex-row gap-10 lg:gap-15 items-center"
            >
               <div
                  className="w-full max-w-80 shrink-0"
               >
                  <Image
                     alt="what-is-food-waste"
                     src="/what-is-food-waste/2.svg"
                     width={422}
                     height={462}
                     className="w-80 h-auto"
                     sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 422px"
                  />
               </div>

               <div
                  className="flex flex-col gap-6 md:gap-7 w-full"
               >
                  <h6
                     className={`text-center lg:text-left ${styles.subtitle}`}
                  >
                     {t.rich("section2Title", richText)}
                  </h6>

                  <p
                     className={`text-center lg:text-left ${styles.paragraph}`}
                  >
                     {t.rich("section2Text", richText)}
                  </p>
               </div>
            </div>
         </section>

         <section
            className="relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60 py-15 lg:py-30"
         >
            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`w-9 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower2} ${styles.swingLeaf}`}
            />

            <div
               className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-15 items-center"
            >
               <div
                  className="w-full max-w-80 shrink-0"
               >
                  <Image
                     alt="what-is-food-waste"
                     src="/what-is-food-waste/3.svg"
                     width={422}
                     height={462}
                     className="w-80 h-auto"
                     sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 422px"
                  />
               </div>

               <div
                  className="flex flex-col gap-6 md:gap-7 w-full"
               >
                  <h6
                     className={`text-center lg:text-left ${styles.subtitle}`}
                  >
                     {t.rich("section3Title", richText)}
                  </h6>

                  <p
                     className={`text-center lg:text-left ${styles.paragraph}`}
                  >
                     {t.rich("section3Text", richText)}
                  </p>
               </div>
            </div>

            <Image
               alt="flower"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`w-9 sm:w-12 lg:w-17.5 h-auto ${styles.rightFlower2} ${styles.swingLeaf2}`}
            />
         </section>

         <section
            className="relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60 py-15 lg:py-30 mb-10"
         >
            <div
               className="flex flex-col gap-6 md:gap-7 w-full"
            >
               <h6
                  className={`text-center ${styles.subtitle}`}
               >
                  {t.rich("section4Title", richText)}
               </h6>

               <p
                  className={`text-center ${styles.paragraph}`}
               >
                  {t.rich("section4Text", richText)}
               </p>
            </div>

            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`w-9 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower3} ${styles.swingLeaf}`}
            />
         </section>
      </main>
   )
}

export default WhatIsFoodWaste
