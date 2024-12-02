import React from 'react';
import './AI Innovation Showcase.css';

const AIInnovationShowcase = () => {
  const showcaseItems = [
    {
      id: 1,
      title: "AI in Education",
      description: "AI in education enhances personalized learning, streamlines administrative tasks, and prepares students for future careers."
    },
    {
      id: 2,
      title: "Smart Cities",
      description: "Witness how AI is shaping the future of Indian cities with innovative urban planning and management solutions."
    },
    {
      id: 3,
      title: "Education Tech",
      description: "Experience the impact of AI-powered platforms on education, offering personalized learning experiences for every student."
    },
    {
      id: 4,
      title: "AI-Driven Placement Strategies",
      description: "Utilizing AI to optimize recruitment processes and connect students with industry opportunities effectively."
    }
  ];

  return (
    <section className="showcase-section">
      <h1 className="showcase-title">AI Innovation Showcase</h1>
      <div className="showcase-grid">
        {showcaseItems.map(item => (
          <div key={item.id} className="showcase-item">
            <div className="showcase-number">{item.id}</div>
            <div className="showcase-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIInnovationShowcase;
