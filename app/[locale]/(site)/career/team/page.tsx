import Image from "next/image"
import styles from "@/components/modules/career.module.scss"
import { getTranslations } from "next-intl/server"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"
import dynamic from "next/dynamic"

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
   const t = await getTranslations("CareerTeam")

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
      { id: 12, question: t("faq.q12"), answer: t("faq.a12") },
   ]

   const sectionClass =
      "relative w-full max-w-full px-5 py-15 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-20 lg:py-30 xl:px-28 2xl:px-40 3xl:px-60"

   const containerClass =
      "mx-auto w-full max-w-[1440px] min-w-0 3xl:max-w-[1600px]"

   const titleAreaClass =
      "mb-10 flex flex-col items-center gap-0 md:mb-12.5 lg:gap-3"

   const flowerClass =
      "h-auto w-9 sm:w-12 lg:w-17.5"

   return (
      <main className="min-h-screen w-full max-w-full overflow-hidden">
         <section className={sectionClass}>
            <img
               alt=""
               aria-hidden="true"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.leftFlower4} ${styles.swingLeaf}`}
            />

            <div className={containerClass}>
               <div className={titleAreaClass}>
                  <h1 className={`text-center ${styles.title}`}>
                     {t("title")}
                  </h1>

                  <img
                     alt=""
                     aria-hidden="true"
                     src="/icons/about-us/Title-Under.svg"
                     width={283}
                     height={40}
                     sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
                     className="mx-auto block h-auto w-70.75 max-w-full"
                  />
               </div>

               <div className="flex min-w-0 flex-col-reverse items-center gap-10 md:gap-16 lg:flex-row lg:items-start lg:gap-14">
                  <div className={`flex w-full min-w-0 flex-col ${styles.headerTitleArea}`}>
                     <h2>{t("hero_text")}</h2>

                     <div className="mt-7.5 flex flex-col">
                        <p className={styles.articleTitle}>
                           {t("about_team")}
                        </p>

                        <ul className={`list-disc ps-8 ${styles.articleSubTitle}`}>
                           <li>{t("team_item_1")}</li>
                           <li>{t("team_item_2")}</li>
                           <li>{t("team_item_3")}</li>
                           <li>{t("team_item_4")}</li>
                        </ul>
                     </div>
                  </div>

                  <div className="flex w-full shrink-0 justify-center lg:w-auto">
                     <Image
                        alt={t("hero_image_alt")}
                        src="/career/team/Team.webp"
                        width={385}
                        height={385}
                        className="h-auto w-full max-w-[260px] object-contain sm:max-w-[300px] md:max-w-[320px] lg:max-w-[360px]"
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 320px, 400px"
                        priority
                        fetchPriority="high"
                     />
                  </div>
               </div>
            </div>

            <img
               alt=""
               aria-hidden="true"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.rightFlower4} ${styles.swingLeaf2}`}
            />
         </section>

         <section className={sectionClass}>
            <img
               alt=""
               aria-hidden="true"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.leftFlower5} ${styles.swingLeaf}`}
            />

            <div className={containerClass}>
               <div className={titleAreaClass}>
                  <h2 className={`text-center ${styles.title}`}>
                     {t("application_form")}
                  </h2>

                  <img
                     alt=""
                     aria-hidden="true"
                     src="/icons/about-us/Title-Under.svg"
                     width={283}
                     height={40}
                     sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
                     className="mx-auto block h-auto w-70.75 max-w-full"
                  />
               </div>

               <div className="relative flex min-w-0 flex-col gap-7.5">
                  <CareerApplyForm
                     team
                  />

                  <div className={`mt-32 w-full 3xl:max-w-400 lg:w-8/12 md:w-11/12 mx-auto md:px-5`}>
                     <h2 className={`text-center ${styles.faqTitle}`}>
                        {t("faq_title")}
                     </h2>

                     <FAQ faq={faq} />
                  </div>
               </div>
            </div>

            <img
               alt=""
               aria-hidden="true"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.rightFlower5} ${styles.swingLeaf2}`}
            />
         </section>
      </main>
   )
}

export default CareerTeam
