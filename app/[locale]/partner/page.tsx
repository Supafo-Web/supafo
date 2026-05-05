import { getLocale, getTranslations } from "next-intl/server"
import styles from "@/components/modules/partner.module.scss"
import Dropdown from "@/components/dropdown/Dropdown"
import Button from "@/components/button/Button"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"
import PartnerClient from "@/app/[locale]/partner/PartnerClient"
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
               bg-[#E7EFDF]
            "
         >
            <header
               className="
                  absolute left-0 top-0 z-20 flex w-full items-center justify-between
                  px-6 py-2
               "
            >
               <Button
                  href={`/${locale}/`}
                  ariaLabel={modal("home")}
               >
                  <img
                     src="/logo/logo.svg"
                     alt="Supafo"
                     width={80}
                     height={67}
                     className={`${styles.logoImage} h-auto w-20 md:w-20`}
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
                  rounded-4xl bg-white px-6 sm:px-10 py-8 text-center shadow-[0_6px_12px_0_rgba(130,183,76,0.90)]
               "
            >
               <PartnerClient />

               <div className={`mt-7 flex flex-col items-center gap-5 text-center ${styles.partnerPortalContainer}`}>
                  <h1>
                     {t("title")}
                  </h1>

                  <h2>
                     {t("subtitle")}
                  </h2>

                  <p>
                     {t("description")}
                  </p>

                  <small>
                     {t("notice")}
                  </small>
               </div>

               <Button
                  href={`/${locale}`}
                  text={modal("home")}
                  ariaLabel={modal("home")}
                  className="mb-2 mt-8 px-12 sm:px-38 sm:py-1"
               />
            </div>
         </section>
      </main>
   )
}

export default Partner
