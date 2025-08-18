import React from 'react';
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '90M+', label: t('landing.features.dailyRequests') },
    { value: '10K+', label: t('landing.features.activeUsers') },
    { value: '99%', label: t('landing.features.satisfaction') },
    { value: '500+', label: t('landing.features.integratedModels') },
  ];

  return (
    <div className='w-full flex flex-col justify-start items-start my-20'>
      <div className='inline-block bg-[#fff] bg-clip-text text-transparent bg-gradient-to-br from-[#4fd1c7] to-[#38b2ac] text-base px-4 py-2 border-2 border-[#4fd1c7] rounded-[20px]'>
        {t('landing.features.mainAdvantages')}
      </div>
      <div className="w-full grid grid-cols-[1fr,1fr] gap-4 justify-start items-start">
        <div className='flex flex-col justify-start items-start'>
          <h4 className='text-4xl font-bold text-semi-color-black mb-5 mt-16'>
            {t('landing.features.title')}
          </h4>
          <p className='text-[#666] text-lg leading-[1.6] mb-5'>
            {t('landing.features.description')}
          </p>
          <div className='mt-5'>
            <p className='text-[#000000] font-semibold mb-4'>
              ✓ {t('landing.features.benefit1')}
            </p>
            <p className='text-[#000000] font-semibold mb-4'>
              ✓ {t('landing.features.benefit2')}
            </p>
            <p className='text-[#000000] font-semibold'>
              ✓ {t('landing.features.benefit3')}
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-8 pt-16'>
          {stats.map((stat, index) => (
            <div key={index} className='w-full bg-semi-color-white flex flex-col justify-center items-start p-8 rounded-3xl gap-2 shadow-lg transition-transform duration-500 hover:-translate-y-1'>
              <span className='text-4xl text-[#4dd0e1] font-bold'>
                {stat.value}
              </span>
              <span className='text-[#666]'>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
