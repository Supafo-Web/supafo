// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app"
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics"
import { config } from "@/config"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: config.firebaseApiKey,
   authDomain: config.firebaseAuthDomain,
   projectId: config.firebaseProjectId,
   storageBucket: config.firebaseStorageBucket,
   messagingSenderId: config.firebaseMessagingSenderId,
   appId: config.firebaseAppId,
   measurementId: config.firebaseMeasurementId
}

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const getFirebaseAnalytics = async (): Promise<Analytics | null> => {
   if (typeof window === "undefined") return null

   const supported = await isSupported()
   if (!supported) return null

   return getAnalytics(firebaseApp)
}
