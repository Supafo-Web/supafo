import { getLocale, getTranslations } from 'next-intl/server'
import styles from '@/components/modules/footer.module.scss'
import DownloadApp from '@/components/download/page'
import Button from '@/components/button/Button'
import SocialButtons from '@/components/social-media/SocialMedia'

const Footer = async () => {
   const t = await getTranslations('Footer')
   const locale = await getLocale()

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
      // {
      //    id: 4,
      //    title: t('header_link.our_team'),
      //    link: `/${locale}/about-us#our-team`
      // }
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
         link: `/${locale}#faq`
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

   const handleFaqClick = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()

      if (window.location.pathname !== `/${locale}`) {
         window.location.href = `/${locale}#faq`
         return
      }

      const el = document.getElementById('faq')
      if (el) {
         el.scrollIntoView({ behavior: 'smooth', block: 'start' })
         window.history.replaceState(null, '', `/${locale}#faq`)
      }
   }

   return (
      <div
         className={`container-fluid ${styles.footerContainer}`}
      >
         <div
            className={`flex flex-col items-center gap-7.5 mb-7.5 ${styles.footerHeader}`}
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
            <div
               className={styles.footerHeaderLinks}
            >
               {headerRightLink.map((item, index) => (
                  <Button
                     key={item.id || index}
                     text={item.title}
                     href={item.link}
                     footer
                     className={styles.footerButtons}
                  />
               ))}
            </div>
            <div
               className={styles.footerHeaderLinks}
            >
               {mainLink.map((item, index) => {
                  const isFaq = item.id === 1

                  return (
                     <Button
                        key={item.id || index}
                        text={item.title}
                        href={item.link}
                        footer
                        onClick={isFaq ? handleFaqClick : undefined}
                        className={styles.footerButtons}
                     />
                  )
               })}
            </div>
         </div>

         <DownloadApp
            footer
         />

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
