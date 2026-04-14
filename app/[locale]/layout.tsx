import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { locales } from "@/i18n"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import styles from "./page.module.scss"

type Locale = "tr" | "en" | "az"

const SITE_URL = "https://supafo.com"
const SITE_NAME = "Supafo"
const OG_IMAGE = "/og-image.jpg"

const localeMetadata: Record<
   Locale,
   {
      title: string
      description: string
      keywords: string[]
      ogLocale: string
   }
> = {
   tr: {
      title: "Supafo",
      description:
         "Supafo, kullanıcıları restoranlar, kafeler ve özel paket fırsatlarıyla buluşturan; keşif, sipariş ve kampanya deneyimini güçlendiren çok dilli yeni nesil food-tech platformudur.",
      keywords: [
         "Supafo",
         "restoran",
         "kafe",
         "yemek",
         "sipariş",
         "kampanya",
         "paket fırsatları",
         "yemek keşfi",
         "Türkiye",
         "Azerbaycan",
      ],
      ogLocale: "tr_TR",
   },
   en: {
      title: "Supafo",
      description:
         "Supafo is a multilingual next-generation food-tech platform connecting users with restaurants, cafés, and special takeaway deals.",
      keywords: [
         "Supafo",
         "restaurant",
         "cafe",
         "food",
         "delivery",
         "takeaway deals",
         "food discovery",
         "campaigns",
         "Turkey",
         "Azerbaijan",
      ],
      ogLocale: "en_US",
   },
   az: {
      title: "Supafo",
      description:
         "Supafo istifadəçiləri restoranlar, kafelər və xüsusi paket fürsətləri ilə birləşdirən, kəşf, sifariş və kampaniya təcrübəsini gücləndirən çoxdilli yeni nəsil food-tech platformadır.",
      keywords: [
         "Supafo",
         "restoran",
         "kafe",
         "yemək",
         "sifariş",
         "kampaniya",
         "paket fürsətləri",
         "yemək kəşfi",
         "Azərbaycan",
         "Türkiyə",
      ],
      ogLocale: "az_AZ",
   },
}

export async function generateMetadata({
   params,
}: {
   params: Promise<{ locale: string }>
}): Promise<Metadata> {
   const { locale } = await params

   if (!locales.includes(locale as Locale)) {
      notFound()
   }

   const currentLocale = locale as Locale
   const current = localeMetadata[currentLocale]
   const currentUrl = `${SITE_URL}/${currentLocale}`

   return {
      title: {
         default: current.title,
         template: `%s | ${SITE_NAME}`,
      },
      description: current.description,
      keywords: current.keywords,
      alternates: {
         canonical: `/${currentLocale}`,
         languages: {
            tr: "/tr",
            en: "/en",
            az: "/az",
            "x-default": "/tr",
         },
      },
      openGraph: {
         type: "website",
         url: currentUrl,
         siteName: SITE_NAME,
         title: current.title,
         description: current.description,
         locale: current.ogLocale,
         images: [
            {
               url: OG_IMAGE,
               width: 1200,
               height: 630,
               alt: SITE_NAME,
            },
         ],
      },
      twitter: {
         card: "summary_large_image",
         title: current.title,
         description: current.description,
         images: [OG_IMAGE],
         creator: "supafo_app",
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

   if (!locales.includes(locale as Locale)) {
      notFound()
   }

   setRequestLocale(locale)
   const messages = await getMessages()

   return (
      <NextIntlClientProvider
         messages={messages}
         locale={locale}
      >
         <div
            className="min-h-screen flex flex-col container-fluid"
         >
            <Navbar
               locale={locale}
            />
            <main
               className={`flex-1 ${styles.layout}`}
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
