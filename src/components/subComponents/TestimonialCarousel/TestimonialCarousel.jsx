import React, { useState } from 'react';
import './style/TestimonialCarousel.css';
import image from './style/images/image.svg'; // Import the image

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      name: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      name: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      name: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5
    },
    // Add more testimonials as needed
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : 'half-filled'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <h2>What people say about us</h2>
        <div className="navigation-buttons">
          <button onClick={prevSlide} className="nav-btn prev">&lt;</button>
          <button onClick={nextSlide} className="nav-btn next">&gt;</button>
        </div>
      </div>

      <div className="testimonials-slider">
        <div
          className="testimonials-track"
          style={{ transform: `translateX(-${activeIndex * 33.33}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-marks">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-footer">
                <div className="author-image">
                  <img src={image} alt="Author" />
                </div>
                <div className="author-details">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
              <div className="rating">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
