import React from 'react';
import './style/Number.css';

const Number = () => {
  const stats = [
    { value: '1M', label: 'CUSTOMERS' },
    { value: '12', label: 'YEARS OF EXCELLENCE' },
    { value: '41', label: 'R&D ENGINEERS' },
    { value: '78', label: 'COUNTRIES' },
    { value: '3287', label: 'PARTNERS' },
    { value: '41', label: 'AWARDS RECEIVED' }
  ];

  return (
    <section className="stats-section">
      <div className="register-text">WHY REGISTER KARO</div>
      <h2 className="stats-heading">Some Numbers are important</h2>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">
              <span className="gradient-number">{stat.value}</span>
              <span className="gradient-plus">+</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Number;