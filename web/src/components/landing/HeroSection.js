import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className='max-w-screen-xl grid grid-cols-1 grid-rows-[repeat(5, auto)] justify-center items-center justify-items-center text-center mb-20'>
      <h1 className='text-5xl font-black leading-[1.2] mb-10 text-[#1a202c]'
        style={{ textShadow: "0 2px 4px rgba(255, 255, 255, 0.8)" }}>
        {t('landing.hero.title.prefix')} <span >{t('landing.hero.title.highlight')}</span>
      </h1>
      <p className="text-6xl font-semibold text-[#000] mb-12">{t('landing.hero.models')}</p>
      <p className="text-4xl font-semibold text-[#000] mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#666666] to-[#999999]">
        {t('landing.hero.freeOffer')}
      </p>
      <p className="text-4xl font-bold mb-6">
        <span className="border-b border-transparent rounded-[12px]">{t('landing.hero.getTokens')}</span> {t('landing.hero.now')}
      </p>
      <div className="flex justify-center items-center gap-4">
        <a href="#" className="w-fit px-12 py-4 font-bold text-3xl rounded-[24px] bg-gradient-to-l from-[#4dd0e1] to-[#26c6da] no-underline shadow-md text-semi-color-white">
          {t('landing.hero.getApiKey')}
        </a>
        <a href="#" className="w-fit px-12 py-4 font-bold text-3xl rounded-[24px] bg-[#000] no-underline shadow-md text-semi-color-white">
          {t('landing.hero.apiDocs')}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
