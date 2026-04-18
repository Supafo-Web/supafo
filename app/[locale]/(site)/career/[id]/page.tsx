import { getCareerDetails } from '@/components/services/Api'
import { OpenPositions } from '@/components/utils/UIType'
import { notFound } from 'next/navigation'
import styles from '@/components/modules/career.module.scss'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
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
   const t = await getTranslations('Career')
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
            className={`px-5 sm:px-10 md:px-20 2xl:px-30 py-30 relative`}
         >
            <Image
               alt='flower'
               src='/images/LeftFlower.svg'
               width={69}
               height={115}
               className={`w-full h-auto max-w-12 lg:max-w-17.5 ${styles.leftFlower}`}
               style={{ height: 'auto' }}
            />
            <div
               className="flex flex-col lg:flex-row gap-7.5"
            >
               <div
                  className={`w-full px-5 py-10 ${styles.careerDetailArea}`}
               >
                  <div
                     className={`flex flex-col gap-5 ${styles.header}`}
                  >
                     <div
                        className="flex items-center justify-between mb-5"
                     >
                        <h3
                           className={`truncate ${styles.title}`}
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
                           style={{ width: 20, height: 20 }}
                        />
                        <div
                           className={styles.smallText}
                        >
                           {job.city}, {job.country_name}
                        </div>
                     </small>
                     <div
                        className="flex justify-between"
                     >
                        <div
                           className="flex gap-2.5 flex-wrap"
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
               alt='flower'
               src='/images/RightFlower.svg'
               width={69}
               height={115}
               className={`w-full h-auto max-w-12 lg:max-w-17.5 ${styles.rightFlower}`}
               style={{ width: 69, height: 'auto' }}
            />
         </section>
      </main>
   )
}

export default CareerDetail
