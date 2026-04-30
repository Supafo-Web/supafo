import CookieClient from "@/app/[locale]/(site)/cookie-policy/CookieClient"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/cookie-policy")

const CookiePolicy = () => {
   return <CookieClient />
}

export default CookiePolicy
