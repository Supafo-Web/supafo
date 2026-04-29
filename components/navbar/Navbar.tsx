import Button from "@/components/button/Button"
import { getLocale, getTranslations } from "next-intl/server"
import Image from "next/image"
import styles from "@/components/modules/navbar.module.scss"
import Dropdown from "@/components/dropdown/Dropdown"
import NavbarDownloadButton from "./NavbarDownloadButton"
import Hamburger from "@/components/navbar/Hamburger"
import { getNavbarMenu } from "@/components/utils/Navbar"
import LangSwitch from "@/components/lang/LangSwitch"
import NavbarSubmenuLinks from "@/components/navbar/NavbarSubmenuLinks"
import PartnerLoginAnimation from "@/components/navbar/PartnerLoginAnimation"

const Navbar = async () => {
   const t = await getTranslations("Navbar")
   const modal = await getTranslations("Modal")
   const locale = await getLocale()

   const navbarMenu = getNavbarMenu({ locale, t })

   return (
      <div
         className={`container-fluid ps-[2%] pe-[1%] py-2 fixed top-0 left-0 w-full z-50 ${styles.navbarWrapper}`}
      >
         <div className="hidden lg:flex items-center justify-between">
            <Button
               href={`/${locale}/`}
               className="js-close-lang-dropdown w-35 flex justify-start"
            >
               <Image
                  alt="logo"
                  src="/logo/logo.svg"
                  width={70}
                  height={60}
                  priority
                  className="w-17.5"
                  style={{ height: "auto" }}
               />
            </Button>

            <div className={`flex items-center justify-center ${styles.navbarArea}`}>
               {navbarMenu.map((item, index) => {
                  if (item.submenu?.length) {
                     return (
                        <Dropdown
                           href={item.href}
                           key={item.id || index}
                           navbarText={item.text}
                        >
                           <NavbarSubmenuLinks items={item.submenu} />
                        </Dropdown>
                     )
                  }

                  return (
                     <Button
                        key={item.id || index}
                        href={item.href!}
                        text={item.text}
                        navbar
                        className={`${styles.textButton} js-close-lang-dropdown`}
                     />
                  )
               })}
            </div>

            <div className="flex gap-2">
               <div className="relative w-12.5 h-12.5 shrink-0">
                  <Button
                     href={`/${locale}/partner`}
                     className="
                        group
                        absolute
                        right-0
                        top-0
                        flex
                        h-12.5
                        w-12.5
                        hover:w-35
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-full
                        bg-white
                        hover:bg-[#578B23]
                        transition-all
                        duration-500
                        ease-in-out
                     "
                  >
                     <div className="relative h-7.5 w-22.5 flex items-center justify-center">
                        <PartnerLoginAnimation />

                        <span
                           className="
                              absolute
                              text-white
                              text-sm
                              font-semibold
                              opacity-0
                              scale-95
                              transition-all
                              duration-400
                              ease-in-out
                              group-hover:opacity-100
                              group-hover:scale-100
                           "
                        >
                           {t("partner")}
                        </span>
                     </div>
                  </Button>
               </div>

               <NavbarDownloadButton
                  text={t("download_app")}
                  title={modal("download_app_title")}
                  modal
                  navbar
               />

               <Dropdown language>
                  <LangSwitch />
               </Dropdown>
            </div>
         </div>

         <div className="flex lg:hidden items-center justify-between">
            <Button href={`/${locale}`}>
               <Image
                  alt="logo"
                  src="/logo/logo.svg"
                  width={65}
                  height={56}
                  priority
                  className="w-14 sm:w-16.25"
                  sizes="(max-width: 640px) 56px, 65px"
                  style={{ height: "auto" }}
               />
            </Button>

            <div className="flex gap-2 items-center overflow-visible relative">
               <div className="relative w-12.5 h-12.5 shrink-0 overflow-visible">
                  <Button
                     href={`/${locale}/partner`}
                     className="
                        group
                        absolute
                        left-0
                        top-0
                        z-20
                        flex
                        h-12.5
                        w-12.5
                        hover:w-41.5
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-full
                        bg-white
                        hover:bg-[#578B23]
                        transition-all
                        duration-500
                        ease-in-out
                     "
                  >
                     <div className="relative h-7.5 w-22.5 flex items-center justify-center">
                        <PartnerLoginAnimation />

                        <span
                           className="
                              absolute
                              text-white
                              text-sm
                              font-semibold
                              opacity-0
                              scale-95
                              transition-all
                              duration-400
                              ease-in-out
                              group-hover:opacity-100
                              group-hover:scale-100
                           "
                        >
                           {t("partner")}
                        </span>
                     </div>
                  </Button>
               </div>

               <NavbarDownloadButton
                  text={t("download_app")}
                  title={modal("download_app_title")}
                  modal
                  navbar
               />

               <Dropdown language>
                  <LangSwitch />
               </Dropdown>
            </div>

            <div className={`flex items-center justify-around ${styles.navbarArea}`}>
               <Hamburger />
            </div>
         </div>
      </div>
   )
}

export default Navbar
