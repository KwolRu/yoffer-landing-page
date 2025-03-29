import React, { useState, useRef, useEffect } from 'react';
import './SliderSection.css';

const SliderSection = () => {
  const images = [
    '/img/slider/1.png',
    '/img/slider/2.png',
    '/img/slider/3.png',
    '/img/slider/4.png',
    // Add more images as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  // Check if device is mobile on component mount
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setTouchStart(e.targetTouches[0].clientX);
    setIsTouching(true);
  };

  const handleTouchMove = (e) => {
    if (!isMobile || !isTouching) return;
    setTouchEnd(e.targetTouches[0].clientX);
    
    const diff = touchStart - e.targetTouches[0].clientX;
    const slideWidth = sliderRef.current?.offsetWidth || 0;
    
    // Calculate how far we've moved during the touch
    const newTranslate = -(currentIndex * 100) - (diff / slideWidth * 100);
    setTranslateX(newTranslate);
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    setIsTouching(false);
    
    // Reset translateX to snap back to proper position
    setTranslateX(-(currentIndex * 100));
    
    if (touchStart - touchEnd > 75) {
      // Swipe left - go to next slide
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
    
    if (touchStart - touchEnd < -75) {
      // Swipe right - go to previous slide
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  // Update translateX whenever currentIndex changes
  useEffect(() => {
    setTranslateX(-(currentIndex * 100));
  }, [currentIndex]);

  return (
    <div className="slider-section">
      <div className='container'>
      <h3 className="section-title">Как создать сильное резюме за 15 минут?</h3>
      
      <div className="custom-slider-container" ref={sliderRef}>
        {isMobile ? (
          // Mobile view with sliding functionality
          <div 
            className="custom-slider"
            style={{ 
              transform: `translateX(${isTouching ? translateX : -(currentIndex * 100)}%)`,
              transition: isTouching ? 'none' : 'transform 0.3s ease-out'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((image, index) => (
              <div key={index} className="slide">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        ) : (
          // Desktop view - grid of all images
          <div className="image-grid">
            {images.map((image, index) => (
              <div key={index} className="grid-item">
                <img src={image} alt={`Resume creation step ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
      
     
      
      <div className="slider-action">
        <button className="button button-primary button-large ">Создать резюме</button>
      </div>
      </div>
    </div>
  );
};

export default SliderSection;
