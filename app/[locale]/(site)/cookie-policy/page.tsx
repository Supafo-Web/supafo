"use client"

import styles from "@/components/modules/policy.module.scss"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/cookie-policy")

const CookiePolicy = () => {
   return (
      <div>CookiePolicy</div>
   )
}

export default CookiePolicy
