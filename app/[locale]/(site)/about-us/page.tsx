import { getTranslations } from "next-intl/server"
import styles from "@/components/modules/about-us.module.scss"
import Image from "next/image"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"
import NavbarDownloadButtonClient from "@/components/navbar/NavbarDownloadButtonClient"

export const generateMetadata = createGenerateMetadata("/about-us")

const AboutUs = async () => {
   const t = await getTranslations("AboutUs")
   const modal = await getTranslations("Modal")

   const sectionClass =
      "relative w-full max-w-full px-5 py-14 scroll-mt-24 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-20 lg:py-24 xl:px-28 2xl:px-40 3xl:px-60"

   const containerClass =
      "mx-auto w-full max-w-[1440px] min-w-0 3xl:max-w-[1600px]"

   const titleWrapperClass =
      "mb-10 flex flex-col items-center gap-0 md:mb-12 lg:gap-3"

   const titleUnderClass =
      "h-auto w-[clamp(160px,35vw,283px)]"

   const flowerClass =
      "h-auto w-9 sm:w-12 lg:w-17.5"

   return (
      <main className="min-h-screen w-full max-w-full overflow-hidden">
         <section
            className={sectionClass}
            id="who-we-are"
         >
            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.leftFlower4} ${styles.swingLeaf}`}
            />

            <div className={containerClass}>
               <div className={titleWrapperClass}>
                  <h1 className={`text-center ${styles.title}`}>
                     {t("title_1")}
                  </h1>

                  <Image
                     alt="title-under"
                     src="/icons/about-us/Title-Under.svg"
                     width={283}
                     height={40}
                     className={titleUnderClass}
                     sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
                  />
               </div>

               <div className="flex min-w-0 flex-col gap-6 lg:gap-10">
                  <h6 className={`text-center lg:text-left ${styles.subtitle}`}>
                     {t("subtitle_1")}
                  </h6>

                  <div className="flex min-w-0 flex-col gap-5 leading-8 sm:leading-9 lg:gap-8 lg:leading-10">
                     <p className={`wrap-break-word text-center lg:text-left ${styles.paragraph}`}>
                        {t.rich("desc_1", {
                           brand: (chunks) => (
                              <span className={styles.brand}>
                                 {chunks}
                              </span>
                           ),
                        })}
                     </p>

                     <p className={`wrap-break-word text-center lg:text-left ${styles.paragraph}`}>
                        {t.rich("desc_2", {
                           brand: (chunks) => (
                              <span className={styles.brand}>
                                 {chunks}
                              </span>
                           ),
                        })}
                     </p>
                  </div>
               </div>
            </div>

            <Image
               alt="flower"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.rightFlower4} ${styles.swingLeaf2}`}
            />
         </section>

         <section
            className={sectionClass}
            id="mission-and-vision"
         >
            <div className={containerClass}>
               <div className={titleWrapperClass}>
                  <h1 className={`text-center ${styles.title}`}>
                     {t("title_2")}
                  </h1>

                  <Image
                     alt="title-under"
                     src="/icons/about-us/Title-Under.svg"
                     width={283}
                     height={40}
                     className={titleUnderClass}
                     sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
                  />
               </div>

               <div className="hidden min-w-0 items-center gap-10 lg:flex xl:gap-14">
                  <div className="flex w-[34%] shrink-0 justify-center">
                     <Image
                        alt="mission-vision"
                        src="/icons/about-us/1-2.svg"
                        width={379}
                        height={398}
                        className="h-auto w-full max-w-65 xl:max-w-[320px] 2xl:max-w-95"
                        sizes="(max-width: 1280px) 260px, (max-width: 1536px) 320px, 380px"
                     />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-8 xl:gap-10">
                     <div className="flex min-w-0 flex-col gap-4">
                        <h6 className={`text-left ${styles.subtitle}`}>
                           {t("mission_title")}
                        </h6>

                        <p className={`wrap-break-word text-left ${styles.paragraph}`}>
                           {t("mission_desc")}
                        </p>
                     </div>

                     <div className="flex min-w-0 flex-col gap-4">
                        <h6 className={`text-left ${styles.subtitle}`}>
                           {t("vision_title")}
                        </h6>

                        <p className={`wrap-break-word text-left ${styles.paragraph}`}>
                           {t.rich("vision_desc", {
                              brand: (chunks) => (
                                 <span className={styles.brand}>
                                    {chunks}
                                 </span>
                              ),
                           })}
                        </p>
                     </div>
                  </div>
               </div>

               <div className="flex min-w-0 flex-col gap-12 lg:hidden">
                  <div className="flex min-w-0 flex-col gap-6">
                     <h6 className={`text-left ${styles.subtitle}`}>
                        {t("mission_title")}
                     </h6>

                     <div className="flex flex-col items-center gap-8">
                        <Image
                           alt="mission"
                           src="/icons/about-us/small/1.svg"
                           width={98}
                           height={105}
                           className="h-auto w-24 sm:w-28 md:w-32"
                           sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                        />

                        <p className={`wrap-break-word text-center leading-8 sm:leading-9 ${styles.paragraph}`}>
                           {t("mission_desc")}
                        </p>
                     </div>
                  </div>

                  <div className="flex min-w-0 flex-col gap-6">
                     <h6 className={`text-left ${styles.subtitle}`}>
                        {t("vision_title")}
                     </h6>

                     <div className="flex flex-col items-center gap-8">
                        <Image
                           alt="vision"
                           src="/icons/about-us/small/2.svg"
                           width={98}
                           height={105}
                           className="h-auto w-24 sm:w-28 md:w-32"
                           sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                        />

                        <p className={`wrap-break-word text-center leading-8 sm:leading-9 ${styles.paragraph}`}>
                           {t.rich("vision_desc", {
                              brand: (chunks) => (
                                 <span className={styles.brand}>
                                    {chunks}
                                 </span>
                              ),
                           })}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section
            className={sectionClass}
            id="what-makes-us-different"
         >
            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.leftFlower3} ${styles.swingLeaf}`}
            />

            <div className={containerClass}>
               <div className={titleWrapperClass}>
                  <h1 className={`text-center ${styles.title}`}>
                     {t("title_3")}
                  </h1>

                  <Image
                     alt="title-under"
                     src="/icons/about-us/Title-Under.svg"
                     width={283}
                     height={40}
                     className={titleUnderClass}
                     sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
                  />
               </div>

               <div className="flex min-w-0 flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14 xl:gap-20">
                  <div className="flex min-w-0 flex-1 flex-col gap-6 lg:gap-8">
                     <p className={`wrap-break-word text-center lg:text-left ${styles.articleTitle}`}>
                        {t.rich("principles_title", {
                           brand: (chunks) => (
                              <span className={styles.brand}>
                                 {chunks}
                              </span>
                           ),
                        })}
                     </p>

                     <ul className={`flex list-disc flex-col gap-3 ps-6 text-left sm:ps-8 ${styles.articleSubTitle}`}>
                        <li>
                           <span>
                              {t("principle_1_title")}{" "}
                           </span>
                           {t("principle_1_desc")}
                        </li>

                        <li>
                           <span>
                              {t("principle_2_title")}{" "}
                           </span>
                           {t("principle_2_desc")}
                        </li>

                        <li>
                           <span>
                              {t("principle_3_title")}{" "}
                           </span>
                           {t("principle_3_desc")}
                        </li>
                     </ul>
                  </div>

                  <div className="hidden w-[34%] shrink-0 justify-center lg:flex">
                     <Image
                        alt="about-us-group"
                        src="/icons/about-us/3-4-5.svg"
                        width={452}
                        height={494}
                        className="h-auto w-full max-w-75 xl:max-w-95 2xl:max-w-113"
                        sizes="(max-width: 1280px) 300px, (max-width: 1536px) 380px, 452px"
                     />
                  </div>
               </div>

               <div className="mt-10 grid grid-cols-3 place-items-center gap-3 lg:hidden sm:gap-4">
                  <Image
                     alt="about-us-small-group"
                     src="/icons/about-us/small/3.svg"
                     width={98}
                     height={105}
                     className="h-auto w-20 sm:w-24 md:w-28"
                     sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                  />

                  <Image
                     alt="about-us-small-group"
                     src="/icons/about-us/small/4.svg"
                     width={98}
                     height={105}
                     className="h-auto w-20 sm:w-24 md:w-28"
                     sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                  />

                  <Image
                     alt="about-us-small-group"
                     src="/icons/about-us/small/5.svg"
                     width={98}
                     height={105}
                     className="h-auto w-20 sm:w-24 md:w-28"
                     sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                  />
               </div>
            </div>

            <Image
               alt="flower"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.rightFlower3} ${styles.swingLeaf2}`}
            />
         </section>

         <section
            className={sectionClass}
            id="join-our-struggle"
         >
            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.leftFlower5} ${styles.swingLeaf}`}
            />

            <div className={containerClass}>
               <div className={titleWrapperClass}>
                  <h1 className={`text-center ${styles.title}`}>
                     {t("title_4")}
                  </h1>

                  <Image
                     alt="title-under"
                     src="/icons/about-us/Title-Under.svg"
                     width={283}
                     height={40}
                     className={titleUnderClass}
                     sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
                  />
               </div>

               <div className="flex min-w-0 flex-col items-center gap-10 lg:flex-row lg:gap-14 xl:gap-20">
                  <div className="flex w-full shrink-0 justify-center lg:w-[34%]">
                     <Image
                        alt="mission"
                        src="/icons/about-us/small/6.svg"
                        width={420}
                        height={450}
                        className="h-auto w-full max-w-45 sm:max-w-60 md:max-w-75 lg:max-w-90 xl:max-w-105"
                        sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, (max-width: 1024px) 300px, (max-width: 1280px) 360px, 420px"
                     />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
                     <p className={`wrap-break-word text-center leading-8 sm:leading-9 lg:text-left lg:leading-10 ${styles.paragraph}`}>
                        {t("join_desc")}
                     </p>

                     <NavbarDownloadButtonClient
                        text={modal("download_app")}
                     />
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}

export default AboutUs
