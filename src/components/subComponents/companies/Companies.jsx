import React from 'react';
import './style/Companies.css';
import dropBox from './style/images/dropbox.svg';
import zoom from './style/images/zoom.svg'
import webFlow from './style/images/webflow.svg'
import slack from './style/images/slack.svg'
import coinBase from './style/images/coinbase.svg'
import spotify from './style/images/spotify.svg'

const Companies = () => {
  return (
    <div className="companies-container">
      <div className="company-logos">
        <div className="logo-item">
        <img src={coinBase} />
        </div>
        
        <div className="logo-item">
        <img src={spotify} />
        </div>
        
        <div className="logo-item">
        <img src={slack} />
          
        </div>
        
        <div className="logo-item">
          <img src={dropBox} />
          
        </div>
        
        <div className="logo-item">
        <img src={webFlow} />
          
        </div>
        
        <div className="logo-item">
        <img src={zoom} />
          
        </div>
      </div>
    </div>
  );
};

export default Companies;