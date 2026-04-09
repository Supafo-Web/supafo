import { getRequestConfig } from "next-intl/server"
import { hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { locales } from "@/i18n"

const requestConfig = getRequestConfig(async ({ requestLocale }) => {
   const requested = await requestLocale
   const locale = hasLocale(locales, requested) ? requested : notFound()

   return {
      locale,
      messages: (await import(`../messages/${locale}.json`)).default
   }
})

export default requestConfig
