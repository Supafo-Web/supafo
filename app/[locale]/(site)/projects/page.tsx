import ProjectsClient from "@/app/[locale]/(site)/projects/ProjectsClient"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/projects")

const Projects = () => {
   return <ProjectsClient />
}

export default Projects
