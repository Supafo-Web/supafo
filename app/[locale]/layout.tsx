import { NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { locales } from "@/i18n"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

export const generateStaticParams = async () => {
   return locales.map((locale) => ({ locale }))
}

const LocaleLayout = async ({
   children,
   params
}: Readonly<{
   children: React.ReactNode
   params: Promise<{ locale: string }>
}>) => {
   const { locale } = await params

   if (!locales.includes(locale as "tr" | "en" | "az")) {
      notFound()
   }

   setRequestLocale(locale)

   return (
      <NextIntlClientProvider>
         <div
            className="min-h-screen flex flex-col container-fluid"
         >
            <Navbar
               locale={locale}
            />
            <main
               className="flex-1"
            >
               {children}
            </main>
            <Footer
               locale={locale}
            />
         </div>
      </NextIntlClientProvider>
   )
}

export default LocaleLayout
