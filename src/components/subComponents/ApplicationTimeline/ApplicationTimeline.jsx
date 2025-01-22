import React from 'react';
import './style/ApplicationTimeline.css';
import one from './style/images/one.svg';
import two from './style/images/two.svg';
import three from './style/images/three.svg';
import four from './style/images/four.svg';

const ApplicationTimeline = () => {
  const steps = [
    {
      id: 1,
      title: 'Fill up Application Form',
      icon: one,
      bgColor: '#EB5757',
    },
    {
      id: 2,
      title: 'Make Online Payment',
      icon: two,
      bgColor: '#27AE60',
    },
    {
      id: 3,
      title: 'Executive will Process Application',
      icon: three,
      bgColor: '#F2994A',
    },
    {
      id: 4,
      title: 'Get Confirm Mail',
      icon: four,
      bgColor: '#828282',
    },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        {steps.map((step) => (
          <div key={step.id} className="timeline-step">
            <div className="step-content">
              <div
                className="icon-circle"
                style={{ backgroundColor: step.bgColor }}
              >
                <img src={step.icon} alt={step.title} className="icon-image" />
              </div>
              <h3 className="step-title">{step.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationTimeline;
