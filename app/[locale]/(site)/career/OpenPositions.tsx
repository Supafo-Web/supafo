"use client"

import { useUI } from "@/components/services/contexts/UIContexts"
import useEmblaCarousel from "embla-carousel-react"
import {
   ComputerDesktopIcon,
   CodeBracketIcon,
   CircleStackIcon,
   ChatBubbleLeftRightIcon,
   BriefcaseIcon,
   MegaphoneIcon,
   PaintBrushIcon,
   DevicePhoneMobileIcon,
   CpuChipIcon,
   CloudIcon,
   ServerStackIcon,
} from "@heroicons/react/24/outline"
import { useEffect, type ComponentType, type SVGProps } from "react"
import styles from "@/components/modules/career.module.scss"
import Image from "next/image"
import Button from "@/components/button/Button"
import { useLocale, useTranslations } from "next-intl"
import { getOpenPositions } from "@/components/services/Api"
import { formatPrice } from "@/components/utils/Utils"

type HeroIcon = ComponentType<SVGProps<SVGSVGElement>>

const iconMap: Record<string, HeroIcon> = {
   "heroicon-o-computer-desktop": ComputerDesktopIcon,
   "heroicon-o-code-bracket": CodeBracketIcon,
   "heroicon-o-circle-stack": CircleStackIcon,
   "heroicon-o-chat-bubble-left-right": ChatBubbleLeftRightIcon,
   "heroicon-o-briefcase": BriefcaseIcon,
   "heroicon-o-megaphone": MegaphoneIcon,
   "heroicon-o-paint-brush": PaintBrushIcon,
   "heroicon-o-device-phone-mobile": DevicePhoneMobileIcon,
   "heroicon-o-cpu-chip": CpuChipIcon,
   "heroicon-o-cloud": CloudIcon,
   "heroicon-o-server-stack": ServerStackIcon,
}

const OpenPositions = () => {
   const { openPositions, setOpenPositions } = useUI()
   const locale = useLocale()
   const t = useTranslations('Career')

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await getOpenPositions()

            if (response) {
               setOpenPositions(response.positions)
            }
         } catch (error) {
            if (process.env.NODE_ENV === "development") {
               console.error(error)
            }
         }
      }

      fetchData()
   }, [setOpenPositions])

   const [emblaRef] = useEmblaCarousel({
      align: "start",
      dragFree: false,
      containScroll: "trimSnaps",
      slidesToScroll: 1,
      duration: 3000,
   })

   return (
      <div
         className={styles.carouselSection}
      >
         <div
            className={styles.embla}
            ref={emblaRef}
         >
            <div
               className={styles.emblaContainer}
            >
               {openPositions.map((item, index) => {
                  const Icon = item.icon ? iconMap[item.icon] : null
                  const keywords = Array.isArray(item.keywords) ? item.keywords : []

                  return (
                     <div
                        key={item.id || index}
                        className={styles.emblaSlide}
                     >
                        <div
                           className={styles.openPositionArea}
                        >
                           <div
                              className={styles.header}
                           >
                              <div
                                 className="flex items-center justify-between mb-5"
                              >
                                 {Icon && (
                                    <Icon className={`h-10 w-10 ${styles.icon}`} />
                                 )}

                                 <p
                                    className={`px-2.5 py-1.5 ${styles.subTitle}`}
                                 >
                                    {item.subTitle}
                                 </p>
                              </div>

                              <h3
                                 className={`truncate mb-10 ${styles.title}`}
                              >
                                 {item.title}
                              </h3>

                              <small
                                 className="flex gap-0.5"
                              >
                                 <Image
                                    alt="location"
                                    src="/career/Location.svg"
                                    width={20}
                                    height={20}
                                    className="w-4.5 sm:w-5 h-auto shrink-0"
                                 />
                                 <div
                                    className={styles.smallText}
                                 >
                                    {item.city}, {item.country_name}
                                 </div>
                              </small>
                           </div>

                           <div
                              className={styles.footer}
                           >
                              <div
                                 className="flex flex-col gap-4 mb-8"
                              >
                                 <div
                                    className="flex gap-2.5 flex-wrap"
                                 >
                                    {keywords.map((keyword, keywordIndex) => (
                                       <p
                                          key={`${item.id || index}-${keyword}-${keywordIndex}`}
                                          className={`truncate px-2.5 py-1.5 rounded-lg ${styles.keyword}`}
                                       >
                                          {keyword}
                                       </p>
                                    ))}
                                 </div>

                                 <div
                                    className="line-clamp-3"
                                    dangerouslySetInnerHTML={{
                                       __html: item.description || "",
                                    }}
                                 />

                                 <div
                                    className="flex justify-center"
                                 >
                                    <p
                                       className={`px-2.5 py-1.5 ${styles.priceArea}`}
                                    >
                                       {formatPrice(item.price || 0, item.currency)}
                                    </p>
                                 </div>
                              </div>

                              <div
                                 className="flex"
                              >
                                 <Button
                                    href={`/${locale}/career/${item.id}`}
                                    text={t('apply')}
                                    className="flex flex-1"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default OpenPositions
