import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    window.open('https://drive.google.com/file/d/1pwwAeYTnERfyGox3xc56No9ON9_99x4N/view', '_blank');
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="hero-container">
      <div className="overlay">
        <img src="/path-to-your-logo/logo.png" alt="Logo" className="logo" />
        <h2>Telangana Training and Placement Officers Association (TTPOA)</h2>
        <h5>
          Mega TPO Summit 2024: Global AI Innovation and Opportunities on Oct 4th & 5th in T-Hub, Hyderabad.
          {isExpanded && (
            <span> Join us for a groundbreaking summit exploring AI's transformative potential across industries and education.</span>
          )}
          <button className="read-more-btn" onClick={toggleReadMore}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </h5>
        <div className="button-container">
          <button className="get-invitation-btn" onClick={handleButtonClick}>
            Get Invitation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
