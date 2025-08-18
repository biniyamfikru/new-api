import React from 'react';
import { useTranslation } from 'react-i18next';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full flex flex-col items-center justify-start mt-16'>
      <div className='inline-block text-3xl text-[#4fd1c7] mb-8'>
        {t('landing.cta.startToday')}
      </div>
      <h2 className='text-5xl font-bold text-semi-color-black mb-5'>
        {t('landing.cta.oneApi')}
      </h2>
      <p className='text-5xl text-semi-color-black mb-5'>
        {t('landing.cta.accessModels')}
      </p>
      <p className='bg-clip-text bg-gradient-to-tl from-[#666] to-[#999] text-transparent mb-5'>
        {t('landing.cta.freeOffer')}
      </p>
      <p className='text-semi-color-black font-semibold text-4xl mb-10'>
        {t('landing.cta.getFreeTokens')}
      </p>
      <div className="flex justify-center items-center gap-4">
        <a href="#" className="w-fit px-12 py-4 font-bold text-3xl rounded-[24px] bg-gradient-to-l from-[#4dd0e1] to-[#26c6da] no-underline shadow-md text-semi-color-white hover:opacity-90 transition-opacity">
          {t('landing.cta.getFreeApiKey')}
        </a>
        <a href="#" className="w-fit px-12 py-4 font-bold text-3xl rounded-[24px] bg-[#000] no-underline shadow-md text-semi-color-white hover:opacity-90 transition-opacity">
          {t('landing.cta.apiDocs')}
        </a>
      </div>
    </div>
  );
};

export default CTASection;
