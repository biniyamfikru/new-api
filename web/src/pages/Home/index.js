import React, { useContext, useEffect, useState } from 'react';
import { Button, Typography, Tag, Input, ScrollList, ScrollItem } from '@douyinfe/semi-ui';
import { API, showError, copy, showSuccess } from '../../helpers';
import { useIsMobile } from '../../hooks/useIsMobile.js';
import { API_ENDPOINTS } from '../../constants/common.constant';
import { StatusContext } from '../../context/Status';
import { marked } from 'marked';
import { useTranslation } from 'react-i18next';
import { IconGithubLogo, IconPlay, IconFile, IconCopy } from '@douyinfe/semi-icons';
import { Link } from 'react-router-dom';
import NoticeModal from '../../components/layout/NoticeModal';
import { Moonshot, OpenAI, XAI, Zhipu, Volcengine, Cohere, Claude, Gemini, Suno, Minimax, Wenxin, Spark, Qingyan, DeepSeek, Qwen, Midjourney, Grok, AzureAI, Hunyuan, Xinference, Mistral, Microsoft, Anthropic, Meta } from '@lobehub/icons';
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from '../../components/animate-ui/base/accordion';

const { Text } = Typography;

const Home = () => {
  const { t, i18n } = useTranslation();
  const [statusState] = useContext(StatusContext);
  const [homePageContentLoaded, setHomePageContentLoaded] = useState(false);
  const [homePageContent, setHomePageContent] = useState('');
  const [noticeVisible, setNoticeVisible] = useState(false);
  const isMobile = useIsMobile();
  const isDemoSiteMode = statusState?.status?.demo_site_enabled || false;
  const docsLink = statusState?.status?.docs_link || '';
  const serverAddress = statusState?.status?.server_address || window.location.origin;
  const endpointItems = API_ENDPOINTS.map((e) => ({ value: e }));
  const [endpointIndex, setEndpointIndex] = useState(0);
  const isChinese = i18n.language.startsWith('zh');

  const displayHomePageContent = async () => {
    // setHomePageContent(localStorage.getItem('home_page_content') || '');
    // const res = await API.get('/api/home_page_content');
    // const { success, message, data } = res.data;
    // if (success) {
    //   let content = data;
    //   if (!data.startsWith('https://')) {
    //     content = marked.parse(data);
    //   }
    //   setHomePageContent(content);
    //   localStorage.setItem('home_page_content', content);

    //   // 如果内容是 URL，则发送主题模式
    //   if (data.startsWith('https://')) {
    //     const iframe = document.querySelector('iframe');
    //     if (iframe) {
    //       const theme = localStorage.getItem('theme-mode') || 'light';
    //       iframe.onload = () => {
    //         iframe.contentWindow.postMessage({ themeMode: theme }, '*');
    //         iframe.contentWindow.postMessage({ lang: i18n.language }, '*');
    //       };
    //     }
    //   }
    // } else {
    //   showError(message);
    //   setHomePageContent('加载首页内容失败...');
    // }
    setHomePageContentLoaded(true);
  };

  const handleCopyBaseURL = async () => {
    const ok = await copy(serverAddress);
    if (ok) {
      showSuccess(t('已复制到剪切板'));
    }
  };

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

  useEffect(() => {
    displayHomePageContent().then();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setEndpointIndex((prev) => (prev + 1) % endpointItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [endpointItems.length]);

  return (
    <div className="w-full overflow-x-hidden">
      <NoticeModal
        visible={noticeVisible}
        onClose={() => setNoticeVisible(false)}
        isMobile={isMobile}
      />
      <div className='w-full min-h-screen bg-gradient-to-b from-[#a8f0e8] via-[#e0f7fa] to-[#b3e5fc] py-20 flex flex-col items-center justify-start'>
        <div class="bg-decoration">
          <div class="circle-large"></div>
          <div class="circle-medium"></div>
          <div class="circle-small"></div>
        </div>
        <section className='max-w-screen-xl grid grid-cols-1 grid-rows[repeat(5, auto)] justify-center items-center justify-items-center text-center mb-20'>
          <h1 className='text-5xl font-black leading-[1.2] mb-10 text-[#1a202c]'
            style={{ textShadow: "0 2px 4px rgba(255, 255, 255, 0.8)" }}>
            所有 AI 模型<span className="api-highlight">一个 API</span>
          </h1>
          <p className="text-6xl font-semibold text-[#000] mb-12">500+ AI模型</p>
          <p className="text-4xl font-semibold text-[#000] mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#666666] to-[#999999]">限时免费！立即注册</p>
          <p className="text-4xl font-bold mb-6">
            <span className="border-b border-transparent rounded-[12px]">获取免费代币</span> 即刻！
          </p>
          <div className="flex justify-center items-center gap-4">
            <a href="#" className="w-fit px-12 py-4 font-bold text-3xl rounded-[24px] bg-gradient-to-l from-[#4dd0e1] to-[#26c6da] no-underline shadow-md text-semi-color-white">取得免费 API 密钥</a>
            <a href="#" className="w-fit px-12 py-4 font-bold text-3xl rounded-[24px] bg-[#000] no-underline shadow-md text-semi-color-white">API 文档</a>
          </div>
        </section>
        <section className='max-w-screen-xl flex justify-center items-center gap-12 mb-20'>
          <div className='w-1/2 bg-[#fff]/95 rounded-3xl cursor-pointer hover:scale-[0.99]'>
            <img src='/gpt5.png' className='w-full h-auto rounded-3xl' />
          </div>
          <div className='w-1/2 bg-[#fff]/95 rounded-3xl cursor-pointer hover:scale-[0.99]'>
            <img src='/4.1.png' className='w-full h-auto rounded-3xl' />
          </div>
        </section>
        <div className='max-w-screen-xl w-full flex flex-col justify-start items-start'>
          <span className='border-2 border-[#4fd1c7] rounded-full py-2 px-4 text-[#4fd1c7] mb-8'>
            型号清单
          </span>
          <h1
            className="text-5xl font-bold text-[#2d3748] mb-10"
          >
            500+ AI模型統一在一個API中
          </h1>
          <div
            className="w-full flex justify-between shadow-xl rounded-lg overflow-hidden bg-[#fff]/95 backdrop:blur-md border-2 border-[#fff]/30 mb-10"
          >
            <input
              type="text"
              className="flex px-5 py-4 text-xl text-[#4a5568] outline-none bg-transparent"
              placeholder="输入以开始搜索..."
            />
            <button
              className="bg-gradient-to-r from-[#4fd1c7] to-[#38b2ac] text-white px-6 py-4 rounded-r-lg"
            >
              搜寻
            </button>
          </div>
          <div className='w-full grid grid-cols-3 gap-16 grid-flow-row-dense mb-20'>
            <div className='model-card flex flex-col justify-center items-center'>
              <div className='w-full flex justify-center items-center mb-6'>
                <OpenAI size={60} />
              </div>
              <div className='text-2xl font-semibold flex justify-center items-center mb-6'>GPT-5 迷你 API</div>
              <button
                className="bg-gradient-to-r from-[#4fd1c7] to-[#38b2ac] text-[#fff] px-6 py-4 rounded-lg font-semibold mb-4"
              >
                了解更多
              </button>
            </div>
            <div className='model-card flex flex-col justify-center items-center'>
              <div className='w-full flex justify-center items-center mb-6'>
                <OpenAI size={60} />
              </div>
              <div className='text-2xl font-semibold flex justify-center items-center mb-6'>GPT-5 迷你 API</div>
              <button
                className="bg-gradient-to-r from-[#4fd1c7] to-[#38b2ac] text-[#fff] px-6 py-4 rounded-lg font-semibold mb-4"
              >
                了解更多
              </button>
            </div>
            <div className='model-card flex flex-col justify-center items-center'>
              <div className='w-full flex justify-center items-center mb-6'>
                <OpenAI size={60} />
              </div>
              <div className='text-2xl font-semibold flex justify-center items-center mb-6'>GPT-5 迷你 API</div>
              <button
                className="bg-gradient-to-r from-[#4fd1c7] to-[#38b2ac] text-[#fff] px-6 py-4 rounded-lg font-semibold mb-4"
              >
                了解更多
              </button>
            </div>
            <div className='model-card flex flex-col justify-center items-center'>
              <div className='w-full flex justify-center items-center mb-6'>
                <OpenAI size={60} />
              </div>
              <div className='text-2xl font-semibold flex justify-center items-center mb-6'>GPT-5 迷你 API</div>
              <button
                className="bg-gradient-to-r from-[#4fd1c7] to-[#38b2ac] text-[#fff] px-6 py-4 rounded-lg font-semibold mb-4"
              >
                了解更多
              </button>
            </div>
            <div className='model-card flex flex-col justify-center items-center'>
              <div className='w-full flex justify-center items-center mb-6'>
                <OpenAI size={60} />
              </div>
              <div className='text-2xl font-semibold flex justify-center items-center mb-6'>GPT-5 迷你 API</div>
              <button
                className="bg-gradient-to-r from-[#4fd1c7] to-[#38b2ac] text-[#fff] px-6 py-4 rounded-lg font-semibold mb-4"
              >
                了解更多
              </button>
            </div>
            <div className='model-card flex flex-col justify-center items-center'>
              <div className='w-full flex justify-center items-center mb-6'>
                <OpenAI size={60} />
              </div>
              <div className='text-2xl font-semibold flex justify-center items-center mb-6'>GPT-5 迷你 API</div>
              <button
                className="bg-gradient-to-r from-[#4fd1c7] to-[#38b2ac] text-[#fff] px-6 py-4 rounded-lg font-semibold mb-4"
              >
                了解更多
              </button>
            </div>
            <div className='model-card flex flex-col justify-center items-center'>
              <div className='w-full flex justify-center items-center mb-6'>
                <Claude size={60} />
              </div>
              <div className='text-2xl font-semibold flex justify-center items-center mb-6'>GPT-5 迷你 API</div>
              <button
                className="bg-gradient-to-r from-[#4fd1c7] to-[#38b2ac] text-[#fff] px-6 py-4 rounded-lg font-semibold mb-4"
              >
                了解更多
              </button>
            </div>
            <div className='model-card flex flex-col justify-center items-center'>
              <div className='w-full flex justify-center items-center mb-6'>
                <OpenAI size={60} />
              </div>
              <div className='text-2xl font-semibold flex justify-center items-center mb-6'>GPT-5 迷你 API</div>
              <button
                className="bg-gradient-to-r from-[#4fd1c7] to-[#38b2ac] text-[#fff] px-6 py-4 rounded-lg font-semibold mb-4"
              >
                了解更多
              </button>
            </div>
            <div className='model-card flex flex-col justify-center items-center'>
              <div className='w-full flex justify-center items-center mb-6'>
                <OpenAI size={60} />
              </div>
              <div className='text-2xl font-semibold flex justify-center items-center mb-6'>GPT-5 迷你 API</div>
              <button
                className="bg-gradient-to-r from-[#4fd1c7] to-[#38b2ac] text-[#fff] px-6 py-4 rounded-lg font-semibold mb-4"
              >
                了解更多
              </button>
            </div>
          </div>
          <div className='w-full flex flex-col justify-start items-center'>
            <span className='text-2xl bg-clip-text text-transparent bg-gradient-to-br from-[#4fd1c7] to-[#38b2ac] mb-4'>工作原理</span>
            <h2 className='text-[#1a202c] text-5xl font-bold mb-20'>簡單的逐步過程</h2>
          </div>
          <div className="steps-wrapper">
            <div className="step-card">
              <div className="step-number">步骤1</div>
              <h3 className="step-title">获取API密钥</h3>
              <p className="step-description">
                从仪表板检索您的专用密钥，格式为 sk-XXXXX。
              </p>
              <button className="learn-more-btn">了解更多</button>
            </div>
            <div className="arrow-container">
              <div className="arrow">→</div>
            </div>
            <div className="step-card">
              <div className="step-number">步骤2</div>
              <h3 className="step-title">更改 base_url</h3>
              <p className="step-description">将程序中的 base_url 更新为</p>
              <div className="step-code">https://api.cometapi.com</div>
              <button className="learn-more-btn">了解更多</button>
            </div>
            <div className="arrow-container">
              <div className="arrow">→</div>
            </div>
            <div className="step-card">
              <div className="step-number">步骤3</div>
              <h3 className="step-title">使用 OpenAI 格式</h3>
              <p className="step-description">
                使用 OpenAI 的格式—只需替换您的密钥和基本 URL。
              </p>
              <button className="learn-more-btn">了解更多</button>
            </div>
          </div>
          <div className="w-full overflow-hidden flex flex-col justify-start items-center mt-14">
            <h3 className="text-3xl font-semibold text-semi-color-black mb-8">统一访问领先的 AI 模型</h3>
            <div className="w-full bg-semi-color-white rounded-md overflow-hidden">
              <div className="flex w-fit animate-scroll hover:[animation-play-state:paused]">
                {[...Array(2)].map((_, repeatIndex) => (
                  <React.Fragment key={repeatIndex}>
                    <div className="flex items-center justify-start p-8 gap-2 whitespace-nowrap">
                      <DeepSeek.Color className="text-7xl shadow-xl p-2 rounded-lg" />
                      <span className="text-xl font-semibold">DeepSeek</span>
                    </div>
                    <div className="flex items-center justify-start p-8 gap-2 whitespace-nowrap">
                      <Mistral.Color className="text-7xl shadow-xl p-2 rounded-lg" />
                      <span className="text-xl font-semibold">Mistral AI</span>
                    </div>
                    <div className="flex items-center justify-start p-8 gap-2 whitespace-nowrap">
                      <Microsoft.Color className="text-7xl shadow-xl p-2 rounded-lg" />
                      <span className="text-xl font-semibold">Microsoft</span>
                    </div>
                    <div className="flex items-center justify-start p-8 gap-2 whitespace-nowrap">
                      <Anthropic className="text-7xl shadow-xl p-2 rounded-lg" />
                      <span className="text-xl font-semibold">Anthropic</span>
                    </div>
                    <div className="flex items-center justify-start p-8 gap-2 whitespace-nowrap">
                      <OpenAI className="text-7xl shadow-xl p-2 rounded-lg" />
                      <span className="text-xl font-semibold">Open AI</span>
                    </div>
                    <div className="flex items-center justify-start p-8 gap-2 whitespace-nowrap">
                      <Meta.Color className="text-7xl shadow-xl p-2 rounded-lg" />
                      <span className="text-xl font-semibold">Meta AI</span>
                    </div>
                    <div className="flex items-center justify-start p-8 gap-2 whitespace-nowrap">
                      <Midjourney className="text-7xl shadow-xl p-2 rounded-lg" />
                      <span className="text-xl font-semibold">Midjourney</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col justify-start items-start my-20'>
            <div className='inline-block bg-[#fff] bg-clip-text text-transparent bg-gradient-to-br from-[#4fd1c7] to-[#38b2ac] text-base px-4 py-2 border-2 border-[#4fd1c7] rounded-[20px]'
            // letter-spacing: 0.5px;
            >
              主要优点
            </div>
            <div className="w-full grid grid-cols-[1fr,1fr] gap-4 justify-start items-start">
              <div className='flex flex-col justify-start items-start'>
                <h4 className='text-4xl font-bold text-semi-color-black mb-5 mt-16' >

                  {"您需要的所有AI API，全部集"}<br />{"中在一個平台上"}
                </h4>
                <p className='text-[#666] text-lg leading-[1.6] mb-5' >
                  通过专为效率和增长而设计的高性能无服务器架构来最大<br />
                  限度降低成本和维护成本。
                </p>
                <div className='mt-5' >
                  <p className='text-[#000000] font-semibold mb-4'>

                    ✓ 新-率先获得全球最新的 AI 模型。
                  </p>
                  <p className='text-[#000000] font-semibold mb-4' >
                    ✓ 快速-超高开发性、低延迟反应。
                  </p>
                  <p className='text-[#000000] font-semibold' >
                    ✓ 稳定-全天候不间断、可靠的效能。
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-8 pt-16'>
                <div className='w-full bg-semi-color-white flex flex-col justify-center items-start p-8 rounded-3xl gap-2 shadow-lg transition-transform duration-500 hover:-translate-y-1'>
                  <span className='text-4xl text-[#4dd0e1] font-bold'>
                    90M+
                  </span>
                  <span className='text-[#666]'>
                    每日請求
                  </span>
                </div>
                <div className='w-full bg-semi-color-white flex flex-col justify-center items-start p-8 rounded-3xl gap-2 shadow-lg transition-transform duration-500 hover:-translate-y-1'>
                  <span className='text-4xl text-[#4dd0e1] font-bold'>
                    10K+
                  </span>
                  <span className='text-[#666]'>
                    活躍用戶
                  </span>
                </div>
                <div className='w-full bg-semi-color-white flex flex-col justify-center items-start p-8 rounded-3xl gap-2 shadow-lg transition-transform duration-500 hover:-translate-y-1'>
                  <span className='text-4xl text-[#4dd0e1] font-bold'>
                    99%
                  </span>
                  <span className='text-[#666]'>
                    滿意度
                  </span>
                </div>
                <div className='w-full bg-semi-color-white flex flex-col justify-center items-start p-8 rounded-3xl gap-2 shadow-lg transition-transform duration-500 hover:-translate-y-1'>
                  <span className='text-4xl text-[#4dd0e1] font-bold'>
                    500+
                  </span>
                  <span className='text-[#666]'>
                    集成模型
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full grid grid-cols-2 justify-center items-center gap-16'>
            <div>
              <div className='inline-block bg-[#fff] bg-clip-text text-transparent bg-gradient-to-br from-[#4fd1c7] to-[#38b2ac] text-base px-4 py-2 border-2 border-[#4fd1c7] rounded-[20px]'
              // letter-spacing: 0.5px;
              >
                主要优点
              </div>
              <h4 className='text-4xl font-bold text-semi-color-black mb-5 mt-16' >
                {"我們在這裡回答您的所有問題"}
              </h4>
              <p className='text-[#666] text-lg leading-[1.6] mb-5' >
                您需要了解有關產品和計費的所有信息。找不到您要找的答案？與我們友好的團隊聊天。
              </p>
            </div>
            <Accordion className="w-full flex flex-col gap-3">
              <AccordionItem className="bg-semi-color-white px-8 rounded-lg">
                <AccordionTrigger>{"1. 什麼是CometAPI？"}</AccordionTrigger>
                <AccordionPanel>
                  {"CometAPI is a developer-centric AI model API aggregation platform that provides unified access interfaces. GPT, Midjourney, Claude, and more."}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="bg-semi-color-white px-8 rounded-lg">
                <AccordionTrigger>{"2. 如何開始？"}</AccordionTrigger>
                <AccordionPanel>
                  {"只需要简单三步：1) 注册CometAPI账户 2) 获取API密钥 3) 开始调用我们的API接口。我们提供详细的文档和示例代码帮助您快速上手。"}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="bg-semi-color-white px-8 rounded-lg">
                <AccordionTrigger>{"3. 它適合我的業務嗎？"}</AccordionTrigger>
                <AccordionPanel>
                  {"CometAPI适用于各种规模的业务，从个人开发者到企业级应用。我们提供灵活的定价方案和技术支持，可以满足不同业务场景的需求。"}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="bg-semi-color-white px-8 rounded-lg">
                <AccordionTrigger>{"4. 如何跟踪使用情況和成本？"}</AccordionTrigger>
                <AccordionPanel>
                  {"我们提供详细的使用仪表板，您可以实时监控API调用次数、费用支出、模型使用分布等数据。同时支持设置使用限制和预算提醒。"}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="bg-semi-color-white px-8 rounded-lg">
                <AccordionTrigger>{"5. 提供什麼支持？"}</AccordionTrigger>
                <AccordionPanel>
                  {"我们提供多种支持方式：在线文档、API参考、代码示例、社区论坛、邮件支持。企业用户还可享受专属技术支持和优先服务。"}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='w-full flex flex-col items-center justify-start mt-16'>
            <div className='inline-block text-3xl text-[#4fd1c7] mb-8' >
              从今天开始
            </div>
            <h2 className='text-5xl font-bold text-semi-color-black mb-5'>一個API</h2>
            <p className='text-5xl text-semi-color-black mb-5'>{"訪問500+ AI模型！"}</p>
            <p className='bg-clip-text bg-gradient-to-tl from-[#666] to-[#999] text-transparent mb-5'>{"限時免費！立即註冊"}</p>
            <p className='text-semi-color-black font-semibold text-4xl mb-10'>{"立即獲得1M免費代幣！"}</p>
            <div className="flex justify-center items-center gap-4">
              <a href="#" className="w-fit px-12 py-4 font-bold text-3xl rounded-[24px] bg-gradient-to-l from-[#4dd0e1] to-[#26c6da] no-underline shadow-md text-semi-color-white">{"獲得免費API密鑰"}</a>
              <a href="#" className="w-fit px-12 py-4 font-bold text-3xl rounded-[24px] bg-[#000] no-underline shadow-md text-semi-color-white">{"API文檔"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// commented lines

// {
//   homePageContentLoaded && homePageContent === '' ? (
//     <div className="w-full overflow-x-hidden">
//       {/* Banner 部分 */}
//       <div className="w-full border-b border-semi-color-border min-h-[500px] md:min-h-[600px] lg:min-h-[700px] relative overflow-x-hidden">>
//         {/* 背景模糊晕染球 */}
//         <div className="blur-ball blur-ball-indigo" />
//         <div className="blur-ball blur-ball-teal" />
//         <div className="flex items-center justify-center h-full px-4 py-20 md:py-24 lg:py-32 mt-10">
//           {/* 居中内容区 */}
//           <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
//             <div className="flex flex-col items-center justify-center mb-6 md:mb-8">
//               <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-semi-color-text-0 leading-tight ${isChinese ? 'tracking-wide md:tracking-wider' : ''}`}>
//                 {i18n.language === 'en' ? (
//                   <>
//                     The Unified<br />
//                     <span className="shine-text">LLMs API Gateway</span>
//                   </>
//                 ) : (
//                   <>
//                     统一的<br />
//                     <span className="shine-text">大模型接口网关</span>
//                   </>
//                 )}
//               </h1>
//               <p className="text-base md:text-lg lg:text-xl text-semi-color-text-1 mt-4 md:mt-6 max-w-xl">
//                 {t('更好的价格，更好的稳定性，只需要将模型基址替换为：')}
//               </p>
//               {/* BASE URL 与端点选择 */}
//               <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mt-4 md:mt-6 max-w-md">
//                 <Input
//                   readonly
//                   value={serverAddress}
//                   className="flex-1 !rounded-full"
//                   size={isMobile ? 'default' : 'large'}
//                   suffix={
//                     <div className="flex items-center gap-2">
//                       <ScrollList bodyHeight={32} style={{ border: 'unset', boxShadow: 'unset' }}>
//                         <ScrollItem
//                           mode="wheel"
//                           cycled={true}
//                           list={endpointItems}
//                           selectedIndex={endpointIndex}
//                           onSelect={({ index }) => setEndpointIndex(index)}
//                         />
//                       </ScrollList>
//                       <Button
//                         type="primary"
//                         onClick={handleCopyBaseURL}
//                         icon={<IconCopy />}
//                         className="!rounded-full"
//                       />
//                     </div>
//                   }
//                 />
//               </div>
//             </div>

//             {/* 操作按钮 */}
//             <div className="flex flex-row gap-4 justify-center items-center">
//               <Link to="/console">
//                 <Button theme="solid" type="primary" size={isMobile ? "default" : "large"} className="!rounded-3xl px-8 py-2" icon={<IconPlay />}>
//                   {t('获取密钥')}
//                 </Button>
//               </Link>
//               {isDemoSiteMode && statusState?.status?.version ? (
//                 <Button
//                   size={isMobile ? "default" : "large"}
//                   className="flex items-center !rounded-3xl px-6 py-2"
//                   icon={<IconGithubLogo />}
//                   onClick={() => window.open('https://github.com/QuantumNous/new-api', '_blank')}
//                 >
//                   {statusState.status.version}
//                 </Button>
//               ) : (
//                 docsLink && (
//                   <Button
//                     size={isMobile ? "default" : "large"}
//                     className="flex items-center !rounded-3xl px-6 py-2"
//                     icon={<IconFile />}
//                     onClick={() => window.open(docsLink, '_blank')}
//                   >
//                     {t('文档')}
//                   </Button>
//                 )
//               )}
//             </div>

//             {/* 框架兼容性图标 */}
//             <div className="mt-12 md:mt-16 lg:mt-20 w-full">
//               <div className="flex items-center mb-6 md:mb-8 justify-center">
//                 <Text type="tertiary" className="text-lg md:text-xl lg:text-2xl font-light">
//                   {t('支持众多的大模型供应商')}
//                 </Text>
//               </div>
//               <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Moonshot size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <OpenAI size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <XAI size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Zhipu.Color size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Volcengine.Color size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Cohere.Color size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Claude.Color size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Gemini.Color size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Suno size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Minimax.Color size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Wenxin.Color size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Spark.Color size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Qingyan.Color size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <DeepSeek.Color size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Qwen.Color size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Midjourney size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Grok size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <AzureAI.Color size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Hunyuan.Color size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Xinference.Color size={40} />
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
//                   <Typography.Text className="!text-lg sm:!text-xl md:!text-2xl lg:!text-3xl font-bold">30+</Typography.Text>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : (
//   <div className="overflow-x-hidden w-full">
//     {homePageContent.startsWith('https://') ? (
//       <iframe
//         src={homePageContent}
//         className="w-full h-screen border-none"
//       />
//     ) : (
//       <div className="mt-[64px]" dangerouslySetInnerHTML={{ __html: homePageContent }} />
//     )}
//   </div>
// )
// }