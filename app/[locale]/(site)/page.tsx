import Image from "next/image"
import styles from "@/components/modules/page.module.scss"
import NavbarDownloadButton from "@/components/navbar/NavbarDownloadButton"
import { getTranslations } from "next-intl/server"
import FAQ from "@/components/faq/FAQ"

const Home = async () => {
   const t = await getTranslations("Home")
   const modal = await getTranslations("Modal")

   const media = [
      {
         id: 1,
         src: '/images/1-1.jpg',
         type: 'image'
      },
      {
         id: 2,
         src: '/videos/2-1.mp4',
         type: 'video/mp4'
      },
      {
         id: 3,
         src: '/images/2-3.jpg',
         type: 'image'
      },
      {
         id: 4,
         src: '/images/3-1.jpg',
         type: 'image'
      },
      {
         id: 5,
         src: '/videos/3-2.mp4',
         type: 'video/mp4'
      },
      {
         id: 6,
         src: '/images/3-3.jpg',
         type: 'image'
      },
      {
         id: 7,
         src: '/videos/1-2.mp4',
         type: 'video/mp4'
      },
      {
         id: 8,
         src: '/videos/2-2.mp4',
         type: 'video/mp4'
      },
      {
         id: 9,
         src: '/videos/1-3.mp4',
         type: 'video/mp4'
      }
   ]

   const faq = [
      {
         id: 1,
         question: t('faq.q1'),
         answer: t('faq.a1'),
      },
      {
         id: 2,
         question: t('faq.q2'),
         answer: t('faq.a2')
      },
      {
         id: 3,
         question: t('faq.q3'),
         answer: t('faq.a3')
      },
      {
         id: 4,
         question: t('faq.q4'),
         answer: t('faq.a4')
      },
      {
         id: 5,
         question: t('faq.q5'),
         answer: t('faq.a5')
      },
      {
         id: 6,
         question: t('faq.q6'),
         answer: t('faq.a6')
      },
      {
         id: 7,
         question: t('faq.q7'),
         answer: t('faq.a7')
      },
      {
         id: 8,
         question: t('faq.q8'),
         answer: t('faq.a8')
      },
      {
         id: 9,
         question: t('faq.q9'),
         answer: t('faq.a9')
      },
      {
         id: 10,
         question: t('faq.q10'),
         answer: t('faq.a10')
      }
   ]

   return (
      <>
         <header
            className={styles.header}
         >
            <div
               className={styles.grid}
            >
               {media.map((item) => (
                  <div
                     key={item.id}
                     className={styles.card}
                  >
                     {item.type === "video/mp4" ? (
                        <video
                           className={styles.media}
                           autoPlay
                           muted
                           loop
                           playsInline
                        >
                           <source
                              src={item.src}
                              type={item.type}
                           />
                        </video>
                     ) : (
                        <Image
                           className={styles.media}
                           alt={`media-${item.id}`}
                           src={item.src}
                           fill
                           priority={item.id === 1}
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                     )}
                  </div>
               ))}
            </div>

            <div
               className={styles.overlay}
            >
               <div
                  className={styles.content}
               >
                  <h1
                     className={styles.title}
                  >
                     {t('hero_title')}
                  </h1>
                  <p
                     className={styles.desc}
                  >
                     {t('hero_desc')}
                  </p>
               </div>
            </div>
         </header>

         <main>
            <section
               className={`px-10 sm:px-20 lg:px-30 xl:px-40 2xl:px-70 py-40 ${styles.whatIsSupafo}`}
            >
               <Image
                  alt='flower'
                  src='/images/LeftFlower.svg'
                  width={69}
                  height={115}
                  className={`w-full h-auto max-w-17.25 ${styles.leftFlower}`}
                  style={{ height: 'auto' }}
               />
               <div
                  className="flex flex-col lg:flex-row items-center gap-15"
               >
                  <Image
                     alt="what-is-supafo"
                     src="/home/1.svg"
                     width={350}
                     height={335}
                     className="w-full h-auto sm:w-112.5 md:w-87.5"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     style={{ height: 'auto' }}
                  />
                  <div
                     className={`gap-12.5 ${styles.hero1}`}
                  >
                     <h1
                        className={`text-center lg:text-left`}
                     >
                        {t.rich('what_is_title', {
                           highlight: (chunks) => <span>{chunks}</span>
                        })}
                     </h1>
                     <h6
                        className={`text-center lg:text-left`}
                     >
                        {t('what_is_heading')}
                        <p
                           className={`text-center mt-5 lg:text-left`}
                        >
                           {t.rich('what_is_desc', {
                              highlight: (chunks) => <span>{chunks}</span>
                           })}
                        </p>
                     </h6>
                  </div>
               </div>
               <Image
                  alt='flower'
                  src='/images/RightFlower.svg'
                  width={69}
                  height={115}
                  className={`w-full h-auto max-w-17.25 ${styles.rightFlower}`}
                  style={{ width: 69, height: 'auto' }}
               />
            </section>

            <section
               className={styles.howDoesSupafo}
            >
               <h1>
                  {t.rich('how_it_works_title', {
                     highlight: (chunks) => <span>{chunks}</span>
                  })}
               </h1>
               <video
                  className={styles.media}
                  autoPlay
                  muted
                  loop
                  playsInline
               >
                  <source
                     src='/videos/Mockup.mp4'
                     type='video/mp4'
                  />
               </video>
            </section>

            <section
               className={`${styles.supafoBag}`}
            >
               <Image
                  alt='flower'
                  src='/images/RightFlower.svg'
                  width={69}
                  height={115}
                  className={`w-full h-auto max-w-17.25 ${styles.rightFlower2}`}
                  style={{ width: 69, height: 'auto' }}
               />
               <h1
                  className={`pt-20`}
               >
                  {t.rich('bag_title', {
                     highlight: (chunks) => <span>{chunks}</span>
                  })}
               </h1>
               <div
                  className="flex flex-col lg:flex-row items-center gap-15 px-10 sm:px-20 lg:px-30 xl:px-40 2xl:px-70 pt-20"
               >
                  <Image
                     alt="supafo-bag-1"
                     src="/home/2.svg"
                     width={305}
                     height={320}
                     className="w-full h-auto sm:w-112.5 md:w-87.5"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     style={{ height: 'auto' }}
                  />
                  <h6
                     className={`text-center lg:text-left`}
                  >
                     {t('bag_heading_1')}
                     <p
                        className={`text-center mt-10 lg:text-left`}
                     >
                        {t('bag_desc_1')}
                     </p>
                  </h6>
               </div>
               <div
                  className="flex flex-col lg:flex-row items-center gap-15 px-10 sm:px-20 lg:px-30 xl:px-40 2xl:px-70 pb-20"
               >
                  <h6
                     className={`text-center lg:text-left`}
                  >
                     {t('bag_heading_2')}
                     <p
                        className={`text-center mt-10 lg:text-left`}
                     >
                        {t('bag_desc_2')}
                     </p>
                  </h6>
                  <Image
                     alt="supafo-bag-2"
                     src="/home/3.svg"
                     width={357}
                     height={344}
                     className="w-full h-auto sm:w-112.5 md:w-87.5"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     style={{ height: 'auto' }}
                  />
               </div>
               <div
                  className="my-20 flex flex-col items-center justify-center px-10 sm:px-20 lg:px-30 xl:px-40 2xl:px-70"
               >
                  <div className="flex flex-col items-center mb-12">
                     <h6
                        className={`text-center`}
                     >
                        {t('bag_heading_3')}
                     </h6>
                     <p
                        className={`text-center mt-3`}
                     >
                        {t('bag_desc_3')}
                     </p>
                  </div>
                  <NavbarDownloadButton
                     text={modal('download_app')}
                     title={modal('download_app_title')}
                  />
               </div>
               <Image
                  alt='flower'
                  src='/images/LeftFlower.svg'
                  width={69}
                  height={115}
                  className={`w-full h-auto max-w-17.25 ${styles.leftFlower2}`}
                  style={{ height: 'auto' }}
               />
            </section>

            <section
               className={`flex flex-col lg:flex-row items-center px-10 sm:px-20 lg:px-30 xl:px-40 2xl:px-70 py-30 ${styles.lifeJourney}`}
            >
               <div className="relative w-full md:w-130 h-110 md:h-130 lg:w-80 lg:h-95 xl:w-110 xl:h-110 overflow-hidden rounded-xl mt-4">
                  <video
                     autoPlay
                     muted
                     loop
                     playsInline
                     className="w-full h-full object-cover"
                  >
                     <source src="/videos/Restaurant.mp4" type="video/mp4" />
                  </video>
               </div>
               <div
                  className={styles.textArea}
               >
                  <h1
                     className={`text-center lg:text-left`}
                  >
                     {t('journey_title')}
                  </h1>
                  <h6
                     className={`text-center lg:text-left`}
                  >
                     {t('journey_heading')}
                     <p
                        className={`text-center mt-7 lg:text-left`}
                     >
                        {t('journey_desc')}
                     </p>
                  </h6>
               </div>
            </section>

            <section
               className={`px-10 sm:px-20 lg:px-30 xl:px-40 2xl:px-70 py-20 ${styles.supafoAI}`}
            >
               <Image
                  alt='flower'
                  src='/images/RightFlower.svg'
                  width={69}
                  height={115}
                  className={`w-full h-auto max-w-17.25 ${styles.rightFlower3}`}
                  style={{ width: 69, height: 'auto' }}
               />

               <div className="flex flex-col lg:flex-row items-center gap-15">
                  <div
                     className={styles.textArea}
                  >
                     <h1
                        className={`text-center lg:text-left`}
                     >
                        {t('ai_title')}
                     </h1>
                     <p
                        className={`text-center mt-7 lg:text-left`}
                     >
                        {t('ai_desc')}
                     </p>
                  </div>

                  <Image
                     alt="supafoAI"
                     src="/home/AI.jpg"
                     width={265}
                     height={344}
                     className={`w-full h-auto sm:w-112.5 md:w-80 ${styles.supafoAIImage}`}
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     style={{ height: 'auto' }}
                  />
               </div>

               <Image
                  alt='flower'
                  src='/images/LeftFlower.svg'
                  width={69}
                  height={115}
                  className={`w-full h-auto max-w-17.25 ${styles.leftFlower3}`}
                  style={{ height: 'auto' }}
               />
            </section>

            <section
               className={`${styles.supafoDonation}`}
            >
               <h1
                  className={`mt-20 text-center px-10 sm:px-20 lg:px-30 xl:px-40 2xl:px-70`}
               >
                  {t('donation_title')}
               </h1>
               <div
                  className="flex flex-col lg:flex-row items-center gap-15 px-10 sm:px-20 lg:px-30 xl:px-40 2xl:px-70 pt-20"
               >
                  <Image
                     alt="supafo-donation"
                     src="/home/Donation.svg"
                     width={320}
                     height={264}
                     className="w-full h-auto sm:w-112.5 md:w-87.5"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     style={{ height: 'auto' }}
                  />
                  <h6
                     className={`text-center lg:text-left`}
                  >
                     {t('donation_heading_1')}
                     <p
                        className={`text-center mt-7 lg:text-left`}
                     >
                        {t('donation_desc_1')}
                     </p>
                  </h6>
               </div>
               <div
                  className="flex flex-col lg:flex-row items-center justify-between gap-15 px-10 sm:px-20 lg:px-30 xl:px-40 2xl:px-70 pb-20"
               >
                  <h6
                     className={`text-center lg:text-left`}
                  >
                     {t('donation_heading_2')}
                     <p
                        className={`text-center mt-7 lg:text-left`}
                     >
                        {t('donation_desc_2')}
                     </p>
                  </h6>
                  <Image
                     alt="supafo-donation-2"
                     src="/home/6.svg"
                     width={332}
                     height={245}
                     className="w-full h-auto sm:w-112.5 md:w-87.5"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     style={{ height: 'auto' }}
                  />
               </div>
            </section>

            <section
               id="faq"
               className={`px-10 sm:px-30 lg:px-50 xl:px-70 2xl:px-100 py-20 scroll-mt-24 mb-20 ${styles.faq}`}
            >
               <h1>
                  {t('faq_title')}
               </h1>
               <FAQ
                  faq={faq}
               />
               <Image
                  alt='flower'
                  src='/images/RightFlower.svg'
                  width={69}
                  height={115}
                  className={`w-full h-auto max-w-17.25 ${styles.rightFlower4}`}
                  style={{ width: 69, height: 'auto' }}
               />
               <Image
                  alt='flower'
                  src='/images/LeftFlower.svg'
                  width={69}
                  height={115}
                  className={`w-full h-auto max-w-17.25 ${styles.leftFlower4}`}
                  style={{ height: 'auto' }}
               />
            </section>
         </main >
      </>
   )
}

export default Home
