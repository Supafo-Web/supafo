import { getCareerDetails } from '@/components/services/Api'
import { OpenPositions } from '@/components/utils/UIType'
import { notFound } from 'next/navigation'
import styles from '@/components/modules/career.module.scss'
import Image from 'next/image'
import { formatPrice } from '@/components/utils/Utils'
import CareerApplyForm from '@/app/[locale]/(site)/career/[id]/CareerApplyForm'

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
      if (process.env.NODE_ENV === 'development') {
         console.error(error)
      }
      return null
   }
}

const CareerDetail = async ({ params }: PageProps) => {
   const { id } = await params
   const jobId = Number(id)

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
         <section
            className={`px-5 sm:px-10 md:px-20 2xl:px-30 py-15 lg:py-30 relative`}
         >
            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower} ${styles.swingLeaf}`}
            />
            <div
               className="flex flex-col lg:flex-row items-start gap-7.5"
            >
               <div
                  className={`w-full px-5 py-10 ${styles.careerDetailArea}`}
               >
                  <div
                     className={`flex flex-col gap-5 ${styles.header}`}
                  >
                     <div
                        className="flex flex-col sm:flex-row items-end sm:justify-between gap-2 sm:gap-0"
                     >
                        <h3
                           className={`truncate w-full sm:w-auto ${styles.title}`}
                        >
                           {job.title}
                        </h3>
                        <p
                           className={`px-2.5 py-1.5 ${styles.subTitle}`}
                        >
                           {job.subTitle}
                        </p>
                     </div>
                     <small
                        className="flex gap-0.5 items-center"
                     >
                        <Image
                           alt="location"
                           src="/career/Location.svg"
                           width={20}
                           height={20}
                           className="w-4.5 sm:w-5 h-auto shrink-0"
                        />
                        <div
                           className={styles.smallText}
                        >
                           {job.city}, {job.country_name}
                        </div>
                     </small>
                     <div
                        className="flex flex-col sm:flex-row items-end sm:justify-between gap-4 sm:gap-0"
                     >
                        <div
                           className="flex gap-2.5 flex-wrap w-full sm:w-auto"
                        >
                           {keywords.map((keyword, keywordIndex) => (
                              <p
                                 key={`${job.id}-${keyword}-${keywordIndex}`}
                                 className={`truncate px-2.5 py-1.5 rounded-lg ${styles.keyword}`}
                              >
                                 {keyword}
                              </p>
                           ))}
                        </div>
                        <p
                           className={`px-2.5 py-1.5 ${styles.priceArea}`}
                        >
                           {formatPrice(job.price || 0, job.currency)}
                        </p>
                     </div>
                     {job.description && (
                        <div
                           className="mt-6"
                           dangerouslySetInnerHTML={{ __html: job.description }}
                        />
                     )}
                  </div>
               </div>

               <CareerApplyForm
                  id={jobId}
               />
            </div>
            <Image
               alt="flower"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.rightFlower} ${styles.swingLeaf2}`}
            />
         </section>
      </main>
   )
}

export default CareerDetail
