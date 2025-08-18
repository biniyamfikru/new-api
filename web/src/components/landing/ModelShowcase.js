import React from 'react';
import { useTranslation } from 'react-i18next';
import { DeepSeek, Mistral, Microsoft, Anthropic, OpenAI, Meta, Midjourney } from '@lobehub/icons';

const ModelShowcase = () => {
  const { t } = useTranslation();

  const models = [
    { icon: DeepSeek.Color, name: 'DeepSeek' },
    { icon: Mistral.Color, name: 'Mistral AI' },
    { icon: Microsoft.Color, name: 'Microsoft' },
    { icon: Anthropic, name: 'Anthropic' },
    { icon: OpenAI, name: 'Open AI' },
    { icon: Meta.Color, name: 'Meta AI' },
    { icon: Midjourney, name: 'Midjourney' },
  ];

  return (
    <div className="w-full overflow-hidden flex flex-col justify-start items-center mt-14">
      <h3 className="text-3xl font-semibold text-semi-color-black mb-8">
        {t('landing.modelShowcase.title')}
      </h3>
      <div className="w-full bg-semi-color-white rounded-md overflow-hidden">
        <div className="flex w-fit animate-scroll hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, repeatIndex) => (
            <React.Fragment key={repeatIndex}>
              {models.map((model, index) => (
                <div key={`${repeatIndex}-${index}`} className="flex items-center justify-start p-8 gap-2 whitespace-nowrap">
                  <model.icon className="text-7xl shadow-xl p-2 rounded-lg" />
                  <span className="text-xl font-semibold">{model.name}</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelShowcase;
