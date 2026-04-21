import { Loader } from "@googlemaps/js-api-loader"
import { config } from "@/config"

let loader: Loader | null = null

export const getGoogleMapsLoader = () => {
   if (!loader) {
      loader = new Loader({
         apiKey: config.mapsKey || "",
         version: "weekly",
         libraries: ["marker"],
      })
   }

   return loader
}

export const loadGoogleMaps = async () => {
   const loader = getGoogleMapsLoader()
   return loader.load()
}
