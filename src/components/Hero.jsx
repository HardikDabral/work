import React from "react";
import SubmitEmail from "./subComponents/submitEmail/SubmitEmail";
import Companies from "./subComponents/companies/Companies";
import Number from "./subComponents/number/Number";
import Blog from "./subComponents/blog/Blog";
import Faq from "./subComponents/faq/Faq";
import LandingPage from "./subComponents/landingPage/landingPage";

const Hero = () => {
    return (
        <div>
            <LandingPage/>
            <Blog />
            <Faq />
            <Number />
            <SubmitEmail />
            <Companies />
        </div>
    )
}

export default Hero;