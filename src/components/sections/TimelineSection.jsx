import React, { useEffect, useRef, useState } from 'react';
import './TimelineSection.css';

const TimelineSection = () => {
  const timelineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

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

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="timeline-section">
      <div className="container">
        <h3 className="section-title">Карьерный рост начинается с нами</h3>

        <div ref={timelineRef} className={`timeline ${isVisible ? 'animate' : ''}`}>
          <div className="timeline-item">
            <div className="timeline-number">1</div>
            <div className="timeline-content">
              <p>Просто напишите желаемую должность</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">2</div>
            <div className="timeline-content">
              <p>Ответьте на уточняющие вопросы</p>
              <div className="timeline-image phone">
                <img src="/img/timeline.png" alt="Уточняющие вопросы" />
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">3</div>
            <div className="timeline-content">
              <p className='col'>
                <span>Заберите готовое резюме,</span><span> которое алгоритм составит</span><span> <span>на основе ваших компетенций</span> и требований по интересующей </span><span>вакансии</span>
              </p>
            </div>
          </div>
        </div>

        <div className="timeline-action phone">
          <button className="button button-primary button-large">Создать резюме</button>
        </div>


      </div>
      <div className="info-card purple-card">
        <div className='container flex'>
          <div className="timeline-image desktop">
            <img className='desktop' src="/img/timeline.png" alt="Уточняющие вопросы" />
          </div>
          <div className="info-card-content  ">
            <h4 className='col'><span>Если вы ищете первую</span> <span>в своей жизни работу</span> <span>или у вас совсем </span> <span>мало опыта</span></h4>
            <p className='col'>
              <span><span className='light-accent'>Yoffer</span> распакует ваши возможности и откроет</span> <span>работодателю всю силу вашего потенциала</span>
            </p>
            <a href="#" className="button button-secondary desktop">Создать резюме</a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
