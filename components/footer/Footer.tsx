import { getTranslations } from 'next-intl/server'
import styles from './footer.module.scss'
import Image from 'next/image'
import DownloadApp from '@/app/download/page'
import Button from '@/components/button/Button'

interface FooterType {
   locale: string
}

const Footer = async ({ locale }: FooterType) => {
   const t = await getTranslations('Footer')

   const headerLeftLink = [
      {
         id: 1,
         title: t('header_link.about_us'),
         link: 'awd'
      },
      {
         id: 2,
         title: t('header_link.guide'),
         link: 'awd'
      },
      {
         id: 3,
         title: t('header_link.career'),
         link: 'awdawd'
      },
      {
         id: 4,
         title: t('header_link.our_team'),
         link: 'wadawdawd'
      }
   ]

   const headerRightLink = [
      {
         id: 1,
         title: t('header_link.what_is_food_waste'),
         link: 'awd'
      },
      {
         id: 2,
         title: t('header_link.projects'),
         link: 'awd'
      },
      {
         id: 3,
         title: t('header_link.blog'),
         link: 'awdawd'
      },
      {
         id: 4,
         title: t('header_link.contact'),
         link: 'wadawdawd'
      }
   ]

   const mainLink = [
      {
         id: 1,
         title: t('footer_link.faq'),
         link: 'awd'
      },
      {
         id: 2,
         title: t('footer_link.terms'),
         link: 'awd'
      },
      {
         id: 3,
         title: t('footer_link.privacy'),
         link: 'awdawd'
      },
      {
         id: 4,
         title: t('footer_link.cookie'),
         link: 'wadawdawd'
      }
   ]

   const socialLink = [
      {
         id: 1,
         icon: '/socials/WhatsApp.svg',
         link: 'awd'
      },
      {
         id: 2,
         icon: '/socials/Instagram.svg',
         link: 'awd'
      },
      {
         id: 3,
         icon: '/socials/X.svg',
         link: 'awdawd'
      },
      {
         id: 4,
         icon: '/socials/Tiktok.svg',
         link: 'wadawdawd'
      },
      {
         id: 5,
         icon: '/socials/Discord.svg',
         link: 'wadawdawd'
      }
   ]

   return (
      <div
         className={`container-fluid ${styles.footerContainer}`}
      >
         <div
            className={`flex justify-between items-center ${styles.footerHeader}`}
         >
            <Image
               alt="logo"
               src="/logo/logo-white.svg"
               width={150}
               height={129}
               priority
               style={{ width: 150, height: 129 }}
            />
            <div
               className={styles.footerHeaderLinks}
            >
               {headerLeftLink.map((item, index) => (
                  <Button
                     key={item.id || index}
                     text={item.title}
                     href={item.link}
                     footer
                  />
               ))}
            </div>
            <div
               className={styles.footerHeaderLinks}
            >
               {headerRightLink.map((item, index) => (
                  <Button
                     key={item.id || index}
                     text={item.title}
                     href={item.link}
                     footer
                  />
               ))}
            </div>
            <DownloadApp />
         </div>
         <div
            className={`flex py-8 justify-center gap-16`}
         >
            {socialLink.map((item, index) => (
               <Button
                  key={item.id || index}
                  href={item.link}
                  className={`bg-white p-2.75 rounded-full`}
               >
                  <Image
                     alt="social"
                     src={item.icon}
                     width={24}
                     height={24}
                     priority
                     style={{ width: 24, height: 24 }}
                  />
               </Button>
            ))}
         </div>
         <div
            className={`flex justify-evenly py-10`}
         >
            {mainLink.map((item, index) => (
               <Button
                  key={item.id || index}
                  text={item.title}
                  href={item.link}
                  footer
               />
            ))}
         </div>
         <p
            className={styles.footerBottom}
         >
            © 2026 Supafo. Tüm Hakları Saklıdır.
         </p>
      </div>
   )
}

export default Footer
