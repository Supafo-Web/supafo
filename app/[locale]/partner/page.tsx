import { getLocale, getTranslations } from "next-intl/server"
import styles from "@/components/modules/partner.module.scss"
import Dropdown from "@/components/dropdown/Dropdown"
import Button from "@/components/button/Button"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"
import LangSwitch from "@/components/lang/LangSwitch"

export const generateMetadata = createGenerateMetadata("/partner")

const Partner = async () => {
   const t = await getTranslations("Partner")
   const locale = await getLocale()
   const modal = await getTranslations("Navbar")

   return (
      <main>
         <section
            className="
               relative flex min-h-dvh items-center justify-center overflow-hidden
               bg-[linear-gradient(135deg,#82B74C_0%,#9DCB70_28%,#EEF7E8_58%,#FFFFFF_100%)]
               px-4 py-28
               sm:px-6
               lg:px-10
            "
         >
            <div
               aria-hidden="true"
               className="
                  pointer-events-none absolute left-1/2 top-1/2 h-136 w-136
                  -translate-x-1/2 -translate-y-1/2 rounded-full
                  bg-white/25 blur-3xl
               "
            />

            <header
               className="
                  absolute left-0 top-0 z-20 flex w-full items-center justify-between
                  px-6 py-4
               "
            >
               <Button
                  href={`/${locale}/`}
                  ariaLabel={modal("home")}
               >
                  <img
                     src="/logo/logo-white.svg"
                     alt="Supafo"
                     width={80}
                     height={67}
                     className={`${styles.logoImage} h-auto w-20 md:w-24`}
                  />
               </Button>

               <Dropdown
                  language
               >
                  <LangSwitch />
               </Dropdown>
            </header>

            <div
               className="
                  relative z-10 mx-auto flex w-full max-w-xl flex-col items-center
                  rounded-4xl border border-white/80
                  bg-white px-6 py-10 text-center
                  shadow-[0_30px_90px_rgba(0,0,0,0.16)]
                  sm:px-10 sm:py-12
               "
            >
               <img
                  alt=""
                  aria-hidden="true"
                  src="/partner/PartnerClock.svg"
                  width={100}
                  height={100}
                  className="h-auto w-20 sm:w-24"
                  sizes="100px"
               />

               <div className={`mt-7 flex flex-col items-center gap-5 text-center ${styles.partnerPortalContainer}`}>
                  <h1 className="text-2xl font-semibold text-[#1F2A1A] sm:text-3xl">
                     {t("title")}
                  </h1>

                  <h2 className={`${styles.subtitle} text-lg text-[#578B23] sm:text-xl`}>
                     {t("subtitle")}
                  </h2>

                  <p className="max-w-md text-sm leading-relaxed text-black/65 sm:text-base">
                     {t("description")}
                  </p>

                  <small className="mt-6 max-w-md text-xs leading-relaxed text-black/45 sm:mt-10">
                     {t("notice")}
                  </small>
               </div>

               <Button
                  href={`/${locale}`}
                  text={modal("home")}
                  ariaLabel={modal("home")}
                  className="mb-2 mt-8 px-12 sm:px-16"
               />
            </div>
         </section>
      </main>
   )
}

export default Partner
