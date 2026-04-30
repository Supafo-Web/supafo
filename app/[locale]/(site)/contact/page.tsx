import ContactClient from "@/app/[locale]/(site)/contact/ContactClient"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/contact")

const Contact = () => {
   return <ContactClient />
}

export default Contact
