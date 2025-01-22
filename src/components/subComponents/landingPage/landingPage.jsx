import React from 'react'
import './style/landingPage.css';
import Star from './icon/star.svg'
import clobates from './icon/clobates.svg'
import RightBg from './icon/RightBg.svg'
import Gole from './icon/gole.svg'
import btn_img from './icon/btn_img.svg'



function landingPage() {
    return (
        <div className='landingPage_container'>

            <div className='landingPage_container_left_side'>
                <div> <img src={Star} alt="clobates" /></div>
                <div className='contant'>
                    <div className='contant2'>
                    <h1>Your trusted partner</h1>
                    <h1>for compliance business needs</h1>
                    </div>
                    
                    <p>An online business compliance platform that helps entrepreneurs and other individuals with various, <span>registrations, tax filings</span>, and other <span>legal matters</span>.</p>
                </div>


                <div> <img src={clobates} alt="clobates" /></div>
                <div className='btn_container'>
                    <button className='btnhere'>Talk An Expert</button>
                    <button className='btn_1'><img src={btn_img} alt="btn_img" /></button>
                </div>
            </div>

            <div className='landingPage_container_right_side'>
                <img src={RightBg} alt="RightBg" className='bg_img' />
                <div className="sidebar">
                    <img src={Gole} alt="Gole" className='gole' />
                    <ul>
                        <li>Annual Compliance</li>
                        <li>Payroll Services</li>
                        <li>Company Formation</li>
                        <li>Annual Compliance</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default landingPage