import Button from "@/components/button/Button"
import { getTranslations } from "next-intl/server"
import Image from "next/image"

interface NavbarType {
   locale: string
}

const Navbar = async ({ locale }: NavbarType) => {
   const t = await getTranslations('Navbar')


   return (
      <div className="container-fluid px-[10%] py-6">
         <div className="flex items-center justify-between">
            <Button
               href={`/${locale}`}
            >
               <Image
                  alt="logo"
                  src="/logo/logo.svg"
                  width={92}
                  height={79}
                  priority
                  style={{ width: 92, height: 79 }}
               />
            </Button>
            <div className="">

            </div>
            <div className="">

            </div>
            <Button
               text={t('download_app')}
               href="/"
            />
         </div>
      </div>
   )
}

export default Navbar
