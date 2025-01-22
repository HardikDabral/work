import React from 'react';
import './style/ServiceSection.css';
import one from './style/images/one.svg';
import two from './style/images/two.svg';
import three from './style/images/three.svg';
import four from './style/images/four.svg';
import five from './style/images/five.svg';
import six from './style/images/six.svg';
import learnMore from './style/images/learnmore.svg'

const ServicesSection = () => {
  const services = [
    {
      title: 'Company Formation',
      description: 'Build web-based solutions that enhance customer experience.',
      icon: one,
    },
    {
      title: 'Company Secretarial Services',
      description: 'Make data-driven decisions and utilize technology to reach business goals.',
      icon: two,
    },
    {
      title: 'Virtual Office Address',
      description: 'Foster customer relationships by effectively serving your market.',
      icon: three,
    },
    {
      title: 'Annual Compliance Services',
      description: 'Turn your ideas into modern products with our design experts.',
      icon: four,
    },
    {
      title: 'Payroll Services',
      description: 'Expand your business across the globe with minimal effort.',
      icon: five,
    },
    {
      title: 'Bookkeeping Services',
      description: 'Steering user behaviours with creative design, data insights & technology.',
      icon: six,
    },
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h5 className="welcome-text">WELCOME TO REGISTERKARO.IN</h5>
        <h2 className="services-title">Explore Our Services</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
            <div key={index} className="service-item">
  <div className="icon-placeholder">
    <img src={service.icon} alt={service.title} className="service-icon" />
  </div>
  <h3>{service.title}</h3>
  <p>{service.description}</p>
  
  <button className="learn-more-btn">
    <img src={learnMore} alt="Learn more icon" className="learn-more-icon" />
    Learn more
  </button>
  
  {(index + 1) % 3 !== 0 && (
    <>
      <div className="random-rectangle"></div>
      <div className="vertical-divider"></div>
    </>
  )}
</div>


      
        ))}
      </div>

      <div className="services-footer">
        <button className="see-all-btn">See All Services</button>
      </div>
    </div>
  );
};

export default ServicesSection;
