import KVKKClient from "@/app/[locale]/(site)/kvkk/KVKKClient"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/kvkk")

const KVKK = () => {
   return <KVKKClient />
}

export default KVKK
