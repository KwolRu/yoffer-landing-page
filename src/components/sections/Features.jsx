import React from 'react';
import Section from '../common/Section';
import './Features.css';

const Features = () => {
  return (
    
      <div className="container row flex-mobile">
      <div className='col-50'>
        <h2 className="section-title">80%</h2>
        <p className='description col'><span>пользователи <span className='accent accent-border'> получают отклики </span></span> <span>от работодателей<span className='accent accent-border'>уже в первый день</span></span> размещения резюме</p>
      </div>
      <div className='col-50'>
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
  );
};

export default Features;
