import React from 'react';
import './style/HappyClients.css';

const HappyClients = () => {
  return (
    <section className="happy-clients">
      <div className="container">
        <h2 className="title">Our Happy Clients</h2>
        <p className="description">
          Professionally cultivate one-to-one customer service with robust ideas. 
          Dynamically innovate resource-leveling customer service for state of the art customer service.
        </p>
        <div className="clients-logo-container">
          {/* Replace src with your actual image path */}
          <img src="/path-to-your-image.png" alt="Client Logos" className="clients-logo" />
        </div>
        <button className="show-more">
          Show more
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HappyClients;