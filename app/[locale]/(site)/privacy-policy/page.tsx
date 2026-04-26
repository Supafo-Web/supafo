"use client"

import styles from "@/components/modules/policy.module.scss"

const PrivacyPolicy = () => {
   return (
      <main className={styles.main}>
         <div className={styles.card}>
            <h1>Privacy Policy</h1>
            <p><strong>Effective Date:</strong> March 28, 2026</p>

            <p>
               Supafo respects your privacy. This Privacy Policy explains how we collect,
               use, store, and protect your personal information when you use the Supafo mobile app,
               website, and related services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
               <li>Name, email address, phone number, and login information</li>
               <li>Account details and profile information</li>
               <li>Order history and transaction data</li>
               <li>Location information, if you allow location access</li>
               <li>Device information such as device ID, operating system, and app version</li>
               <li>Support messages and feedback you send to us</li>
            </ul>

            <h2>2. How We Use Information</h2>
            <ul>
               <li>To create and manage your account</li>
               <li>To provide app features and process orders</li>
               <li>To improve performance, safety, and user experience</li>
               <li>To communicate with you about your account or support requests</li>
               <li>To comply with legal obligations</li>
            </ul>

            <h2>3. Sharing of Information</h2>
            <p>
               We do not sell your personal information. We may share data only with service providers,
               business partners involved in delivering the service, or when required by law.
            </p>

            <h2>4. Data Retention</h2>
            <p>
               We keep personal data only as long as necessary to provide services, comply with legal
               obligations, resolve disputes, and enforce agreements.
            </p>

            <h2>5. Security</h2>
            <p>
               We take reasonable technical and organizational measures to protect your information.
               However, no system can be guaranteed to be completely secure.
            </p>

            <h2>6. Your Rights</h2>
            <p>
               Depending on your location, you may have the right to access, update, correct, or delete
               your personal data.
            </p>

            <h2>7. Children’s Privacy</h2>
            <p>
               Supafo is not intended for children under the age required by applicable law unless used
               under proper supervision and in accordance with local requirements.
            </p>

            <h2>8. Contact</h2>
            <p>
               For privacy-related questions, contact us at: <br />
               <strong>info@supafo.com</strong>
            </p>
         </div>
      </main>
   )
}

export default PrivacyPolicy
