import React from 'react';
import { useTranslation } from 'react-i18next';
import { OpenAI, Claude } from '@lobehub/icons';
import ModelCard from './ModelCard';

const ModelGrid = () => {
  const { t } = useTranslation();

  const models = [
    { icon: OpenAI, title: t('landing.modelGrid.gpt5Mini'), description: t('landing.modelGrid.gpt5MiniDesc') },
    { icon: OpenAI, title: t('landing.modelGrid.gpt5Mini'), description: t('landing.modelGrid.gpt5MiniDesc') },
    { icon: OpenAI, title: t('landing.modelGrid.gpt5Mini'), description: t('landing.modelGrid.gpt5MiniDesc') },
    { icon: OpenAI, title: t('landing.modelGrid.gpt5Mini'), description: t('landing.modelGrid.gpt5MiniDesc') },
    { icon: OpenAI, title: t('landing.modelGrid.gpt5Mini'), description: t('landing.modelGrid.gpt5MiniDesc') },
    { icon: OpenAI, title: t('landing.modelGrid.gpt5Mini'), description: t('landing.modelGrid.gpt5MiniDesc') },
    { icon: Claude, title: t('landing.modelGrid.claude'), description: t('landing.modelGrid.claudeDesc') },
    { icon: OpenAI, title: t('landing.modelGrid.gpt5Mini'), description: t('landing.modelGrid.gpt5MiniDesc') },
    { icon: OpenAI, title: t('landing.modelGrid.gpt5Mini'), description: t('landing.modelGrid.gpt5MiniDesc') },
  ];

  const handleLearnMore = (modelTitle) => {
    // TODO: Implement learn more functionality
    console.log('Learn more about:', modelTitle);
  };

  return (
    <div className='w-full grid grid-cols-3 gap-16 grid-flow-row-dense mb-20'>
      {models.map((model, index) => (
        <ModelCard
          key={index}
          icon={model.icon}
          title={model.title}
          description={model.description}
          onLearnMore={() => handleLearnMore(model.title)}
        />
      ))}
    </div>
  );
};

export default ModelGrid;
