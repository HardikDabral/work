import React from 'react';
import './style/ChooseUs.css';
import one from './style/images/one.svg'
import two from './style/images/two.svg'
import three from './style/images/three.svg'
import four from './style/images/four.svg'

const ChooseUs = () => {
    return (
        <div className="choose-us-container">
            <div className="together">
                <div className="choose-us-header">
                    <span className="subtitle">WHY REGISTERKARO.IN</span>
                    <h2 className="head">Why Choose Register Karo</h2>
                    <p className="description">
                        It is with consistent services and results that build trust with the people and that in turn help us to serve the business better.
                    </p>
                </div>

                <div className="features-flex">
                    {/* First row with 2 cards */}
                    <div className="feature-card">
                        <div className="icon-here">
                            <img src={one} />
                        </div>
                        <div className='space'>
                        <h3>Confidential & Safe</h3>
                        <p>All your private information is safe with us</p>
                        </div>
                        
                    </div>

                    <div className="feature-card">
                        <div className="icon-here">
                            <img src={two} />
                        </div>
                        <div className='space'>
                        <h3>No Hidden Fee</h3>
                        <p>Everything is put before you with no hidden charges or conditions</p>
                            </div>
                        
                    </div>
                </div>
            </div>
            <div>
                <div className="features-flex2">
                    {/* First row with 2 cards */}
                    <div className="feature-card">
                        <div className="icon-here">
                            <img src={three} />
                        </div>
                        <div className='space'>
                        <h3>Confidential & Safe</h3>
                        <p>All your private information is safe with us</p>
                        </div>
                        
                    </div>

                    <div className="feature-card">
                        <div className="icon-here">
                            <img src={four} />
                        </div>
                        <div className='space'>
                        <h3>No Hidden Fee</h3>
                        <p>Everything is put before you with no hidden charges or conditions</p>
                        </div>
                       
                    </div>
                    <div className="feature-card">
                        <div className="icon-here">
                            <img src={one} />
                        </div>
                        <div className='space'>
                        <h3>No Hidden Fee</h3>
                        <p>Everything is put before you with no hidden charges or conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
