import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ModelSearch = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className='w-full flex flex-col justify-start items-start'>
      <span className='border-2 border-[#4fd1c7] rounded-full py-2 px-4 text-[#4fd1c7] mb-8'>
        {t('landing.modelSearch.modelList')}
      </span>
      <h1 className="text-5xl font-bold text-[#2d3748] mb-10">
        {t('landing.modelSearch.title')}
      </h1>
      <div className="w-full flex justify-between shadow-xl rounded-lg overflow-hidden bg-[#fff]/95 backdrop:blur-md border-2 border-[#fff]/30 mb-10">
        <input
          type="text"
          className="flex px-5 py-4 text-xl text-[#4a5568] outline-none bg-transparent"
          placeholder={t('landing.modelSearch.placeholder')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button
          className="bg-gradient-to-r from-[#4fd1c7] to-[#38b2ac] text-white px-6 py-4 rounded-r-lg hover:opacity-90 transition-opacity"
          onClick={handleSearch}
        >
          {t('landing.modelSearch.search')}
        </button>
      </div>
    </div>
  );
};

export default ModelSearch;
