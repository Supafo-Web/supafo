"use client"

import Button from "@/components/button/Button"
import Input from "@/components/input/Input"
import Map from "@/components/map/Map"
import styles from "@/components/modules/contact.module.scss"
import { setContactForm } from "@/components/services/Api"
import { useUI } from "@/components/services/contexts/UIContexts"
import { useState } from "react"
import { useTranslations } from "use-intl"

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
      message: "",
   })

   const whatsappPhone = settings?.support_phone?.replace(/\D/g, "")

   const icons = [
      ...(settings?.is_support_active
         ? [
            {
               id: 1,
               icon: "/icons/contact/Phone.svg",
               text: settings?.support_phone,
               href: `tel:${settings?.support_phone}`,
            },
         ]
         : []),
      ...(settings?.is_whatsapp_active
         ? [
            {
               id: 2,
               icon: "/icons/contact/Whatsapp.svg",
               text: settings?.support_whatsapp,
               href: `https://wa.me/${whatsappPhone}`,
            },
         ]
         : []),
      {
         id: 3,
         icon: "/icons/contact/Email.svg",
         text: settings?.support_email,
         href: `mailto:${settings?.support_email}`,
      },
      {
         id: 4,
         icon: "/icons/contact/Location.svg",
         text: settings?.address,
         href: undefined,
      },
   ].filter((item) => item.text)

   const [error, setError] = useState<string | null>(null)
   const [success, setSuccess] = useState<string | null>(null)
   const t = useTranslations("ContactForm")

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

         formData.append("full_name", form.full_name.trim())
         formData.append("email", form.email.trim())
         formData.append("subject", form.subject.trim())
         formData.append("message", form.message.trim())

         const response = await setContactForm(formData)

         if (!response) {
            setError(t("submit_error"))
            return
         }

         setSuccess(t("submit_success"))
         setForm({
            full_name: "",
            email: "",
            subject: "",
            message: "",
         })
      } catch (err: any) {
         console.error("contact form error:", err)

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

   const sectionClass =
      "relative w-full max-w-full px-5 py-15 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-20 lg:py-24 xl:px-28 2xl:px-40 3xl:px-60"

   const containerClass =
      "mx-auto w-full max-w-[1440px] min-w-0 3xl:max-w-[1600px]"

   const titleAreaClass =
      "mb-10 flex flex-col items-center gap-0 md:mb-12.5 lg:gap-3"

   const flowerClass =
      "h-auto w-9 sm:w-12 lg:w-17.5"

   const titleUnderClass =
      "mx-auto block h-auto w-70.75 max-w-full"

   return (
      <main className="min-h-screen w-full max-w-full overflow-hidden">
         <section className={sectionClass}>
            <img
               alt=""
               aria-hidden="true"
               src="/images/LeftFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.leftFlower} ${styles.swingLeaf}`}
            />

            <div className={containerClass}>
               <div className={titleAreaClass}>
                  <h1 className={`text-center ${styles.title}`}>
                     {t("title")}
                  </h1>

                  <img
                     src="/icons/about-us/Title-Under.svg"
                     alt=""
                     aria-hidden="true"
                     width={283}
                     height={40}
                     sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
                     className={titleUnderClass}
                  />
               </div>

               <div className="flex min-w-0 flex-col items-center justify-center gap-10 lg:flex-row lg:gap-14">
                  <Map
                     address={settings?.address}
                  />

                  <div className="flex w-full min-w-0 flex-col gap-5">
                     {icons.map((item) => (
                        <div
                           key={item.id}
                           className="flex min-w-0 gap-5"
                        >
                           <span className="relative block h-7 w-7 shrink-0 sm:h-8 sm:w-8 md:h-9.5 md:w-9.5">
                              <img
                                 alt=""
                                 aria-hidden="true"
                                 src={item.icon}
                                 sizes="38px"
                                 className="object-contain"
                              />
                           </span>

                           {item.href ? (
                              <a
                                 href={item.href}
                                 className={styles.contactText}
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 {item.text}
                              </a>
                           ) : (
                              <span className={styles.contactText}>
                                 {item.text}
                              </span>
                           )}
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <img
               alt=""
               aria-hidden="true"
               src="/images/RightFlower.svg"
               width={69}
               height={115}
               className={`${flowerClass} ${styles.rightFlower} ${styles.swingLeaf2}`}
            />
         </section>

         <section className={`${sectionClass} mb-20 lg:mb-0`}>
            <div className={containerClass}>
               <div className={titleAreaClass}>
                  <h2 className={`text-center ${styles.title}`}>
                     {t("write_us")}
                  </h2>

                  <img
                     src="/icons/about-us/Title-Under.svg"
                     alt=""
                     aria-hidden="true"
                     width={283}
                     height={40}
                     sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 283px"
                     className={titleUnderClass}
                  />
               </div>

               <div
                  className={`mx-auto flex w-full max-w-400 min-w-0 ${styles.contactArea}`}
               >
                  <form
                     onSubmit={handleSubmit}
                     className={`flex w-full flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-20 ${styles.careerDetailArea}`}
                  >
                     <div className="flex min-w-0 flex-col gap-8 lg:flex-row">
                        <div className="flex w-full min-w-0 flex-col justify-between gap-4">
                           <Input
                              type="text"
                              placeholder={t("full_name")}
                              value={form.full_name}
                              onChangeText={(text) =>
                                 handleChange("full_name", text)
                              }
                           />

                           <Input
                              type="email"
                              placeholder={t("email")}
                              value={form.email}
                              onChangeText={(text) =>
                                 handleChange("email", text)
                              }
                           />

                           <Input
                              type="text"
                              placeholder={t("subject")}
                              value={form.subject}
                              onChangeText={(text) =>
                                 handleChange("subject", text)
                              }
                           />
                        </div>

                        <div className="w-full min-w-0">
                           <Input
                              placeholder={t("message")}
                              isMultiline
                              numberOfLines={6}
                              value={form.message}
                              onChangeText={(text) =>
                                 handleChange("message", text)
                              }
                           />
                        </div>
                     </div>

                     <div className="mt-5">
                        {error && (
                           <p className={styles.formError}>
                              {error}
                           </p>
                        )}

                        {success && (
                           <p className={styles.formSuccess}>
                              {success}
                           </p>
                        )}
                     </div>

                     <div className="mt-10 flex flex-col">
                        <Button
                           type="submit"
                           text={t("send")}
                           className="px-12 py-2"
                           textClass={styles.buttonText}
                        />
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </main>
   )
}

export default ContactClient
