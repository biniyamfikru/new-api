import React from 'react';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: 1,
      title: t('landing.howItWorks.step1.title'),
      description: t('landing.howItWorks.step1.description'),
      code: null
    },
    {
      number: 2,
      title: t('landing.howItWorks.step2.title'),
      description: t('landing.howItWorks.step2.description'),
      code: 'https://api.cometapi.com'
    },
    {
      number: 3,
      title: t('landing.howItWorks.step3.title'),
      description: t('landing.howItWorks.step3.description'),
      code: null
    }
  ];

  return (
    <div className='w-full flex flex-col justify-start items-center'>
      <span className='text-2xl bg-clip-text text-transparent bg-gradient-to-br from-[#4fd1c7] to-[#38b2ac] mb-4'>
        {t('landing.howItWorks.howItWorks')}
      </span>
      <h2 className='text-[#1a202c] text-5xl font-bold mb-20'>
        {t('landing.howItWorks.title')}
      </h2>
      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="step-card">
              <div className="step-number">{t('landing.howItWorks.step')} {step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {step.code && (
                <div className="step-code">{step.code}</div>
              )}
              <button className="learn-more-btn">
                {t('landing.howItWorks.learnMore')}
              </button>
            </div>
            {index < steps.length - 1 && (
              <div className="arrow-container">
                <div className="arrow">→</div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
