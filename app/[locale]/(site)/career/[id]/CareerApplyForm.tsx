"use client"

import Button from '@/components/button/Button'
import FileInput from '@/components/input/FileInput'
import Input from '@/components/input/Input'
import styles from '@/components/modules/career.module.scss'
import { setCareerApply } from '@/components/services/Api'
import { useUI } from '@/components/services/contexts/UIContexts'
import axios from 'axios'
import { useState } from 'react'

export interface CareerForm {
   job_id?: string
   full_name: string
   email: string
   country_code: string
   phone: string
   salary: string
   cv: File | null
   cover_letter: string
}

interface CareerId {
   id: number
}

const CareerApplyForm = ({ id }: CareerId) => {
   const [form, setForm] = useState<CareerForm>({
      full_name: "",
      email: "",
      country_code: '+90',
      phone: "",
      salary: '',
      cv: null,
      cover_letter: "",
   })

   const [error, setError] = useState<string | null>(null)
   const [success, setSuccess] = useState<string | null>(null)
   const { countries } = useUI()

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

         formData.append('job_id', String(id))
         formData.append('full_name', form.full_name.trim())
         formData.append('email', form.email.trim())
         formData.append('country_code', form.country_code.trim())
         formData.append('phone', form.phone.trim())

         if (form.salary.trim() !== '') {
            formData.append('salary', form.salary.trim())
         }

         if (form.cv) {
            formData.append('cv', form.cv)
         }

         if (form.cover_letter.trim() !== '') {
            formData.append('cover_letter', form.cover_letter.trim())
         }

         for (const [key, value] of formData.entries()) {
            console.log(key, value)
         }

         const response = await setCareerApply(formData)

         if (!response) {
            setError("Başvuru gönderilemedi. Tekrar dene.")
         }

         setSuccess("Başvurun başarıyla gönderildi.")
         setForm({
            full_name: "",
            email: "",
            country_code: '',
            phone: "",
            salary: '',
            cv: null,
            cover_letter: "",
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

         setError(message || 'Bir hata oluştu. Tekrar dene.')
      }
   }

   return (
      <form
         onSubmit={handleSubmit}
         className={`w-full px-5 py-10 flex flex-col justify-between ${styles.careerDetailArea}`}
      >
         <div className="flex flex-col gap-8">
            <Input
               type='text'
               placeholder='Ad Soyad'
               value={form.full_name}
               onChangeText={text => handleChange('full_name', text)}
            />

            <Input
               type='email'
               placeholder='Email'
               value={form.email}
               onChangeText={text => handleChange('email', text)}
            />

            <Input
               type="tel"
               placeholder="Telefon Numarası"
               isCountry
               countryOptions={countries}
               countryCode={form.country_code}
               onCountryCodeChange={(value) =>
                  setForm((prev) => ({
                     ...prev,
                     country_code: value,
                  }))
               }
               value={form.phone}
               onChangeText={(text) =>
                  setForm((prev) => ({
                     ...prev,
                     phone: text,
                  }))
               }
            />

            <Input
               type='number'
               placeholder='Maaş Beklentin'
               value={form.salary}
               onChangeText={text => handleChange('salary', text)}
            />

            <FileInput
               buttonText='Dosya Seç'
               placeholder='CV Dosyanı Yükle'
               buttonActiveText='Dosyayı Değiştir'
               accept="application/pdf"
               fileName={form.cv?.name}
               onFileChange={(file) =>
                  setForm((prev) => ({
                     ...prev,
                     cv: file,
                  }))
               }
               subText='Sadece PDF dosya yüklemelisin.'
            />

            <Input
               placeholder="Ön Yazı"
               isMultiline
               numberOfLines={6}
               value={form.cover_letter}
               onChangeText={(text) => handleChange("cover_letter", text)}
            />

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
         <div className="flex flex-col mt-30">
            <Button
               type='submit'
               text='Başvur'
            />
            <p
               className={`${styles.smallInfoText}`}
            >
               Bilgilerin başvuru değerlendirme sürecinde kullanılacak ve gizlilik politikamız çerçevesinde saklanacaktır.
            </p>
         </div>
      </form>
   )
}

export default CareerApplyForm
