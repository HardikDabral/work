import React from "react";
import './style/Header.css'
import Email from './Icons/Email.svg'
import Call from './Icons/Call.svg'
import Facebook from './Icons/Facebook.svg'
import Instagram from './Icons/Instagram.svg'
import Pinterest from './Icons/Pinterest.svg'
import Tutter from './Icons/Tutter.svg'
import Logo from './Icons/Logo.svg'
import Search from './Icons/Search.svg'
import DownArrow from './Icons/DownArrow.svg'


const Header = () => {
    return (
        <div className='header_main_container'>
            <div className='header_top_section'>
                <div className='top_container'>
                    <div className="container_items">
                        <img src={Email} alt="Email icon" />
                        <a href="#">www.registerkaro.in</a>
                    </div>
                    <span className="border"></span>
                    <div className="container_items">
                        <img src={Call} alt="Call icon" />
                        <a href="#">
                            +918447746183</a>
                    </div>
                    <span className="border"></span>
                    <div className="container_items">
                        <a href="#"><img src={Instagram} alt="Instagram" /></a>
                        <a href="#"><img src={Facebook} alt="Facebook" /></a>
                        <a href="#"><img src={Tutter} alt="Tutter" /></a>
                        <a href="#"><img src={Pinterest} alt="Pinterest" /></a>
                    </div>
                </div>
            </div>
            <div className='header_bottom_section'>
                <div className="logo_container">
                    <a href="#"
                    ><img src={Logo} alt="logo" className="logo" /></a>
                </div>
                <div className="menu_container">
                    <ul>

                        <li><a href="#">Home</a></li>
                        <li><a href="#">Our Services <img src={DownArrow} alt="" /></a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About us</a></li>
                    </ul>
                    <div>
                        <a href="#"><img src={Search} alt="Search" /></a>
                    </div>
                    <button className="btn">Talk An Expert</button>
                </div>

            </div>
        </div>
    )
}

export default Header;