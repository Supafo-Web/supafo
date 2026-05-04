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
   appName: required(process.env.NEXT_PUBLIC_APP_NAME, "NEXT_PUBLIC_APP_NAME"),
   iosAppId: required(process.env.NEXT_PUBLIC_IOS_APP_ID, "NEXT_PUBLIC_IOS_APP_ID"),
   androidPackage: required(
      process.env.NEXT_PUBLIC_ANDROID_PACKAGE,
      "NEXT_PUBLIC_ANDROID_PACKAGE"
   ),
   apiUrl: required(
      process.env.NEXT_PUBLIC_API_URL,
      "NEXT_PUBLIC_API_URL"
   ),
   fileUrl: required(
      process.env.NEXT_PUBLIC_FILE_URL,
      "NEXT_PUBLIC_FILE_URL"
   ),
   mapsKey: required(
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"
   ),
   mapId: required(
      process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
      "NEXT_PUBLIC_GOOGLE_MAP_ID"
   ),
   firebaseApiKey: required(
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      "NEXT_PUBLIC_FIREBASE_API_KEY"
   ),
   firebaseAuthDomain: required(
      process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
   ),
   firebaseProjectId: required(
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
   ),
   firebaseStorageBucket: required(
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"
   ),
   firebaseMessagingSenderId: required(
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
   ),
   firebaseAppId: required(
      process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      "NEXT_PUBLIC_FIREBASE_APP_ID"
   ),
   firebaseMeasurementId: required(
      process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      "NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID"
   ),
}
