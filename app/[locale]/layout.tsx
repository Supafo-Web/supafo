import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { locales } from "@/i18n"
import {
   isSupportedLocale,
   SITE_NAME,
} from "@/config/seo"

export async function generateMetadata({
   params,
}: {
   params: Promise<{ locale: string }>
}): Promise<Metadata> {
   const { locale } = await params

   if (!isSupportedLocale(locale)) {
      notFound()
   }

   return {
      title: {
         template: `%s | ${SITE_NAME}`,
         default: SITE_NAME,
      },
   }
}

export const generateStaticParams = async () => {
   return locales.map((locale) => ({ locale }))
}

const LocaleLayout = async ({
   children,
   params,
}: Readonly<{
   children: React.ReactNode
   params: Promise<{ locale: string }>
}>) => {
   const { locale } = await params

   if (!isSupportedLocale(locale)) {
      notFound()
   }

   setRequestLocale(locale)
   const messages = await getMessages()

   return (
      <NextIntlClientProvider messages={messages} locale={locale}>
         {children}
      </NextIntlClientProvider>
   )
}

export default LocaleLayout
