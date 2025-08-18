import React, { useContext, useEffect, useState } from 'react';
import NoticeModal from '../layout/NoticeModal';
import { useIsMobile } from '../../hooks/useIsMobile.js';
import { API } from '../../helpers';
import HeroSection from './HeroSection';
import ImageShowcase from './ImageShowcase';
import ModelSearch from './ModelSearch';
import ModelGrid from './ModelGrid';
import HowItWorks from './HowItWorks';
import ModelShowcase from './ModelShowcase';
import FeaturesSection from './FeaturesSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import './LandingPage.css';

const LandingPage = () => {
  const [noticeVisible, setNoticeVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const checkNoticeAndShow = async () => {
      const lastCloseDate = localStorage.getItem('notice_close_date');
      const today = new Date().toDateString();
      if (lastCloseDate !== today) {
        try {
          const res = await API.get('/api/notice');
          const { success, data } = res.data;
          if (success && data && data.trim() !== '') {
            setNoticeVisible(true);
          }
        } catch (error) {
          console.error('获取公告失败:', error);
        }
      }
    };

    checkNoticeAndShow();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <NoticeModal
        visible={noticeVisible}
        onClose={() => setNoticeVisible(false)}
        isMobile={isMobile}
      />
      
      <div className='w-full min-h-screen bg-gradient-to-b from-[#a8f0e8] via-[#e0f7fa] to-[#b3e5fc] py-20 flex flex-col items-center justify-start'>
        <div className="bg-decoration">
          <div className="circle-large"></div>
          <div className="circle-medium"></div>
          <div className="circle-small"></div>
        </div>
        
        <HeroSection />
        <ImageShowcase />
        
        <div className='max-w-screen-xl w-full flex flex-col justify-start items-start'>
          <ModelSearch />
          <ModelGrid />
          <HowItWorks />
          <ModelShowcase />
          <FeaturesSection />
          <FAQSection />
          <CTASection />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
