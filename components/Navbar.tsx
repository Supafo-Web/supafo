import Button from "@/components/Button"
import { getTranslations } from "next-intl/server"
import Image from "next/image"

interface NavbarType {
   locale: string
}

const Navbar = async ({ locale }: NavbarType) => {
   const t = await getTranslations('Navbar')


   return (
      <div className="container px-[10%] py-6">
         <div className="grid grid-cols-3">
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
            <div className="grid grid-cols-3">

            </div>
            <div className="grid grid-cols-2">

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
