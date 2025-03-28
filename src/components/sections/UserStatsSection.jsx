import React from 'react';
import './UserStatsSection.css';

const UserStatsSection = () => {
  return (
    <div className="user-stats-section">
      <div className="container row">
        <div className="stats-content">
          <h2 className="section-title">5 000 +</h2>
          <div className="description">
            пользователей успешно обновили своё резюме через <span className='accent'>Yoffer</span> за последние полгода
          </div>
          <img className="stats-image phone" src="img/bottom-phone.png" alt="User statistics" />
          
          <div className="stats-action">
            <button className="button phone button-primary button-large">Создать резюме</button>
            <button className="button desktop button-primary">Создать резюме</button>
          </div>
        </div>
        <div className='stats-image desktop'>
          <img src="img/bottom-phone-d.png" alt="User statistics" />
        </div>
      </div>
    </div>
  );
};

export default UserStatsSection;
