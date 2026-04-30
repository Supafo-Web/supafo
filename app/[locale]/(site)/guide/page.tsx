
import GuideClient from "@/app/[locale]/(site)/guide/GuideClient"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/guide")

const Guide = () => {
   return <GuideClient />
}

export default Guide
