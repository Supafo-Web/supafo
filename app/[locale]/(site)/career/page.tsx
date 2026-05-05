import { getLocale, getTranslations } from "next-intl/server"
import styles from "@/components/modules/career.module.scss"
import OpenPositions from "@/app/[locale]/(site)/career/OpenPositions"
import Button from "@/components/button/Button"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/career")

const Career = async () => {
   const t = await getTranslations("Career")
   const locale = await getLocale()

   const whySupafo = [
      { id: 1, icon: "/career/Clock.svg", title: t("why_1"), alt: "clock" },
      { id: 2, icon: "/career/Gift.svg", title: t("why_2"), alt: "gift" },
      { id: 3, icon: "/career/Book.svg", title: t("why_3"), alt: "book" },
      { id: 4, icon: "/career/Global.svg", title: t("why_4"), alt: "global" },
   ]

   const staj = [
      {
         id: 1,
         icon: "/career/Rocket.svg",
         title: t("intern_1_title"),
         subTitle: t("intern_1_subtitle"),
      },
      {
         id: 2,
         icon: "/career/Book2.svg",
         title: t("intern_2_title"),
         subTitle: t("intern_2_subtitle"),
      },
      {
         id: 3,
         icon: "/career/Star.svg",
         title: t("intern_3_title"),
         subTitle: t("intern_3_subtitle"),
      },
   ]

   const sectionClass =
      "relative w-full max-w-full px-5 py-15 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-20 lg:py-24 xl:px-28 2xl:px-40 3xl:px-60"

   const containerClass =
      "mx-auto w-full max-w-[1440px] min-w-0 3xl:max-w-[1600px]"

   const titleAreaClass =
      "mb-10 flex flex-col items-center gap-0 md:mb-12.5 lg:gap-3"

   const flowerClass =
      "h-auto w-9 sm:w-12 lg:w-17.5"

   const titleUnderClass =
      "mx-auto block h-auto w-70.75 max-w-full"

   return (
      <main className="min-h-screen w-full max-w-full overflow-hidden">
         <section className={sectionClass}>
            <img
               alt=""
               aria-hidden="true"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.leftFlower} ${styles.swingLeaf}`}
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
                     className={titleUnderClass}
                  />
               </div>

               <div className="flex min-w-0 flex-col gap-6 text-center lg:gap-12.5 lg:text-left">
                  <h2 className={styles.subtitle}>
                     {t("subtitle")}
                  </h2>

                  <div className="flex flex-col gap-5 lg:gap-10">
                     <p className={styles.paragraph}>
                        {t("desc_1")}
                     </p>

                     <p className={styles.paragraph}>
                        {t("desc_2")}
                     </p>
                  </div>
               </div>
            </div>

            <img
               alt=""
               aria-hidden="true"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.rightFlower} ${styles.swingLeaf2}`}
            />
         </section>

         <section className={sectionClass}>
            <div className={containerClass}>
               <div className={titleAreaClass}>
                  <h2 className={`text-center ${styles.title}`}>
                     {t.rich("why_title", {
                        brand: (chunks) => (
                           <span className={styles.brand}>{chunks}</span>
                        ),
                     })}
                  </h2>

                  <img
                     alt=""
                     aria-hidden="true"
                     src="/icons/about-us/Title-Under.svg"
                     width={283}
                     height={40}
                     sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
                     className={titleUnderClass}
                  />
               </div>

               <div className="flex min-w-0 justify-center">
                  <div className="grid w-full max-w-[1180px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                     {whySupafo.map((item, index) => (
                        <div
                           key={item.id || index}
                           className={`flex min-w-0 flex-col items-center gap-7.5 rounded-[30px] px-3.5 py-11.25 ${styles.whySupafoArea}`}
                        >
                           <img
                              alt={item.alt}
                              src={item.icon}
                              width={60}
                              height={60}
                              className="h-auto w-12 sm:w-14 md:w-15"
                           />

                           <p className={styles.whySupafoTitle}>
                              {item.title}
                           </p>
                        </div>
                     ))}
                  </div>
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

         <section className={sectionClass}>
            <div className={containerClass}>
               <div className="mx-auto w-full max-w-[1120px]">
                  <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                     {staj.map((item, index) => {
                        const isLastOddItem =
                           staj.length % 2 !== 0 && index === staj.length - 1

                        return (
                           <div
                              key={item.id || index}
                              className={`
                                 flex min-w-0 flex-col items-center
                                 ${styles.lastSection}
                                 ${isLastOddItem ? "md:col-span-2" : ""}
                              `}
                           >
                              <img
                                 alt={item.title}
                                 src={item.icon}
                                 width={110}
                                 height={110}
                                 className="h-auto w-18 sm:w-20 md:w-24 lg:w-28"
                                 sizes="(max-width: 640px) 72px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                              />

                              <h3>{item.title}</h3>

                              <p>{item.subTitle}</p>
                           </div>
                        )
                     })}
                  </div>
               </div>

               <div className="mt-25 mb-15 flex flex-col items-center justify-around gap-12 md:flex-row md:gap-0 lg:mb-0">
                  <Button
                     href={`/${locale}/career/team`}
                     text={t("button_team")}
                     textClass={styles.buttonText}
                     className={`${styles.button} w-full max-w-60`}
                  />
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
      </main>
   )
}

export default Career
