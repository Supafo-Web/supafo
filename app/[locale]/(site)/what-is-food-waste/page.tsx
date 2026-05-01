import styles from "@/components/modules/what-is-food-waste.module.scss"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/what-is-food-waste")

const WhatIsFoodWaste = () => {
   const t = useTranslations("WhatIsFoodWaste")

   const richText = {
      brand: (chunks: React.ReactNode) => (
         <span className={styles.brand}>
            {chunks}
         </span>
      ),
      br: () => <br />,
   }

   const sectionClass =
      "relative w-full max-w-full px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-20 lg:py-24 xl:px-28 2xl:px-40 3xl:px-60"

   const containerClass =
      "mx-auto w-full max-w-[1440px] min-w-0 3xl:max-w-[1600px]"

   const flowerClass =
      "h-auto w-9 sm:w-12 lg:w-17.5"

   const imageWrapperClass =
      "flex w-full shrink-0 justify-center lg:w-[36%] xl:w-[34%]"

   const imageBoxClass =
      "w-full max-w-[260px] overflow-hidden rounded-[24px] border border-[#82B74C] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[360px] lg:rounded-[30px] xl:max-w-[400px]"

   const imageClass =
      "h-auto w-full object-contain"

   const textColumnClass =
      "flex w-full min-w-0 flex-col gap-6 text-center md:gap-7 lg:text-left"

   return (
      <main className="min-h-screen w-full max-w-full overflow-hidden">
         <section className={sectionClass}>
            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.leftFlower} ${styles.swingLeaf}`}
            />

            <div className={containerClass}>
               <div className="flex min-w-0 flex-col items-center gap-10 lg:flex-row-reverse lg:gap-14 xl:gap-20">
                  <div className={imageWrapperClass}>
                     <div className={imageBoxClass}>
                        <Image
                           alt="what-is-food-waste"
                           src="/what-is-food-waste/1.svg"
                           width={422}
                           height={462}
                           className={imageClass}
                           sizes="(max-width: 640px) 80vw, (max-width: 1024px) 320px, 400px"
                        />
                     </div>
                  </div>

                  <div className={textColumnClass}>
                     <h6 className={styles.subtitle}>
                        {t.rich("section1Title", richText)}
                     </h6>

                     <p className={styles.paragraph}>
                        {t.rich("section1Text", richText)}
                     </p>
                  </div>
               </div>
            </div>

            <Image
               alt="flower"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.rightFlower} ${styles.swingLeaf2}`}
            />
         </section>

         <section className={sectionClass}>
            <div className={containerClass}>
               <div className="flex min-w-0 flex-col items-center gap-10 lg:flex-row lg:gap-14 xl:gap-20">
                  <div className={imageWrapperClass}>
                     <div className={imageBoxClass}>
                        <Image
                           alt="what-is-food-waste"
                           src="/what-is-food-waste/2.svg"
                           width={422}
                           height={462}
                           className={imageClass}
                           sizes="(max-width: 640px) 80vw, (max-width: 1024px) 320px, 400px"
                        />
                     </div>
                  </div>

                  <div className={textColumnClass}>
                     <h6 className={styles.subtitle}>
                        {t.rich("section2Title", richText)}
                     </h6>

                     <p className={styles.paragraph}>
                        {t.rich("section2Text", richText)}
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className={sectionClass}>
            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.leftFlower2} ${styles.swingLeaf}`}
            />

            <div className={containerClass}>
               <div className="flex min-w-0 flex-col items-center gap-10 lg:flex-row-reverse lg:gap-14 xl:gap-20">
                  <div className={imageWrapperClass}>
                     <div className={imageBoxClass}>
                        <Image
                           alt="what-is-food-waste"
                           src="/what-is-food-waste/3.svg"
                           width={422}
                           height={462}
                           className={imageClass}
                           sizes="(max-width: 640px) 80vw, (max-width: 1024px) 320px, 400px"
                        />
                     </div>
                  </div>

                  <div className={textColumnClass}>
                     <h6 className={styles.subtitle}>
                        {t.rich("section3Title", richText)}
                     </h6>

                     <p className={styles.paragraph}>
                        {t.rich("section3Text", richText)}
                     </p>
                  </div>
               </div>
            </div>

            <Image
               alt="flower"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.rightFlower2} ${styles.swingLeaf2}`}
            />
         </section>

         <section className={`${sectionClass} mb-10`}>
            <div className={`${containerClass} flex flex-col gap-6 text-center md:gap-7`}>
               <h6 className={styles.subtitle}>
                  {t.rich("section4Title", richText)}
               </h6>

               <p className={styles.paragraph}>
                  {t.rich("section4Text", richText)}
               </p>
            </div>

            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.leftFlower3} ${styles.swingLeaf}`}
            />
         </section>
      </main>
   )
}

export default WhatIsFoodWaste
