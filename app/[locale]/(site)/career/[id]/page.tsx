import type { Metadata } from "next"
import { getCareerDetails } from "@/components/services/Api"
import { OpenPositions } from "@/components/utils/UIType"
import { notFound } from "next/navigation"
import styles from "@/components/modules/career.module.scss"
import Image from "next/image"
import { formatPrice } from "@/components/utils/Utils"
import CareerApplyForm from "@/app/[locale]/(site)/career/[id]/CareerApplyForm"
import {
   createPageMetadata,
   isSupportedLocale,
   type Locale,
} from "@/config/seo"

type PageProps = {
   params: Promise<{
      locale: string
      id: string
   }>
}

const getCareerDetailId = async (id: number): Promise<OpenPositions | null> => {
   try {
      const response = await getCareerDetails(id)
      return response?.details ?? null
   } catch (error) {
      if (process.env.NODE_ENV === "development") {
         console.error(error)
      }

      return null
   }
}

const careerDetailFallbackSeo: Record<
   Locale,
   {
      title: string
      description: string
      keywords: string[]
      ogLocale: string
   }
> = {
   tr: {
      title: "Kariyer Başvurusu",
      description:
         "Supafo kariyer fırsatlarını keşfet, açık pozisyonları incele ve gıda israfını azaltan food-tech ekibimize katılmak için başvur.",
      keywords: [
         "Supafo kariyer",
         "iş başvurusu",
         "açık pozisyonlar",
         "food-tech kariyer",
         "sürdürülebilirlik",
      ],
      ogLocale: "tr_TR",
   },
   en: {
      title: "Career Application",
      description:
         "Explore Supafo career opportunities, review open positions, and apply to join our food-tech team working to reduce food waste.",
      keywords: [
         "Supafo careers",
         "job application",
         "open positions",
         "food-tech careers",
         "sustainability",
      ],
      ogLocale: "en_US",
   },
   az: {
      title: "Karyera Müraciəti",
      description:
         "Supafo karyera imkanlarını kəşf et, açıq vakansiyalara bax və qida israfını azaltmağa çalışan food-tech komandamıza qoşulmaq üçün müraciət et.",
      keywords: [
         "Supafo karyera",
         "iş müraciəti",
         "açıq vakansiyalar",
         "food-tech karyera",
         "davamlılıq",
      ],
      ogLocale: "az_AZ",
   },
}

const isString = (value: string | undefined | null): value is string => {
   return typeof value === "string" && value.trim().length > 0
}

const stripHtml = (html?: string | null) => {
   if (!html) return ""

   return html
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, " ")
      .trim()
}

const limitText = (text: string, maxLength = 155) => {
   if (text.length <= maxLength) return text

   return `${text.slice(0, maxLength - 1).trim()}…`
}

const createLocalizedCareerDescription = ({
   locale,
   job,
}: {
   locale: Locale
   job: OpenPositions
}) => {
   const city = job.city || ""
   const country = job.country_name || ""
   const location = [city, country].filter(isString).join(", ")

   if (locale === "en") {
      return location
         ? `Review the ${job.title} position at Supafo in ${location} and apply to join our food-tech team working to reduce food waste.`
         : `Review the ${job.title} position at Supafo and apply to join our food-tech team working to reduce food waste.`
   }

   if (locale === "az") {
      return location
         ? `Supafo-da ${location} üzrə ${job.title} vakansiyasını nəzərdən keçir və qida israfını azaltmağa çalışan komandamıza qoşulmaq üçün müraciət et.`
         : `Supafo-da ${job.title} vakansiyasını nəzərdən keçir və qida israfını azaltmağa çalışan komandamıza qoşulmaq üçün müraciət et.`
   }

   return location
      ? `Supafo’da ${location} konumundaki ${job.title} pozisyonunu incele ve gıda israfını azaltan food-tech ekibimize katılmak için başvur.`
      : `Supafo’da ${job.title} pozisyonunu incele ve gıda israfını azaltan food-tech ekibimize katılmak için başvur.`
}

export async function generateMetadata({
   params,
}: PageProps): Promise<Metadata> {
   const { locale, id } = await params

   if (!isSupportedLocale(locale)) {
      notFound()
   }

   const jobId = Number(id)
   const fallbackSeo = careerDetailFallbackSeo[locale]

   if (Number.isNaN(jobId)) {
      return createPageMetadata({
         locale,
         path: "/career",
         title: fallbackSeo.title,
         description: fallbackSeo.description,
         keywords: fallbackSeo.keywords,
         ogLocale: fallbackSeo.ogLocale,
      })
   }

   const job = await getCareerDetailId(jobId)

   if (!job) {
      return createPageMetadata({
         locale,
         path: "/career",
         title: fallbackSeo.title,
         description: fallbackSeo.description,
         keywords: fallbackSeo.keywords,
         ogLocale: fallbackSeo.ogLocale,
      })
   }

   const cleanDescription = stripHtml(job.description)

   const title = `${job.title} | Supafo`

   const description = limitText(
      cleanDescription ||
      createLocalizedCareerDescription({
         locale,
         job,
      })
   )

   const keywords: string[] = [
      "Supafo",
      job.title,
      job.city,
      job.country_name,
      ...fallbackSeo.keywords,
   ].filter(isString)

   return createPageMetadata({
      locale,
      path: `/career/${id}`,
      title,
      description,
      keywords,
      ogLocale: fallbackSeo.ogLocale,
   })
}

const CareerDetail = async ({ params }: PageProps) => {
   const { id, locale } = await params
   const jobId = Number(id)

   if (!isSupportedLocale(locale)) {
      notFound()
   }

   if (Number.isNaN(jobId)) {
      notFound()
   }

   const job = await getCareerDetailId(jobId)

   if (!job) {
      notFound()
   }

   const keywords = Array.isArray(job.keywords) ? job.keywords : []

   return (
      <main>
         <section className="relative px-5 py-15 sm:px-10 md:px-20 lg:py-30 2xl:px-30">
            <Image
               alt=""
               aria-hidden="true"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`h-auto w-10 sm:w-12 lg:w-17.5 ${styles.leftFlower} ${styles.swingLeaf}`}
            />

            <div className="flex flex-col items-start gap-7.5 lg:flex-row">
               <div className={`w-full px-5 py-10 ${styles.careerDetailArea}`}>
                  <div className={`flex flex-col gap-5 ${styles.header}`}>
                     <div className="flex flex-col items-end gap-2 sm:flex-row sm:justify-between sm:gap-0">
                        <h1
                           className={`w-full truncate sm:w-auto ${styles.title}`}
                        >
                           {job.title}
                        </h1>

                        <p className={`px-2.5 py-1.5 ${styles.subTitle}`}>
                           {job.subTitle}
                        </p>
                     </div>

                     <small className="flex items-center gap-0.5">
                        <Image
                           alt=""
                           aria-hidden="true"
                           src="/career/Location.svg"
                           width={20}
                           height={20}
                           className="h-auto w-4.5 shrink-0 sm:w-5"
                        />

                        <span className={styles.smallText}>
                           {job.city}, {job.country_name}
                        </span>
                     </small>

                     <div className="flex flex-col items-end gap-4 sm:flex-row sm:justify-between sm:gap-0">
                        <div className="flex w-full flex-wrap gap-2.5 sm:w-auto">
                           {keywords.map((keyword, keywordIndex) => (
                              <p
                                 key={`${job.id}-${keyword}-${keywordIndex}`}
                                 className={`truncate rounded-lg px-2.5 py-1.5 ${styles.keyword}`}
                              >
                                 {keyword}
                              </p>
                           ))}
                        </div>

                        <p className={`px-2.5 py-1.5 ${styles.priceArea}`}>
                           {formatPrice(job.price || 0, job.currency)}
                        </p>
                     </div>

                     {job.description && (
                        <div
                           className="mt-6"
                           dangerouslySetInnerHTML={{
                              __html: job.description,
                           }}
                        />
                     )}
                  </div>
               </div>

               <CareerApplyForm id={jobId} />
            </div>

            <Image
               alt=""
               aria-hidden="true"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`h-auto w-10 sm:w-12 lg:w-17.5 ${styles.rightFlower} ${styles.swingLeaf2}`}
            />
         </section>
      </main>
   )
}

export default CareerDetail
