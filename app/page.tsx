import styles from "./page.module.scss";

const Home = () => {
   return (
      <main className={styles.main}>
         <div className={styles.card}>
            <h1>Supafo Legal</h1>
            <p>Official legal and support pages for Supafo.</p>

            <ul className={styles.list}>
               <li><a href="/privacy-policy">Privacy Policy</a></li>
               <li><a href="/terms-of-use">Terms of Use</a></li>
               <li><a href="/data-deletion">Data Deletion</a></li>
            </ul>
         </div>
      </main>
   )
}

export default Home
