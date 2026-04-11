"use client"

import styles from "../page.module.scss"

const DataDeletion = () => {
   return (
      <main className={styles.main}>
         <div className={styles.card}>
            <h1>Data Deletion Instructions</h1>
            <p><strong>Effective Date:</strong> March 28, 2026</p>

            <p>
               If you would like Supafo to delete your account and associated personal data,
               you can request deletion using one of the methods below.
            </p>

            <h2>Option 1: In-App Request</h2>
            <p>
               If the feature is available in the app, go to your account settings and submit
               an account deletion request.
            </p>

            <h2>Option 2: Email Request</h2>
            <p>
               Send an email to <strong>info@supafo.com</strong> using the email address linked to your account.
               Please use the subject line <strong>Data Deletion Request</strong>.
            </p>

            <h2>What to Include</h2>
            <ul>
               <li>Your full name</li>
               <li>Your registered email address or phone number</li>
               <li>A short statement requesting account deletion</li>
            </ul>

            <h2>What Happens Next</h2>
            <p>
               We may verify your identity before processing the request. Once verified, we will delete
               or anonymize your data within a reasonable timeframe, except for information we are
               required to retain for legal, security, fraud-prevention, or accounting purposes.
            </p>

            <h2>Contact</h2>
            <p>
               For questions about deletion requests, contact: <br />
               <strong>info@supafo.com</strong>
            </p>
         </div>
      </main>
   )
}

export default DataDeletion
