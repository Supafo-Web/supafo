import createMiddleware from "next-intl/middleware"
import { defaultLocale, locales } from "./i18n"

const proxy = createMiddleware({
   locales,
   defaultLocale,
})

export default proxy

export const config = {
   matcher: ["/", "/(tr|en|az)/:path*"],
}
