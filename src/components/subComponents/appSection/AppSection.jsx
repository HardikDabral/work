import React from "react";
import "./style/AppSection.css";
import appStoreIcon from "./style/images/app-store-icon.svg";
import playStoreIcon from "./style/images/play-store-icon.svg";
import phoneImage from "./style/images/phone-image.svg";

const AppSection = () => {
    return (
        <div className="app-section">
            <div className="app-content">
                <div className="app-info">
                <h2 className="title">Manage Your Services by Your Mobile Phone</h2>
                <div className="para">
                <p> 
                    Download our app to manage and track your services. Our app enables
                    you to stay in touch with our experts and aids you in tracking your
                    progress.
                </p>
                <h3>
                    Get the App
                </h3>
                </div>
                
                </div>
                <div className="app-buttons">
                    <a href="#" className="app-store">
                        <img src={appStoreIcon} alt="App Store" />
                    </a>
                    <a href="#" className="play-store">
                        <img src={playStoreIcon} alt="Google Play" />
                    </a>
                </div>
            </div>
            <div className="app-image">
                <img src={phoneImage} alt="Phone displaying the app" />
            </div>
        </div>
    );
};

export default AppSection;