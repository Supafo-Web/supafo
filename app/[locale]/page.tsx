import Image from "next/image"
import styles from "./page.module.scss"
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

   const faq = [
      {
         id: 1,
         question: "Supafo nedir?",
         answer: "Supafo, israfı azaltmak ve sürdürülebilir tüketime katkı sağlamak amacıyla geliştirilen bir mobil uygulamadır. Kullanıcılar, yakınlarındaki işletmelerden uygun fiyatlı paketleri keşfedebilir, tasarruf edebilir ve çevreye duyarlı bir şekilde tüketim yapabilirler."
      },
      {
         id: 2,
         question: "Supafo nasıl çalışır?",
         answer: "Supafo, kullanıcıların konumlarına göre yakınlarındaki işletmelerin sunduğu uygun fiyatlı paketleri gösterir. Kullanıcılar, uygulama üzerinden bu paketleri satın alabilir ve işletmeden teslim alabilirler. Bu sayede, satılmamış ürünlerin israfını azaltarak hem tasarruf sağlarlar hem de çevreye katkıda bulunurlar."
      },
      {
         id: 3,
         question: "Supafo hangi işletmelerle çalışır?",
         answer: "Supafo, kafe, restoran, market gibi çeşitli işletmelerle işbirliği yapar. Bu işletmeler, satılmamış ürünlerini uygun fiyatlarla sunarak israfı azaltmaya katkıda bulunurlar."
      },
      {
         id: 4,
         question: "Paket içerikleri neden sürprizdir?",
         answer: "Paket içerikleri, işletmelerin günün sonunda satılmamış ürünlerini içerebilir ve bu nedenle sürpriz olabilir. Bu yaklaşım, israfı azaltmak için esneklik sağlar ve kullanıcıların farklı ürünleri keşfetmesine olanak tanır."
      },
      {
         id: 5,
         question: "Supafo'yu kullanmak için herhangi bir ücret ödemem gerekiyor mu?",
         answer: "Hayır, Supafo uygulamasını indirmek ve kullanmak tamamen ücretsizdir. Ancak, uygulama üzerinden satın aldığınız paketler için ödeme yapmanız gerekmektedir."
      },
      {
         id: 6,
         question: "Supafo hangi işletmelerle çalışır?",
         answer: "Supafo, kafe, restoran, market gibi çeşitli işletmelerle işbirliği yapar. Bu işletmeler, satılmamış ürünlerini uygun fiyatlarla sunarak israfı azaltmaya katkıda bulunurlar."
      },
      {
         id: 7,
         question: "Paket içerikleri neden sürprizdir?",
         answer: "Paket içerikleri, işletmelerin günün sonunda satılmamış ürünlerini içerebilir ve bu nedenle sürpriz olabilir. Bu yaklaşım, israfı azaltmak için esneklik sağlar ve kullanıcıların farklı ürünleri keşfetmesine olanak tanır."
      },
      {
         id: 8,
         question: "Supafo'yu kullanmak için herhangi bir ücret ödemem gerekiyor mu?",
         answer: "Hayır, Supafo uygulamasını indirmek ve kullanmak tamamen ücretsizdir. Ancak, uygulama üzerinden satın aldığınız paketler için ödeme yapmanız gerekmektedir."
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
                  className="flex justify-between gap-15"
               >
                  <Image
                     alt="what-is-supafo"
                     src="/home/1.svg"
                     width={350}
                     height={335}
                     className="w-full h-auto max-w-87.5 mb-30"
                     priority
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                           </span> ile hergün yüzlerce kafe ve restorandan satılmamış, taze ve lezzetli yiyecekleri inanılmaz indirimlerle elde et. Hem cebini düşün, hem de gezegenimiz için büyük etkili bir adım at. Hayata geçirmek istediğin bu güzel misyonda sana eşlik etmek için
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
               className={styles.supafoBag}
            >
               <Image
                  alt='flower'
                  src='/images/RightFlower.svg'
                  width={69}
                  height={115}
                  className={`w-full h-auto max-w-17.25 ${styles.rightFlower2}`}
                  priority
                  style={{ width: 69, height: 115 }}
               />
               <h1>
                  SUPAFO{' '}
                  <span>
                     Çanta
                  </span>
               </h1>
               <div
                  className="flex items-center gap-25 mt-12.5"
               >
                  <Image
                     alt="supafo-bag-1"
                     src="/home/2.svg"
                     width={305}
                     height={320}
                     className="w-full h-auto max-w-76.25"
                     priority
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <h6>
                     Supafo Bez Çanta ile Doğaya Dost Ol!
                     <p>
                        Plastik poşetlere veda et, doğayı korurken tarzını da yansıt!
                     </p>
                  </h6>
               </div>
               <div
                  className="flex justify-between items-center gap-25"
               >
                  <h6>
                     Doğal dokusu ve zarif tasarımıyla her ana uyum sağlar.
                     <p>
                        Dayanıklı, şık ve %100 pamuk Supafo bez çantalarla zamansız bir şıklık keşfet.
                     </p>
                  </h6>
                  <Image
                     alt="supafo-bag-2"
                     src="/home/3.svg"
                     width={357}
                     height={344}
                     className="w-full h-auto max-w-89.25"
                     priority
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
               </div>
               <div
                  className="my-30 flex flex-col items-center justify-center"
               >
                  <div className="flex flex-col items-center gap-4 mb-12">
                     <h6>
                        Harekete Katıl, Fark Yarat – İsrafın Değil, Çözümün Bir Parçası Ol!
                     </h6>
                     <p>
                        Her satın aldığın çanta ile bir fidan dikimine katkı sağlıyorsun.
                     </p>
                  </div>
                  <NavbarDownloadButton
                     text="Uygulamayı İndir"
                     title={modal('download_app_title')}
                  />
               </div>
               <Image
                  alt='flower'
                  src='/images/LeftFlower.svg'
                  width={69}
                  height={115}
                  className={`w-full h-auto max-w-17.25 ${styles.leftFlower2}`}
                  priority
                  style={{ width: 69, height: 115 }}
               />
            </section>

            <section
               className={styles.lifeJourney}
            >
               <div className="relative w-75 h-62.5 overflow-hidden rounded-xl mt-4">
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
                  <h1>
                     Sağlıklı Yaşam Yolculuğunu Başlat!
                  </h1>
                  <h6>
                     Lezzetli Seçim Yap, Sağlıklı Yaşa!
                     <p>
                        “Supafo ile sadece yemek kurtarmıyorsun, aynı zamanda yerel ürünleri destekleyerek daha bilinçli ve sağlıklı bir yaşam tarzı seçiyorsun.”
                     </p>
                  </h6>
               </div>
            </section>

            <section
               className={styles.supafoAI}
            >
               <Image
                  alt='flower'
                  src='/images/RightFlower.svg'
                  width={69}
                  height={115}
                  className={`w-full h-auto max-w-17.25 ${styles.rightFlower3}`}
                  priority
                  style={{ width: 69, height: 115 }}
               />

               <div className="flex items-center justify-between gap-25">
                  <div
                     className={styles.textArea}
                  >
                     <h1>
                        Geleceğin Teknolojisi, Çok Yakında Supafo’da!
                     </h1>
                     <p>
                        Gelecek çok yakında burada! Yapay zeka ile güçlendirilmiş yeni özelliklerimiz, size ve gezegenimize daha fazla fayda sağlamak için geliyor. Supafo’nun yapay zeka yolculuğuna adım atmaya hazır olun!
                     </p>
                  </div>

                  <Image
                     alt="supafoAI"
                     src="/home/AI.jpeg"
                     width={265}
                     height={344}
                     className={`w-full h-auto max-w-66.25 ${styles.supafoAIImage}`}
                     priority
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
               </div>

               <Image
                  alt='flower'
                  src='/images/LeftFlower.svg'
                  width={69}
                  height={115}
                  className={`w-full h-auto max-w-17.25 ${styles.leftFlower3}`}
                  priority
                  style={{ width: 69, height: 115 }}
               />
            </section>

            <section
               className={styles.supafoDonation}
            >
               <h1
                  className={`my-10 text-center px-4`}
               >
                  Supafo ile İyiliğe Katıl – Destek Ver, Değişimi Başlat!
               </h1>
               <div
                  className="flex items-center justify-between gap-15 mb-20"
               >
                  <Image
                     alt="supafo-donation"
                     src="/home/Donation.svg"
                     width={320}
                     height={264}
                     className="w-full h-auto max-w-[320px]"
                     priority
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <h6>
                     Yakında aktif olacak Bağış Yap alanımızla:
                     <p>
                        Supafo Fonu’na Katıl – Biz Senin Adına Ulaştıralım! Bağışın; ihtiyaç sahiplerine, çevre projelerine və sosyal destek çalışmalarına güvenle ulaşsın.
                     </p>
                  </h6>
               </div>
               <div
                  className="flex justify-between items-center gap-25"
               >
                  <h6>
                     Supafo ile İyiliğe Dokun!
                     <p>
                        Topluma, doğaya ve ihtiyaç sahiplerine destek olmak için harekete geç!
                     </p>
                  </h6>
                  <Image
                     alt="supafo-donation-2"
                     src="/home/6.svg"
                     width={332}
                     height={245}
                     className="w-full h-auto max-w-83"
                     priority
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
               </div>
            </section>

            <section
               className={styles.faq}
            >
               <div>
                  <h1>
                     S.S.S
                  </h1>
                  <FAQ
                     faq={faq}
                  />
               </div>
               <Image
                  alt='flower'
                  src='/images/RightFlower.svg'
                  width={69}
                  height={115}
                  className={`w-full h-auto max-w-17.25 ${styles.rightFlower4}`}
                  priority
                  style={{ width: 69, height: 115 }}
               />
            </section>
         </main>
      </>
   )
}

export default Home
