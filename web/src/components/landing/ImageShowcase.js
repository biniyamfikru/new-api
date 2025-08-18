import React from 'react';

const ImageShowcase = () => {
  return (
    <section className='max-w-screen-xl flex justify-center items-center gap-12 mb-20'>
      <div className='w-1/2 bg-[#fff]/95 rounded-3xl cursor-pointer hover:scale-[0.99] transition-transform duration-300'>
        <img src='/gpt5.png' className='w-full h-auto rounded-3xl' alt="GPT-5" />
      </div>
      <div className='w-1/2 bg-[#fff]/95 rounded-3xl cursor-pointer hover:scale-[0.99] transition-transform duration-300'>
        <img src='/4.1.png' className='w-full h-auto rounded-3xl' alt="AI Model 4.1" />
      </div>
    </section>
  );
};

export default ImageShowcase;
