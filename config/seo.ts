import { Metadata } from "next"

export const SITE_URL = "https://www.supafo.com"
export const SITE_NAME = "Supafo"
export const OG_IMAGE = "/og-image.jpg"

export const SUPPORTED_LOCALES = ["tr", "en", "az"] as const

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "tr"

export function isSupportedLocale(locale: string): locale is Locale {
   return SUPPORTED_LOCALES.includes(locale as Locale)
}

export function getLocalizedPath(locale: Locale, path = "") {
   return `/${locale}${path}`
}

export function getAbsoluteUrl(locale: Locale, path = "") {
   return `${SITE_URL}${getLocalizedPath(locale, path)}`
}

export function getLanguageAlternates(path = "") {
   return {
      tr: getAbsoluteUrl("tr", path),
      en: getAbsoluteUrl("en", path),
      az: getAbsoluteUrl("az", path),
      "x-default": getAbsoluteUrl(DEFAULT_LOCALE, path),
   }
}

type CreatePageMetadataParams = {
   locale: Locale
   path?: string
   title: string
   description: string
   keywords?: string[]
}

export function createPageMetadata({
   locale,
   path = "",
   title,
   description,
   keywords,
}: CreatePageMetadataParams): Metadata {
   const url = getAbsoluteUrl(locale, path)

   return {
      title,
      description,
      keywords,
      alternates: {
         canonical: url,
         languages: getLanguageAlternates(path),
      },
      openGraph: {
         type: "website",
         url,
         siteName: SITE_NAME,
         title,
         description,
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
         title,
         description,
         images: [OG_IMAGE],
         creator: "@supafo_app",
      },
   }
}
