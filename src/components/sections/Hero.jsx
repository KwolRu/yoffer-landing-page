import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  return (
    <Section id="hero" className="hero-section" background="primary">
      <div className="hero-content">
        <h1> <span className='accent'>Бесплатно</span> составим резюме, которое заметят работодатели за <span className='accent'>15 мин</span></h1>
        <div className="hero-buttons">
          <Button size="small">Составить резюме</Button>
          <Button type="secondary">Войти</Button>
        </div>
      </div>
      <div className="hero-image">
        <img className='img-anim desktop' src="/img/clear_phone_d.png" alt="Hero" />
        <img className='img-anim phone' src="/img/clear_phone.png" alt="Hero" />
        <div className='hero-chat'>
          <img className='left_chat_anim' src="/img/ChatWhite.png" alt="Hero" />
          <img className='right_chat_anim' src="/img/ChatViolet.png" alt="Hero" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
