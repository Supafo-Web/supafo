import { getLocale, getTranslations } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"
import styles from "@/components/modules/partner.module.scss"
import Dropdown from "@/components/dropdown/Dropdown"
import Button from "@/components/button/Button"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/partner")

const Partner = async () => {
   const t = await getTranslations("Partner")
   const locale = await getLocale()
   const modal = await getTranslations("Navbar")

   return (
      <main>
         <section className="flex min-h-dvh overflow-hidden">
            <div className="relative hidden h-dvh w-[40%]! shrink-0 overflow-hidden lg:block">
               <video
                  className="hidden lg:flex h-full w-full shrink-0 object-fill"
                  autoPlay
                  muted
                  loop
                  playsInline
               >
                  <source
                     src="/videos/partner/PartnerDoor.mp4"
                     type="video/mp4"
                  />
               </video>
            </div>

            <div
               className={`relative flex min-h-dvh flex-1 items-center justify-center ${styles.container}`}
            >
               <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-6 py-2">
                  <Link
                     href={`/${locale}/`}
                     aria-label={modal("home")}
                     className="inline-flex items-center"
                  >
                     <Image
                        src="/logo/logo.svg"
                        alt="Supafo"
                        width={80}
                        height={67}
                        className={`${styles.logoImage} h-auto w-20`}
                     />
                  </Link>

                  <Dropdown />
               </div>

               <div
                  className={`flex w-[calc(100%-2rem)] max-w-xl flex-col items-center ${styles.partnerPortalContainer}`}
               >
                  <Image
                     alt=""
                     aria-hidden="true"
                     src="/partner/PartnerClock.svg"
                     width={100}
                     height={100}
                     className="h-auto w-[100px]"
                     sizes="100px"
                  />

                  <div className="mt-5 flex flex-col items-center gap-5 text-center">
                     <h1>{t("title")}</h1>

                     <h2 className={styles.subtitle}>
                        {t("subtitle")}
                     </h2>

                     <p>{t("description")}</p>

                     <small className="mt-10">
                        {t("notice")}
                     </small>
                  </div>

                  <Button
                     href={`/${locale}`}
                     text={modal("home")}
                     className="mb-4 mt-8 px-16"
                  />
               </div>
            </div>
         </section>
      </main>
   )
}

export default Partner
