import React from 'react';

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <style jsx>{`
      .loading-spinner {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        width: 100%;
      }
      
      .spinner {
        width: 50px;
        height: 50px;
        border: 5px solid rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        border-top-color: #09d;
        animation: spin 1s ease-in-out infinite;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default LoadingSpinner;
