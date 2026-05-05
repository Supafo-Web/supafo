import Image from "next/image"
import { getLocale, getTranslations } from "next-intl/server"
import styles from "@/components/modules/guide.module.scss"
import GuideInteractive from "./GuideInteractive"
import { ReactNode } from "react"

type GuideStep = {
   number: string
   title: string
   description: string
}

export default async function GuidePage() {
   const t = await getTranslations("Guide")
   const locale = await getLocale()

   const userSteps = t.raw("audience.userSteps.steps") as GuideStep[]
   const partnerSteps = t.raw("audience.partnerSteps.steps") as GuideStep[]

   const sectionClass =
      "relative w-full max-w-full px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-20 lg:py-24 xl:px-28 2xl:px-40 3xl:px-60"

   const containerClass =
      "mx-auto w-full max-w-[1440px] min-w-0 3xl:max-w-[1600px]"

   const flowerClass =
      "w-9 sm:w-12 lg:w-17.5 h-auto"

   const green = (chunks: ReactNode) => (
      <span className={styles.brand}>{chunks}</span>
   )

   return (
      <main className="min-h-screen w-full max-w-full overflow-hidden">
         <section className={sectionClass}>
            <img
               alt=""
               aria-hidden="true"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.rightFlower} ${styles.swingLeaf2}`}
            />

            <div className={`${containerClass} flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-14 xl:gap-20`}>
               <div className={`${styles.heroTitleArea} w-full text-center lg:w-1/2 lg:text-left`}>
                  <h1>{t("hero.title")}</h1>

                  <p className="mx-auto mt-4 max-w-2xl lg:mx-0">
                     {t.rich("hero.description", { green })}
                  </p>

                  <div className="mx-auto mt-8 grid w-full max-w-xl grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-3 lg:mx-0">
                     <StatCard
                        value={t("hero.stats.discover.value")}
                        label={t("hero.stats.discover.label")}
                     />
                     <StatCard
                        value={t("hero.stats.payment.value")}
                        label={t("hero.stats.payment.label")}
                     />
                     <StatCard
                        value={t("hero.stats.discount.value")}
                        label={t("hero.stats.discount.label")}
                     />
                  </div>
               </div>

               <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
                  <div className="w-full max-w-90 overflow-hidden sm:max-w-105 sm:rounded-[48px] lg:max-w-115 xl:max-w-130">
                     <Image
                        alt={t("hero.imageAlt")}
                        src="/guide/Title.webp"
                        width={422}
                        height={462}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 520px"
                        priority
                        fetchPriority="high"
                     />
                  </div>
               </div>
            </div>

            <img
               alt=""
               aria-hidden="true"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.leftFlower} ${styles.swingLeaf}`}
            />
         </section>

         <GuideInteractive
            locale={locale}
            userSteps={userSteps}
            partnerSteps={partnerSteps}
         />
      </main>
   )
}

function StatCard({ value, label }: { value: string; label: string }) {
   return (
      <div className={`${styles.heroStatCard} h-full w-full`}>
         <p>{value}</p>
         <small>{label}</small>
      </div>
   )
}
