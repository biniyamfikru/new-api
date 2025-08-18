import React from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from '../animate-ui/base/accordion';

const FAQSection = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('landing.faq.q1'),
      answer: t('landing.faq.a1')
    },
    {
      question: t('landing.faq.q2'),
      answer: t('landing.faq.a2')
    },
    {
      question: t('landing.faq.q3'),
      answer: t('landing.faq.a3')
    },
    {
      question: t('landing.faq.q4'),
      answer: t('landing.faq.a4')
    },
    {
      question: t('landing.faq.q5'),
      answer: t('landing.faq.a5')
    }
  ];

  return (
    <div className='w-full grid grid-cols-2 justify-center items-center gap-16'>
      <div>
        <div className='inline-block bg-[#fff] bg-clip-text text-transparent bg-gradient-to-br from-[#4fd1c7] to-[#38b2ac] text-base px-4 py-2 border-2 border-[#4fd1c7] rounded-[20px]'>
          {t('landing.faq.mainAdvantages')}
        </div>
        <h4 className='text-4xl font-bold text-semi-color-black mb-5 mt-16'>
          {t('landing.faq.title')}
        </h4>
        <p className='text-[#666] text-lg leading-[1.6] mb-5'>
          {t('landing.faq.description')}
        </p>
      </div>
      <Accordion className="w-full flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} className="bg-semi-color-white px-8 rounded-lg">
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionPanel>
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
