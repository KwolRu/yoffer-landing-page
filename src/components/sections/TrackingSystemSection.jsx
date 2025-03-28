import React from 'react';
import './TrackingSystemSection.css';

const TrackingSystemSection = () => {
  return (
    <div className="tracking-system-section">
      <div className="container">
        <div className="tracking-content row full">
          <div className="tracking-text">
            <h3 className="section-title">Адаптация под систему отслеживания резюме</h3>
            <div className='card'>
              <p>
                Многие работодатели используют специальные программы, которые «фильтруют»
                резюме по ключевым словам. Без них HR ваше резюме может даже не увидеть.
              </p>
            </div>
            <div className='card'>
              <p className='accent'>
                Наш алгоритм учитывает это при генерации
              </p>
            </div>
          </div>

          <div className="tracking-image desktop">
            <img src="/img/adapt.png" alt="Tracking System" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrackingSystemSection;
