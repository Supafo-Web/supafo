"use client"

import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import Map from '@/components/map/Map'
import { useGoogleMapLocation } from '@/components/map/useGoogleMapLocation'
import styles from '@/components/modules/contact.module.scss'
import { setContactForm } from '@/components/services/Api'
import { useUI } from '@/components/services/contexts/UIContexts'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslations } from 'use-intl'

export interface CareerForm {
   full_name: string
   email: string
   subject: string
   message: string
}

const Contact = () => {
   const { settings } = useUI()
   const location = useGoogleMapLocation(settings?.address)

   const [form, setForm] = useState<CareerForm>({
      full_name: "",
      email: "",
      subject: "",
      message: '',
   })

   const icons = [
      {
         id: 1,
         icon: '/icons/contact/Phone.svg',
         text: settings?.support_phone,
         alt: 'phone'
      },
      {
         id: 2,
         icon: '/icons/contact/Whatsapp.svg',
         text: settings?.support_whatsapp,
         alt: 'whatsapp'
      },
      {
         id: 3,
         icon: '/icons/contact/Email.svg',
         text: settings?.support_email,
         alt: 'email'
      },
      {
         id: 4,
         icon: '/icons/contact/Location.svg',
         text: location.displayAddress || location.address,
         alt: 'address'
      },
   ]

   const [error, setError] = useState<string | null>(null)
   const [success, setSuccess] = useState<string | null>(null)
   const t = useTranslations('ContactForm')

   const handleChange = (field: keyof typeof form, value: string) => {
      setForm((prev) => ({
         ...prev,
         [field]: value,
      }))
   }

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      setError(null)
      setSuccess(null)

      try {
         const formData = new FormData()

         formData.append('full_name', form.full_name.trim())
         formData.append('email', form.email.trim())
         formData.append('subject', form.subject.trim())
         formData.append('message', form.message.trim())

         const response = await setContactForm(formData)
         if (!response) {
            setError(t('submit_error'))
         }

         setSuccess(t('submit_success'))
         setForm({
            full_name: "",
            email: "",
            subject: "",
            message: '',
         })
      } catch (err: any) {
         console.error('career apply error:', err)

         const errors = err?.response?.data?.errors
         const message = err?.response?.data?.message

         if (errors && typeof errors === 'object') {
            const text = Object.values(errors)
               .flat()
               .join(' | ')

            setError(text)
            return
         }

         setError(message || t('generic_error'))
      }
   }

   return (
      <main>
         <section
            className={`px-10 sm:px-30 lg:px-40 xl:px-50 2xl:px-80 py-30 relative`}
         >
            <Image
               alt="flower"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower} ${styles.swingLeaf}`}
            />

            <div
               className="flex flex-col items-center mb-12.5 gap-3"
            >
               <h1
                  className={`text-center ${styles.title}`}
               >
                  {t('title')}
               </h1>

               <Image
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="w-40 sm:w-52 md:w-60 lg:w-72 h-auto"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 288px"
               />
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-15">
               <div className="w-full lg:w-1/2">
                  <Map />
               </div>
               <div className="flex flex-col gap-5 w-full lg:w-1/2 items-center lg:items-start">
                  {icons.map((item, index) => (
                     <div
                        key={item.id || index}
                        className="flex items-center gap-5"
                     >
                        <Image
                           alt={item.alt}
                           src={item.icon}
                           width={38}
                           height={38}
                           className="w-7 sm:w-8 md:w-9.5 h-auto shrink-0"
                           sizes="(max-width: 640px) 28px, (max-width: 768px) 32px, 38px"
                        />
                        <p
                           className={styles.contactText}
                        >
                           {item.text}
                        </p>
                     </div>
                  ))}
               </div>
            </div>

            <Image
               alt="flower"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.rightFlower} ${styles.swingLeaf2}`}
            />
         </section>

         <section
            className={`px-10 pt-20 pb-40 relative`}
         >
            <div
               className="flex flex-col items-center mb-12.5 gap-3"
            >
               <h1
                  className={`text-center ${styles.title}`}
               >
                  {t('write_us')}
               </h1>

               <Image
                  alt="title-under"
                  src="/icons/about-us/Title-Under.svg"
                  width={283}
                  height={40}
                  className="w-40 sm:w-52 md:w-60 lg:w-72 h-auto"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 288px"
               />
            </div>

            <div
               className={`flex w-full lg:w-10/12 xl:w-8/12 mx-auto ${styles.contactArea}`}
            >
               <form
                  onSubmit={handleSubmit}
                  className={`w-full px-5 py-10 flex flex-col justify-between ${styles.careerDetailArea}`}
               >
                  <div className="flex flex-col lg:flex-row gap-8">
                     <div className="w-full flex flex-col justify-between gap-4">
                        <Input
                           type='text'
                           placeholder={t('full_name')}
                           value={form.full_name}
                           onChangeText={text => handleChange('full_name', text)}
                        />

                        <Input
                           type='email'
                           placeholder={t('email')}
                           value={form.email}
                           onChangeText={text => handleChange('email', text)}
                        />

                        <Input
                           type='text'
                           placeholder={t('subject')}
                           value={form.subject}
                           onChangeText={text => handleChange('subject', text)}
                        />
                     </div>

                     <div className="w-full">
                        <Input
                           placeholder={t('message')}
                           isMultiline
                           numberOfLines={6}
                           value={form.message}
                           onChangeText={(text) => handleChange("message", text)}
                        />
                     </div>
                  </div>
                  <div className="mt-5">
                     {error && (
                        <p
                           className={styles.formError}
                        >
                           {error}
                        </p>
                     )}
                     {success && (
                        <p
                           className={styles.formSuccess}
                        >
                           {success}
                        </p>
                     )}
                  </div>
                  <div className="flex flex-col mt-10 items-center">
                     <Button
                        type='submit'
                        text={t('send')}
                        className={`px-12 py-2`}
                     />
                  </div>
               </form>
            </div>
         </section>
      </main>
   )
}

export default Contact
