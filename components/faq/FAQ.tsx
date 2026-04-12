"use client"

import Button from '@/components/button/Button'
import { useState } from 'react'
import styles from "./faq.module.scss"
import Image from 'next/image'

interface FAQItem {
   id: number
   question: string
   answer: string
}

const INITIAL_VISIBLE_COUNT = 5

const FAQ = ({ faq }: { faq: FAQItem[] }) => {
   const [openFAQ, setOpenFAQ] = useState<number | null>(null)
   const [showAll, setShowAll] = useState(false)

   const toggleFAQ = (id: number) => {
      setOpenFAQ(prev => (prev === id ? null : id))
   }

   const firstFaq = faq.slice(0, INITIAL_VISIBLE_COUNT)
   const extraFaq = faq.slice(INITIAL_VISIBLE_COUNT)

   const hasHiddenItems = faq.length > INITIAL_VISIBLE_COUNT

   return (
      <div
         className={styles.faqContainer}
      >
         <div
            className={styles.faqList}
         >
            {firstFaq.map((item, index) => {
               const isOpen = openFAQ === item.id

               return (
                  <div
                     key={item.id || index}
                     className={styles.faqItem}
                  >
                     <Button
                        onClick={() => toggleFAQ(item.id)}
                        className={`
                           ${styles.faqButton}
                           ${isOpen ? styles.faqButtonActive : ''}
                        `}
                     >
                        <span>{item.question}</span>

                        <Image
                           alt={isOpen ? "minus-button" : "plus-button"}
                           src={isOpen ? "/icons/Minus.svg" : "/icons/Plus.svg"}
                           width={28}
                           height={28}
                           priority
                           className={`
                              ${styles.faqIcon}
                              ${isOpen ? styles.faqIconActive : ''}
                           `}
                        />
                     </Button>

                     <div
                        className={`
                           ${styles.faqAnswerWrapper}
                           ${isOpen ? styles.faqAnswerWrapperActive : ''}
                        `}
                     >
                        <div
                           className={`
                           ${styles.faqAnswer}
                           ${isOpen ? styles.faqAnswerActive : ''}
                        `}
                        >
                           {item.answer}
                        </div>
                     </div>
                  </div>
               )
            })}

            {hasHiddenItems && (
               <div
                  className={`
                     ${styles.moreFaqWrapper}
                     ${showAll ? styles.moreFaqWrapperActive : ''}
                  `}
               >
                  <div
                     className={styles.moreFaqInner}
                  >
                     {extraFaq.map((item, index) => {
                        const isOpen = openFAQ === item.id

                        return (
                           <div
                              key={item.id || index}
                              className={styles.faqItem}
                           >
                              <Button
                                 onClick={() => toggleFAQ(item.id)}
                                 className={`
                                    ${styles.faqButton}
                                    ${isOpen ? styles.faqButtonActive : ''}
                                 `}
                              >
                                 <span>{item.question}</span>

                                 <Image
                                    alt={isOpen ? "minus-button" : "plus-button"}
                                    src={isOpen ? "/icons/Minus.svg" : "/icons/Plus.svg"}
                                    width={28}
                                    height={28}
                                    priority
                                    className={`
                                       ${styles.faqIcon}
                                       ${isOpen ? styles.faqIconActive : ''}
                                    `}
                                 />
                              </Button>

                              <div className={`
                                    ${styles.faqAnswerWrapper}
                                    ${isOpen ? styles.faqAnswerWrapperActive : ''}
                                 `}
                              >
                                 <div className={`
                                       ${styles.faqAnswer}
                                       ${isOpen ? styles.faqAnswerActive : ''}
                                    `}
                                 >
                                    {item.answer}
                                 </div>
                              </div>
                           </div>
                        )
                     })}
                  </div>
               </div>
            )}
         </div>

         {hasHiddenItems && (
            <Button
               onClick={() => setShowAll(prev => !prev)}
               className={`
                  ${styles.downArrow}
                  ${showAll ? styles.downArrowActive : ''}
               `}
            >
               <Image
                  alt="down-arrow"
                  src="/icons/DownArrowGreen.svg"
                  width={24}
                  height={24}
                  priority
                  className={styles.downArrowIcon}
               />
            </Button>
         )}
      </div>
   )
}

export default FAQ
