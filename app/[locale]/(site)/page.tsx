import HomeClient from "@/app/[locale]/(site)/HomeClient"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("")

const Home = () => {
   return <HomeClient />
}

export default Home
