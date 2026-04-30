import { notFound } from "next/navigation"
import type { Metadata } from "next"
import {
   createPageMetadata,
   isSupportedLocale,
} from "@/config/seo"
import { pageSeo, type SeoPath } from "@/config/seo-pages"

type GenerateMetadataProps = {
   params: Promise<{
      locale: string
   }>
}

export function createGenerateMetadata(path: SeoPath) {
   return async function generateMetadata({
      params,
   }: GenerateMetadataProps): Promise<Metadata> {
      const { locale } = await params

      if (!isSupportedLocale(locale)) {
         notFound()
      }

      const seo = pageSeo[path][locale]

      return createPageMetadata({
         locale,
         path,
         title: seo.title,
         description: seo.description,
         keywords: seo.keywords,
         ogLocale: seo.ogLocale,
      })
   }
}
