import { NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { locales } from "@/i18n"
import Navbar from "@/components/navbar/Navbar"

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
         <Navbar
            locale={locale}
         />
         {children}
      </NextIntlClientProvider>
   )
}

export default LocaleLayout
