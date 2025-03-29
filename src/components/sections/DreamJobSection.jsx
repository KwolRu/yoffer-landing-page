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

  // Check if we're on desktop
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);

    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  // Sample cards data
  const cards = [
    {
      number: '1',
      title: 'Выберите вакансию, которая вам нравится',
    },
    {
      number: '2',
      title: 'Добавьте на платформу ссылку на неё или загрузите файл',
    },
    {
      number: '3',
      title: 'Алгоритм внесет необходимую информацию и адаптирует резюме под требования вакансии',
    },
    {
      number: '4',
      title: 'А после этого Yoffer напишет сопроводительное письмо, чтобы работодатель выбрал именно вас',
    }
  ];

  return (
    <div className="dream-job-section">
      <div className="container flex-mobile">
        <div className='left-block'>
          <h3 className="section-title accent col"><span>Как получить</span> <span>работу мечты?</span></h3>

          <div className="dream-job-intro">
            <p>Чтобы ускорить поиск работы, увеличить количество откликов от работодателей, а также претендовать на более высокую оплату, создавайте отдельное резюме под каждую вакансию</p>
          </div>

        </div>
        <div className='right-block col'>
          <h3 className="section-subtitle">Поручите это нам</h3>

          {isDesktop ? (
            <div className="cards-flex desktop-view ">
              <div className="cards-container">
                {cards.map((card, index) => (
                  <div className="dream-card" key={`card-${index}`}>
                    <h4 className="card-title">{card.title}</h4>
                    <p className="card-description">{card.description}</p>
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
                      <h4 className="card-title">{card.title}</h4>
                      <p className="card-description">{card.description}</p>
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
