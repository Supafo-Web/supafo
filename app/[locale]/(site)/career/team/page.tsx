import Image from 'next/image'
import styles from '@/components/modules/career.module.scss'
import { getTranslations } from 'next-intl/server'
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"
import dynamic from 'next/dynamic'

export const generateMetadata = createGenerateMetadata("/career/team")

const CareerApplyForm = dynamic(
   () => import("@/app/[locale]/(site)/career/[id]/CareerApplyForm"),
   {
      loading: () => null,
   }
)

const FAQ = dynamic(
   () => import("@/components/faq/FAQ"),
   {
      loading: () => null,
   }
)

const CareerTeam = async () => {
   const t = await getTranslations('CareerTeam')

   const faq = [
      { id: 1, question: t("faq.q1"), answer: t("faq.a1") },
      { id: 2, question: t("faq.q2"), answer: t("faq.a2") },
      { id: 3, question: t("faq.q3"), answer: t("faq.a3") },
      { id: 4, question: t("faq.q4"), answer: t("faq.a4") },
      { id: 5, question: t("faq.q5"), answer: t("faq.a5") },
      { id: 6, question: t("faq.q6"), answer: t("faq.a6") },
      { id: 7, question: t("faq.q7"), answer: t("faq.a7") },
      { id: 8, question: t("faq.q8"), answer: t("faq.a8") },
      { id: 9, question: t("faq.q9"), answer: t("faq.a9") },
      { id: 10, question: t("faq.q10"), answer: t("faq.a10") },
      { id: 11, question: t("faq.q11"), answer: t("faq.a11") },
      { id: 12, question: t("faq.q12"), answer: t("faq.a12") }
   ]

   return (
      <main>
         <section
            className="px-10 sm:px-30 lg:px-40 xl:px-50 2xl:px-80 py-30 relative"
         >
            <Image
               alt=""
               aria-hidden="true"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower4} ${styles.swingLeaf}`}
            />

            <div
               className="flex flex-col items-center mb-12.5 gap-0 lg:gap-3"
            >
               <h1
                  className={`text-center ${styles.title}`}
               >
                  {t('title')}
               </h1>

               <Image
                  alt=""
                  aria-hidden="true"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
                  className="mx-auto block h-auto w-70.75 max-w-full"
               />
            </div>

            <div
               className="flex flex-col-reverse items-center lg:items-start lg:flex-row gap-12.5 justify-center"
            >
               <div
                  className={`flex flex-col ${styles.headerTitleArea}`}
               >
                  <h2>
                     {t('hero_text')}
                  </h2>
                  <div
                     className="flex flex-col mt-7.5"
                  >
                     <p
                        className={`${styles.articleTitle}`}
                     >
                        {t('about_team')}
                     </p>
                     <ul className={`list-disc ps-8 ${styles.articleSubTitle}`}>
                        <li>{t("team_item_1")}</li>
                        <li>{t("team_item_2")}</li>
                        <li>{t("team_item_3")}</li>
                        <li>{t("team_item_4")}</li>
                     </ul>
                  </div>
               </div>
               <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
                  <Image
                     alt={t("hero_image_alt")}
                     src="/career/team/Team.webp"
                     width={385}
                     height={385}
                     className="h-auto w-full max-w-60 rounded-[20px] border border-[#82B74C] sm:max-w-70 lg:max-w-[320px] xl:max-w-90"
                     sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, (max-width: 1280px) 320px, 360px"
                     priority
                     fetchPriority="high"
                  />
               </div>
            </div>

            <Image
               alt=""
               aria-hidden="true"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.rightFlower4} ${styles.swingLeaf2}`}
            />
         </section>

         <section
            className="px-10 pt-20 pb-40 relative"
         >
            <div
               className="flex flex-col items-center mb-12.5 gap-0 lg:gap-3"
            >
               <h2
                  className={`text-center ${styles.title}`}
               >
                  {t('application_form')}
               </h2>

               <Image
                  alt=""
                  aria-hidden="true"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
                  className="mx-auto block h-auto w-70.75 max-w-full"
               />
            </div>

            <div
               className="flex flex-col gap-7.5"
            >
               <CareerApplyForm
                  team
               />

               <Image
                  alt=""
                  aria-hidden="true"
                  src="/images/LeftFlower.svg"
                  width={69}
                  height={115}
                  className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower5} ${styles.swingLeaf}`}
               />

               <div
                  className={`w-full lg:w-8/12 md:w-11/12 mx-auto md:px-5 mt-32`}
               >
                  <h2
                     className={`text-center ${styles.faqTitle}`}
                  >
                     {t('faq_title')}
                  </h2>
                  <FAQ
                     faq={faq}
                  />
               </div>

               <Image
                  alt=""
                  aria-hidden="true"
                  src="/images/RightFlower.svg"
                  width={69}
                  height={115}
                  className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.rightFlower5} ${styles.swingLeaf2}`}
               />
            </div>
         </section>
      </main>
   )
}

export default CareerTeam
