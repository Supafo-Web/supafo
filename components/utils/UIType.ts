export default interface Settings {
   id?: number
   site_name?: string
   company_name?: string
   support_email?: string
   support_phone?: string
   support_whatsapp?: string
   address?: string
   working_hours?: string
   google_maps_url?: string
   facebook_url?: string
   instagram_url?: string
   whatsapp_url?: string
   discord_url?: string
   x_url?: string
   linkedin_url?: string
   youtube_url?: string
   tiktok_url?: string
   website_url?: string
   android_app_url?: string
   ios_app_url?: string
   privacy_policy_url?: string
   terms_of_service_url?: string
   kvkk_url?: string
   is_support_active?: boolean
   is_call_center_active?: boolean
   is_whatsapp_active?: boolean
   default_country_code?: string
   maintenance_message?: string
   footer_copyright?: string
}

export interface TeamMembers {
   id?: number
   image?: string
   title?: string
   fullName?: string
}
