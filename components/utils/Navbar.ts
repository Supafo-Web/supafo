type TranslateFn = (key: string) => string

type GetNavbarMenuParams = {
   locale: string
   t: TranslateFn
}

export const getNavbarMenu = ({ locale, t }: GetNavbarMenuParams) => {
   return [
      {
         id: 1,
         href: `/${locale}`,
         text: t("home"),
      },
      {
         id: 2,
         href: `/${locale}/about-us`,
         text: t("about"),
      },
      {
         id: 3,
         href: `/${locale}/how-does-it-work`,
         text: t("how_work"),
      },
      {
         id: 4,
         href: `/${locale}/partner`,
         text: t("partner"),
      },
   ]
}
