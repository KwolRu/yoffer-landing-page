import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-logo">
          <img src="/img/logo.svg" alt="" />
        </div>
        <div className="loading"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
