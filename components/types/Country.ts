export interface CountryPhone {
   calling_code?: string;
   min_length?: number;
   max_length?: number;
   regex?: string;
   strip_leading_zero?: boolean;
}

export interface CountryTax {
   type?: string;
   rate?: number;
   included?: boolean;
   number_required?: boolean;
   number_label?: string;
}

export interface CountryPartner {
   pickup_only?: boolean;
   min_package_price?: number;
   max_package_price?: number;
   price_step?: number;
}

export interface CountryPayments {
   stripe_enabled?: boolean;
   cash_enabled?: boolean;
}

export interface CountryReferralReward {
   type?: string;
   value?: number;
   title?: string;
   description?: string;
}

export interface CountryReferralMilestone {
   required_invites?: number;
   reward_type?: string;
   reward_value?: number;
   title?: string;
   description?: string;
}

export interface CountryReferralUI {
   headline?: string;
   subheadline?: string;
   terms_short?: string;
}

export interface CountryReferral {
   enabled?: boolean;
   invite_link_path?: string;
   max_pending_referrals?: number;
   friend_reward?: CountryReferralReward;
   milestones?: CountryReferralMilestone[];
   ui?: CountryReferralUI;
}

export interface CountryPickupPartner {
   company?: string;
   query?: string;
}

export interface Country {
   code: string;
   iso2: string;
   iso3?: string;
   name: string;
   native: string;
   language?: string;
   currency?: string;
   timezone?: string;
   phone?: CountryPhone;
   tax?: CountryTax;
   partner?: CountryPartner;
   payments?: CountryPayments;
   referral?: CountryReferral;
   pickup_partner?: CountryPickupPartner;
   major_cities?: string[];
}

export interface CountriesResponse {
   countries: Country[];
}
