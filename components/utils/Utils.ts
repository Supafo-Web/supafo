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

export const formatPrice = (value: string | number, currency: string = 'TRY') => {
   return `${currency} ${new Intl.NumberFormat('tr-TR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
   }).format(Number(value))}`
}


export const cn = (...classes: Array<string | false | null | undefined>) => {
   return classes.filter(Boolean).join(" ")
}
