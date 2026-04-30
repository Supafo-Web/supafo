import TermsClient from "@/app/[locale]/(site)/terms-and-conditions/TermsClient"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/terms-and-conditions")

const TermsConditions = () => {
   return <TermsClient />
}

export default TermsConditions
