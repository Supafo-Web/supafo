import type { MetadataRoute } from "next"

const SITE_URL = "https://supafo.com"
const locales = ["tr", "en", "az"] as const

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>

type StaticRoute = {
   path: string
   priority: number
   changeFrequency: ChangeFrequency
}

const staticRoutes: StaticRoute[] = [
   { path: "", priority: 1, changeFrequency: "daily" },
   { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
   { path: "/how-does-it-work", priority: 0.8, changeFrequency: "monthly" },
   { path: "/guide", priority: 0.7, changeFrequency: "monthly" },
   { path: "/career", priority: 0.6, changeFrequency: "monthly" },
   { path: "/our-team", priority: 0.7, changeFrequency: "monthly" },
   { path: "/what-is-food-waste", priority: 0.7, changeFrequency: "monthly" },
   { path: "/projects", priority: 0.7, changeFrequency: "weekly" },
   { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
   { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
   { path: "/terms-and-conditions", priority: 0.4, changeFrequency: "yearly" },
   { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" },
   { path: "/cookie-policy", priority: 0.4, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
   const now = new Date()

   return staticRoutes.flatMap((route) =>
      locales.map((locale) => ({
         url: `${SITE_URL}/${locale}${route.path}`,
         lastModified: now,
         changeFrequency: route.changeFrequency,
         priority: route.priority,
         alternates: {
            languages: {
               tr: `${SITE_URL}/tr${route.path}`,
               en: `${SITE_URL}/en${route.path}`,
               az: `${SITE_URL}/az${route.path}`,
               "x-default": `${SITE_URL}/tr${route.path}`,
            },
         },
      }))
   )
}
