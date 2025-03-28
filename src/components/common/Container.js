import React from 'react';
import './Container.css';

const Container = ({ children, className = '', fluid = false }) => {
  return (
    <div className={`container ${fluid ? 'container-fluid' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
