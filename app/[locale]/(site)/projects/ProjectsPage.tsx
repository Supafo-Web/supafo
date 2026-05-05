import styles from "@/components/modules/projects.module.scss"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import type { ReactNode } from "react"
import ProjectsReadMore from "@/app/[locale]/(site)/projects/ProjectsReadMore"

const ProjectsPage = async () => {
   const t = await getTranslations("Projects")

   const richText = {
      brand: (chunks: ReactNode) => (
         <span className={styles.brand}>{chunks}</span>
      ),
      br: () => <br />,
   }

   const imageWrapperClass =
      "flex w-full shrink-0 justify-center lg:w-[36%] xl:w-[34%]"

   const imageClass =
      "h-auto w-full max-w-[260px] object-contain sm:max-w-[300px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px]"

   return (
      <main className="overflow-hidden">
         <section className="relative px-5 py-15 sm:px-8 md:px-12 lg:px-20 lg:py-30 xl:px-32 2xl:px-60">
            <img
               alt=""
               aria-hidden="true"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`h-auto w-9 sm:w-12 lg:w-17.5 ${styles.leftFlower} ${styles.swingLeaf}`}
            />

            <div className="mb-10 flex flex-col items-center gap-0 md:mb-12.5 lg:gap-3">
               <h1 className={`text-center ${styles.title}`}>
                  {t.rich("saplings.title", richText)}
               </h1>

               <img
                  alt=""
                  aria-hidden="true"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
                  className="mx-auto block h-auto w-70.75 max-w-full"
               />
            </div>

            <div className="flex flex-col items-center gap-10 md:gap-16 lg:flex-row-reverse lg:gap-20">
               <div className={imageWrapperClass}>
                  <Image
                     alt={t("saplings.imageAlt")}
                     src="/projects/saplings/1.webp"
                     width={422}
                     height={462}
                     className={imageClass}
                     sizes="(max-width: 640px) 80vw, (max-width: 1024px) 320px, 400px"
                     priority
                     fetchPriority="high"
                  />
               </div>

               <div className="flex w-full flex-col gap-6 md:gap-7">
                  <h2 className={`text-center lg:text-left ${styles.subtitle}`}>
                     {t.rich("saplings.heroSubtitle", richText)}
                  </h2>

                  <div className="flex flex-col">
                     <p className={styles.paragraph}>
                        {t.rich("saplings.heroParagraph1", richText)}
                     </p>

                     <p className={styles.paragraph}>
                        {t.rich("saplings.heroParagraph2", richText)}
                     </p>
                  </div>
               </div>
            </div>

            <img
               alt=""
               aria-hidden="true"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`h-auto w-9 sm:w-12 lg:w-17.5 ${styles.rightFlower} ${styles.swingLeaf2}`}
            />
         </section>

         <ProjectsReadMore />
      </main>
   )
}

export default ProjectsPage
