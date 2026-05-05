"use client"

import Button from "@/components/button/Button"
import FileInput from "@/components/input/FileInput"
import Input from "@/components/input/Input"
import styles from "@/components/modules/career.module.scss"
import { setCareerApply, setCareerTeamApply } from "@/components/services/Api"
import { useUI } from "@/components/services/contexts/UIContexts"
import { useState } from "react"
import { useTranslations } from "use-intl"

export interface CareerForm {
   job_id?: string
   full_name: string
   email: string
   country_code: string
   phone: string
   salary: string
   cv: File | null
   cover_letter: string
   currency: string
}

interface CareerProps {
   id?: number
   team?: boolean
}

const CareerApplyForm = ({ id, team }: CareerProps) => {
   const [form, setForm] = useState<CareerForm>({
      full_name: "",
      email: "",
      country_code: "+90",
      phone: "",
      salary: "",
      cv: null,
      cover_letter: "",
      currency: "TRY",
   })

   const [error, setError] = useState<string | null>(null)
   const [success, setSuccess] = useState<string | null>(null)

   const { countries } = useUI()
   const t = useTranslations("CareerApply")

   const handleChange = (field: keyof typeof form, value: string) => {
      setForm((prev) => ({
         ...prev,
         [field]: value,
      }))
   }

   const resetForm = () => {
      setForm({
         full_name: "",
         email: "",
         country_code: "+90",
         phone: "",
         salary: "",
         cv: null,
         cover_letter: "",
         currency: "TRY",
      })
   }

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      setError(null)
      setSuccess(null)

      try {
         const formData = new FormData()

         if (!team) {
            formData.append("job_id", String(id))
         }

         formData.append("full_name", form.full_name.trim())
         formData.append("email", form.email.trim())
         formData.append("country_code", form.country_code.trim())
         formData.append("phone", form.phone.trim())

         if (form.salary.trim() !== "") {
            formData.append("salary", form.salary.trim())
         }

         if (form.cv) {
            formData.append("cv", form.cv)
         }

         if (form.cover_letter.trim() !== "") {
            formData.append("cover_letter", form.cover_letter.trim())
         }

         const response = team
            ? await setCareerTeamApply(formData)
            : await setCareerApply(formData)

         if (!response) {
            setError(t("submit_error"))
            return
         }

         setSuccess(t("submit_success"))
         resetForm()
      } catch (err: any) {
         if (process.env.NODE_ENV === "development") {
            console.error("career apply error:", err)
         }

         const errors = err?.response?.data?.errors
         const message = err?.response?.data?.message

         if (errors && typeof errors === "object") {
            const text = Object.values(errors).flat().join(" | ")
            setError(text)
            return
         }

         setError(message || t("generic_error"))
      }
   }

   if (!team) {
      return (
         <form
            onSubmit={handleSubmit}
            className={`flex h-full w-full min-w-0 flex-col justify-between px-5 py-8 sm:px-6 sm:py-10 ${styles.careerDetailArea}`}
         >
            <div className="flex min-w-0 flex-col gap-4">
               <Input
                  type="text"
                  placeholder={t("full_name")}
                  value={form.full_name}
                  onChangeText={(text) => handleChange("full_name", text)}
               />

               <Input
                  type="email"
                  placeholder={t("email")}
                  value={form.email}
                  onChangeText={(text) => handleChange("email", text)}
               />

               <Input
                  type="tel"
                  placeholder={t("phone")}
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
                  type="number"
                  placeholder={t("salary")}
                  isCurrency
                  countryOptions={countries}
                  currencyCode={form.currency}
                  onCurrencyCodeChange={(value) =>
                     setForm((prev) => ({
                        ...prev,
                        currency: value,
                     }))
                  }
                  value={form.salary}
                  onChangeText={(text) =>
                     setForm((prev) => ({
                        ...prev,
                        salary: text,
                     }))
                  }
               />

               <FileInput
                  buttonText={t("file_select")}
                  placeholder={t("cv_upload")}
                  buttonActiveText={t("file_change")}
                  accept="application/pdf"
                  fileName={form.cv?.name}
                  onFileChange={(file) =>
                     setForm((prev) => ({
                        ...prev,
                        cv: file,
                     }))
                  }
                  subText={t("cv_info")}
               />

               <Input
                  placeholder={t("cover_letter")}
                  isMultiline
                  numberOfLines={6}
                  value={form.cover_letter}
                  onChangeText={(text) => handleChange("cover_letter", text)}
               />

               {error && (
                  <p className={`wrap-break-word ${styles.formError}`}>
                     {error}
                  </p>
               )}

               {success && (
                  <p className={`wrap-break-word ${styles.formSuccess}`}>
                     {success}
                  </p>
               )}
            </div>

            <div className="mt-8 flex min-w-0 flex-col sm:mt-10">
               <Button type="submit" text={t("submit")} />

               <p className={`wrap-break-word ${styles.smallInfoText}`}>
                  {t("privacy_info")}
               </p>
            </div>
         </form>
      )
   }

   return (
      <form
         onSubmit={handleSubmit}
         className={`mx-auto flex w-full flex-col justify-between p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 ${styles.careerDetailArea}`}
      >
         <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="flex min-w-0 flex-col gap-4 lg:gap-6">
               <Input
                  type="text"
                  placeholder={t("full_name")}
                  value={form.full_name}
                  onChangeText={(text) => handleChange("full_name", text)}
               />

               <Input
                  type="email"
                  placeholder={t("email")}
                  value={form.email}
                  onChangeText={(text) => handleChange("email", text)}
               />

               <Input
                  type="tel"
                  placeholder={t("phone")}
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
                  type="number"
                  placeholder={t("salary")}
                  isCurrency
                  countryOptions={countries}
                  currencyCode={form.currency}
                  onCurrencyCodeChange={(value) =>
                     setForm((prev) => ({
                        ...prev,
                        currency: value,
                     }))
                  }
                  value={form.salary}
                  onChangeText={(text) =>
                     setForm((prev) => ({
                        ...prev,
                        salary: text,
                     }))
                  }
               />
            </div>

            <div className="flex min-w-0 flex-col gap-6">
               <FileInput
                  buttonText={t("file_select")}
                  placeholder={t("cv_upload")}
                  buttonActiveText={t("file_change")}
                  accept="application/pdf"
                  fileName={form.cv?.name}
                  onFileChange={(file) =>
                     setForm((prev) => ({
                        ...prev,
                        cv: file,
                     }))
                  }
                  subText={t("cv_info")}
               />

               <Input
                  placeholder={t("cover_letter")}
                  isMultiline
                  numberOfLines={4}
                  value={form.cover_letter}
                  onChangeText={(text) => handleChange("cover_letter", text)}
               />
            </div>
         </div>

         {error && (
            <p className={`mt-6 wrap-break-word ${styles.formError}`}>
               {error}
            </p>
         )}

         {success && (
            <p className={`mt-6 wrap-break-word ${styles.formSuccess}`}>
               {success}
            </p>
         )}

         <div className="mt-10 flex min-w-0 flex-col sm:mt-12">
            <Button
               type="submit"
               text={t("submit")}
               className="py-2"
               textClass={styles.buttonText}
            />

            <p className={`wrap-break-word ${styles.smallInfoText}`}>
               {t("privacy_info")}
            </p>
         </div>
      </form>
   )
}

export default CareerApplyForm
