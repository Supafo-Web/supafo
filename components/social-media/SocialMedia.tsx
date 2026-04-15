'use client'

import Image from 'next/image'
import Button from '@/components/button/Button'
import { useSocialMedia } from '@/components/utils/SocialMedia'

const SocialButtons = () => {
   const {
      openWhatsApp,
      openInstagram,
      openX,
      openTiktok,
      openDiscord,
   } = useSocialMedia()

   const socialLink = [
      {
         id: 1,
         icon: '/socials/WhatsApp.svg',
         icon2: '/socials/WhatsApp-white.svg',
         link: openWhatsApp
      },
      {
         id: 2,
         icon: '/socials/Instagram.svg',
         icon2: '/socials/Instagram-white.svg',
         link: openInstagram
      },
      {
         id: 3,
         icon: '/socials/X.svg',
         icon2: '/socials/X-white.svg',
         link: openX
      },
      {
         id: 4,
         icon: '/socials/Tiktok.svg',
         icon2: '/socials/Tiktok-white.svg',
         link: openTiktok
      },
      {
         id: 5,
         icon: '/socials/Discord.svg',
         icon2: '/socials/Discord-white.svg',
         link: openDiscord
      },
   ]

   return (
      <div
         className="flex my-7.5 justify-center gap-6 md:gap-10"
      >
         {socialLink.map((item, index) => (
            <Button
               key={item.id || index}
               onClick={item.link}
               className="group cursor-pointer rounded-full bg-white p-2.75 transition-all duration-300 ease-in-out hover:bg-[#578B23] hover:scale-105"
            >
               <div className="relative h-6 w-6">
                  <Image
                     alt="social"
                     src={item.icon}
                     width={24}
                     height={24}

                     className="absolute inset-0 opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                  />
                  <Image
                     alt="social hover"
                     src={item.icon2}
                     width={24}
                     height={24}

                     className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                  />
               </div>
            </Button>
         ))}
      </div>
   )
}

export default SocialButtons
