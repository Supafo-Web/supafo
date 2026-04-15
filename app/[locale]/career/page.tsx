import { getTranslations } from 'next-intl/server'
import styles from './page.module.scss'
import Image from 'next/image'
import OpenPositions from '@/app/[locale]/career/OpenPositions'

const Career = async () => {
   const t = await getTranslations("AboutUs")

   const whySupafo = [
      {
         id: 1,
         icon: '/career/Clock.svg',
         title: 'Çevik çalışma saatleri',
         alt: 'clock'
      },
      {
         id: 2,
         icon: '/career/Gift.svg',
         title: 'Ekolojik hediye, bonuslar',
         alt: 'gift'
      },
      {
         id: 3,
         icon: '/career/Book.svg',
         title: 'Eğitim imkanları',
         alt: 'book'
      },
      {
         id: 4,
         icon: '/career/Global.svg',
         title: 'Global bakış, uluslararası etki',
         alt: 'global'
      },
   ]

   return (
      <main>
         <section
            className={`px-10 sm:px-30 lg:px-40 xl:px-50 2xl:px-80 py-30 relative`}
         >
            <Image
               alt='flower'
               src='/images/LeftFlower.svg'
               width={69}
               height={115}
               className={`w-full h-auto max-w-12 lg:max-w-17.5 ${styles.leftFlower}`}

               style={{ width: 69, height: 115 }}
            />
            <div
               className="flex flex-col items-center mb-12.5 gap-3"
            >
               <h1
                  className={`text-center ${styles.title}`}
               >
                  Kariyer
               </h1>

               <Image
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="w-80 h-auto md:w-100 lg:w-56"

                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
            </div>
            <div
               className="flex flex-col gap-12.5"
            >
               <h6
                  className={`text-center lg:text-left ${styles.subtitle}`}
               >
                  Fark Yaratmak İsteyenlerin Adresi
               </h6>
               <div className="flex flex-col gap-10 leading-10">
                  <p
                     className={`text-center lg:text-left ${styles.paragraph}`}
                  >
                     "Biz sadece bir iş yapmıyoruz; gıda israfına karşı mücadele ederek gezegenin geleceğine yatırım yapıyoruz. Bizim için her çalışan, sadece ekibin bir üyesi değil, aynı zamanda gıda israfına karşı yürüttüğümüz misyonun gücüdür. Supafo'da attığınız her adım, yüz binlerce taze ürünün çöpe gitmesini engeller ve gezegenimize somut bir nefes olur.
                  </p>
                  <p
                     className={`text-center lg:text-left ${styles.paragraph}`}
                  >
                     Burada bilginiz ve özveriniz doğrudan tanınır ve hak ettiğiniz hızlı yükselişle ödüllendirilir.
                     Amaç odaklı bir kariyer arıyorsanız; teknolojiyi kullanarak dünyayı daha yaşanılır bir yer yapma hedefimize ortak olun."
                  </p>
               </div>
            </div>
            <Image
               alt='flower'
               src='/images/RightFlower.svg'
               width={69}
               height={115}
               className={`w-full h-auto max-w-12 lg:max-w-17.5 ${styles.rightFlower}`}

               style={{ width: 69, height: 115 }}
            />
         </section>

         <section
            className={`px-10 pb-30`}
         >
            <div
               className="flex flex-col items-center mb-12.5 gap-3"
            >
               <h1
                  className={`text-center ${styles.title}`}
               >
                  Neden Supafo?
               </h1>

               <Image
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="w-80 h-auto md:w-100 lg:w-56"

                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
            </div>
            <div className="flex justify-center items-center">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                  {whySupafo.map((item, index) => (
                     <div
                        key={item.id || index}
                        className={`flex flex-col gap-7.5 items-center px-3.5 py-11.25 rounded-[30px] ${styles.whySupafoArea}`}
                     >
                        <Image
                           alt={item.alt}
                           src={item.icon}
                           width={60}
                           height={60}
                           style={{ width: 60, height: 60 }}
                        />
                        <p
                           className={`${styles.whySupafoTitle}`}
                        >
                           {item.title}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section
            className={`px-10 pb-30`}
         >
            <div
               className="flex flex-col items-center mb-12.5 gap-3"
            >
               <h1
                  className={`text-center ${styles.title}`}
               >
                  Açık Pozisyonlar
               </h1>

               <Image
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="w-80 h-auto md:w-100 lg:w-56"

                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
            </div>
            <div className="flex">
               <OpenPositions />
            </div>
         </section>
      </main>
   )
}

export default Career
