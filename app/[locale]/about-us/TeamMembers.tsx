"use client"

import useApp from "@/components/services/UseApp"
import Image from "next/image"
import styles from './page.module.scss'
import { getImageSrc } from "@/components/utils/Image"

const TeamMembers = () => {
   const app = useApp()
   const teamMembers = app.ui(s => s.teamMembers)

   return (
      teamMembers.map((member, index) => (
         <div
            key={index}
            className="flex flex-col items-center"
         >
            <Image
               alt={member.fullName || 'Team Member'}
               src={getImageSrc(member.image)}
               width={400}
               height={400}
               className="w-70 h-70 rounded-2xl"
               priority
            />
            <div
               className={`mt-6 ${styles.teamInfo}`}
            >
               <h6>{member.title}</h6>
               <p>{member.fullName}</p>
            </div>
         </div>
      ))
   )
}

export default TeamMembers
