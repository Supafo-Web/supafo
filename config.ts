function required(value: string | undefined, name: string): string {
   if (!value) {
      throw new Error(`Missing environment variable: ${name}`)
   }
   return value
}

export const config = {
   siteUrl: required(process.env.NEXT_PUBLIC_SITE_URL, "NEXT_PUBLIC_SITE_URL"),
   supportEmail: required(
      process.env.NEXT_PUBLIC_SUPPORT_EMAIL,
      "NEXT_PUBLIC_SUPPORT_EMAIL"
   ),
   privacyUrl: required(
      process.env.NEXT_PUBLIC_PRIVACY_URL,
      "NEXT_PUBLIC_PRIVACY_URL"
   ),
   termsUrl: required(
      process.env.NEXT_PUBLIC_TERMS_URL,
      "NEXT_PUBLIC_TERMS_URL"
   ),
   dataDeletionUrl: required(
      process.env.NEXT_PUBLIC_DATA_DELETION_URL,
      "NEXT_PUBLIC_DATA_DELETION_URL"
   ),
   appName: required(process.env.NEXT_PUBLIC_APP_NAME, "NEXT_PUBLIC_APP_NAME"),
   iosAppId: required(process.env.NEXT_PUBLIC_IOS_APP_ID, "NEXT_PUBLIC_IOS_APP_ID"),
   androidPackage: required(
      process.env.NEXT_PUBLIC_ANDROID_PACKAGE,
      "NEXT_PUBLIC_ANDROID_PACKAGE"
   ),
   huaweiAppGallery: required(
      process.env.NEXT_PUBLIC_HUAWEI_GALLERY,
      "NEXT_PUBLIC_HUAWEI_GALLERY"
   ),
}
