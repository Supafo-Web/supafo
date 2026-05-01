"use client"

import { useMemo, useState, type ReactNode } from "react"
import Image from "next/image"
import styles from "@/components/modules/guide.module.scss"
import { useLocale, useTranslations } from "next-intl"

type AudienceId = "user" | "partner"
type QuizAnswer = "waste" | "supafo"

type GuideStep = {
   number: string
   title: string
   description: string
}

const GuideClient = () => {
   const t = useTranslations("Guide")
   const locale = useLocale()

   const [activeSide, setActiveSide] = useState<AudienceId>("user")
   const [savedPackages, setSavedPackages] = useState(8)
   const [quizAnswer, setQuizAnswer] = useState<null | QuizAnswer>(null)

   const green = (chunks: ReactNode) => (
      <span className={styles.brand}>{chunks}</span>
   )

   const impact = useMemo(() => {
      return {
         packages: savedPackages,
         support: Math.max(1, Math.round(savedPackages / 2)),
         saving: savedPackages * 55,
      }
   }, [savedPackages])

   const titleWrapperClass =
      "mb-10 flex flex-col items-center gap-0 md:mb-12 lg:gap-3"

   const sectionClass =
      "relative w-full max-w-full px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-20 lg:py-24 xl:px-28 2xl:px-40 3xl:px-60"

   const containerClass =
      "mx-auto w-full max-w-[1440px] min-w-0 3xl:max-w-[1600px]"

   const flowerClass =
      "w-9 sm:w-12 lg:w-17.5 h-auto"

   const AUDIENCE_DATA = [
      {
         id: "user",
         title: t("audience.buttons.user.title"),
         text: t("audience.buttons.user.text"),
         icon: "/guide/UserFill.svg",
         activeIcon: "/guide/User.svg",
      },
      {
         id: "partner",
         title: t("audience.buttons.partner.title"),
         text: t("audience.buttons.partner.text"),
         icon: "/guide/PartnerFill.svg",
         activeIcon: "/guide/Partner.svg",
      },
   ] as const

   const GAME_DATA = [
      {
         id: "waste",
         titleKey: "miniGame.answers.waste.title",
         textKey: "miniGame.answers.waste.text",
         altKey: "miniGame.answers.waste.alt",
         icon: "/guide/game/TrashFill.svg",
         activeIcon: "/guide/game/Trash.svg",
      },
      {
         id: "supafo",
         titleKey: "miniGame.answers.supafo.title",
         textKey: "miniGame.answers.supafo.text",
         altKey: "miniGame.answers.supafo.alt",
         icon: "/guide/game/PackageFill.svg",
         activeIcon: "/guide/game/Package.svg",
      },
   ] as const

   const mockups = {
      cart: `/guide/${locale}/Cart.png`,
      payment: `/guide/${locale}/Payment.png`,
   }

   const cartData = [
      {
         id: 1,
         icon: "/guide/icons/Cart.svg",
         text: t("cartPayment.cards.cart"),
      },
      {
         id: 2,
         icon: "/guide/icons/Credit.svg",
         text: t("cartPayment.cards.creditCard"),
      },
      {
         id: 3,
         icon: "/guide/icons/Phone.svg",
         text: t("cartPayment.cards.fastPayment"),
      },
   ]

   const userSteps = t.raw("audience.userSteps.steps") as GuideStep[]
   const partnerSteps = t.raw("audience.partnerSteps.steps") as GuideStep[]

   return (
      <main className="min-h-screen w-full max-w-full overflow-hidden">
         <section className={sectionClass}>
            <Image
               alt="flower"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.rightFlower} ${styles.swingLeaf2}`}
            />

            <div
               className={`${containerClass} flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-14 xl:gap-20`}
            >
               <div
                  className={`${styles.heroTitleArea} w-full text-center lg:w-1/2 lg:text-left`}
               >
                  <h1>
                     {t("hero.title")}
                  </h1>

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
                  <div className="w-full max-w-90 overflow-hidden rounded-[36px] border border-[#82B74C] sm:max-w-105 sm:rounded-[48px] lg:max-w-115 xl:max-w-130">
                     <Image
                        alt="package"
                        src="/guide/Title.svg"
                        width={422}
                        height={462}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 520px"
                        priority
                     />
                  </div>
               </div>
            </div>

            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.leftFlower} ${styles.swingLeaf}`}
            />
         </section>

         <section
            id="partner-register"
            className={`scroll-mt-24 ${sectionClass}`}
         >
            <div className={titleWrapperClass}>
               <h1 className={`text-center ${styles.title}`}>
                  {t("audience.title")}
               </h1>

               <Image
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="h-auto w-[clamp(160px,35vw,283px)]"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
               />
            </div>

            <div
               className={`${containerClass} flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-16`}
            >
               <div
                  className={`flex w-full flex-col gap-6 lg:w-1/2 ${styles.usersAndPartners}`}
               >
                  <h2>
                     {t.rich("audience.heading", { green })}
                  </h2>

                  <h6>
                     {t("audience.description")}
                  </h6>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
                     {AUDIENCE_DATA.map((item) => (
                        <AudienceButton
                           key={item.id}
                           active={activeSide === item.id}
                           title={item.title}
                           text={item.text}
                           icon={item.icon}
                           activeIcon={item.activeIcon}
                           onClick={() => setActiveSide(item.id)}
                        />
                     ))}
                  </div>
               </div>

               <div className="w-full rounded-[10px] bg-white p-5 shadow-[0_0_20px_rgba(0,0,0,0.08)] sm:p-7 lg:w-1/2">
                  {activeSide === "user" ? (
                     <GuideSteps
                        title={t("audience.userSteps.title")}
                        steps={userSteps}
                     />
                  ) : (
                     <GuideSteps
                        title={t("audience.partnerSteps.title")}
                        steps={partnerSteps}
                     />
                  )}
               </div>
            </div>
         </section>

         <section className={sectionClass}>
            <Image
               alt="flower"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.rightFlower2} ${styles.swingLeaf2}`}
            />

            <div className={titleWrapperClass}>
               <h1 className={`text-center ${styles.title}`}>
                  {t("cartPayment.title")}
               </h1>

               <Image
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="h-auto w-[clamp(160px,35vw,283px)]"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
               />
            </div>

            <div
               className={`${containerClass} flex flex-col items-center gap-8 md:gap-12 lg:gap-16 ${styles.cartAndPayment}`}
            >
               <div className="grid w-full max-w-225 grid-cols-1 place-items-center gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-12">
                  <div className="w-full max-w-70 sm:max-w-82.5 lg:max-w-90">
                     <Image
                        alt="cart"
                        src={mockups.cart}
                        width={350}
                        height={312}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 360px"
                     />
                  </div>

                  <div className="w-full max-w-70 sm:max-w-82.5 lg:max-w-90">
                     <Image
                        alt="payment"
                        src={mockups.payment}
                        width={350}
                        height={412}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 360px"
                     />
                  </div>
               </div>

               <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                  <h1>
                     {t("cartPayment.heading")}
                  </h1>

                  <h6 className="mt-4">
                     {t.rich("cartPayment.description", { green })}
                  </h6>
               </div>

               <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cartData.map((item, index) => (
                     <div
                        key={item.id || index}
                        className="flex w-full flex-col items-center justify-center gap-2 rounded-[10px] px-4 py-5 text-center shadow-[0_0_20px_rgba(0,0,0,0.08)]"
                     >
                        <div className="relative h-8 w-8">
                           <Image
                              src={item.icon}
                              alt="icons"
                              fill
                              className="object-contain"
                           />
                        </div>

                        <p>
                           {item.text}
                        </p>
                     </div>
                  ))}
               </div>
            </div>

            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.leftFlower2} ${styles.swingLeaf}`}
            />
         </section>

         <section className={sectionClass}>
            <div className={titleWrapperClass}>
               <h1 className={`text-center ${styles.title}`}>
                  {t("miniGame.title")}
               </h1>

               <Image
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="h-auto w-[clamp(160px,35vw,283px)]"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
               />
            </div>

            <div
               className={`${containerClass} flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-10 xl:gap-14 ${styles.miniGame}`}
            >
               <div
                  className={`flex w-full flex-col gap-6 lg:w-1/2 ${styles.usersAndPartners}`}
               >
                  <h2>
                     {t("miniGame.heading")}
                  </h2>

                  <h6>
                     {t("miniGame.description")}
                  </h6>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
                     {GAME_DATA.map((item) => (
                        <MiniGameButton
                           key={item.id}
                           active={quizAnswer === item.id}
                           title={t.rich(item.titleKey, { green })}
                           alt={t(item.altKey)}
                           text={t(item.textKey)}
                           icon={item.icon}
                           activeIcon={item.activeIcon}
                           onClick={() => setQuizAnswer(item.id)}
                        />
                     ))}
                  </div>

                  {quizAnswer && (
                     <div className="rounded-[10px] border border-[#82B74C] bg-white p-5">
                        <p className="font-bold text-[#182F00]">
                           {quizAnswer === "supafo"
                              ? t("miniGame.feedback.correctTitle")
                              : t("miniGame.feedback.wrongTitle")}
                        </p>

                        <p className="mt-2 text-sm leading-7 text-[#737373] sm:text-base">
                           {quizAnswer === "supafo"
                              ? t.rich("miniGame.feedback.correctText", {
                                 green,
                              })
                              : t.rich("miniGame.feedback.wrongText", {
                                 green,
                              })}
                        </p>
                     </div>
                  )}
               </div>

               <div className="w-full rounded-[10px] border border-[#EBEBEB] bg-white p-5 shadow-[0_14px_32px_rgba(0,0,0,0.06)] sm:p-6 lg:w-1/2 lg:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#578B23] sm:text-sm">
                     {t("impactCalculator.eyebrow")}
                  </p>

                  <h2 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-[#182F00] sm:text-3xl">
                     {t("impactCalculator.title")}
                  </h2>

                  <p className="mt-5 text-base leading-8 text-[#737373]">
                     {t("impactCalculator.description")}
                  </p>

                  <div className="mt-7 rounded-[10px] bg-[#E7EFDF] p-5">
                     <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-medium text-[#737373]">
                           {t("impactCalculator.packageCount")}
                        </span>

                        <span className="rounded-[10px] bg-[#82B74C] px-4 py-2 text-lg font-bold text-white">
                           {savedPackages}
                        </span>
                     </div>

                     <input
                        type="range"
                        min="1"
                        max="30"
                        value={savedPackages}
                        onChange={(e) =>
                           setSavedPackages(Number(e.target.value))
                        }
                        className="mt-5 w-full accent-[#82B74C]"
                     />
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:lg:col-span-1">
                     <ImpactCard
                        value={impact.packages}
                        label={t("impactCalculator.cards.packages")}
                     />

                     <ImpactCard
                        value={impact.support}
                        label={t("impactCalculator.cards.support")}
                     />

                     <ImpactCard
                        value={`AZN ${impact.saving}`}
                        label={t("impactCalculator.cards.saving")}
                     />
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}

function StatCard({ value, label }: { value: string; label: string }) {
   return (
      <div className={`${styles.heroStatCard} h-full w-full`}>
         <p>
            {value}
         </p>

         <small>
            {label}
         </small>
      </div>
   )
}

function AudienceButton({
   active,
   title,
   text,
   icon,
   activeIcon,
   onClick,
}: {
   active: boolean
   title: string
   text: string
   icon: string
   activeIcon: string
   onClick: () => void
}) {
   return (
      <button
         onClick={onClick}
         className={[
            "flex h-full w-full cursor-pointer flex-col items-start rounded-[10px] p-5 text-left shadow-[0_0_20px_rgba(0,0,0,0.08)] transition",
            active
               ? "bg-[#82B74C] text-white"
               : "bg-white text-[#82B74C] hover:-translate-y-1",
         ].join(" ")}
      >
         <div className="relative h-8 w-8">
            <Image
               src={active ? activeIcon : icon}
               alt={title}
               fill
               className="object-contain"
            />
         </div>

         <p className="mt-3 text-lg font-bold">
            {title}
         </p>

         <p
            className={[
               "mt-2 text-sm leading-6",
               active ? "text-white/85" : "text-[#82B74C]",
            ].join(" ")}
         >
            {text}
         </p>
      </button>
   )
}

function MiniGameButton({
   active,
   title,
   alt,
   text,
   icon,
   activeIcon,
   onClick,
}: {
   active: boolean
   title: ReactNode
   alt: string
   text: string
   icon: string
   activeIcon: string
   onClick: () => void
}) {
   return (
      <button
         onClick={onClick}
         className={[
            "flex h-full w-full cursor-pointer flex-col items-start rounded-[10px] p-5 text-left shadow-[0_0_20px_rgba(0,0,0,0.08)] transition",
            active
               ? "bg-[#82B74C] text-white"
               : "bg-white text-[#82B74C] hover:-translate-y-1",
         ].join(" ")}
      >
         <div className="relative h-8 w-8">
            <Image
               src={active ? activeIcon : icon}
               alt={alt}
               fill
               className="object-contain"
            />
         </div>

         <p className="mt-3 text-lg font-bold">
            {title}
         </p>

         <p
            className={[
               "mt-2 text-sm leading-6",
               active ? "text-white/85" : "text-[#82B74C]",
            ].join(" ")}
         >
            {text}
         </p>
      </button>
   )
}

function GuideSteps({
   title,
   steps,
}: {
   title: string
   steps: GuideStep[]
}) {
   return (
      <div className={`${styles.guideSteps}`}>
         <h3>
            {title}
         </h3>

         <div className="mt-6 flex flex-col gap-3">
            {steps.map((step) => (
               <div
                  key={step.number}
                  className="flex flex-col gap-3 rounded-[10px] bg-[#E7EFDF] p-4 sm:flex-row sm:items-center sm:gap-4"
               >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-[#82B74C] text-xs font-bold text-white">
                     {step.number}
                  </div>

                  <div>
                     <p>
                        {step.title}
                     </p>

                     <small>
                        {step.description}
                     </small>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

function ImpactCard({
   value,
   label,
}: {
   value: string | number
   label: string
}) {
   return (
      <div className="h-full w-full rounded-[10px] bg-[#E7EFDF] p-4">
         <p className="text-center text-2xl font-bold text-[#182F00]">
            {value}
         </p>

         <p className="mt-2 text-center text-xs font-semibold leading-5 text-[#737373]">
            {label}
         </p>
      </div>
   )
}

export default GuideClient
