import type { MetadataRoute } from "next"
import {
   getAbsoluteUrl,
   getLanguageAlternates,
   SUPPORTED_LOCALES,
   type Locale,
} from "@/config/seo"

type ChangeFrequency = NonNullable<
   MetadataRoute.Sitemap[number]["changeFrequency"]
>

type StaticRoute = {
   path: string
   priority: number
   changeFrequency: ChangeFrequency
   lastModified: string
}

const staticRoutes: StaticRoute[] = [
   { path: "", priority: 1, changeFrequency: "daily", lastModified: "2026-04-30" },
   { path: "/about-us", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-04-30" },
   { path: "/career", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-04-30" },
   { path: "/contact", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-04-30" },
   { path: "/cookie-policy", priority: 0.4, changeFrequency: "yearly", lastModified: "2026-04-30" },
   { path: "/guide", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-04-30" },
   { path: "/kvkk", priority: 0.4, changeFrequency: "yearly", lastModified: "2026-04-30" },
   { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly", lastModified: "2026-04-30" },
   { path: "/projects", priority: 0.7, changeFrequency: "weekly", lastModified: "2026-04-30" },
   { path: "/terms-and-conditions", priority: 0.4, changeFrequency: "yearly", lastModified: "2026-04-30" },
   { path: "/what-is-food-waste", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-04-30" },
   { path: "/career/team", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-04-30" },
   { path: "/partner", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-04-30" },
]

export default function sitemap(): MetadataRoute.Sitemap {
   return staticRoutes.flatMap((route) =>
      SUPPORTED_LOCALES.map((locale: Locale) => ({
         url: getAbsoluteUrl(locale, route.path),
         lastModified: new Date(route.lastModified),
         changeFrequency: route.changeFrequency,
         priority: route.priority,
         alternates: {
            languages: getLanguageAlternates(route.path),
         },
      }))
   )
}
