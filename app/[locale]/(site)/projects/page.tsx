import ProjectsPage from "@/app/[locale]/(site)/projects/ProjectsPage"
import { createGenerateMetadata } from "@/lib/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("/projects")

const Projects = () => {
   return <ProjectsPage />
}

export default Projects
