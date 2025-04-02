import React, { useState, useEffect } from 'react';
import './DreamJobSection.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const DreamJobSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Определяем, десктоп ли
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);

    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  const cards = [
    {
      number: '1',
      title: <><span>Выберите вакансию, которая</span><span> вам нравится</span></>,
    },
    {
      number: '2',
      title: <><span>Добавьте на платформу </span><span>ссылку на неё или загрузите файл</span></>,
    },
    {
      number: '3',
      title: <><span>Алгоритм внесет </span><span>необходимую информацию</span><span> и адаптирует резюме</span><span> под требования вакансии</span></>,
    },
    {
      number: '4',
      title: <><span>А после этого сервис</span><span> напишет сопроводительное </span><span>письмо, чтобы работодатель</span><span> выбрал именно вас</span></>,
    }
  ];

  return (
    <div className="dream-job-section">
      <div className="container flex-mobile">
        <div className='left-block col-50'>
          <h3 className="section-title accent col">
            <span>Как получить</span> <span>работу мечты?</span>
          </h3>

          <div className="dream-job-intro">
            <p className='col'>
              <span>Чтобы ускорить поиск работы, увеличить</span> <span>количество откликов от работодателей,</span> <span>а также претендовать на более высокую оплату,</span> <span>создавайте отдельное резюме под каждую</span> вакансию
            </p>
          </div>
        </div>

        <div className='right-block col-50 col'>
          <h3 className="section-subtitle">Поручите это нам</h3>

          {isDesktop ? (
            <div className="cards-flex desktop-view">
              <div className="cards-container">
                {cards.map((card, index) => (
                  <div className="dream-card" key={`card-${index}`}>
                    <h4 className="card-title col">
                      {card.title}
                    </h4>
                    <p className="card-number">{card.number}</p>
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
                centeredSlides={false}
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
                {cards.map((card, index) => (
                  <SwiperSlide key={`card-${index}`}>
                    <div className="dream-card">
                    <h4 className="card-title col">
                      {card.title}
                    </h4>
                      <p className="card-number">{card.number}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DreamJobSection;
