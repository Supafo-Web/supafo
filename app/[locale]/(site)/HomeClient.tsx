"use client"

import Image from "next/image"
import styles from "@/components/modules/page.module.scss"
import FAQ from "@/components/faq/FAQ"
import Button from "@/components/button/Button"
import { handleDownload } from "@/components/store/AppStore"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState } from "react"

const HomeClient = () => {
   const t = useTranslations("Home")
   const modal = useTranslations("Modal")
   const locale = useLocale()

   const [loadVideos, setLoadVideos] = useState(false)
   const [loadMockupVideo, setLoadMockupVideo] = useState(false)
   const [loadRestaurantVideo, setLoadRestaurantVideo] = useState(false)

   useEffect(() => {
      const load = () => setLoadVideos(true)

      window.addEventListener("scroll", load, { once: true })
      window.addEventListener("touchstart", load, { once: true })
      window.addEventListener("mousemove", load, { once: true })
      window.addEventListener("keydown", load, { once: true })

      return () => {
         window.removeEventListener("scroll", load)
         window.removeEventListener("touchstart", load)
         window.removeEventListener("mousemove", load)
         window.removeEventListener("keydown", load)
      }
   }, [])

   type HeroMediaItem =
      | {
         id: number
         type: "video"
         mobileMp4: string
         desktopMp4: string
         poster: string
      }
      | {
         id: number
         type: "image"
         src: string
         alt: string
      }

   const media: HeroMediaItem[] = [
      {
         id: 1,
         type: "video",
         mobileMp4: "/videos/mobile/1-3.mp4",
         desktopMp4: "/videos/desktop/1-3.mp4",
         poster: "/videos/posters/1-3.webp",
      },
      {
         id: 2,
         type: "video",
         mobileMp4: "/videos/mobile/2-1.mp4",
         desktopMp4: "/videos/desktop/2-1.mp4",
         poster: "/videos/posters/2-1.webp",
      },
      {
         id: 3,
         type: "image",
         src: "/images/3-3.webp",
         alt: "Supafo mobil uygulama görseli",
      },
      {
         id: 4,
         type: "video",
         mobileMp4: "/videos/mobile/1-2.mp4",
         desktopMp4: "/videos/desktop/1-2.mp4",
         poster: "/videos/posters/1-2.webp",
      },
      {
         id: 5,
         type: "video",
         mobileMp4: "/videos/mobile/2-2.mp4",
         desktopMp4: "/videos/desktop/2-2.mp4",
         poster: "/videos/posters/2-2.webp",
      },
      {
         id: 6,
         type: "image",
         src: "/images/1-1.webp",
         alt: "Supafo uygulama tanıtım görseli",
      },
   ]

   const faq = [
      { id: 1, question: t("faq.q1"), answer: t("faq.a1") },
      { id: 2, question: t("faq.q2"), answer: t("faq.a2") },
      { id: 3, question: t("faq.q3"), answer: t("faq.a3") },
      { id: 4, question: t("faq.q4"), answer: t("faq.a4") },
      { id: 5, question: t("faq.q5"), answer: t("faq.a5") },
      { id: 6, question: t("faq.q6"), answer: t("faq.a6") },
      { id: 7, question: t("faq.q7"), answer: t("faq.a7") },
      { id: 8, question: t("faq.q8"), answer: t("faq.a8") },
      { id: 9, question: t("faq.q9"), answer: t("faq.a9") },
      { id: 10, question: t("faq.q10"), answer: t("faq.a10") },
   ]

   const sectionClass =
      "relative w-full max-w-full px-5 py-14 scroll-mt-24 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-20 lg:py-24 xl:px-28 2xl:px-40 3xl:px-60"

   const containerClass =
      "mx-auto w-full max-w-[1440px] min-w-0 3xl:max-w-[1600px]"

   const flowerClass =
      "h-auto w-9 sm:w-12 lg:w-17.5"

   const imageClass =
      "h-auto w-full max-w-[260px] object-contain sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px]"

   const textBlockClass =
      "flex w-full min-w-0 flex-col gap-5 text-center lg:text-left"

   useEffect(() => {
      const mockupSection = document.getElementById("how-does-supafo-work")

      if (!mockupSection) return

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setLoadMockupVideo(true)
               observer.disconnect()
            }
         },
         {
            rootMargin: "300px",
         }
      )

      observer.observe(mockupSection)

      return () => observer.disconnect()
   }, [])

   useEffect(() => {
      const restaurantSection = document.getElementById("healthy-life-journey")

      if (!restaurantSection) return

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setLoadRestaurantVideo(true)
               observer.disconnect()
            }
         },
         {
            rootMargin: "300px",
         }
      )

      observer.observe(restaurantSection)

      return () => observer.disconnect()
   }, [])

   return (
      <>
         <header className={`${styles.header} w-full max-w-full overflow-hidden`}>
            <div className={styles.grid}>
               {media.map((item) => (
                  <div key={item.id} className={styles.card}>
                     {item.type === "video" ? (
                        item.id === 1 ? (
                           <Image
                              className={styles.media}
                              alt="Supafo uygulama tanıtım görseli"
                              src={item.poster}
                              fill
                              quality={75}
                              priority
                              fetchPriority="high"
                              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                           />
                        ) : loadVideos ? (
                           <video
                              className={styles.media}
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="none"
                              poster={item.poster}
                              aria-hidden="true"
                              tabIndex={-1}
                           >
                              <source
                                 src={item.mobileMp4}
                                 type="video/mp4"
                                 media="(max-width: 768px)"
                              />
                              <source
                                 src={item.desktopMp4}
                                 type="video/mp4"
                                 media="(min-width: 769px)"
                              />
                           </video>
                        ) : (
                           <Image
                              className={styles.media}
                              alt="Supafo uygulama tanıtım görseli"
                              src={item.poster}
                              fill
                              quality={75}
                              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                           />
                        )
                     ) : (
                        <Image
                           className={styles.media}
                           alt={item.alt}
                           src={item.src}
                           fill
                           quality={75}
                           priority={item.id === 3}
                           sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        />
                     )}
                  </div>
               ))}
            </div>

            <div className={styles.overlay}>
               <div className={`${styles.content} px-5`}>
                  <h1 className={styles.title}>
                     {t("hero_title")}
                  </h1>

                  <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:mt-0 lg:gap-5">
                     <Button
                        text={t("hero_button_1")}
                        onClick={handleDownload}
                     />

                     <Button
                        text={t("hero_button_2")}
                        href={`/${locale}/partner`}
                     />
                  </div>
               </div>
            </div>
         </header>

         <main className="min-h-screen w-full max-w-full overflow-hidden">
            <section
               className={`${sectionClass} ${styles.whatIsSupafo}`}
               id="what-is-supafo"
            >
               <Image
                  alt=""
                  aria-hidden="true"
                  src="/images/LeftFlower.svg"
                  width={69}
                  height={115}
                  className={`${flowerClass} ${styles.leftFlower} ${styles.swingLeaf}`}
                  sizes="(max-width: 640px) 36px, (max-width: 768px) 48px, 69px"
               />

               <div className={containerClass}>
                  <div className="flex min-w-0 flex-col items-center gap-10 lg:flex-row lg:gap-14 xl:gap-20">
                     <div className="flex w-full shrink-0 justify-center lg:w-[38%]">
                        <Image
                           alt=""
                           aria-hidden="true"
                           src="/home/1.webp"
                           width={350}
                           height={335}
                           className={imageClass}
                           sizes="(max-width: 640px) 80vw, (max-width: 1024px) 340px, 420px"
                        />
                     </div>

                     <div className={`${textBlockClass} ${styles.hero1}`}>
                        <h1 className="text-center lg:text-left">
                           {t.rich("what_is_title", {
                              highlight: (chunks) => <span>{chunks}</span>,
                           })}
                        </h1>

                        <h2 className="text-center lg:text-left">
                           {t("what_is_heading")}
                        </h2>

                        <p className="mt-5 text-center lg:text-left">
                           {t.rich("what_is_desc", {
                              highlight: (chunks) => <span>{chunks}</span>,
                           })}
                        </p>
                     </div>
                  </div>
               </div>

               <Image
                  alt=""
                  aria-hidden="true"
                  src="/images/RightFlower.svg"
                  width={69}
                  height={115}
                  className={`${flowerClass} ${styles.rightFlower} ${styles.swingLeaf2}`}
                  sizes="(max-width: 640px) 36px, (max-width: 768px) 48px, 69px"
               />
            </section>

            <section
               className={`scroll-mt-24 pt-15 lg:pt-30 ${styles.howDoesSupafo}`}
               id="how-does-supafo-work"
            >
               <h1>
                  {t.rich("how_it_works_title", {
                     highlight: (chunks) => <span>{chunks}</span>
                  })}
               </h1>

               {loadMockupVideo ? (
                  <video
                     className={styles.media}
                     autoPlay
                     muted
                     loop
                     playsInline
                     preload="none"
                     poster={`/videos/${locale}/Mockup-poster.webp`}
                  >
                     <source
                        src={`/videos/${locale}/Mockup.mp4`}
                        type="video/mp4"
                     />
                  </video>
               ) : (
                  <Image
                     className={styles.media}
                     alt="Supafo uygulama tanıtım videosu"
                     src={`/videos/${locale}/Mockup-poster.webp`}
                     width={1200}
                     height={675}
                     quality={75}
                     sizes="100vw"
                  />
               )}
            </section>

            <section
               className={`relative w-full max-w-full scroll-mt-24 ${styles.supafoBag}`}
               id="supafo-bag"
            >
               <Image
                  alt=""
                  aria-hidden="true"
                  src="/images/RightFlower.svg"
                  width={69}
                  height={115}
                  className={`${flowerClass} ${styles.rightFlower2} ${styles.swingLeaf2}`}
                  sizes="(max-width: 640px) 36px, (max-width: 768px) 48px, 69px"
               />

               <div className={`${containerClass} px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-40 3xl:px-60`}>
                  <h1 className="pt-14 text-center sm:pt-16 lg:pt-20">
                     {t.rich("bag_title", {
                        highlight: (chunks) => <span>{chunks}</span>,
                     })}
                  </h1>

                  <div className="flex min-w-0 flex-col items-center gap-10 pt-10 lg:flex-row lg:gap-14 lg:pt-16 xl:gap-20">
                     <div className="flex w-full shrink-0 justify-center lg:w-[38%]">
                        <Image
                           alt=""
                           aria-hidden="true"
                           src="/home/2.webp"
                           width={305}
                           height={320}
                           className={imageClass}
                           sizes="(max-width: 640px) 80vw, (max-width: 1024px) 340px, 420px"
                        />
                     </div>

                     <h2 className="w-full min-w-0 text-center lg:text-left">
                        {t("bag_heading_1")}
                     </h2>

                     <p className="mt-3 text-center lg:mt-8 lg:text-left">
                        {t("bag_desc_1")}
                     </p>
                  </div>

                  <div className="flex min-w-0 flex-col items-center gap-10 py-12 lg:flex-row lg:gap-14 lg:py-16 xl:gap-20">
                     <h2 className="w-full min-w-0 text-center lg:text-left">
                        {t("bag_heading_2")}
                     </h2>

                     <p className="mt-3 text-center lg:mt-8 lg:text-left">
                        {t("bag_desc_2")}
                     </p>

                     <div className="flex w-full shrink-0 justify-center lg:w-[38%]">
                        <Image
                           alt=""
                           aria-hidden="true"
                           src="/home/3.webp"
                           width={357}
                           height={344}
                           className={imageClass}
                           sizes="(max-width: 640px) 80vw, (max-width: 1024px) 340px, 420px"
                        />
                     </div>
                  </div>

                  <div className="flex flex-col items-center justify-center py-12 lg:py-16">
                     <div className="mb-6 flex max-w-4xl flex-col items-center lg:mb-10">
                        <h3 className="text-center">
                           {t("bag_heading_3")}
                        </h3>

                        <p className="mt-2 text-center lg:mt-3">
                           {t("bag_desc_3")}
                        </p>
                     </div>

                     <Button
                        text={modal("download_app")}
                        ariaLabel={modal("download_app")}
                        onClick={handleDownload}
                     />
                  </div>
               </div>

               <Image
                  alt=""
                  aria-hidden="true"
                  src="/images/LeftFlower.svg"
                  width={69}
                  height={115}
                  className={`${flowerClass} ${styles.leftFlower2} ${styles.swingLeaf}`}
                  sizes="(max-width: 640px) 36px, (max-width: 768px) 48px, 69px"
               />
            </section>

            <section
               className={`${sectionClass} ${styles.lifeJourney}`}
               id="healthy-life-journey"
            >
               <div className={`${containerClass} flex flex-col items-center gap-10 lg:flex-row lg:gap-14 xl:gap-20`}>
                  <div className="relative h-72 w-full max-w-130 overflow-hidden rounded-xl border border-[#82B74C] sm:h-90 md:h-110 lg:h-105 lg:w-[42%] xl:h-115">
                     {loadRestaurantVideo ? (
                        <video
                           autoPlay
                           muted
                           loop
                           playsInline
                           preload="none"
                           poster="/videos/posters/Restaurant.webp"
                           className="h-full w-full object-cover"
                        >
                           <source
                              src="/videos/Restaurant.mp4"
                              type="video/mp4"
                           />
                        </video>
                     ) : (
                        <Image
                           alt="Supafo restoran tanıtım görseli"
                           src="/videos/posters/Restaurant.webp"
                           fill
                           quality={75}
                           sizes="(max-width: 1024px) 100vw, 42vw"
                           className="object-cover"
                        />
                     )}
                  </div>

                  <div className={`${styles.textArea} w-full min-w-0 text-center lg:flex-1 lg:text-left`}>
                     <h1 className="text-center lg:text-left">
                        {t("journey_title")}
                     </h1>

                     <h2 className="text-center lg:text-left">
                        {t("journey_heading")}
                     </h2>

                     <p className="mt-5 text-center lg:mt-7 lg:text-left">
                        {t("journey_desc")}
                     </p>
                  </div>
               </div>
            </section>

            <section
               className={`${sectionClass} ${styles.supafoAI}`}
               id="technology-of-the-future"
            >
               <Image
                  alt=""
                  aria-hidden="true"
                  src="/images/RightFlower.svg"
                  width={69}
                  height={115}
                  className={`${flowerClass} ${styles.rightFlower3} ${styles.swingLeaf2}`}
                  sizes="(max-width: 640px) 36px, (max-width: 768px) 48px, 69px"
               />

               <div className={`${containerClass} flex flex-col items-center gap-10 lg:flex-row lg:gap-14 xl:gap-20`}>
                  <div className={`${styles.textArea} w-full min-w-0 text-center lg:flex-1 lg:text-left`}>
                     <h1 className="text-center lg:text-left">
                        {t("ai_title")}
                     </h1>

                     <p className="mt-3 text-center lg:mt-7 lg:text-left">
                        {t("ai_desc")}
                     </p>
                  </div>

                  <div className="flex w-full shrink-0 justify-center lg:w-[38%]">
                     <Image
                        alt=""
                        aria-hidden="true"
                        src="/home/AI.jpg"
                        width={265}
                        height={344}
                        className={`h-auto w-full max-w-55 rounded-[20px] object-cover sm:max-w-65 md:max-w-75 lg:max-w-[320px] xl:max-w-85 ${styles.supafoAIImage}`}
                        sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 340px"
                     />
                  </div>
               </div>

               <Image
                  alt=""
                  aria-hidden="true"
                  src="/images/LeftFlower.svg"
                  width={69}
                  height={115}
                  className={`${flowerClass} ${styles.leftFlower3} ${styles.swingLeaf}`}
                  sizes="(max-width: 640px) 36px, (max-width: 768px) 48px, 69px"
               />
            </section>

            <section
               className={`relative w-full max-w-full scroll-mt-24 pb-14 sm:pb-16 md:pb-20 lg:py-24 ${styles.supafoDonation}`}
               id="join-supafo-in-doing-good"
            >
               <div className={`${containerClass} px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-40 3xl:px-60`}>
                  <h1 className="pt-14 text-center sm:pt-16 lg:pt-20">
                     {t("donation_title")}
                  </h1>

                  <div className="flex min-w-0 flex-col items-center gap-10 pt-10 lg:flex-row lg:gap-14 lg:pt-16 xl:gap-20">
                     <div className="flex w-full shrink-0 justify-center lg:w-[38%]">
                        <Image
                           alt=""
                           aria-hidden="true"
                           src="/home/Donation.webp"
                           width={320}
                           height={264}
                           className={imageClass}
                           sizes="(max-width: 640px) 80vw, (max-width: 1024px) 340px, 420px"
                        />
                     </div>

                     <h2 className="w-full min-w-0 text-center lg:text-left">
                        {t("donation_heading_1")}
                     </h2>

                     <p className="mt-3 text-center lg:mt-7 lg:text-left">
                        {t("donation_desc_1")}
                     </p>
                  </div>

                  <div className="flex min-w-0 flex-col items-center gap-10 py-12 lg:flex-row lg:gap-14 lg:py-16 xl:gap-20">
                     <h2 className="w-full min-w-0 text-center lg:text-left">
                        {t("donation_heading_2")}
                     </h2>

                     <p className="mt-3 text-center lg:mt-7 lg:text-left">
                        {t("donation_desc_2")}
                     </p>

                     <div className="flex w-full shrink-0 justify-center lg:w-[38%]">
                        <Image
                           alt=""
                           aria-hidden="true"
                           src="/home/6.svg"
                           width={332}
                           height={245}
                           className={imageClass}
                           sizes="(max-width: 640px) 80vw, (max-width: 1024px) 340px, 420px"
                        />
                     </div>
                  </div>
               </div>
            </section>

            <section
               id="faq"
               className={`${sectionClass} mb-10 lg:mb-20 ${styles.faq}`}
            >
               <Image
                  alt=""
                  aria-hidden="true"
                  src="/images/RightFlower.svg"
                  width={69}
                  height={115}
                  className={`${flowerClass} ${styles.rightFlower4} ${styles.swingLeaf2}`}
                  sizes="(max-width: 640px) 36px, (max-width: 768px) 48px, 69px"
               />

               <div className={`${containerClass} max-w-275`}>
                  <h1 className="text-center">
                     {t("faq_title")}
                  </h1>

                  <FAQ faq={faq} />
               </div>

               <Image
                  alt=""
                  aria-hidden="true"
                  src="/images/LeftFlower.svg"
                  width={69}
                  height={115}
                  className={`${flowerClass} ${styles.leftFlower4} ${styles.swingLeaf}`}
                  sizes="(max-width: 640px) 36px, (max-width: 768px) 48px, 69px"
               />
            </section>
         </main>
      </>
   )
}

export default HomeClient
