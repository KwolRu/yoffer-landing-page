import React from 'react';
import './Card.css';

const Card = ({ children, className = '', elevation = 'medium' }) => {
  return (
    <div className={`card card-elevation-${elevation} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
