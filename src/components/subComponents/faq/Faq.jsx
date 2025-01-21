import React from "react";
import "./style/Faq.css";

const Faq = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequent Ask Questions</h2>
      <div className="faq-list">
        {Array(5)
          .fill("Can I recover deleted files from desktop with this software?")
          .map((question, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-gradient-bar"></div>
              <span className="faq-question">{question}</span>
              <span className="faq-arrow">➤</span>
            </div>
          ))}
      </div>
      <button className="faq-show-more">Show more ➔</button>
    </div>
  );
};

export default Faq;