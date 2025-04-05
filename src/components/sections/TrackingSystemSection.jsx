import React, { useEffect, useRef, useState } from 'react';
import './TrackingSystemSection.css';

const TrackingSystemSection = () => {
  const [animated, setAnimated] = useState(false);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          // Once animation is triggered, disconnect observer
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // Trigger when 30% of element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animated]);

  return (
    <div className="tracking-system-section" ref={sectionRef}>
      <div className="container">
        <div className="tracking-content row full">
          <div className="tracking-text">
            <h3 className="section-title col adapt_word"><span>Адаптация</span> <span>под систему</span> <span>отслеживания</span> <span>резюме</span></h3>
            <div className='card'>
              <p className='col'>
                <span>Многие работодатели используют специальные</span> <span>программы, которые «фильтруют»
                резюме</span> <span>по ключевым словам. Без них HR ваше резюме</span> <span>может даже не увидеть.</span>
              </p>
            </div>
            <div className='card'>
              <p className='accent semibold'>
                Наш алгоритм учитывает это при генерации
              </p>
            </div>
          </div>

          <div className={`tracking-image desktop ${animated ? 'animated' : ''}`} ref={imageRef}>
            <img src="/img/adapt.png" alt="Tracking System" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrackingSystemSection;
