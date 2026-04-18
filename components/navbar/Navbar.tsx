import Button from "@/components/button/Button"
import { getLocale, getTranslations } from "next-intl/server"
import Image from "next/image"
import styles from "@/components/modules/navbar.module.scss"
import Dropdown from "@/components/dropdown/Dropdown"
import NavbarDownloadButton from "./NavbarDownloadButton"
import Hamburger from "@/components/navbar/Hamburger"
import { getNavbarMenu } from "@/components/utils/Navbar"

const Navbar = async () => {
   const t = await getTranslations("Navbar")
   const modal = await getTranslations("Modal")
   const locale = await getLocale()

   const navbarMenu = getNavbarMenu({ locale, t })

   return (
      <div
         className={`container-fluid px-[2%] py-2 fixed top-0 left-0 w-full z-50 ${styles.navbarWrapper}`}
      >
         <div
            className="hidden md:flex items-center justify-between"
         >
            <Button
               href={`/${locale}`}
               className={`js-close-lang-dropdown`}
            >
               <Image
                  alt="logo"
                  src="/logo/logo.svg"
                  width={94}
                  height={81}
                  style={{ height: 'auto' }}
               />
            </Button>

            <div
               className={`flex items-center justify-center ${styles.navbarArea}`}
            >
               {navbarMenu.map((item, index) => (
                  <Button
                     key={item.id || index}
                     href={item.href}
                     text={item.text}
                     navbar
                     className={`${styles.textButton} js-close-lang-dropdown`}
                  />
               ))}
            </div>

            <div
               className={`flex gap-2`}
            >
               <NavbarDownloadButton
                  text={t("download_app")}
                  title={modal('download_app_title')}
                  modal
                  navbar
               />

               <Dropdown />
            </div>
         </div>


         <div
            className="flex md:hidden items-center justify-between gap-2"
         >
            <Button
               href={`/${locale}`}
            >
               <Image
                  alt="logo"
                  src="/logo/logo.svg"
                  width={65}
                  height={56}
                  style={{ height: 'auto' }}
               />
            </Button>

            <div className="flex gap-4">
               <NavbarDownloadButton
                  text={t("download_app")}
                  title={modal('download_app_title')}
                  modal
                  navbar
               />

               <Dropdown />
            </div>

            <div
               className={`flex items-center justify-around ${styles.navbarArea}`}
            >
               <Hamburger />
            </div>
         </div>
      </div>
   )
}

export default Navbar
