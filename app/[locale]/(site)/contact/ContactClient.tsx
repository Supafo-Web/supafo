"use client"

import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import Map from '@/components/map/Map'
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

const ContactClient = () => {
   const { settings } = useUI()

   const [form, setForm] = useState<CareerForm>({
      full_name: "",
      email: "",
      subject: "",
      message: '',
   })

   const icons = [
      ...(settings?.is_support_active
         ? [
            {
               id: 1,
               icon: '/icons/contact/Phone.svg',
               text: settings?.support_phone,
            },
         ]
         : []),
      ...(settings?.is_whatsapp_active
         ? [
            {
               id: 2,
               icon: '/icons/contact/Whatsapp.svg',
               text: settings?.support_whatsapp,
            },
         ]
         : []),
      {
         id: 3,
         icon: '/icons/contact/Email.svg',
         text: settings?.support_email,
      },
      {
         id: 4,
         icon: '/icons/contact/Location.svg',
         text: settings?.address,
      },
   ].filter((item) => item.text)

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
            return
         }

         setSuccess(t('submit_success'))
         setForm({
            full_name: "",
            email: "",
            subject: "",
            message: '',
         })
      } catch (err: any) {
         console.error('contact form error:', err)

         const errors = err?.response?.data?.errors
         const message = err?.response?.data?.message

         if (errors && typeof errors === 'object') {
            const text = Object.values(errors).flat().join(' | ')
            setError(text)
            return
         }

         setError(message || t('generic_error'))
      }
   }

   return (
      <main>
         <section className="px-10 sm:px-20 lg:px-20 xl:px-50 2xl:px-80 py-15 lg:py-30 relative">
            <Image
               alt=""
               aria-hidden="true"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.leftFlower} ${styles.swingLeaf}`}
            />

            <div className="flex flex-col items-center mb-12.5 gap-0 lg:gap-3">
               <h1 className={`text-center ${styles.title}`}>
                  {t('title')}
               </h1>

               <Image
                  src="/icons/about-us/Title-Under.svg"
                  alt=""
                  aria-hidden="true"
                  width={283}
                  height={40}
                  className="block w-70.75 max-w-full h-auto mx-auto"
               />
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-15">
               <div className="w-full lg:w-1/2">
                  <Map
                     href={settings?.address}
                  />
               </div>

               <div className="flex flex-col gap-5 w-full lg:w-1/2">
                  {icons.map((item) => (
                     <div
                        key={item.id}
                        className="flex items-center gap-5"
                     >
                        <span className="relative block w-7 h-7 sm:w-8 sm:h-8 md:w-9.5 md:h-9.5 shrink-0">
                           <Image
                              alt=""
                              aria-hidden="true"
                              src={item.icon}
                              fill
                              sizes="38px"
                              className="object-contain"
                           />
                        </span>

                        <p className={styles.contactText}>
                           {item.text}
                        </p>
                     </div>
                  ))}
               </div>
            </div>

            <Image
               alt=""
               aria-hidden="true"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`w-10 sm:w-12 lg:w-17.5 h-auto ${styles.rightFlower} ${styles.swingLeaf2}`}
            />
         </section>

         <section className="px-10 py-15 lg:py-30 mb-20 lg:mb-0 relative">
            <div className="flex flex-col items-center mb-12.5 gap-0 lg:gap-3">
               <h2 className={`text-center ${styles.title}`}>
                  {t('write_us')}
               </h2>

               <Image
                  src="/icons/about-us/Title-Under.svg"
                  alt=""
                  aria-hidden="true"
                  width={283}
                  height={40}
                  className="block w-70.75 max-w-full h-auto mx-auto"
               />
            </div>

            <div className={`flex w-full lg:w-10/12 xl:w-8/12 mx-auto ${styles.contactArea}`}>
               <form
                  onSubmit={handleSubmit}
                  className={`w-full 2xl:w-8/12 xl:w-10/12 mx-auto p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col justify-between ${styles.careerDetailArea}`}
               >
                  <div className="flex flex-col lg:flex-row gap-8">
                     <div className="w-full flex flex-col justify-between gap-4">
                        <Input
                           type="text"
                           placeholder={t('full_name')}
                           value={form.full_name}
                           onChangeText={(text) => handleChange('full_name', text)}
                        />

                        <Input
                           type="email"
                           placeholder={t('email')}
                           value={form.email}
                           onChangeText={(text) => handleChange('email', text)}
                        />

                        <Input
                           type="text"
                           placeholder={t('subject')}
                           value={form.subject}
                           onChangeText={(text) => handleChange('subject', text)}
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
                     {error && <p className={styles.formError}>{error}</p>}
                     {success && <p className={styles.formSuccess}>{success}</p>}
                  </div>

                  <div className="flex flex-col mt-10">
                     <Button
                        type="submit"
                        text={t('send')}
                        className="px-12 py-2"
                        textClass={styles.buttonText}
                     />
                  </div>
               </form>
            </div>
         </section>
      </main>
   )
}

export default ContactClient
