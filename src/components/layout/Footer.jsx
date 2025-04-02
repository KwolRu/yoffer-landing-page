import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <img src="img/logo.svg" alt="" />

        </div>
        <div className="footer-content">
          <div className='footer-header'>
            <p>ИП Сребный Артем Николаевич</p>
            <p>ИНН: 231139523059</p>
            <p>ОГРНИП: 321619600006164</p>
          </div>
          <div className='footer-center'>
            <div className='line'></div>
            <p>Эл. почта поддержки <a className='accent mail' href="mailto:support@yoffer.ru">support@yoffer.ru</a></p>
            <div className='line'></div>
          </div>
          <div className="footer-links">




            <a href="/privacy-policy"><p> Политика конфиденциальности</p></a>
            <a href="/terms-of-use"><p> Условия использования</p></a>

            <div className='line'></div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Yoffer | Все права защищены.</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
