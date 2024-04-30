import React from 'react';
import '../styles/heroBanner.css';

const HeroBanner = () => (
  (() => {
    const bannerTitle = "¡Pizzería La mejor";
    const bannerSlogan = "¡Tenemos las mejores pizzas que podrás encontrar!";
    return (
      <div className="hero-banner">
        <div className="banner-content">
          <h1>{bannerTitle}</h1>
          <p>{bannerSlogan}</p>
        </div>
      </div>
    );
  })()
);

export default HeroBanner;
