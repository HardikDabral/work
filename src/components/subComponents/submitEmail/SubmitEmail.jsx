import React, { useState } from 'react';
import './style/SubmitEmail.css';

const SubmitEmail = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <div className="container">
      <div className="industry-text">1% OF THE INDUSTRY</div>
      
      <h1 className="title">
        Welcome to your new digital reality. Now.
      </h1>
      
      <form onSubmit={handleSubmit} className="email-form">
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      
      <div className="features">
        <div className="feature-item">
          <svg className="checkmark" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Instant results</span>
        </div>
        
        <div className="feature-item">
          <svg className="checkmark" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>User-friendly interface</span>
        </div>
        
        <div className="feature-item">
          <svg className="checkmark" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Personalized customization</span>
        </div>
      </div>
    </div>
  );
};

export default SubmitEmail;