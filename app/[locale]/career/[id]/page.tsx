import NotFoundPage from '@/app/[locale]/not-found'
import NotFound from '@/app/not-found'
import { getCareerDetails } from '@/components/services/Api'
import { OpenPositions } from '@/components/utils/UIType'
import { notFound } from 'next/navigation'

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
   const jobId = Number(0)

   // if (Number.isNaN(jobId)) {
   //    return <NotFoundPage />
   // }

   const job = await getCareerDetailId(jobId)
   if (!job) {
      return <NotFoundPage />
   }

   return (
      <section className="container-fluid py-10">
         {/* <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
         <p>
            {job.city}, {job.country}
         </p>

         {job.description && (
            <div
               className="mt-6"
               dangerouslySetInnerHTML={{ __html: job.description }}
            />
         )} */}

         <div className="mt-8">
            Başvuru formu burada olacak.
         </div>
      </section>
   )
}

export default CareerDetail
