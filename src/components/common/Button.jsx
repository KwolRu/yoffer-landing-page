import React from 'react';
import './Button.css';

const Button = ({ children, type = 'primary', size = 'medium', onClick, className = '' }) => {
  return (
    <button 
      className={`button button-${type} button-${size} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
