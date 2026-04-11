import Image from "next/image"
import styles from "./page.module.scss"

const Home = () => {
   const media = [
      {
         id: 1,
         src: '/images/1-1.jpg',
         type: 'image'
      },
      {
         id: 2,
         src: '/videos/1-2.mp4',
         type: 'video/mp4'
      },
      {
         id: 3,
         src: '/videos/1-3.mp4',
         type: 'video/mp4'
      },
      {
         id: 4,
         src: '/videos/2-1.mp4',
         type: 'video/mp4'
      },
      {
         id: 5,
         src: '/videos/2-2.mp4',
         type: 'video/mp4'
      },
      {
         id: 6,
         src: '/images/2-3.jpg',
         type: 'image'
      },
      {
         id: 7,
         src: '/images/3-1.jpg',
         type: 'image'
      },
      {
         id: 8,
         src: '/videos/3-2.mp4',
         type: 'video/mp4'
      },
      {
         id: 9,
         src: '/videos/3-3.mp4',
         type: 'video/mp4'
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
                           priority
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
                     Sürpriz paketlerle israfı azalt
                  </h1>
                  <p
                     className={styles.desc}
                  >
                     Yakınındaki işletmelerden uygun fiyatlı paketleri keşfet,
                     tasarruf et ve sürdürülebilir tüketime katkı sağla.
                  </p>
               </div>
            </div>
         </header>

         <main>
            <section
               className={styles.whatIsSupafo}
            >
               <Image
                  alt='flower'
                  src='/images/LeftFlower.svg'
                  width={69}
                  height={115}
                  className={`w-full h-auto max-w-17.25 ${styles.leftFlower}`}
                  priority
                  style={{ width: 69, height: 115 }}
               />
               <div
                  className="flex justify-center gap-15"
               >
                  <Image
                     alt="what-is-supafo"
                     src="/home/1.svg"
                     width={350}
                     height={335}
                     className="w-full h-auto max-w-87.5 mb-30"
                  />
                  <div
                     className={`gap-12.5 ${styles.hero1}`}
                  >
                     <h1>
                        SUPAFO{' '}
                        <span>
                           Nedir?
                        </span>
                     </h1>
                     <h6>
                        Günün Lezzetlerini Kurtar!
                        <p>
                           <span>
                              Supafo
                           </span> ile hergün yüzlerce kafe ve restorandan satılmamış, taze ve lezzetli yiyecekleri inanılmaz indirimlerle elde et. Hem cebini düşün, hem de gezegenimiz için büyük etkili bir adım at. Hayata geçirmek iistediğin bu güzel misyonda sana eşlik etmek için
                           {' '}
                           <span>
                              Supafo
                           </span>
                           {' '}
                           yanında!
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
                  priority
                  style={{ width: 69, height: 115 }}
               />
            </section>

            <section
               className={styles.howDoesSupafo}
            >
               <h1>
                  SUPAFO{' '}
                  <span>
                     Nasıl Çalışır?
                  </span>
               </h1>
            </section>
         </main>
      </>
   )
}

export default Home
