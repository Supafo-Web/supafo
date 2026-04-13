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
         icon: '/socials/WhatsApp.svg', link: openWhatsApp
      },
      {
         id: 2,
         icon: '/socials/Instagram.svg', link: openInstagram
      },
      {
         id: 3,
         icon: '/socials/X.svg', link: openX
      },
      {
         id: 4,
         icon: '/socials/Tiktok.svg', link: openTiktok
      },
      {
         id: 5,
         icon: '/socials/Discord.svg', link: openDiscord
      },
   ]

   return (
      <div
         className="flex py-8 justify-center gap-16"
      >
         {socialLink.map((item, index) => (
            <Button
               key={item.id || index}
               onClick={item.link}
               className="bg-white p-2.75 rounded-full cursor-pointer"
            >
               <Image
                  alt="social"
                  src={item.icon}
                  width={24}
                  height={24}
                  priority
                  style={{ width: 24, height: 24 }}
               />
            </Button>
         ))}
      </div>
   )
}

export default SocialButtons
