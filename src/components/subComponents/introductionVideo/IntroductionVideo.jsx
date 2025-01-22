import React from 'react';
import './style/IntroductionVideo.css';
import bulb from './style/image/bulb.svg'
import chart from './style/image/chart.svg'
import women from './style/image/women.svg'

const IntroductionVideo = () => {
  return (
    <div className="introduction-video-container">
      <div className="introduction-video-content">
        <h2>Our Video Introductions</h2>
        <p>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>

        <div className="introduction-video-options">
          <div className="introduction-video-option">
          <div className='imageDiv'>
            <img src={bulb} className='icon' alt="Lightbulb Icon" />
            </div>
            <div className='introduction-video-stats'>
              <h3>Explore ideas together</h3>
              <div className='para'>
              <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
              </div>
              
            </div>
          </div>

          <div className="introduction-video-option">
            <div className='imageDiv'>
              <img src={chart} className='icon' alt="Chart Icon" />
            </div>
            <div className='introduction-video-stats'>
              <h3>Bring those ideas to life</h3>
              <div className='para'>
              <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="introduction-video-image">
        <img src={women} className='women' alt="Woman with Laptop" />
        {/* <div className="introduction-video-play-button">
          <img src="https://via.placeholder.com/50" alt="Play Button" />
        </div> */}
      </div>
    </div>
  );
};

export default IntroductionVideo;