import { getTranslations } from 'next-intl/server'
import styles from './footer.module.scss'
import Image from 'next/image'
import DownloadApp from '@/app/download/page'
import Button from '@/components/button/Button'
import SocialButtons from '@/components/social-media/SocialMedia'

interface FooterType {
   locale: string
}

const Footer = async ({ locale }: FooterType) => {
   const t = await getTranslations('Footer')

   const headerLeftLink = [
      {
         id: 1,
         title: t('header_link.about_us'),
         link: `/${locale}/about-us`
      },
      {
         id: 2,
         title: t('header_link.guide'),
         link: `/${locale}/guide`
      },
      {
         id: 3,
         title: t('header_link.career'),
         link: `/${locale}/career`
      },
      {
         id: 4,
         title: t('header_link.our_team'),
         link: `/${locale}/our-team`
      }
   ]

   const headerRightLink = [
      {
         id: 1,
         title: t('header_link.what_is_food_waste'),
         link: `/${locale}/what-is-food-waste`
      },
      {
         id: 2,
         title: t('header_link.projects'),
         link: `/${locale}/projects`
      },
      {
         id: 3,
         title: t('header_link.blog'),
         link: `/${locale}/blog`
      },
      {
         id: 4,
         title: t('header_link.contact'),
         link: `/${locale}/contact`
      }
   ]

   const mainLink = [
      {
         id: 1,
         title: t('footer_link.faq'),
         link: `/${locale}/faq`
      },
      {
         id: 2,
         title: t('footer_link.terms'),
         link: `/${locale}/terms-and-conditions`
      },
      {
         id: 3,
         title: t('footer_link.privacy'),
         link: `/${locale}/privacy-policy`
      },
      {
         id: 4,
         title: t('footer_link.cookie'),
         link: `/${locale}/cookie-policy`
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

         <SocialButtons />

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
            {t('copyright')}
         </p>
      </div>
   )
}

export default Footer
