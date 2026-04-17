"use client"

import React, { forwardRef } from "react"
import styles from "@/components/modules/input.module.scss"

interface FileInputProps
   extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
   label?: string
   accept?: string
   error?: string
   fileName?: string
   buttonText?: string
   buttonActiveText?: string
   placeholder?: string
   onFileChange?: (file: File | null) => void
   subText?: string
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
   (
      {
         label,
         accept = "application/pdf",
         error,
         fileName,
         buttonText,
         buttonActiveText,
         placeholder,
         onFileChange,
         disabled,
         className,
         subText,
         ...props
      },
      ref
   ) => {
      const inputId = React.useId()

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         const file = e.target.files?.[0] ?? null
         onFileChange?.(file)
      }

      return (
         <div className={styles.fileInputWrapper}>
            {label && (
               <label htmlFor={inputId} className={styles.fileInputLabel}>
                  {label}
               </label>
            )}

            <label
               htmlFor={inputId}
               className={[
                  styles.fileInputArea,
                  error ? styles.error : "",
                  disabled ? styles.fileInputDisabled : "",
                  className ?? "",
               ]
                  .filter(Boolean)
                  .join(" ")}
            >
               <div className={styles.fileInputLeft}>
                  <span className={styles.fileInputButton}>
                     {fileName ? buttonActiveText : buttonText}
                  </span>

                  <span
                     className={[
                        styles.fileInputText,
                        fileName ? styles.fileInputSelected : "",
                     ]
                        .filter(Boolean)
                        .join(" ")}
                  >
                     {fileName || placeholder}
                  </span>
               </div>

               <span className={styles.fileInputIcon}>
                  📄
               </span>
            </label>

            <input
               id={inputId}
               ref={ref}
               type="file"
               accept={accept}
               disabled={disabled}
               className={styles.hiddenFileInput}
               onChange={handleChange}
               {...props}
            />

            {subText && (
               <p
                  className={styles.subText}
               >
                  {subText}
               </p>
            )}

            {error && <p className={styles.errorText}>{error}</p>}
         </div>
      )
   }
)

FileInput.displayName = "FileInput"

export default FileInput
