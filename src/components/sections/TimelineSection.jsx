import React from 'react';
import './TimelineSection.css';

const TimelineSection = () => {
  return (
    <div className="timeline-section">
      <div className="container">
        <h3 className="section-title">Карьерный рост начинается с нами</h3>
        
        <div className="timeline">
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
              <p>
                Заберите готовое резюме, которое алгоритм составит на основе ваших компетенций и требований по интересующей вакансии
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
                <img src="/img/timeline.png" alt="Уточняющие вопросы" />
              </div>
          <div className="info-card-content  ">
            <h4>Если вы ищете первую в своей жизни работу или у вас совсем мало опыта</h4>
            <p>
              <span className='light-accent'>Yoffer</span> распакует ваши возможности и откроет работодателю всю силу вашего потенциала
            </p>
          </div>
          </div>
        </div>
    </div>
  );
};

export default TimelineSection;
