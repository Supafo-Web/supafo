import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
   return {
      rules: {
         userAgent: "*",
         allow: "/",
      },
      sitemap: "https://www.supafo.com/sitemap.xml",
      host: "https://www.supafo.com",
   }
}
