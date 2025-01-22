import React from 'react';
import './style/TrustedBy.css';
import monday from './style/images/monday.svg';
import morpheus from './style/images/morpheus.svg'
import oracle from './style/images/oracle.svg'
import samsung from './style/images/samsung.svg'
import segment from './style/images/segment.svg'

const TrustedBy = () => {
    return (
        <div className="companies-container">
            <div className='title'>
                <p >Trusted By Over 100+ Startups and freelance business</p>
            </div>
            <div className="company-logos">
                <div className="logo-item">
                    <img src={oracle} />
                </div>

                <div className="logo-item">
                    <img src={morpheus} />
                </div>

                <div className="logo-item">
                    <img src={morpheus} />

                </div>

                <div className="logo-item">
                    <img src={samsung} />

                </div>

                <div className="logo-item">
                    <img src={monday} />

                </div>

                <div className="logo-item">
                    <img src={segment} />

                </div>
            </div>
        </div>
    );
};

export default TrustedBy;