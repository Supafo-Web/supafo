import styles from "../page.module.scss"

const TermsofUse = () => {
   return (
      <main className={styles.main}>
         <div className={styles.card}>
            <h1>Terms of Use</h1>
            <p><strong>Effective Date:</strong> March 28, 2026</p>

            <p>
               These Terms of Use govern your access to and use of the Supafo app, website,
               and related services. By using Supafo, you agree to these terms.
            </p>

            <h2>1. Use of the Service</h2>
            <p>
               You agree to use Supafo only for lawful purposes and in accordance with these terms.
            </p>

            <h2>2. Accounts</h2>
            <p>
               You are responsible for maintaining the confidentiality of your account information
               and for all activities that occur under your account.
            </p>

            <h2>3. Orders and Availability</h2>
            <p>
               Product and package availability may vary by location, merchant, and time. Supafo does
               not guarantee that all listings will always be available.
            </p>

            <h2>4. Payments</h2>
            <p>
               Payments are processed through supported payment methods. By placing an order, you agree
               to provide accurate billing information.
            </p>

            <h2>5. Prohibited Conduct</h2>
            <ul>
               <li>Using the service fraudulently</li>
               <li>Attempting to disrupt or harm the platform</li>
               <li>Misusing promotions, referrals, or partner systems</li>
               <li>Violating applicable laws or regulations</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
               All content, branding, logos, and software related to Supafo are owned by or licensed to
               Supafo and may not be used without permission.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
               Supafo provides the service on an as-available basis and is not liable for indirect,
               incidental, or consequential damages to the fullest extent permitted by law.
            </p>

            <h2>8. Changes to the Service</h2>
            <p>
               We may update, suspend, or discontinue parts of the service at any time.
            </p>

            <h2>9. Changes to These Terms</h2>
            <p>
               We may update these Terms of Use from time to time. Continued use of the service means
               you accept the updated terms.
            </p>

            <h2>10. Contact</h2>
            <p>
               For questions about these terms, contact: <br />
               <strong>info@supafo.com</strong>
            </p>
         </div>
      </main>
   )
}

export default TermsofUse
