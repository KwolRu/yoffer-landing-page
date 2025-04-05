import React, { useState, useEffect } from 'react';
import './Algorithm.css';
import Section from '../common/Section';
import Button from '../common/Button';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Algorithm = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Check if we're on desktop
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);
    
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);
  
  // Sample algorithm steps data with unique image for each step
  const algorithmSteps = [
    {
      id: 1,
      title: "Создаст персональное резюме",
      imgSrc: "/img/svg/heart.svg"
    },
    {
      id: 2,
      title: "Выделит ваши сильные стороны",
      imgSrc: "/img/svg/like.svg"
    },
    {
      id: 3,
      title: "<span>Привлечет работодателей</span> <span>уже через несколько часов</span>",
      imgSrc: "/img/svg/time.svg"
    }
  ];

  return (
    <section className="algorithm-container" id="algorithm">
      <div className="container">
        <h3 className="section-title accent">Алгоритм обучен профессиональными рекрутерами и HR</h3>
      
        {isDesktop ? (
          <div className="cards-flex desktop-view">
            <div className="cards-container">
              {algorithmSteps.map((step) => (
                <div key={`step-${step.id}`} className="algorithm-card">
                  <p className='col' dangerouslySetInnerHTML={{ __html: step.title }}></p>
                  <div className='like'>
                    <img src={step.imgSrc} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="swiper-container">
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={8}
              loop={true}
              centeredSlides={false}  // Changed to false for left alignment
              speed={800}
              cssMode={false}
              updateOnImagesReady={true}
              preloadImages={true}
              pagination={{
                clickable: true,
                el: '.swiper-pagination'
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {algorithmSteps.map((step) => (
                <SwiperSlide key={`step-${step.id}`}>
                  <div className="algorithm-card">
                    <p dangerouslySetInnerHTML={{ __html: step.title }}></p>
                    <div className='like'>
                      <img src={step.imgSrc} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          
          </div>
        )}
      </div>
    </section>
  );
};

export default Algorithm;

