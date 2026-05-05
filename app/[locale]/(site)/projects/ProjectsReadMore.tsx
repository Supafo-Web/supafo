"use client"

import styles from "@/components/modules/projects.module.scss"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useState, type ReactNode } from "react"
import Button from "@/components/button/Button"

export default function ProjectsReadMore() {
   const t = useTranslations("Projects")
   const [isExpanded, setIsExpanded] = useState(false)

   const richText = {
      brand: (chunks: ReactNode) => (
         <span className={styles.brand}>{chunks}</span>
      ),
      br: () => <br />,
   }

   const sectionClass =
      "relative w-full max-w-full px-5 py-20 sm:px-8 md:px-12 md:py-30 lg:px-20 xl:px-28 2xl:px-40 3xl:px-60"

   const containerClass =
      "mx-auto w-full max-w-[1440px] min-w-0 3xl:max-w-[1600px]"

   const flowerClass =
      "h-auto w-9 sm:w-12 lg:w-17.5"

   const imageWrapperClass =
      "flex w-full shrink-0 justify-center lg:w-auto"

   const imageClass =
      "h-auto w-full max-w-[260px] object-contain sm:max-w-[300px] md:max-w-[320px] lg:max-w-[360px]"

   const textColumnClass =
      "flex w-full min-w-0 flex-col gap-6 text-center md:gap-7 lg:text-left"

   return (
      <>
         <div
            className={`${styles.readMoreContent} ${isExpanded ? styles.expanded : styles.collapsed
               }`}
         >
            <section className="relative w-full max-w-full px-5 py-10 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-40 3xl:px-60">
               <div className={containerClass}>
                  <div className="mt-20 flex min-w-0 flex-col items-center gap-10 md:mt-30 md:gap-16 lg:flex-row lg:gap-14">
                     <div className={imageWrapperClass}>
                        <Image
                           alt={t("saplings.purposeImageAlt")}
                           src="/projects/saplings/2.webp"
                           width={422}
                           height={462}
                           className={imageClass}
                           sizes="(max-width: 640px) 80vw, (max-width: 1024px) 320px, 400px"
                        />
                     </div>

                     <div className={textColumnClass}>
                        <h2 className={styles.subtitle}>
                           {t.rich("saplings.purposeTitle", richText)}
                        </h2>

                        <div className="flex flex-col text-left lg:text-left">
                           <p className={styles.paragraph}>
                              {t.rich("saplings.purposeParagraph", richText)}
                           </p>

                           <ul className={`list-disc ps-8 ${styles.paragraph}`}>
                              {t.raw("saplings.purposeItems").map(
                                 (item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                 )
                              )}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className={sectionClass}>
               <img
                  alt=""
                  aria-hidden="true"
                  src="/images/LeftFlower.svg"
                  width={69}
                  height={115}
                  className={`${flowerClass} ${styles.leftFlower2} ${styles.swingLeaf}`}
               />

               <div className={containerClass}>
                  <div className="flex min-w-0 flex-col items-start gap-12 md:gap-20 lg:mt-20 lg:flex-row lg:gap-14">
                     <div className={textColumnClass}>
                        <h2 className={styles.subtitle}>
                           {t.rich("saplings.howItWorksTitle", richText)}
                        </h2>

                        <div className="flex flex-col text-left">
                           <p className={styles.paragraph}>
                              {t.rich("saplings.howItWorksParagraph", richText)}
                           </p>

                           <ul className={`list-disc ps-8 ${styles.paragraph}`}>
                              {t.raw("saplings.howItWorksItems").map(
                                 (item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                 )
                              )}
                           </ul>
                        </div>
                     </div>

                     <div className={textColumnClass}>
                        <h2 className={styles.subtitle}>
                           {t.rich("saplings.plantingTitle", richText)}
                        </h2>

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
               </div>

               <img
                  alt=""
                  aria-hidden="true"
                  src="/images/RightFlower.svg"
                  width={69}
                  height={115}
                  className={`${flowerClass} ${styles.rightFlower2} ${styles.swingLeaf2}`}
               />
            </section>

            <section className={sectionClass}>
               <div className={containerClass}>
                  <div className="flex min-w-0 flex-col items-center gap-10 md:gap-16 lg:flex-row-reverse lg:gap-14">
                     <div className={imageWrapperClass}>
                        <Image
                           alt={t("saplings.contributionImageAlt")}
                           src="/projects/saplings/3.webp"
                           width={422}
                           height={462}
                           className={imageClass}
                           sizes="(max-width: 640px) 80vw, (max-width: 1024px) 320px, 400px"
                        />
                     </div>

                     <div className={textColumnClass}>
                        <h2 className={styles.subtitle}>
                           {t.rich("saplings.contributionTitle", richText)}
                        </h2>

                        <div className="flex flex-col text-left">
                           <p className={styles.paragraph}>
                              {t.rich("saplings.contributionParagraph", richText)}
                           </p>

                           <ul className={`list-disc ps-8 ${styles.paragraph}`}>
                              {t.raw("saplings.contributionItems").map(
                                 (item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                 )
                              )}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>

               <img
                  alt=""
                  aria-hidden="true"
                  src="/images/LeftFlower.svg"
                  width={69}
                  height={115}
                  className={`${flowerClass} ${styles.leftFlower3} ${styles.swingLeaf}`}
               />
            </section>
         </div>

         <div className="mb-20 flex justify-center px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-40 3xl:px-60">
            <Button
               type="button"
               onClick={() => setIsExpanded((prev) => !prev)}
               textClass={styles.readMoreButton}
               className="px-9 py-1"
               aria-expanded={isExpanded}
               text={
                  isExpanded
                     ? String(t.rich("saplings.readMore2", richText))
                     : String(t.rich("saplings.readMore", richText))
               }
            />
         </div>
      </>
   )
}
