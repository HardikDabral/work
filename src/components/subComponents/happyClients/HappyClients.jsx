import React from 'react';
import './style/HappyClients.css'
import icons from './style/image/Pagination.svg'

const HappyClients = () => {
  return (
    <section className="happy-clients">
      <div className="container2">
        <div className='title-client'>
        <h2>Our Happy Clients</h2>
        </div>
        
        <p>
          Professionally cultivate one-to-one customer service with robust ideas. 
          Dynamically innovate resource-leveling customer service for state of the art customer service.
        </p>
        <div className="logo-container">
          <img src={icons} alt="Client Logos" />
        </div>
        <button>
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