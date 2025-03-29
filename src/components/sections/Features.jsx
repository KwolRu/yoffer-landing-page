import React from 'react';
import Section from '../common/Section';
import './Features.css';

const Features = () => {
  return (
    <Section id="features" className="features-section" background="light">
      <div className="container row flex-mobile">
      <div>
        <h2 className="section-title">80%</h2>
        <p className='description'>пользователи <span className='accent'> получают отклики </span> от работодателей уже в <span className='accent'>первый день</span> размещения резюме</p>

      </div>
      <div>
        <div className="feature-card col">
          <p className='left-table-card'>наши пользователи</p>
          <div className='col'>
            <div className="cir-grid">
              {Array.from({ length: 80 }).map((_, index) => (
                <div key={index} className="cirсle on" style={{ "--animation-order": index }}></div>
              ))}
              {Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="cirсle" style={{ "--animation-order": index + 80 }}></div>
              ))}
            </div>
            <p className='bottom-table-card'>остальные кандидаты</p>
          </div>
        </div>
      </div>
      </div>
    </Section>
  );
};

export default Features;
