import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { locales } from "@/i18n"

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
      title: "Supafo | Sürpriz Paketlerle Gıda İsrafını Azalt",
      description:
         "Supafo ile yakınındaki restoran ve kafelerden sürpriz paketleri keşfet, tasarruf et ve gıda israfını azalt. Çok dilli yeni nesil food-tech deneyimi.",
      keywords: [
         "Supafo",
         "sürpriz paket",
         "gıda israfı",
         "restoran",
         "kafe",
         "uygun fiyatlı yemek",
         "sürdürülebilir tüketim",
         "Türkiye",
         "Azerbaycan",
      ],
      ogLocale: "tr_TR",
   },
   en: {
      title: "Supafo | Reduce Food Waste with Surprise Packs",
      description:
         "Discover surprise food packs from nearby restaurants and cafés with Supafo. Save money, reduce food waste, and join a multilingual next-generation food-tech experience.",
      keywords: [
         "Supafo",
         "surprise packs",
         "food waste",
         "restaurant",
         "cafe",
         "affordable food",
         "sustainable consumption",
         "Turkey",
         "Azerbaijan",
      ],
      ogLocale: "en_US",
   },
   az: {
      title: "Supafo | Sürpriz Paketlərlə Qida İsrafını Azalt",
      description:
         "Supafo ilə yaxınındakı restoran və kafelərdən sürpriz paketləri kəşf et, qənaət et və qida israfını azalt. Çoxdilli yeni nəsil food-tech təcrübəsi.",
      keywords: [
         "Supafo",
         "sürpriz paket",
         "qida israfı",
         "restoran",
         "kafe",
         "sərfəli yemək",
         "davamlı istehlak",
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
         creator: "@supafo_app",
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
         {children}
      </NextIntlClientProvider>
   )
}

export default LocaleLayout
