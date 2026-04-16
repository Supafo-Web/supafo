import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import styles from '@/components/modules/layout.module.scss'

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div
         className="min-h-screen flex flex-col container-fluid"
      >
         <Navbar />
         <main
            className={`flex-1 ${styles.layout}`}
         >
            {children}
         </main>
         <Footer />
      </div>
   )
}

export default SiteLayout
