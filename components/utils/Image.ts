import { config } from "@/config"

export const getImageSrc = (image?: string) => {
   if (!image) return '/icons/about-us/our-team/user.png'

   if (image.startsWith('http://') || image.startsWith('https://')) {
      return image
   }

   if (image.startsWith('/')) {
      return image
   }

   return `${config.fileUrl}/storage/${image}`
}
