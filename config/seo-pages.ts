import type { Locale } from "@/config/seo"

export type SeoPath =
   | ""
   | "/about-us"
   | "/career"
   | "/contact"
   | "/cookie-policy"
   | "/guide"
   | "/kvkk"
   | "/privacy-policy"
   | "/projects"
   | "/terms-and-conditions"
   | "/what-is-food-waste"
   | "/career/team"
   | "/partner"

type PageSeo = {
   title: string
   description: string
   keywords?: string[]
   ogLocale: string
}

export const pageSeo: Record<SeoPath, Record<Locale, PageSeo>> = {
   "": {
      tr: {
         title: "Supafo | Sürpriz Paketlerle Gıda İsrafını Azalt",
         description:
            "Supafo ile yakınındaki restoran ve kafelerden sürpriz paketleri keşfet, tasarruf et ve gıda israfını azalt. Çok dilli yeni nesil food-tech deneyimi.",
         keywords: [
            "Supafo",
            "sürpriz paket",
            "gıda israfı",
            "restoran",
            "kafe",
            "uygun fiyatlı yemek",
            "sürdürülebilir tüketim",
            "Türkiye",
            "Azerbaycan",
         ],
         ogLocale: "tr_TR",
      },
      en: {
         title: "Supafo | Reduce Food Waste with Surprise Packs",
         description:
            "Discover surprise food packs from nearby restaurants and cafés with Supafo. Save money, reduce food waste, and join a multilingual next-generation food-tech experience.",
         keywords: [
            "Supafo",
            "surprise packs",
            "food waste",
            "restaurant",
            "cafe",
            "affordable food",
            "sustainable consumption",
            "Turkey",
            "Azerbaijan",
         ],
         ogLocale: "en_US",
      },
      az: {
         title: "Supafo | Sürpriz Paketlərlə Qida İsrafını Azalt",
         description:
            "Supafo ilə yaxınındakı restoran və kafelərdən sürpriz paketləri kəşf et, qənaət et və qida israfını azalt. Çoxdilli yeni nəsil food-tech təcrübəsi.",
         keywords: [
            "Supafo",
            "sürpriz paket",
            "qida israfı",
            "restoran",
            "kafe",
            "sərfəli yemək",
            "davamlı istehlak",
            "Azərbaycan",
            "Türkiyə",
         ],
         ogLocale: "az_AZ",
      },
   },

   "/about-us": {
      tr: {
         title: "Hakkımızda | Supafo",
         description:
            "Supafo’nun gıda israfını azaltma misyonunu, vizyonunu ve sürdürülebilir tüketim için geliştirdiği yaklaşımı keşfedin.",
         keywords: [
            "Supafo hakkında",
            "gıda israfı",
            "sürdürülebilirlik",
            "food-tech",
            "sürpriz paket",
         ],
         ogLocale: "tr_TR",
      },
      en: {
         title: "About Us | Supafo",
         description:
            "Discover Supafo’s mission, vision, and approach to reducing food waste through sustainable consumption and surprise food packs.",
         keywords: [
            "about Supafo",
            "food waste",
            "sustainability",
            "food-tech",
            "surprise packs",
         ],
         ogLocale: "en_US",
      },
      az: {
         title: "Haqqımızda | Supafo",
         description:
            "Supafo-nun qida israfını azaltmaq missiyasını, vizyonunu və davamlı istehlaka yönəlmiş yanaşmasını kəşf edin.",
         keywords: [
            "Supafo haqqında",
            "qida israfı",
            "davamlılıq",
            "food-tech",
            "sürpriz paket",
         ],
         ogLocale: "az_AZ",
      },
   },

   "/career": {
      tr: {
         title: "Kariyer | Supafo",
         description:
            "Supafo ekibine katılın ve gıda israfını azaltan sürdürülebilir food-tech yolculuğunun parçası olun.",
         keywords: ["Supafo kariyer", "iş ilanları", "food-tech kariyer", "sürdürülebilirlik"],
         ogLocale: "tr_TR",
      },
      en: {
         title: "Careers | Supafo",
         description:
            "Join the Supafo team and become part of a sustainable food-tech journey focused on reducing food waste.",
         keywords: ["Supafo careers", "jobs", "food-tech careers", "sustainability"],
         ogLocale: "en_US",
      },
      az: {
         title: "Karyera | Supafo",
         description:
            "Supafo komandasına qoşulun və qida israfını azaltmağa yönəlmiş davamlı food-tech yolculuğunun bir hissəsi olun.",
         keywords: ["Supafo karyera", "iş imkanları", "food-tech karyera", "davamlılıq"],
         ogLocale: "az_AZ",
      },
   },

   "/contact": {
      tr: {
         title: "İletişim | Supafo",
         description:
            "Supafo ile iletişime geçin. Sorularınız, iş birlikleri ve destek talepleriniz için bize ulaşın.",
         keywords: ["Supafo iletişim", "destek", "iş birliği", "food-tech iletişim"],
         ogLocale: "tr_TR",
      },
      en: {
         title: "Contact | Supafo",
         description:
            "Get in touch with Supafo for questions, partnerships, support requests, and collaboration opportunities.",
         keywords: ["Supafo contact", "support", "partnership", "food-tech contact"],
         ogLocale: "en_US",
      },
      az: {
         title: "Əlaqə | Supafo",
         description:
            "Sual, əməkdaşlıq və dəstək müraciətləriniz üçün Supafo ilə əlaqə saxlayın.",
         keywords: ["Supafo əlaqə", "dəstək", "əməkdaşlıq", "food-tech əlaqə"],
         ogLocale: "az_AZ",
      },
   },

   "/cookie-policy": {
      tr: {
         title: "Çerez Politikası | Supafo",
         description:
            "Supafo çerez politikası hakkında bilgi alın. Web sitemizde çerezlerin nasıl kullanıldığını öğrenin.",
         keywords: ["Supafo çerez politikası", "çerezler", "cookie policy"],
         ogLocale: "tr_TR",
      },
      en: {
         title: "Cookie Policy | Supafo",
         description:
            "Learn about Supafo’s cookie policy and how cookies are used on our website.",
         keywords: ["Supafo cookie policy", "cookies", "privacy"],
         ogLocale: "en_US",
      },
      az: {
         title: "Çərəz Siyasəti | Supafo",
         description:
            "Supafo çərəz siyasəti haqqında məlumat alın və veb saytımızda çərəzlərin necə istifadə edildiyini öyrənin.",
         keywords: ["Supafo çərəz siyasəti", "çərəzlər", "cookie policy"],
         ogLocale: "az_AZ",
      },
   },

   "/guide": {
      tr: {
         title: "Rehber | Supafo",
         description:
            "Supafo’yu nasıl kullanacağınızı öğrenin. Sürpriz paketleri keşfetme, satın alma ve teslim alma adımlarını inceleyin.",
         keywords: ["Supafo rehber", "sürpriz paket nasıl alınır", "gıda israfı rehberi"],
         ogLocale: "tr_TR",
      },
      en: {
         title: "Guide | Supafo",
         description:
            "Learn how to use Supafo. Explore the steps for discovering, purchasing, and collecting surprise food packs.",
         keywords: ["Supafo guide", "how to buy surprise packs", "food waste guide"],
         ogLocale: "en_US",
      },
      az: {
         title: "Bələdçi | Supafo",
         description:
            "Supafo-dan necə istifadə edəcəyinizi öyrənin. Sürpriz paketləri kəşf etmək, almaq və təhvil götürmək addımlarını nəzərdən keçirin.",
         keywords: ["Supafo bələdçi", "sürpriz paket necə alınır", "qida israfı bələdçisi"],
         ogLocale: "az_AZ",
      },
   },

   "/kvkk": {
      tr: {
         title: "KVKK Aydınlatma Metni | Supafo",
         description:
            "Supafo KVKK aydınlatma metni ile kişisel verilerin işlenmesi, saklanması ve korunmasına ilişkin bilgileri inceleyin.",
         keywords: ["Supafo KVKK", "kişisel veriler", "aydınlatma metni"],
         ogLocale: "tr_TR",
      },
      en: {
         title: "Personal Data Protection Notice | Supafo",
         description:
            "Review Supafo’s personal data protection notice and information about the processing and protection of personal data.",
         keywords: ["Supafo personal data", "data protection", "privacy notice"],
         ogLocale: "en_US",
      },
      az: {
         title: "Şəxsi Məlumatların Qorunması | Supafo",
         description:
            "Supafo-nun şəxsi məlumatların işlənməsi, saxlanması və qorunması haqqında məlumatlarını nəzərdən keçirin.",
         keywords: ["Supafo şəxsi məlumatlar", "məlumatların qorunması", "məxfilik"],
         ogLocale: "az_AZ",
      },
   },

   "/privacy-policy": {
      tr: {
         title: "Gizlilik Politikası | Supafo",
         description:
            "Supafo gizlilik politikası ile kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu öğrenin.",
         keywords: ["Supafo gizlilik politikası", "kişisel veri", "privacy policy"],
         ogLocale: "tr_TR",
      },
      en: {
         title: "Privacy Policy | Supafo",
         description:
            "Learn how Supafo collects, uses, and protects your personal data in our privacy policy.",
         keywords: ["Supafo privacy policy", "personal data", "data protection"],
         ogLocale: "en_US",
      },
      az: {
         title: "Məxfilik Siyasəti | Supafo",
         description:
            "Supafo məxfilik siyasəti ilə şəxsi məlumatlarınızın necə toplandığını, istifadə edildiyini və qorunduğunu öyrənin.",
         keywords: ["Supafo məxfilik siyasəti", "şəxsi məlumat", "data protection"],
         ogLocale: "az_AZ",
      },
   },

   "/projects": {
      tr: {
         title: "Projeler | Supafo",
         description:
            "Supafo’nun gıda israfını azaltmaya, sürdürülebilir tüketime ve sosyal faydaya odaklanan projelerini keşfedin.",
         keywords: ["Supafo projeler", "gıda israfı projeleri", "sürdürülebilir projeler"],
         ogLocale: "tr_TR",
      },
      en: {
         title: "Projects | Supafo",
         description:
            "Explore Supafo’s projects focused on reducing food waste, supporting sustainable consumption, and creating social impact.",
         keywords: ["Supafo projects", "food waste projects", "sustainable projects"],
         ogLocale: "en_US",
      },
      az: {
         title: "Layihələr | Supafo",
         description:
            "Supafo-nun qida israfını azaltmağa, davamlı istehlaka və sosial faydaya yönəlmiş layihələrini kəşf edin.",
         keywords: ["Supafo layihələr", "qida israfı layihələri", "davamlı layihələr"],
         ogLocale: "az_AZ",
      },
   },

   "/terms-and-conditions": {
      tr: {
         title: "Şartlar ve Koşullar | Supafo",
         description:
            "Supafo kullanım şartları ve koşullarını inceleyin. Hizmetlerimizi kullanmadan önce geçerli kuralları öğrenin.",
         keywords: ["Supafo şartlar", "kullanım koşulları", "terms and conditions"],
         ogLocale: "tr_TR",
      },
      en: {
         title: "Terms and Conditions | Supafo",
         description:
            "Review Supafo’s terms and conditions. Learn the rules that apply before using our services.",
         keywords: ["Supafo terms", "terms and conditions", "user agreement"],
         ogLocale: "en_US",
      },
      az: {
         title: "Şərtlər və Qaydalar | Supafo",
         description:
            "Supafo istifadə şərtlərini və qaydalarını nəzərdən keçirin. Xidmətlərimizdən istifadə etməzdən əvvəl tətbiq olunan qaydaları öyrənin.",
         keywords: ["Supafo şərtlər", "istifadə qaydaları", "terms and conditions"],
         ogLocale: "az_AZ",
      },
   },

   "/what-is-food-waste": {
      tr: {
         title: "Gıda İsrafı Nedir? | Supafo",
         description:
            "Gıda israfının ne olduğunu, neden önemli olduğunu ve Supafo ile israfı azaltmak için neler yapılabileceğini öğrenin.",
         keywords: ["gıda israfı nedir", "gıda israfını azaltmak", "Supafo"],
         ogLocale: "tr_TR",
      },
      en: {
         title: "What Is Food Waste? | Supafo",
         description:
            "Learn what food waste is, why it matters, and how Supafo helps reduce waste through surprise food packs.",
         keywords: ["what is food waste", "reduce food waste", "Supafo"],
         ogLocale: "en_US",
      },
      az: {
         title: "Qida İsrafı Nədir? | Supafo",
         description:
            "Qida israfının nə olduğunu, niyə vacib olduğunu və Supafo ilə israfı azaltmaq üçün nələr edilə biləcəyini öyrənin.",
         keywords: ["qida israfı nədir", "qida israfını azaltmaq", "Supafo"],
         ogLocale: "az_AZ",
      },
   },

   "/career/team": {
      tr: {
         title: "Ekibimiz | Supafo",
         description:
            "Supafo ekibini ve gıda israfını azaltma hedefiyle çalışan insanları yakından tanıyın.",
         keywords: ["Supafo ekibi", "Supafo takım", "food-tech ekip"],
         ogLocale: "tr_TR",
      },
      en: {
         title: "Our Team | Supafo",
         description:
            "Meet the Supafo team and the people working toward reducing food waste through technology.",
         keywords: ["Supafo team", "food-tech team", "our team"],
         ogLocale: "en_US",
      },
      az: {
         title: "Komandamız | Supafo",
         description:
            "Supafo komandasını və texnologiya ilə qida israfını azaltmaq üçün çalışan insanları yaxından tanıyın.",
         keywords: ["Supafo komanda", "food-tech komanda", "komandamız"],
         ogLocale: "az_AZ",
      },
   },

   "/partner": {
      tr: {
         title: "Partner Ol | Supafo",
         description:
            "Restoran, kafe veya gıda işletmenizi Supafo partner ağına katın; fazla ürünleri değerlendirin ve gıda israfını azaltın.",
         keywords: ["Supafo partner", "restoran partner", "gıda israfını azalt", "işletme kaydı"],
         ogLocale: "tr_TR",
      },
      en: {
         title: "Become a Partner | Supafo",
         description:
            "Join Supafo’s partner network with your restaurant, café, or food business to reduce food waste and make better use of surplus products.",
         keywords: ["Supafo partner", "restaurant partner", "reduce food waste", "business signup"],
         ogLocale: "en_US",
      },
      az: {
         title: "Partner Ol | Supafo",
         description:
            "Restoran, kafe və ya qida biznesinizi Supafo partner şəbəkəsinə qoşun; artıq məhsulları dəyərləndirin və qida israfını azaldın.",
         keywords: ["Supafo partner", "restoran partner", "qida israfını azalt", "biznes qeydiyyatı"],
         ogLocale: "az_AZ",
      },
   },
}
