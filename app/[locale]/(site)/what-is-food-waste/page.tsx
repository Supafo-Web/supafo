import styles from '@/components/modules/what-is-food-waste.module.scss'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const WhatIsFoodWaste = () => {
   const t = useTranslations("WhatIsFoodWaste")

   const richText = {
      brand: (chunks: React.ReactNode) => (
         <span className={styles.brand}>{chunks}</span>
      ),
      br: () => <br />
   }

   return (
      <main>
         <section
            className="relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60 py-15 lg:py-30"
         >
            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`w-9 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower} ${styles.swingLeaf}`}
            />

            <div
               className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-15 items-center"
            >
               <div
                  className="w-full max-w-80 shrink-0"
               >
                  <Image
                     alt="what-is-food-waste"
                     src="/what-is-food-waste/1.svg"
                     width={422}
                     height={462}
                     className="w-80 h-auto"
                     sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 422px"
                  />
               </div>

               <div
                  className="flex flex-col gap-6 md:gap-7 w-full"
               >
                  <h6
                     className={`text-center lg:text-left ${styles.subtitle}`}
                  >
                     Gıda İsrafı Nedir?
                  </h6>

                  <p
                     className={`text-center lg:text-left ${styles.paragraph}`}
                  >
                     Gıda israfı, yenilebilir durumdaki yiyeceklerin tüketilmeden çöpe gitmesi anlamına gelir. Restoranlarda, kafelerde, marketlerde, fırınlarda her gün birçok ürün taze olmasına rağmen zamanında tüketilemediği için atılabiliyor.<br />
                     Oysa bu yiyeceklerin büyük bir kısmı hâlâ güvenle tüketilebilir durumdadır. Sorun çoğu zaman ürünün bozulmuş olması değil; gün sonunda satılamamış, fazla üretilmiş ya da raf ömrü yaklaşmış olmasıdır.<br />
                     Supafo, tam da bu noktada devreye girer.
                  </p>
               </div>
            </div>

            <Image
               alt="flower"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`w-9 sm:w-12 lg:w-17.5 h-auto ${styles.rightFlower} ${styles.swingLeaf2}`}
            />
         </section>

         <section
            className="relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60 py-15 lg:py-30"
         >
            <div
               className="flex flex-col lg:flex-row gap-10 lg:gap-15 items-center"
            >
               <div
                  className="w-full max-w-80 shrink-0"
               >
                  <Image
                     alt="what-is-food-waste"
                     src="/what-is-food-waste/2.svg"
                     width={422}
                     height={462}
                     className="w-80 h-auto"
                     sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 422px"
                  />
               </div>

               <div
                  className="flex flex-col gap-6 md:gap-7 w-full"
               >
                  <h6
                     className={`text-center lg:text-left ${styles.subtitle}`}
                  >
                     Gıda İsrafı Neden Önemli Bir Sorundur?
                  </h6>

                  <p
                     className={`text-center lg:text-left ${styles.paragraph}`}
                  >
                     Gıda israfı sadece yiyeceklerin çöpe gitmesi değildir. Aynı zamanda bu yiyecekleri üretmek için kullanılan su, enerji, emek, toprak, ambalaj ve ulaşım kaynaklarının da boşa harcanması demektir.<br />
                     Bir ürün çöpe gittiğinde, onun üretiminden sofraya gelene kadar geçen tüm süreç de boşa gitmiş olur. Bu durum hem çevreye zarar verir hem de ekonomik kayıplara neden olur.<br />
                     Daha az gıda israfı; daha temiz bir çevre, daha bilinçli tüketim ve daha sürdürülebilir bir gelecek anlamına gelir.
                  </p>
               </div>
            </div>
         </section>

         <section
            className="relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60 py-15 lg:py-30"
         >
            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`w-9 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower2} ${styles.swingLeaf}`}
            />

            <div
               className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-15 items-center"
            >
               <div
                  className="w-full max-w-80 shrink-0"
               >
                  <Image
                     alt="what-is-food-waste"
                     src="/what-is-food-waste/3.svg"
                     width={422}
                     height={462}
                     className="w-80 h-auto"
                     sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 422px"
                  />
               </div>

               <div
                  className="flex flex-col gap-6 md:gap-7 w-full"
               >
                  <h6
                     className={`text-center lg:text-left ${styles.subtitle}`}
                  >
                     Supafo Gıda İsrafını Nasıl Azaltır?
                  </h6>

                  <p
                     className={`text-center lg:text-left ${styles.paragraph}`}
                  >
                     Supafo, restoran, kafe, fırın ve marketlerde gün sonunda satılamayan ama hâlâ tüketilebilir durumda olan ürünleri kullanıcılarla buluşturur.<br />
                     İşletmeler fazla kalan ürünlerini Supafo üzerinden uygun fiyatlı paketler halinde sunar. Kullanıcılar ise bu paketleri uygulama üzerinden keşfeder, satın alır ve belirlenen saatlerde işletmeden teslim alır.<br />
                     Böylece hem işletmeler ürünlerini çöpe atmak yerine değerlendirmiş olur hem de kullanıcılar kaliteli yiyeceklere daha uygun fiyatlarla ulaşır.
                  </p>
               </div>
            </div>

            <Image
               alt="flower"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`w-9 sm:w-12 lg:w-17.5 h-auto ${styles.rightFlower2} ${styles.swingLeaf2}`}
            />
         </section>

         <section
            className="relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60 py-15 lg:py-30 mb-10"
         >
            <div
               className="flex flex-col gap-6 md:gap-7 w-full"
            >
               <h6
                  className={`text-center lg:text-left ${styles.subtitle}`}
               >
                  Her Paket Bir Fark Yaratır
               </h6>

               <p
                  className={`text-center lg:text-left ${styles.paragraph}`}
               >
                  Supafo’da satın alınan her paket, çöpe gitmek üzere olan bir yiyeceğin yeniden değer kazanması demektir.<br />
                  Bu küçük seçimler bir araya geldiğinde büyük bir etki oluşturur. Daha az israf, daha fazla tasarruf ve daha sürdürülebilir bir yaşam mümkün hale gelir.<br />
                  Supafo ile hem bütçeni koruyabilir hem de gıda israfına karşı gerçek bir adım atabilirsin.
               </p>
            </div>

            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`w-9 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower3} ${styles.swingLeaf}`}
            />
         </section>
      </main>
   )
}

export default WhatIsFoodWaste
