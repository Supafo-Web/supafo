import Button from "@/components/button/Button"
import { getTranslations } from "next-intl/server"
import Image from "next/image"
import styles from "./navbar.module.scss"
import Dropdown from "@/components/dropdown/Dropdown"
import Login from "@/public/icons/Login"
import NavbarDownloadButton from "./NavbarDownloadButton"
import Hamburger from "@/components/navbar/Hamburger"

interface NavbarType {
   locale: string
}

const Navbar = async ({ locale }: NavbarType) => {
   const t = await getTranslations("Navbar")
   const modal = await getTranslations("Modal")

   return (
      <div
         className={`container-fluid px-[5%] py-6 fixed top-0 left-0 w-full z-50 ${styles.navbarWrapper}`}
      >
         <div
            className="hidden lg:flex items-center justify-between gap-2"
         >
            <Button
               href={`/${locale}`}
            >
               <Image
                  alt="logo"
                  src="/logo/logo.svg"
                  width={80}
                  height={69}
                  priority
                  style={{ width: 80, height: 69 }}
               />
            </Button>

            <div
               className={`flex flex-2 items-center justify-around ${styles.navbarArea}`}
            >
               <Button
                  href={`/${locale}`}
                  text={t("home")}
                  navbar
               />
               <Button
                  href={`/${locale}/about-us`}
                  text={t("about")}
                  navbar
               />
               <Button
                  href={`/${locale}/how-does-it-work`}
                  text={t("how_work")}
                  navbar
               />
            </div>

            <div
               className={`flex items-center justify-around ${styles.navbarArea}`}
            >
               {/* <Button
                  href={`/${locale}/partner`}
                  navbar
                  className="flex gap-0.75"
               >
                  <span>
                     {t("partner")}
                  </span>
                  <Login />
               </Button> */}

               <Dropdown />
            </div>

            <NavbarDownloadButton
               text={t("download_app")}
               title={modal('download_app_title')}
            />
         </div>


         <div
            className="flex lg:hidden items-center justify-between gap-2"
         >
            <Button
               href={`/${locale}`}
            >
               <Image
                  alt="logo"
                  src="/logo/logo.svg"
                  width={80}
                  height={69}
                  priority
                  style={{ width: 80, height: 69 }}
               />
            </Button>

            <NavbarDownloadButton
               text={t("download_app")}
               title={modal('download_app_title')}
            />

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
