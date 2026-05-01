import { getLocale, getTranslations } from 'next-intl/server'
import styles from '@/components/modules/footer.module.scss'
import DownloadApp from '@/components/download/page'
import Button from '@/components/button/Button'
import SocialButtons from '@/components/social-media/SocialMedia'
import FooterFaqButton from '@/components/footer/FooterFaqButton'

const Footer = async () => {
   const t = await getTranslations('Footer')
   const locale = await getLocale()

   const headerLeftLink = [
      {
         id: 1,
         title: t('header_link.career'),
         link: `/${locale}/career`
      },
      {
         id: 2,
         title: t('header_link.what_is_food_waste'),
         link: `/${locale}/what-is-food-waste`
      },
   ]

   const headerRightLink = [
      {
         id: 1,
         title: t('header_link.projects'),
         link: `/${locale}/projects`
      },
      {
         id: 2,
         title: t('header_link.faq'),
         link: `/${locale}#faq`
      },
      {
         id: 3,
         title: t('header_link.contact'),
         link: `/${locale}/contact`
      },
      {
         id: 4,
         title: t('header_link.kvkk'),
         link: `/${locale}/kvkk`
      },
   ]

   const mainLink = [
      {
         id: 1,
         title: t('footer_link.terms'),
         link: `/${locale}/terms-and-conditions`
      },
      {
         id: 2,
         title: t('footer_link.privacy'),
         link: `/${locale}/privacy-policy`
      },
      {
         id: 3,
         title: t('footer_link.cookie'),
         link: `/${locale}/cookie-policy`
      }
   ]

   return (
      <div
         className={`container-fluid ${styles.footerContainer}`}
      >
         <div
            className={`flex flex-col items-center gap-5 mb-7.5 ${styles.footerHeader}`}
         >
            <div
               className={styles.footerHeaderLinks}
            >
               {headerLeftLink.map((item, index) => (
                  <Button
                     key={item.id || index}
                     text={item.title}
                     href={item.link}
                     footer
                     className={styles.footerButtons}
                  />
               ))}
            </div>
            <div className={styles.footerHeaderLinks}>
               {headerRightLink.map((item, index) => {
                  const isFaq = item.id === 2

                  if (isFaq) {
                     return (
                        <FooterFaqButton
                           key={item.id || index}
                           text={item.title}
                           href={item.link}
                           locale={locale}
                           className={styles.footerButtons}
                        />
                     )
                  }

                  return (
                     <Button
                        key={item.id || index}
                        text={item.title}
                        href={item.link}
                        footer
                        className={styles.footerButtons}
                     />
                  )
               })}
            </div>
            <div
               className={styles.footerHeaderLinks}
            >
               {mainLink.map((item, index) => (
                  <Button
                     key={item.id || index}
                     text={item.title}
                     href={item.link}
                     footer
                     className={styles.footerButtons}
                  />
               ))}
            </div>
         </div>

         <DownloadApp />

         <SocialButtons />

         <p
            className={styles.footerBottom}
         >
            {t('copyright')}
         </p>
      </div>
   )
}

export default Footer
