import React, { useState, useEffect, useRef } from 'react';
import './SaveSection.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const SaveSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  
  // Check if we're on desktop
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);
    
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);
  
  // Animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          // Animation will trigger once and not repeat on subsequent views
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);
  
  // Sample saving benefits data
  const savingBenefits = [
    {
      id: 1,
      title: "5 000 – 10 000 ₽",
      description: <>Именно столько стоит работа профессиональных консультантов, которую <span className='light-accent'>Yoffer</span> сделает для вас за 15 минут <span className='light-accent'>бесплатно</span>!</>,
    },
    {
      id: 2,
      title: "1-3 месяца",
      description: <>Столько длится поиск работы при обычном подходе. С <span className='light-accent'>Yoffer</span> он сократится до <span className='light-accent'>1-3 месяцев'</span></>, 
    },
    {
      id: 3,
      title: "от 1,5 часов",
      description: <>Именно столько времени уходит в среднем на <span className='light-accent'>написание одного резюме</span>. Чтобы посчитать реальную экономию, умножьте это время на количество вакансий</>
    }
  ];

  return (
    <section className="save-container" ref={sectionRef}>
      <div className="container">
        <h3 className="section-title"><span className='accent'>Yoffer</span> экономит ваше время и деньги</h3>
      
      {isDesktop ? (
        <div className={`cards-flex desktop-view ${isVisible ? 'animate' : ''}`}>
          <div className="cards-container">
            {savingBenefits.map((benefit, index) => (
              <div 
                key={`benefit-${benefit.id}`} 
                className={`save-card card-${index + 1}`}
              >
                <p className='save-card-title'>{benefit.title}</p>
                <p className='save-card-description'>{benefit.description}</p>
                <div className='save-icon'>
                  <img src="/img/svg/save.svg" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`swiper-container ${isVisible ? 'animate' : ''}`}>
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
            {savingBenefits.map((benefit, index) => (
              <SwiperSlide key={`benefit-${benefit.id}`}>
                <div className={`save-card card-${index + 1}`}>
                  <p className='save-card-title'>{benefit.title}</p>
                  <p className='save-card-description'>{benefit.description}</p>
                  <div className='save-icon'>
                    <img src="/img/svg/save.svg" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      
      <div className="save-action">
          <button className="button button-primary button-large">Попробовать бесплатно</button>
        </div>
      </div>
    </section>
  );
};

export default SaveSection;

