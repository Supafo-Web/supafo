import GuidePage from "@/app/[locale]/(site)/guide/GuidePage"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/guide")

const Guide = () => {
   return <GuidePage />
}

export default Guide
