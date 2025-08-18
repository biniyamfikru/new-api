import React from 'react';
import { useTranslation } from 'react-i18next';

const ModelCard = ({ icon: Icon, title, description, onLearnMore }) => {
  const { t } = useTranslation();

  return (
    <div className='model-card flex flex-col justify-center items-center'>
      <div className='w-full flex justify-center items-center mb-6'>
        <Icon size={60} />
      </div>
      <div className='text-2xl font-semibold flex justify-center items-center mb-6 text-center'>
        {title}
      </div>
      {description && (
        <p className='text-base text-gray-600 text-center mb-4 px-4'>
          {description}
        </p>
      )}
      <button
        className="bg-gradient-to-r from-[#4fd1c7] to-[#38b2ac] text-[#fff] px-6 py-4 rounded-lg font-semibold mb-4 hover:opacity-90 transition-opacity"
        onClick={onLearnMore}
      >
        {t('landing.modelCard.learnMore')}
      </button>
    </div>
  );
};

export default ModelCard;
