import React from 'react';

const Section = ({ children, id, className = '', background = 'light' }) => {
  return (
    <section id={id} className={`section section-${background} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;
