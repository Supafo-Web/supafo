import createMiddleware from "next-intl/middleware"
import { NextRequest, NextResponse } from "next/server"
import { defaultLocale, locales } from "./i18n"

const handleI18nRouting = createMiddleware({
   locales,
   defaultLocale,
   localePrefix: "always",
   localeDetection: true,
})

const isProd = process.env.NODE_ENV === "production"

const ALLOWED_HOSTS = new Set([
   "localhost:3000",
   "127.0.0.1:3000",
   "supafo.com",
   "www.supafo.com",
   "api.supafo.com",
   "admin.supafo.com",
   "partner.supafo.com",
   "career.supafo.com"
])

const PUBLIC_FILE_REGEX = /\.(.*)$/

function generateNonce() {
   const bytes = new Uint8Array(16)
   crypto.getRandomValues(bytes)

   let binary = ""
   for (const byte of bytes) {
      binary += String.fromCharCode(byte)
   }

   return btoa(binary)
}

function isAllowedMethod(method: string) {
   return ["GET", "HEAD", "OPTIONS", "POST", "PUT", "PATCH", "DELETE"].includes(method)
}

function shouldBypass(pathname: string) {
   return (
      pathname.startsWith("/_next/static") ||
      pathname.startsWith("/_next/image") ||
      pathname.startsWith("/_vercel") ||
      pathname === "/favicon.ico" ||
      pathname === "/robots.txt" ||
      pathname === "/sitemap.xml" ||
      pathname === "/manifest.webmanifest" ||
      pathname === "/site.webmanifest" ||
      PUBLIC_FILE_REGEX.test(pathname)
   )
}

function buildCsp(nonce: string) {
   const connectSrc = [
      "'self'",
      "https://supafo.com",
      "https://www.supafo.com",
      "https://career.supafo.com",
      "https://api.supafo.com",
      "https://admin.supafo.com",
      "https://partner.supafo.com",
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com",
      "https://maps.googleapis.com",
   ].join(" ")

   const scriptSrc = isProd
      ? `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`
      : `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'`

   return [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https:",
      `connect-src ${connectSrc}`,
      "media-src 'self' https:",
      "worker-src 'self' blob:",
      "child-src 'self' blob:",
      "manifest-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "frame-src 'none'",
      "upgrade-insecure-requests",
      "block-all-mixed-content",
      "report-sample",
   ].join("; ")
}

function applySecurityHeaders(
   response: NextResponse,
   pathname: string,
   nonce: string
) {
   response.headers.set("Content-Security-Policy", buildCsp(nonce))
   response.headers.set("X-Frame-Options", "DENY")
   response.headers.set("X-Content-Type-Options", "nosniff")
   response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
   response.headers.set(
      "Permissions-Policy",
      "accelerometer=(), autoplay=(), camera=(), display-capture=(), encrypted-media=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), publickey-credentials-get=(), usb=(), browsing-topics=()"
   )
   response.headers.set("Cross-Origin-Opener-Policy", "same-origin")
   response.headers.set("Cross-Origin-Resource-Policy", "same-origin")
   response.headers.set("Origin-Agent-Cluster", "?1")
   response.headers.set("X-DNS-Prefetch-Control", "off")
   response.headers.set("X-Permitted-Cross-Domain-Policies", "none")
   response.headers.set("X-Download-Options", "noopen")
   response.headers.set("x-nonce", nonce)

   if (isProd) {
      response.headers.set(
         "Strict-Transport-Security",
         "max-age=63072000; includeSubDomains; preload"
      )
   }

   const isSensitivePath =
      pathname.startsWith("/api") ||
      pathname.includes("/admin") ||
      pathname.includes("/partner") ||
      pathname.includes("/dashboard") ||
      pathname.includes("/profile")

   if (isSensitivePath) {
      response.headers.set(
         "Cache-Control",
         "no-store, no-cache, must-revalidate, proxy-revalidate"
      )
      response.headers.set("Pragma", "no-cache")
      response.headers.set("Expires", "0")
   }

   return response
}

function isCareerHost(host: string) {
   return host === "career.supafo.com"
}

export default function proxy(request: NextRequest) {
   const { pathname } = request.nextUrl
   const method = request.method
   const host = request.headers.get("host") ?? ""
   const userAgent = request.headers.get("user-agent") ?? ""

   if (!isAllowedMethod(method)) {
      return new NextResponse("Method Not Allowed", { status: 405 })
   }

   if (isProd && host && !ALLOWED_HOSTS.has(host)) {
      return new NextResponse("Forbidden", { status: 403 })
   }

   if (isProd && !userAgent) {
      return new NextResponse("Forbidden", { status: 403 })
   }

   const nonce = generateNonce()

   if (shouldBypass(pathname)) {
      const response = NextResponse.next()
      return applySecurityHeaders(response, pathname, nonce)
   }

   if (pathname.startsWith("/api")) {
      const response = NextResponse.next()
      return applySecurityHeaders(response, pathname, nonce)
   }

   if (isCareerHost(host)) {
      const url = request.nextUrl.clone()

      url.pathname = "/tr/career"

      const response = NextResponse.rewrite(url)
      return applySecurityHeaders(response, pathname, nonce)
   }

   const response = handleI18nRouting(request)
   return applySecurityHeaders(response, pathname, nonce)
}

export const config = {
   matcher: [
      "/((?!_next/static|_next/image|_vercel|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|site.webmanifest|.*\\..*).*)",
      "/api/:path*",
   ],
}
