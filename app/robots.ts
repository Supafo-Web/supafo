import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
   return {
      rules: {
         userAgent: "*",
         allow: "/",
      },
      sitemap: "https://supafo.com/sitemap.xml",
      host: "https://supafo.com",
   }
}
