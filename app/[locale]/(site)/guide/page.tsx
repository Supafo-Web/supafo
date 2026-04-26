// app/rehber/page.tsx

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const INITIAL_VISIBLE_COUNT = 5;

const journeySteps = [
   {
      time: "10:00",
      title: "İşletme ürünlerini hazırlar",
      text: "Kafeler, restoranlar, fırınlar ve marketler gün boyunca taze ürünlerini satışa sunar.",
   },
   {
      time: "Gün sonu",
      title: "Satılamayan ürünler kalabilir",
      text: "Bazı ürünler hâlâ tüketilebilir durumda olmasına rağmen gün sonunda işletmenin elinde kalabilir.",
   },
   {
      time: "7/24",
      title: "Supafo’da pakete dönüşür",
      text: "İşletme uygun gördüğü ürünleri Supafo’da paket olarak yayınlar. Kullanıcılar günün her saati paketleri keşfedebilir.",
   },
   {
      time: "Sepet",
      title: "Kullanıcı paketi sepete ekler",
      text: "Kullanıcı beğendiği paketi sepete ekler, teslim saatini görür ve ödeme adımına geçer.",
   },
   {
      time: "Ödeme",
      title: "Kart veya hızlı ödeme ile satın alır",
      text: "Kredi kartı, Apple Pay veya Google Pay ile güvenli şekilde ödeme yapılır.",
   },
   {
      time: "Teslim",
      title: "Paket teslim alınır",
      text: "Kullanıcı belirtilen teslim saatinde işletmeye gider, paketini alır ve gıda israfını önlemeye katkı sağlar.",
   },
];

const packageExamples = [
   {
      image: "/images/guide/coffee.png",
      logo: "☕",
      title: "Coffee Lab Paketi",
      date: "Bugün: 18:00 - 22:00",
      price: "TRY 140.99",
      rating: "4.8",
      distance: "450m",
      pieces: "Son 3",
      isNew: true,
   },
   {
      image: "/images/guide/bakery.png",
      logo: "🥐",
      title: "Fırın Sürpriz Paketi",
      date: "Bugün: 17:30 - 21:00",
      price: "AZN 19.99",
      rating: "4.7",
      distance: "1.2km",
      pieces: "Son 5",
      isNew: false,
   },
   {
      image: "/images/guide/restaurant.png",
      logo: "🍱",
      title: "Restoran Paketi",
      date: "Bugün: 19:00 - 23:00",
      price: "USD 3.99",
      rating: "4.9",
      distance: "850m",
      pieces: "Son 2",
      isNew: true,
   },
];

const faqItems = [
   {
      id: 1,
      question: "Supafo paketi nedir?",
      answer:
         "Supafo paketi, işletmelerin gün sonunda elinde kalan ama hâlâ tüketilebilir durumda olan ürünlerden oluşturduğu uygun fiyatlı pakettir.",
   },
   {
      id: 2,
      question: "Kullanıcılar 7/24 paket alabilir mi?",
      answer:
         "Evet. Kullanıcılar Supafo’da paketleri 7/24 keşfedebilir, sepete ekleyebilir ve uygun olan paketleri satın alabilir. Teslim alma zamanı ise işletmenin belirlediği saat aralığına göre yapılır.",
   },
   {
      id: 3,
      question: "Paketler sepete eklenebiliyor mu?",
      answer:
         "Evet. Kullanıcı beğendiği paketi sepete ekleyebilir, paket detaylarını kontrol edebilir ve ödeme adımında satın alma işlemini tamamlayabilir.",
   },
   {
      id: 4,
      question: "Hangi ödeme yöntemleri destekleniyor?",
      answer:
         "Supafo’da kredi kartı ile ödeme desteklenir. Ayrıca Apple Pay ve Google Pay gibi hızlı ödeme seçenekleriyle kullanıcılar daha pratik şekilde ödeme yapabilir.",
   },
   {
      id: 5,
      question: "Paketin içinde ne olduğunu önceden bilir miyim?",
      answer:
         "Bazı paketlerde içerik detaylı şekilde açıklanabilir, bazıları ise sürpriz paket olabilir. Her iki durumda da amaç tüketilebilir gıdanın israfa gitmesini önlemektir.",
   },
   {
      id: 6,
      question: "İşletmeler neden Supafo kullanır?",
      answer:
         "İşletmeler Supafo ile satılamayan ürünlerini çöpe göndermek yerine ek gelire dönüştürür, yeni müşterilere ulaşır ve daha sürdürülebilir bir işletme deneyimi sunar.",
   },
   {
      id: 7,
      question: "Kullanıcılar Supafo ile ne kazanır?",
      answer:
         "Kullanıcılar daha uygun fiyatlı paketlere ulaşır, yeni mekanlar keşfeder ve gıda israfını azaltmaya katkı sağlar.",
   },
];

export default function SupafoGuidePage() {
   const [activeSide, setActiveSide] = useState<"user" | "business">("user");
   const [savedPackages, setSavedPackages] = useState(8);
   const [quizAnswer, setQuizAnswer] = useState<null | "waste" | "supafo">(
      null
   );

   const impact = useMemo(() => {
      return {
         packages: savedPackages,
         support: Math.max(1, Math.round(savedPackages / 2)),
         saving: savedPackages * 55,
      };
   }, [savedPackages]);

   return (
      <main className="min-h-screen overflow-hidden bg-white font-[var(--font-poppins)] text-[#182F00]">
         <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#82B74C]/[0.14] blur-3xl" />
            <div className="absolute -right-32 top-80 h-96 w-96 rounded-full bg-[#E7EFDF]/80 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#82B74C]/[0.10] blur-3xl" />
         </div>

         <HeroSection />

         <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
               <InfoPanel />
               <FeatureGrid />
            </div>
         </section>

         <JourneySection />

         <AudienceSection activeSide={activeSide} setActiveSide={setActiveSide} />

         <PackageCardsSection />

         <CartPaymentSection />

         <QuizAndImpactSection
            savedPackages={savedPackages}
            setSavedPackages={setSavedPackages}
            quizAnswer={quizAnswer}
            setQuizAnswer={setQuizAnswer}
            impact={impact}
         />

         <AppPromoSection />

         <FAQSection />

         <FinalCTA />
      </main>
   );
}

function HeroSection() {
   return (
      <section className="relative px-5 pb-10 pt-6 sm:px-8 lg:px-12">
         <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[10px] border border-[#EBEBEB] bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.06)] sm:px-5">
            <div className="flex items-center gap-3">
               <div className="grid h-10 w-10 place-items-center rounded-[10px] bg-[#82B74C] text-base font-bold text-white shadow-[0_10px_24px_rgba(130,183,76,0.25)]">
                  S
               </div>

               <div>
                  <p className="text-sm font-bold text-[#182F00]">Supafo</p>
                  <p className="text-xs font-medium text-[#737373]">
                     Gıdanın ikinci şansı
                  </p>
               </div>
            </div>

            <div className="hidden items-center gap-7 text-sm font-medium text-[#737373] md:flex">
               <a href="#nasil-calisir" className="transition hover:text-[#182F00]">
                  Nasıl çalışır?
               </a>
               <a href="#paketler" className="transition hover:text-[#182F00]">
                  Paketler
               </a>
               <a href="#odeme" className="transition hover:text-[#182F00]">
                  Ödeme
               </a>
               <a href="#sss" className="transition hover:text-[#182F00]">
                  SSS
               </a>
            </div>

            <a
               href="#indir"
               className="rounded-[10px] bg-[#82B74C] px-4 py-2.5 text-xs font-semibold text-white shadow-[0_10px_24px_rgba(130,183,76,0.25)] transition hover:-translate-y-0.5 hover:bg-[#578B23] sm:text-sm"
            >
               Uygulamayı Keşfet
            </a>
         </nav>

         <div className="mx-auto grid max-w-7xl items-center gap-10 pb-8 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
            <div>
               <div className="mb-5 inline-flex items-center gap-2 rounded-[10px] border border-[#82B74C]/30 bg-[#E7EFDF] px-4 py-2 text-xs font-semibold text-[#182F00] sm:text-sm">
                  <span className="h-2 w-2 rounded-full bg-[#82B74C]" />
                  7/24 paket keşfet, sepete ekle, güvenli öde
               </div>

               <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.05em] text-[#182F00] sm:text-5xl md:text-6xl lg:text-7xl">
                  Gıda israfını azaltan{" "}
                  <span className="relative inline-block">
                     akıllı paket
                     <span className="absolute -bottom-1 left-0 -z-10 h-3 w-full rounded-[10px] bg-[#82B74C]/[0.24] sm:h-4" />
                  </span>{" "}
                  deneyimi.
               </h1>

               <p className="mt-6 max-w-2xl text-base leading-8 text-[#737373] sm:text-lg">
                  Supafo, satılamayan ama hâlâ tüketilebilir ürünleri uygun fiyatlı
                  paketlere dönüştürür. Kullanıcılar paketleri keşfeder, sepete ekler,
                  kredi kartı veya hızlı ödeme seçenekleriyle satın alır.
               </p>

               <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                     href="#nasil-calisir"
                     className="rounded-[10px] bg-[#82B74C] px-7 py-4 text-center text-sm font-semibold text-white shadow-[0_14px_30px_rgba(130,183,76,0.28)] transition hover:-translate-y-1 hover:bg-[#578B23]"
                  >
                     Rehberi Başlat
                  </a>

                  <a
                     href="#odeme"
                     className="rounded-[10px] border border-[#82B74C] bg-white px-7 py-4 text-center text-sm font-medium text-[#578B23] shadow-[0_8px_22px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:bg-[#578B23] hover:text-white"
                  >
                     Sepet ve Ödeme
                  </a>
               </div>

               <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                  <StatCard value="7/24" label="Paket keşfetme" />
                  <StatCard value="2+" label="Ödeme seçeneği" />
                  <StatCard value="%50+" label="Fırsatlı paketler" />
               </div>
            </div>

            <div className="mx-auto w-full max-w-[560px]">
               <AppStylePackageCard large />
            </div>
         </div>
      </section>
   );
}

function InfoPanel() {
   return (
      <div className="rounded-[10px] bg-[#E7EFDF] p-6 sm:p-8 lg:p-10">
         <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#578B23] sm:text-sm">
            Gıda israfı nedir?
         </p>

         <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#182F00] sm:text-4xl lg:text-5xl">
            Çöpe giden sadece yemek değildir.
         </h2>

         <p className="mt-5 text-base leading-8 text-[#737373] sm:text-lg">
            O yemeği üretmek için harcanan su, enerji, emek, zaman ve para da boşa
            gider. Supafo bu döngüyü kullanıcı, işletme ve şehir için daha faydalı
            bir modele dönüştürür.
         </p>
      </div>
   );
}

function FeatureGrid() {
   const items = [
      ["🛒", "Sepete ekle", "Beğendiğin paketi sepete al ve detaylarını kontrol et."],
      ["💳", "Kartla öde", "Kredi kartı ile hızlı ve güvenli ödeme yap."],
      ["📱", "Apple Pay / Google Pay", "Desteklenen cihazlarda hızlı ödeme seçeneklerini kullan."],
      ["⏰", "7/24 erişim", "Paketleri günün her saati uygulamadan keşfet."],
   ];

   return (
      <div className="grid gap-4 sm:grid-cols-2">
         {items.map(([icon, title, desc]) => (
            <div
               key={title}
               className="rounded-[10px] border border-[#EBEBEB] bg-white p-5 shadow-[0_10px_28px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:border-[#82B74C]/50 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] sm:p-6"
            >
               <div className="grid h-12 w-12 place-items-center rounded-[10px] bg-[#82B74C]/[0.22] text-2xl">
                  {icon}
               </div>

               <h3 className="mt-4 text-lg font-bold text-[#182F00]">{title}</h3>
               <p className="mt-2 text-sm leading-7 text-[#737373] sm:text-base">
                  {desc}
               </p>
            </div>
         ))}
      </div>
   );
}

function JourneySection() {
   return (
      <section id="nasil-calisir" className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
         <div className="mx-auto max-w-7xl">
            <SectionHeader
               eyebrow="Supafo akışı"
               title="Bir ürün Supafo’da nasıl fırsata dönüşür?"
               text="Supafo deneyimi sadece paket listelemekten ibaret değildir. Keşif, sepet, ödeme ve teslim alma adımlarıyla tamamlanan net bir kullanıcı yolculuğudur."
            />

            <div className="relative mt-10">
               <div className="absolute left-[19px] top-0 hidden h-full w-px bg-[#EBEBEB] md:block" />

               <div className="grid gap-4">
                  {journeySteps.map((step, index) => (
                     <div
                        key={step.title}
                        className="group grid gap-4 md:grid-cols-[72px_1fr]"
                     >
                        <div className="hidden md:block">
                           <div className="sticky top-5 grid h-10 w-10 place-items-center rounded-[10px] bg-[#82B74C] text-sm font-bold text-white shadow-[0_10px_24px_rgba(130,183,76,0.28)]">
                              {index + 1}
                           </div>
                        </div>

                        <div className="rounded-[10px] border border-[#EBEBEB] bg-white p-5 shadow-[0_10px_28px_rgba(0,0,0,0.05)] transition group-hover:-translate-y-1 group-hover:border-[#82B74C]/50 sm:p-6">
                           <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <div>
                                 <p className="text-sm font-bold text-[#578B23]">
                                    {step.time}
                                 </p>
                                 <h3 className="mt-1 text-xl font-bold text-[#182F00] sm:text-2xl">
                                    {step.title}
                                 </h3>
                              </div>

                              <span className="w-fit rounded-[10px] bg-[#E7EFDF] px-4 py-2 text-xs font-semibold text-[#578B23] sm:text-sm">
                                 {index === journeySteps.length - 1
                                    ? "İsraf önlendi"
                                    : "Devam ediyor"}
                              </span>
                           </div>

                           <p className="mt-3 max-w-3xl text-sm leading-7 text-[#737373] sm:text-base">
                              {step.text}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

function AudienceSection({
   activeSide,
   setActiveSide,
}: {
   activeSide: "user" | "business";
   setActiveSide: (value: "user" | "business") => void;
}) {
   return (
      <section id="isletmeler" className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
         <div className="mx-auto max-w-7xl rounded-[10px] bg-[#E7EFDF] p-5 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
               <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#578B23] sm:text-sm">
                     Kullanıcı ve işletme
                  </p>

                  <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#182F00] sm:text-4xl lg:text-5xl">
                     Supafo iki taraf için de net değer üretir.
                  </h2>

                  <p className="mt-5 text-base leading-8 text-[#737373] sm:text-lg">
                     Kullanıcılar uygun fiyatlı paketleri keşfeder. İşletmeler kalan
                     ürünlerini değerlendirir. Her iki taraf da daha sürdürülebilir bir
                     tüketim modelinin parçası olur.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                     <AudienceButton
                        active={activeSide === "user"}
                        icon="🙋‍♀️"
                        title="Kullanıcıyım"
                        text="Paket keşfetmek ve uygun fiyatla satın almak istiyorum."
                        onClick={() => setActiveSide("user")}
                     />

                     <AudienceButton
                        active={activeSide === "business"}
                        icon="🏪"
                        title="İşletmeyim"
                        text="Kalan ürünlerimi değerlendirmek istiyorum."
                        onClick={() => setActiveSide("business")}
                     />
                  </div>
               </div>

               <div className="rounded-[10px] bg-white p-5 shadow-[0_14px_32px_rgba(0,0,0,0.07)] sm:p-7">
                  {activeSide === "user" ? (
                     <GuideSteps
                        title="Kullanıcılar için"
                        steps={[
                           [
                              "01",
                              "Paketleri keşfet",
                              "Yakındaki kafe, restoran, fırın ve market paketlerini 7/24 görüntüle.",
                           ],
                           [
                              "02",
                              "Sepete ekle",
                              "Beğendiğin paketi sepete ekle ve teslim saatini kontrol et.",
                           ],
                           [
                              "03",
                              "Güvenli öde",
                              "Kredi kartı, Apple Pay veya Google Pay ile ödemeni tamamla.",
                           ],
                           [
                              "04",
                              "Teslim al",
                              "Belirtilen saatte işletmeye gidip paketini al.",
                           ],
                        ]}
                     />
                  ) : (
                     <GuideSteps
                        title="İşletmeler için"
                        steps={[
                           [
                              "01",
                              "Kalan ürünleri seç",
                              "Satılamayan ama tüketilebilir ürünleri belirle.",
                           ],
                           [
                              "02",
                              "Paket oluştur",
                              "Fiyat, stok adedi, teslim saati ve paket bilgisini gir.",
                           ],
                           [
                              "03",
                              "Siparişleri takip et",
                              "Kullanıcıların sepet ve ödeme sonrası oluşturduğu siparişleri yönet.",
                           ],
                           [
                              "04",
                              "Ek gelir kazan",
                              "Çöpe gidecek ürünleri yeni müşteriye ve gelire dönüştür.",
                           ],
                        ]}
                     />
                  )}
               </div>
            </div>
         </div>
      </section>
   );
}

function PackageCardsSection() {
   return (
      <section id="paketler" className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
         <div className="mx-auto max-w-7xl">
            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
               {packageExamples.map((item) => (
                  <AppStylePackageCard key={item.title} item={item} />
               ))}
            </div>
         </div>
      </section>
   );
}

function CartPaymentSection() {
   return (
      <section id="odeme" className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
         <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[10px] bg-[#E7EFDF] p-6 sm:p-8 lg:p-10">
               <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#578B23] sm:text-sm">
                  Sepet ve ödeme
               </p>

               <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#182F00] sm:text-4xl lg:text-5xl">
                  Kullanıcı paketi sepete ekler, istediği yöntemle öder.
               </h2>

               <p className="mt-5 text-base leading-8 text-[#737373] sm:text-lg">
                  Supafo’da satın alma deneyimi hızlı ve anlaşılır olmalı. Kullanıcı
                  paketi sepete ekler, teslim saatini kontrol eder ve kredi kartı ya
                  da Apple Pay / Google Pay ile ödeme yapar.
               </p>

               <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <MiniFeature icon="🛒" title="Sepete ekle" />
                  <MiniFeature icon="💳" title="Kredi kartı" />
                  <MiniFeature icon="📱" title="Apple Pay / Google Pay" />
               </div>
            </div>

            <div className="rounded-[10px] border border-[#EBEBEB] bg-white p-5 shadow-[0_14px_32px_rgba(0,0,0,0.06)] sm:p-6">
               <div className="rounded-[10px] bg-[#E7EFDF] p-4">
                  <p className="text-sm font-semibold text-[#578B23]">Sepet özeti</p>

                  <div className="mt-4 space-y-3">
                     <CartRow title="Coffee Lab Paketi" detail="1 paket" price="AZN 140" />
                     <CartRow title="Teslim zamanı" detail="Bugün" price="18:00 - 22:00" />
                     <CartRow title="Ödeme yöntemi" detail="Seçili" price="Apple Pay" />
                  </div>

                  <div className="mt-4 border-t border-[#82B74C]/30 pt-4">
                     <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-[#737373]">
                           Toplam
                        </span>
                        <span className="text-xl font-bold text-[#182F00]">
                           AZN 140
                        </span>
                     </div>

                     <button className="mt-4 w-full rounded-[10px] bg-[#82B74C] py-3 text-sm font-semibold text-white transition hover:bg-[#578B23]">
                        Ödemeyi Tamamla
                     </button>
                  </div>
               </div>

               <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {["Visa", "Apple Pay", "Google Pay"].map((item) => (
                     <div
                        key={item}
                        className="rounded-[10px] border border-[#EBEBEB] bg-white px-3 py-3 text-xs font-semibold text-[#182F00]"
                     >
                        {item}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

function QuizAndImpactSection({
   savedPackages,
   setSavedPackages,
   quizAnswer,
   setQuizAnswer,
   impact,
}: {
   savedPackages: number;
   setSavedPackages: (value: number) => void;
   quizAnswer: null | "waste" | "supafo";
   setQuizAnswer: (value: null | "waste" | "supafo") => void;
   impact: {
      packages: number;
      support: number;
      saving: number;
   };
}) {
   return (
      <section id="etki" className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
         <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
            <div className="rounded-[10px] bg-[#E7EFDF] p-6 sm:p-8 lg:p-10">
               <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#578B23] sm:text-sm">
                  Mini oyun
               </p>

               <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#182F00] sm:text-4xl">
                  İsraf mı, fırsat mı?
               </h2>

               <p className="mt-5 text-base leading-8 text-[#737373]">
                  Bir kafede gün sonunda 5 kruvasan kaldı. Hâlâ taze, ama yarın satışa
                  uygun olmayabilir. Ne olmalı?
               </p>

               <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <button
                     onClick={() => setQuizAnswer("waste")}
                     className="rounded-[10px] border border-[#EBEBEB] bg-white p-5 text-left transition hover:-translate-y-1 hover:border-[#82B74C]"
                  >
                     <p className="text-3xl">🗑️</p>
                     <p className="mt-3 text-lg font-bold text-[#182F00]">
                        Çöpe gider
                     </p>
                     <p className="mt-2 text-sm leading-6 text-[#737373]">
                        Klasik ama kötü senaryo.
                     </p>
                  </button>

                  <button
                     onClick={() => setQuizAnswer("supafo")}
                     className="rounded-[10px] bg-[#82B74C] p-5 text-left text-white shadow-[0_14px_30px_rgba(130,183,76,0.28)] transition hover:-translate-y-1 hover:bg-[#578B23]"
                  >
                     <p className="text-3xl">✨</p>
                     <p className="mt-3 text-lg font-bold">Supafo paketi olur</p>
                     <p className="mt-2 text-sm leading-6 text-white/85">
                        İsraf yerine fırsata dönüşür.
                     </p>
                  </button>
               </div>

               {quizAnswer && (
                  <div className="mt-5 rounded-[10px] border border-[#82B74C] bg-white p-5">
                     <p className="font-bold text-[#182F00]">
                        {quizAnswer === "supafo"
                           ? "Doğru seçim!"
                           : "Aslında daha iyi bir yol var."}
                     </p>

                     <p className="mt-2 text-sm leading-7 text-[#737373] sm:text-base">
                        {quizAnswer === "supafo"
                           ? "Bu ürün Supafo’da uygun fiyatlı paket olarak yayınlanabilir, kullanıcı tarafından sepete eklenebilir ve çöpe gitmeden değerlendirilebilir."
                           : "Bu kruvasanlar hâlâ tüketilebilir durumdaysa Supafo paketi olarak listelenebilir."}
                     </p>
                  </div>
               )}
            </div>

            <div className="rounded-[10px] border border-[#EBEBEB] bg-white p-6 shadow-[0_14px_32px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10">
               <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#578B23] sm:text-sm">
                  Etki hesaplayıcı
               </p>

               <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#182F00] sm:text-4xl">
                  Ayda kaç paket kurtarabilirsin?
               </h2>

               <p className="mt-5 text-base leading-8 text-[#737373]">
                  Küçük seçimler birikince büyük bir etkiye dönüşür. Bu alan
                  bilgilendirme amaçlı basit bir simülasyondur.
               </p>

               <div className="mt-7 rounded-[10px] bg-[#E7EFDF] p-5">
                  <div className="flex items-center justify-between gap-4">
                     <span className="text-sm font-medium text-[#737373]">
                        Paket sayısı
                     </span>

                     <span className="rounded-[10px] bg-[#82B74C] px-4 py-2 text-lg font-bold text-white">
                        {savedPackages}
                     </span>
                  </div>

                  <input
                     type="range"
                     min="1"
                     max="30"
                     value={savedPackages}
                     onChange={(e) => setSavedPackages(Number(e.target.value))}
                     className="mt-5 w-full accent-[#82B74C]"
                  />
               </div>

               <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <ImpactCard value={impact.packages} label="Paket kurtarılır" />
                  <ImpactCard value={impact.support} label="İşletmeye destek" />
                  <ImpactCard value={`AZN ${impact.saving}`} label="Tahmini tasarruf" />
               </div>
            </div>
         </div>
      </section>
   );
}

function AppPromoSection() {
   return (
      <section id="indir" className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
         <div className="mx-auto max-w-7xl rounded-[10px] bg-[#E7EFDF] p-6 sm:p-8 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
               <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#578B23] sm:text-sm">
                     Mobil uygulama
                  </p>

                  <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.04em] text-[#182F00] sm:text-4xl lg:text-5xl">
                     Supafo deneyimi cebinde.
                  </h2>

                  <p className="mt-5 max-w-xl text-base leading-8 text-[#737373] sm:text-lg">
                     Yakındaki paketleri 7/24 keşfet, favorilerine ekle, sepete al ve
                     kredi kartı veya hızlı ödeme yöntemleriyle satın al.
                  </p>

                  <div className="mt-7">
                     <DownloadButtons />
                  </div>
               </div>

               <div className="mx-auto w-full max-w-[460px]">
                  <div className="rounded-[10px] border border-[#EBEBEB] bg-white p-4 shadow-[0_16px_38px_rgba(0,0,0,0.08)]">
                     <AppStylePackageCard large />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

function FAQSection() {
   const [openFAQ, setOpenFAQ] = useState<number | null>(1);
   const [showAll, setShowAll] = useState(false);

   const firstFaq = faqItems.slice(0, INITIAL_VISIBLE_COUNT);
   const extraFaq = faqItems.slice(INITIAL_VISIBLE_COUNT);
   const hasHiddenItems = faqItems.length > INITIAL_VISIBLE_COUNT;

   const renderFaq = (item: (typeof faqItems)[number]) => {
      const isOpen = openFAQ === item.id;

      return (
         <div key={item.id} className="flex flex-col gap-3">
            <button
               onClick={() => setOpenFAQ((prev) => (prev === item.id ? null : item.id))}
               className={[
                  "flex w-full items-center justify-between gap-4 rounded-[10px] border px-4 py-4 text-left text-[15px] leading-6 transition sm:px-5 sm:py-[18px] sm:text-lg",
                  isOpen
                     ? "border-[#82B74C] bg-[#82B74C] text-white shadow-[0_10px_24px_rgba(130,183,76,0.22)]"
                     : "border-[#82B74C] bg-white text-[#182F00] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]",
               ].join(" ")}
            >
               <span className="font-normal">{item.question}</span>

               <span
                  className={[
                     "grid h-7 w-7 shrink-0 place-items-center rounded-full transition duration-300",
                     isOpen ? "rotate-180 bg-white text-[#82B74C]" : "bg-[#E7EFDF] text-[#578B23]",
                  ].join(" ")}
               >
                  {isOpen ? "−" : "+"}
               </span>
            </button>

            <div
               className={[
                  "overflow-hidden transition-all duration-500",
                  isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0",
               ].join(" ")}
            >
               <div
                  className={[
                     "rounded-[10px] border border-[#82B74C] text-[15px] leading-7 text-[#182F00] transition-all duration-500 sm:text-lg sm:leading-8",
                     isOpen
                        ? "translate-y-0 bg-[#F2FFE5] px-4 py-5 sm:px-5 sm:py-6"
                        : "-translate-y-2 bg-white px-4 py-0 sm:px-5",
                  ].join(" ")}
               >
                  {item.answer}
               </div>
            </div>
         </div>
      );
   };

   return (
      <section id="sss" className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
         <div className="mx-auto max-w-4xl">
            <SectionHeader
               eyebrow="Merak edilenler"
               title="Supafo hakkında kısa rehber"
               text="Kullanıcıların paket, sepet, ödeme, teslim ve işletme süreciyle ilgili en sık merak ettiği konular."
            />

            <div className="mt-9 flex flex-col gap-4">
               <div className="flex flex-col gap-4">{firstFaq.map(renderFaq)}</div>

               {hasHiddenItems && (
                  <div
                     className={[
                        "overflow-hidden transition-all duration-700",
                        showAll
                           ? "max-h-[2000px] translate-y-0 opacity-100"
                           : "max-h-0 -translate-y-4 opacity-0",
                     ].join(" ")}
                  >
                     <div className="flex flex-col gap-4">{extraFaq.map(renderFaq)}</div>
                  </div>
               )}

               {hasHiddenItems && (
                  <button
                     onClick={() => setShowAll((prev) => !prev)}
                     className={[
                        "mt-1 inline-flex h-10 w-10 items-center justify-center self-center rounded-full border border-[#82B74C] bg-white text-[#578B23] transition hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]",
                        showAll ? "rotate-180" : "",
                     ].join(" ")}
                     aria-label={showAll ? "Daha az göster" : "Daha fazla göster"}
                  >
                     ↓
                  </button>
               )}
            </div>
         </div>
      </section>
   );
}

function FinalCTA() {
   return (
      <section className="px-5 pb-16 pt-8 sm:px-8 lg:px-12">
         <div className="mx-auto max-w-7xl rounded-[10px] bg-[#E7EFDF] p-6 text-center sm:p-10 lg:p-12">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-[-0.04em] text-[#182F00] sm:text-4xl lg:text-5xl">
               Bugün küçük bir seçim, yarın büyük bir fark yaratabilir.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#737373] sm:text-lg">
               Supafo ile bir paketi kurtarmak sadece tasarruf etmek değildir. Aynı
               zamanda emeğe, doğaya ve yerel işletmelere sahip çıkmaktır.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
               <a
                  href="#indir"
                  className="rounded-[10px] bg-[#82B74C] px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(130,183,76,0.28)] transition hover:-translate-y-1 hover:bg-[#578B23]"
               >
                  Uygulamayı Keşfet
               </a>

               <a
                  href="#isletmeler"
                  className="rounded-[10px] border border-[#82B74C] bg-white px-8 py-4 text-sm font-medium text-[#578B23] transition hover:-translate-y-1 hover:bg-[#578B23] hover:text-white"
               >
                  İşletmemi Supafo’ya Ekle
               </a>
            </div>
         </div>
      </section>
   );
}

function AppStylePackageCard({
   item,
   large,
}: {
   item?: (typeof packageExamples)[number];
   large?: boolean;
}) {
   const card = item ?? packageExamples[0];

   return (
      <div
         className={[
            "relative overflow-hidden rounded-[10px] bg-[#E7EFDF] shadow-[0_16px_38px_rgba(0,0,0,0.12)]",
            large ? "h-[360px] sm:h-[420px] lg:h-[460px]" : "h-[260px] sm:h-[280px]",
         ].join(" ")}
      >
         <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 420px"
         />

         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />

         <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4">
            <div className="flex items-start justify-between gap-3">
               <div className="flex flex-wrap gap-2">
                  <span className="rounded-[10px] bg-[#82B74C] px-3 py-1.5 text-[11px] font-semibold text-white">
                     {card.pieces}
                  </span>

                  {card.isNew && (
                     <span className="rounded-[10px] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#82B74C]">
                        Yeni
                     </span>
                  )}
               </div>

               <button
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-white text-[#82B74C] shadow-[0_8px_22px_rgba(0,0,0,0.18)] transition hover:scale-105"
                  aria-label="Favorilere ekle"
               >
                  ♥
               </button>
            </div>

            <div className="flex items-end justify-between gap-4">
               <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                     <div className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full bg-white text-base">
                        {card.logo}
                     </div>

                     <h3 className="truncate text-base font-medium text-white sm:text-lg">
                        {card.title}
                     </h3>
                  </div>

                  <div className="mt-3 w-fit rounded-[10px] bg-[#82B74C] px-3 py-1.5 text-[11px] font-medium text-white">
                     {card.date}
                  </div>

                  <div className="mt-3 flex max-w-[220px] items-center justify-between gap-4 text-sm font-medium text-white">
                     <span className="inline-flex items-center gap-1.5">★ {card.rating}</span>
                     <span className="inline-flex items-center gap-1.5">📍 {card.distance}</span>
                  </div>
               </div>

               <div className="shrink-0 rounded-[10px] bg-[#82B74C] px-3 py-2 text-sm font-semibold text-white">
                  {card.price}
               </div>
            </div>
         </div>
      </div>
   );
}

function DownloadButtons() {
   const data = [
      {
         title: "App Store",
         icon: "",
         href: "#",
      },
      {
         title: "Google Play",
         icon: "▶",
         href: "#",
      },
   ];

   return (
      <div className="flex flex-wrap items-center gap-3 sm:gap-5">
         {data.map((item) => (
            <a
               key={item.title}
               href={item.href}
               target="_blank"
               rel="noreferrer"
               className="group flex w-full max-w-[170px] items-center gap-2 rounded-[10px] border border-[#578B23] bg-white px-4 py-3 text-sm font-medium text-[#578B23] shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition duration-300 hover:bg-[#578B23] hover:text-white hover:shadow-[0_10px_24px_rgba(87,139,35,0.28),0_0_0_4px_rgba(87,139,35,0.10)] sm:px-5 sm:py-4 sm:text-base"
            >
               <span className="grid h-5 w-5 place-items-center transition duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {item.icon}
               </span>
               <span>{item.title}</span>
            </a>
         ))}
      </div>
   );
}

function SectionHeader({
   eyebrow,
   title,
   text,
}: {
   eyebrow: string;
   title: string;
   text: string;
}) {
   return (
      <div className="mx-auto max-w-3xl text-center">
         <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#578B23] sm:text-sm">
            {eyebrow}
         </p>

         <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#182F00] sm:text-4xl lg:text-5xl">
            {title}
         </h2>

         <p className="mt-5 text-base leading-8 text-[#737373] sm:text-lg">
            {text}
         </p>
      </div>
   );
}

function StatCard({ value, label }: { value: string; label: string }) {
   return (
      <div className="rounded-[10px] border border-[#EBEBEB] bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.05)]">
         <p className="text-2xl font-bold text-[#182F00]">{value}</p>
         <p className="mt-1 text-xs font-medium text-[#737373]">{label}</p>
      </div>
   );
}

function AudienceButton({
   active,
   icon,
   title,
   text,
   onClick,
}: {
   active: boolean;
   icon: string;
   title: string;
   text: string;
   onClick: () => void;
}) {
   return (
      <button
         onClick={onClick}
         className={[
            "rounded-[10px] p-5 text-left transition",
            active
               ? "bg-[#82B74C] text-white shadow-[0_14px_30px_rgba(130,183,76,0.28)]"
               : "bg-white text-[#182F00] hover:-translate-y-1",
         ].join(" ")}
      >
         <p className="text-3xl">{icon}</p>
         <p className="mt-3 text-lg font-bold">{title}</p>
         <p className={["mt-2 text-sm leading-6", active ? "text-white/85" : "text-[#737373]"].join(" ")}>
            {text}
         </p>
      </button>
   );
}

function GuideSteps({
   title,
   steps,
}: {
   title: string;
   steps: string[][];
}) {
   return (
      <div>
         <h3 className="text-2xl font-bold tracking-[-0.03em] text-[#182F00] sm:text-3xl">
            {title}
         </h3>

         <div className="mt-6 grid gap-3">
            {steps.map(([num, stepTitle, desc]) => (
               <div key={num} className="flex gap-4 rounded-[10px] bg-[#E7EFDF] p-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-[#82B74C] text-xs font-bold text-white">
                     {num}
                  </div>

                  <div>
                     <p className="font-bold text-[#182F00]">{stepTitle}</p>
                     <p className="mt-1 text-sm leading-7 text-[#737373]">{desc}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

function MiniFeature({ icon, title }: { icon: string; title: string }) {
   return (
      <div className="rounded-[10px] bg-white p-4 text-center shadow-[0_8px_22px_rgba(0,0,0,0.05)]">
         <p className="text-2xl">{icon}</p>
         <p className="mt-2 text-sm font-semibold text-[#182F00]">{title}</p>
      </div>
   );
}

function CartRow({
   title,
   detail,
   price,
}: {
   title: string;
   detail: string;
   price: string;
}) {
   return (
      <div className="flex items-center justify-between gap-4 rounded-[10px] bg-white p-3">
         <div>
            <p className="text-sm font-semibold text-[#182F00]">{title}</p>
            <p className="text-xs text-[#737373]">{detail}</p>
         </div>
         <p className="text-sm font-bold text-[#578B23]">{price}</p>
      </div>
   );
}

function ImpactCard({
   value,
   label,
}: {
   value: string | number;
   label: string;
}) {
   return (
      <div className="rounded-[10px] bg-[#E7EFDF] p-4">
         <p className="text-2xl font-bold text-[#182F00]">{value}</p>
         <p className="mt-2 text-xs font-semibold leading-5 text-[#737373]">
            {label}
         </p>
      </div>
   );
}
