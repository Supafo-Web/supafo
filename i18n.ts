export const locales = ["tr", "en", "az"] as const
export const defaultLocale = "tr"

export type Locale = (typeof locales)[number]
