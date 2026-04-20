"use client"

import React, { forwardRef } from "react"
import styles from "@/components/modules/input.module.scss"
import { Country } from "@/components/types/Country"

interface InputProps
   extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "style" | "onChange" | "size"
   > {
   placeholder?: string
   isCountry?: boolean
   isCurrency?: boolean
   isOTP?: boolean
   value?: string
   onChangeText?: (text: string) => void
   isMultiline?: boolean
   numberOfLines?: number
   style?: React.CSSProperties
   inputArea?: React.CSSProperties
   error?: string
   onFocus?: () => void
   readOnly?: boolean
   isWhite?: boolean
   countryCode?: string
   currencyCode?: string
   onCountryCodeChange?: (value: string) => void
   onCurrencyCodeChange?: (value: string) => void
   countryOptions?: Country[]
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
   (
      {
         placeholder,
         isCountry,
         isCurrency,
         isOTP,
         disabled,
         value,
         onChangeText,
         isMultiline,
         numberOfLines,
         maxLength,
         style,
         inputArea,
         error,
         onFocus,
         readOnly,
         isWhite,
         countryCode,
         currencyCode,
         onCountryCodeChange,
         onCurrencyCodeChange,
         countryOptions = [],
         className,
         ...props
      },
      ref
   ) => {
      const currentPlaceholder = placeholder

      const handleChange = (
         e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
         onChangeText?.(e.target.value)
      }

      const wrapperClassName = [
         styles.inputArea,
         error ? styles.error : "",
         isWhite ? styles.white : "",
      ]
         .filter(Boolean)
         .join(" ")

      const inputClassName = [
         styles.input,
         isOTP ? styles.otpInput : "",
         className ?? "",
      ]
         .filter(Boolean)
         .join(" ")

      return (
         <div className={styles.inputContainerArea}>
            <div
               className={[
                  styles.root,
                  (isCountry || isCurrency) ? styles.countryRoot : "",
               ]
                  .filter(Boolean)
                  .join(" ")}
            >
               {isCountry && (
                  <select
                     value={countryCode}
                     onChange={(e) => onCountryCodeChange?.(e.target.value)}
                     className={[
                        styles.countrySelect,
                        error ? styles.error : "",
                     ]
                        .filter(Boolean)
                        .join(" ")}
                     disabled={disabled}
                     aria-label="Country calling code"
                  >
                     {countryOptions.map((country) => (
                        <option
                           key={country.code}
                           value={country.phone?.calling_code}
                        >
                           {country.phone?.calling_code}
                        </option>
                     ))}
                  </select>
               )}

               {isCurrency && (
                  <select
                     value={currencyCode}
                     onChange={(e) => onCurrencyCodeChange?.(e.target.value)}
                     className={[
                        styles.countrySelect,
                        error ? styles.error : "",
                     ]
                        .filter(Boolean)
                        .join(" ")}
                     disabled={disabled}
                     aria-label="Currency code"
                  >
                     {countryOptions.map((country) => (
                        <option
                           key={country.code}
                           value={country.currency}
                        >
                           {country.currency}
                        </option>
                     ))}
                  </select>
               )}

               <div className={wrapperClassName} style={inputArea}>
                  {isMultiline ? (
                     <textarea
                        ref={ref as React.Ref<HTMLTextAreaElement>}
                        placeholder={currentPlaceholder}
                        className={inputClassName}
                        style={style}
                        value={value}
                        onChange={handleChange}
                        rows={numberOfLines || 3}
                        maxLength={maxLength}
                        disabled={disabled}
                        onFocus={onFocus}
                        readOnly={readOnly}
                     />
                  ) : (
                     <input
                        ref={ref as React.Ref<HTMLInputElement>}
                        placeholder={currentPlaceholder}
                        className={inputClassName}
                        style={style}
                        value={value}
                        onChange={handleChange}
                        maxLength={maxLength}
                        disabled={disabled}
                        onFocus={onFocus}
                        readOnly={readOnly}
                        {...props}
                     />
                  )}

                  {error && <span className={styles.errorIcon}>!</span>}
               </div>
            </div>

            {error && <p className={styles.errorText}>{error}</p>}
         </div>
      )
   }
)

Input.displayName = "Input"

export default Input
