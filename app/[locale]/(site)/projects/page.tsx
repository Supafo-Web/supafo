"use client"

import styles from "@/components/modules/projects.module.scss"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useState } from "react"
import Button from "@/components/button/Button"

const Projects = () => {
   const t = useTranslations("Projects")
   const [isExpanded, setIsExpanded] = useState<boolean>(false)

   const richText = {
      brand: (chunks: React.ReactNode) => (
         <span className={styles.brand}>{chunks}</span>
      ),
      br: () => <br />
   }

   return (
      <main className="overflow-hidden">
         <section className="relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60 pt-24 md:pt-30">
            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`w-9 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower} ${styles.swingLeaf}`}
            />

            <div className="flex flex-col items-center mb-10 md:mb-12.5 gap-3">
               <h1 className={`text-center ${styles.title}`}>
                  {t.rich("saplings.title", richText)}
               </h1>

               <Image
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="w-[clamp(160px,35vw,283px)] h-auto"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
               />
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-10 md:gap-16 lg:gap-20 items-center">
               <div className="w-full max-w-80 shrink-0">
                  <Image
                     alt="saplings"
                     src="/projects/saplings/1.svg"
                     width={422}
                     height={462}
                     className="w-80 h-auto"
                     sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 422px"
                  />
               </div>

               <div className="flex flex-col gap-6 md:gap-7 w-full">
                  <h6 className={`text-center lg:text-left ${styles.subtitle}`}>
                     {t.rich("saplings.heroSubtitle", richText)}
                  </h6>

                  <div className="flex flex-col">
                     <p className={styles.paragraph}>
                        {t.rich("saplings.heroParagraph1", richText)}
                     </p>

                     <p className={styles.paragraph}>
                        {t.rich("saplings.heroParagraph2", richText)}
                     </p>
                  </div>
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

         <div
            className={`${styles.readMoreContent} ${isExpanded ? styles.expanded : styles.collapsed
               }`}
         >
            <section className="relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60 py-10">
               <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-20 items-center mt-20 md:mt-30">
                  <div className="w-full max-w-80 shrink-0">
                     <Image
                        alt="saplings"
                        src="/projects/saplings/2.svg"
                        width={422}
                        height={462}
                        className="w-80 h-auto"
                        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 422px"
                     />
                  </div>

                  <div className="flex flex-col gap-6 md:gap-7 w-full">
                     <h6 className={`text-center lg:text-left ${styles.subtitle}`}>
                        {t.rich("saplings.purposeTitle", richText)}
                     </h6>

                     <div className="flex flex-col">
                        <p className={styles.paragraph}>
                           {t.rich("saplings.purposeParagraph", richText)}
                        </p>

                        <ul className={`list-disc ps-8 ${styles.paragraph}`}>
                           {t.raw("saplings.purposeItems").map((item: string, index: number) => (
                              <li key={index}>{item}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </section>

            <section className="relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60 py-20 md:py-30">
               <Image
                  alt="flower"
                  src="/images/LeftFlower.svg"
                  width={69}
                  height={115}
                  className={`w-9 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower2} ${styles.swingLeaf}`}
               />

               <div className="flex flex-col lg:flex-row gap-12 md:gap-20 lg:gap-20 lg:mt-20 items-start">
                  <div className="flex flex-col gap-6 md:gap-7 w-full">
                     <h6 className={`text-center lg:text-left ${styles.subtitle}`}>
                        {t.rich("saplings.howItWorksTitle", richText)}
                     </h6>

                     <div className="flex flex-col">
                        <p className={styles.paragraph}>
                           {t.rich("saplings.howItWorksParagraph", richText)}
                        </p>

                        <ul className={`list-disc ps-8 ${styles.paragraph}`}>
                           {t.raw("saplings.howItWorksItems").map((item: string, index: number) => (
                              <li key={index}>{item}</li>
                           ))}
                        </ul>
                     </div>
                  </div>

                  <div className="flex flex-col gap-6 md:gap-7 w-full">
                     <h6 className={`text-center lg:text-left ${styles.subtitle}`}>
                        {t.rich("saplings.plantingTitle", richText)}
                     </h6>

                     <div className="flex flex-col">
                        <p className={styles.paragraph}>
                           {t.rich("saplings.plantingParagraph1", richText)}
                        </p>

                        <p className={styles.paragraph}>
                           {t.rich("saplings.plantingParagraph2", richText)}
                        </p>
                     </div>
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

            <section className="relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60 py-20 md:py-30">
               <div className="flex flex-col lg:flex-row-reverse gap-10 md:gap-16 lg:gap-20 items-center">
                  <div className="w-full max-w-80 shrink-0">
                     <Image
                        alt="saplings"
                        src="/projects/saplings/3.svg"
                        width={422}
                        height={462}
                        className="w-80 h-auto"
                        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 422px"
                     />
                  </div>

                  <div className="flex flex-col gap-6 md:gap-7 w-full">
                     <h6 className={`text-center lg:text-left ${styles.subtitle}`}>
                        {t.rich("saplings.contributionTitle", richText)}
                     </h6>

                     <div className="flex flex-col">
                        <p className={styles.paragraph}>
                           {t.rich("saplings.contributionParagraph", richText)}
                        </p>

                        <ul className={`list-disc ps-8 ${styles.paragraph}`}>
                           {t.raw("saplings.contributionItems").map((item: string, index: number) => (
                              <li key={index}>{item}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>

               <Image
                  alt="flower"
                  src="/images/LeftFlower.svg"
                  width={69}
                  height={115}
                  className={`w-9 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower3} ${styles.swingLeaf}`}
               />
            </section>
         </div>

         <div className="flex justify-center px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60 py-20">
            <Button
               type="button"
               onClick={() => setIsExpanded((prev) => !prev)}
               textClass={styles.readMoreButton}
               className={`py-1 px-9`}
               aria-expanded={isExpanded}
               text={isExpanded ? "Daha az gör" : "Devamını oku"}
            />
         </div>
      </main>
   )
}

export default Projects
