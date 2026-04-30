import type { MetadataRoute } from "next"

const SITE_URL = "https://www.supafo.com"

export default function robots(): MetadataRoute.Robots {
   return {
      rules: [
         {
            userAgent: "*",
            allow: "/",
            disallow: [
               "/api/",
               "/admin/",
               "/dashboard/",
            ],
         },
      ],
      sitemap: `${SITE_URL}/sitemap.xml`,
   }
}
