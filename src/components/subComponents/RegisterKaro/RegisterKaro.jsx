import React from 'react';
import './style/RegisterKaro.css';
import image from './style/images/image.svg'

const RegisterKaro = () => {
  return (
    <div className="register-container">
      <div className="content-section">
        <div className="welcome-text">WELCOME TO REGISTERKARO.IN</div>
        
        <div className="about-section">
          <h1>About <span className="highlight">Register Karo</span></h1>
          
          <p className="description">
            We have been using Intelegencia as our DevOps vendor for our field service 
            applications over the last couple of years and I'm extremely pleased with 
            their performance, ability to execute, and willingness to adapt in our ever changing 
            environment. Perry is an outstanding leader who is fanatical about 
            customer satisfaction. He has built a solid team which has consistently delivered 
            on projects thereby exceeding everyone's expectations.
          </p>
          
          <p className="recommendation">
            I would strongly recommend their services to any organization that is looking for 
            solid, reliable, and predictable outcomes.
          </p>
          
          <button className="learn-more">
            Learn More
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
      
      <div className="image-section">

        <img 
          src={image}
          alt="Register Karo Team" 
          className="team-image"
        />
      </div>
    </div>
  );
};

export default RegisterKaro;