import React, { useEffect, useState, useMemo, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@douyinfe/semi-ui';
import { getFooterHTML, getLogo, getSystemName } from '../../helpers';
import { StatusContext } from '../../context/Status';

const FooterBar = () => {
  const { t } = useTranslation();
  const [footer, setFooter] = useState(getFooterHTML());
  const systemName = getSystemName();
  const logo = getLogo();
  const [statusState] = useContext(StatusContext);
  const isDemoSiteMode = statusState?.status?.demo_site_enabled || false;

  const loadFooter = () => {
    let footer_html = localStorage.getItem('footer_html');
    if (footer_html) {
      setFooter(footer_html);
    }
  };

  const content = {
    title: 'CometAPI',
    description: '500+ AI模型API，統一API，直接在CometAPI',
    modelApi: '模型API',
    gptInterface: 'GPT應用接口',
    sunoApi: 'Suno API',
    keApi: 'Ke API',
    soraApi: 'Sora API',
    developers: '開發者',
    registerAccount: '註冊帳戶',
    apiDashboard: 'API儀表板',
    docs: '文檔',
    quickGuide: '快速指南',
    resources: '資源中心',
    pricing: '定價',
    enterprise: '企業',
    blog: '博客',
    aiModelArticles: 'AI模型API文章',
    discord: 'Discord社區',
    contactUs: '聯繫我們',
    email: 'support@cometapi.com',
  };

  const currentYear = new Date().getFullYear();

  const customFooter = useMemo(() => (
    <footer className="relative h-auto py-16 px-6 md:px-24 w-full flex flex-col items-center justify-between overflow-hidden" style={{background: "linear-gradient(135deg, #a8f0e8 0%, #e0f7fa 50%, #b3e5fc 100%)"}}>
      {/* <div className="absolute hidden md:block top-[204px] left-[-100px] w-[151px] h-[151px] rounded-full bg-[#FFD166]"></div>
      <div className="absolute md:hidden bottom-[20px] left-[-50px] w-[80px] h-[80px] rounded-full bg-[#FFD166] opacity-60"></div> */}

      {isDemoSiteMode && (
        <div className="flex flex-col md:flex-row justify-between w-full max-w-[1110px] mb-10 gap-8">
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt={systemName}
              className="w-16 h-16 rounded-full bg-gray-800 p-1.5 object-contain"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            <div className="text-left">
              <p className="!text-semi-color-text-0 font-semibold mb-5">{t('关于我们')}</p>
              <div className="flex flex-col gap-4">
                <a href="https://docs.newapi.pro/wiki/project-introduction/" target="_blank" rel="noopener noreferrer" className="!text-semi-color-text-1">{t('关于项目')}</a>
                <a href="https://docs.newapi.pro/support/community-interaction/" target="_blank" rel="noopener noreferrer" className="!text-semi-color-text-1">{t('联系我们')}</a>
                <a href="https://docs.newapi.pro/wiki/features-introduction/" target="_blank" rel="noopener noreferrer" className="!text-semi-color-text-1">{t('功能特性')}</a>
              </div>
            </div>

            <div className="text-left">
              <p className="!text-semi-color-text-0 font-semibold mb-5">{t('文档')}</p>
              <div className="flex flex-col gap-4">
                <a href="https://docs.newapi.pro/getting-started/" target="_blank" rel="noopener noreferrer" className="!text-semi-color-text-1">{t('快速开始')}</a>
                <a href="https://docs.newapi.pro/installation/" target="_blank" rel="noopener noreferrer" className="!text-semi-color-text-1">{t('安装指南')}</a>
                <a href="https://docs.newapi.pro/api/" target="_blank" rel="noopener noreferrer" className="!text-semi-color-text-1">{t('API 文档')}</a>
              </div>
            </div>

            <div className="text-left">
              <p className="!text-semi-color-text-0 font-semibold mb-5">{t('相关项目')}</p>
              <div className="flex flex-col gap-4">
                <a href="https://github.com/songquanpeng/one-api" target="_blank" rel="noopener noreferrer" className="!text-semi-color-text-1">One API</a>
                <a href="https://github.com/novicezk/midjourney-proxy" target="_blank" rel="noopener noreferrer" className="!text-semi-color-text-1">Midjourney-Proxy</a>
                <a href="https://github.com/Deeptrain-Community/chatnio" target="_blank" rel="noopener noreferrer" className="!text-semi-color-text-1">chatnio</a>
                <a href="https://github.com/Calcium-Ion/neko-api-key-tool" target="_blank" rel="noopener noreferrer" className="!text-semi-color-text-1">neko-api-key-tool</a>
              </div>
            </div>

            <div className="text-left">
              <p className="!text-semi-color-text-0 font-semibold mb-5">{t('基于New API的项目')}</p>
              <div className="flex flex-col gap-4">
                <a href="https://github.com/Calcium-Ion/new-api-horizon" target="_blank" rel="noopener noreferrer" className="!text-semi-color-text-1">new-api-horizon</a>
                {/* <a href="https://github.com/VoAPI/VoAPI" target="_blank" rel="noopener noreferrer" className="!text-semi-color-text-1">VoAPI</a> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1110px] gap-6">
        <div className="flex flex-wrap items-center gap-2">
          <Typography.Text className="text-sm !text-semi-color-text-1">© {currentYear} {systemName}. {t('版权所有')}</Typography.Text>
        </div>

        <div className="text-sm">
          <span className="!text-semi-color-text-1">{t('设计与开发由')} </span>
          <a href="https://github.com/QuantumNous/new-api" target="_blank" rel="noopener noreferrer" className="!text-semi-color-primary font-medium">New API</a>
          <span className="!text-semi-color-text-1"> & </span>
          <a href="https://github.com/songquanpeng/one-api" target="_blank" rel="noopener noreferrer" className="!text-semi-color-primary font-medium">One API</a>
        </div>
      </div> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-8">
          {/* Main Logo & Description Section */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 w-10 h-10 bg-sky-400 rounded-xl flex items-center justify-center shadow-lg">
                {/* CometAPI logo icon, can be replaced with an actual SVG or image */}
                <img
                src='/logo.png'
                 />
              </div>
              <span className="text-3xl font-bold text-gray-900 font-inter">
                {content.title}
              </span>
            </div>
            <p className="text-sm md:text-base text-gray-500 font-inter">
              {content.description}
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 font-inter text-[#4dd0e1]">
              {content.modelApi}
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-gray-600 font-inter">
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">{content.gptInterface}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">{content.sunoApi}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">{content.keApi}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">{content.soraApi}</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 font-inter text-[#4dd0e1]">
              {content.developers}
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-gray-600 font-inter">
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">{content.registerAccount}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">{content.apiDashboard}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">{content.docs}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">{content.quickGuide}</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 font-inter text-[#4dd0e1]">
              {content.resources}
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-gray-600 font-inter">
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">{content.pricing}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">{content.enterprise}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">{content.blog}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">{content.aiModelArticles}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">{content.discord}</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 font-inter text-[#4dd0e1]">
              {content.contactUs}
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-gray-600 font-inter">
              <li>
                <a href={`mailto:${content.email}`} className="hover:text-blue-500 transition-colors duration-200">
                  {content.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  ), [logo, systemName, t, currentYear, isDemoSiteMode]);

  useEffect(() => {
    loadFooter();
  }, []);

  return (
    <div className="w-full">
      {footer ? (
        <div
          className="custom-footer"
          dangerouslySetInnerHTML={{ __html: footer }}
        ></div>
      ) : (
        customFooter
      )}
    </div>
  );
};

export default FooterBar;
