import PrivacyClient from "@/app/[locale]/(site)/privacy-policy/PrivacyClient"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/privacy-policy")

const PrivacyPolicy = () => {
   return <PrivacyClient />
}

export default PrivacyPolicy
