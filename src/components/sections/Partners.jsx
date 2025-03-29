import React, { useEffect, useState } from 'react';
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

import './Partners.css';

const Partners = () => {
  const [logos, setLogos] = useState([]);
  
  useEffect(() => {
    // Dynamically import all logo files from the directory
    const importAllLogos = () => {
      let logoContext;
      try {
        // For webpack environments
        logoContext = require.context('../../../public/img/logos', false, /\.(png|jpe?g|svg)$/);
        return logoContext.keys().map(logoContext);
      } catch (error) {
        console.error('Error loading logos:', error);
        
        // Fallback to some sample logos if require.context is not available
        return [
          '/img/logos/logo1.png',
          '/img/logos/logo2.png',
          '/img/logos/logo3.png',
        ].map(path => ({ default: path }));
      }
    };
    
    const importedLogos = importAllLogos();
    // Extract the file paths from the imported modules
    const logoPaths = importedLogos.map(module => 
      typeof module === 'string' ? module : module.default
    );
    
    setLogos(logoPaths);
  }, []);

  return (
    <section className="partners">
      <div className='container'>
        <h3 className='section-title'>С нашими резюме люди устраиваются в лучшие компании</h3>
      </div>
      
      <div className="swiper-container logo-container">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
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
          {logos.map((logo, index) => (
            <SwiperSlide key={`logo-${index}`}>
              <div className="logo">
                <img src={logo} alt={`Partner logo ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
