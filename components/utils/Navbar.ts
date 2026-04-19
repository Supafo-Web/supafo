type TranslateFn = (key: string) => string

type NavbarSubmenuItem = {
   id: number
   href: string
   text: string
}

type NavbarMenuItem = {
   id: number
   href?: string
   text: string
   submenu?: NavbarSubmenuItem[]
}

type GetNavbarMenuParams = {
   locale: string
   t: TranslateFn
}

export const getNavbarMenu = ({ locale, t }: GetNavbarMenuParams): NavbarMenuItem[] => {
   return [
      {
         id: 1,
         href: `/${locale}`,
         text: t("home"),
         submenu: [
            {
               id: 11,
               href: `/${locale}#what-is-supafo`,
               text: t("home_section.section_1"),
            },
            {
               id: 12,
               href: `/${locale}#how-does-supafo-work`,
               text: t("home_section.section_2"),
            },
            {
               id: 13,
               href: `/${locale}#supafo-bag`,
               text: t("home_section.section_3"),
            },
            {
               id: 14,
               href: `/${locale}#healthy-life-journey`,
               text: t("home_section.section_4"),
            },
            {
               id: 15,
               href: `/${locale}#technology-of-the-future`,
               text: t("home_section.section_5"),
            },
            {
               id: 16,
               href: `/${locale}#join-supafo-in-doing-good`,
               text: t("home_section.section_6"),
            },
            {
               id: 17,
               href: `/${locale}#faq`,
               text: t("home_section.section_7"),
            },
         ],
      },
      {
         id: 2,
         href: `/${locale}/about-us`,
         text: t("about"),
         submenu: [
            {
               id: 21,
               href: `/${locale}/about-us#who-we-are`,
               text: t("about_section.section_1"),
            },
            {
               id: 22,
               href: `/${locale}/about-us#mission-and-vision`,
               text: t("about_section.section_2"),
            },
            {
               id: 23,
               href: `/${locale}/about-us#what-makes-us-different`,
               text: t("about_section.section_3"),
            },
            {
               id: 24,
               href: `/${locale}/about-us#join-our-struggle`,
               text: t("about_section.section_4"),
            },
         ],
      },
      {
         id: 3,
         href: `/${locale}/guide`,
         text: t("guide"),
      },
      {
         id: 4,
         href: `/${locale}/partner`,
         text: t("partner"),
      },
   ]
}
