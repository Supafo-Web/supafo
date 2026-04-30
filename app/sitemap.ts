import type { MetadataRoute } from "next"

const SITE_URL = "https://www.supafo.com"

const locales = ["tr", "en", "az"] as const

type Locale = (typeof locales)[number]

type ChangeFrequency = NonNullable<
   MetadataRoute.Sitemap[number]["changeFrequency"]
>

type StaticRoute = {
   path: string
   priority: number
   changeFrequency: ChangeFrequency
}

const staticRoutes: StaticRoute[] = [
   { path: "", priority: 1, changeFrequency: "daily" },
   { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
   { path: "/career", priority: 0.6, changeFrequency: "monthly" },
   { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
   { path: "/cookie-policy", priority: 0.4, changeFrequency: "yearly" },
   { path: "/guide", priority: 0.7, changeFrequency: "monthly" },
   { path: "/kvkk", priority: 0.4, changeFrequency: "yearly" },
   { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" },
   { path: "/projects", priority: 0.7, changeFrequency: "weekly" },
   { path: "/terms-and-conditions", priority: 0.4, changeFrequency: "yearly" },
   { path: "/what-is-food-waste", priority: 0.7, changeFrequency: "monthly" },
   { path: "/career/team", priority: 0.7, changeFrequency: "monthly" },
   { path: "/partner", priority: 0.8, changeFrequency: "monthly" },
]

function getLocalizedUrl(locale: Locale, path: string) {
   return `${SITE_URL}/${locale}${path}`
}

function getLanguageAlternates(path: string) {
   return {
      tr: getLocalizedUrl("tr", path),
      en: getLocalizedUrl("en", path),
      az: getLocalizedUrl("az", path),
      "x-default": getLocalizedUrl("tr", path),
   }
}

export default function sitemap(): MetadataRoute.Sitemap {
   const lastModified = new Date()

   return staticRoutes.flatMap((route) =>
      locales.map((locale) => ({
         url: getLocalizedUrl(locale, route.path),
         lastModified,
         changeFrequency: route.changeFrequency,
         priority: route.priority,
         alternates: {
            languages: getLanguageAlternates(route.path),
         },
      }))
   )
}
