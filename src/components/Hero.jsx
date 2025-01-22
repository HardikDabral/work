import React from "react";
import SubmitEmail from "./subComponents/submitEmail/SubmitEmail";
import Companies from "./subComponents/companies/Companies";
import Number from "./subComponents/number/Number";
import Blog from "./subComponents/blog/Blog";
import Faq from "./subComponents/faq/Faq";
import IntroductionVideo from "./subComponents/introductionVideo/IntroductionVideo";
import AppSection from "./subComponents/appSection/AppSection";
import TrustedBy from "./subComponents/trustedBy/TrustedBy";

const Hero = () => {
    return (
        <div>
            <IntroductionVideo />
            <TrustedBy />
            <Blog />
            <Faq />
            <AppSection />
            <Number />
            <SubmitEmail />
            <Companies />
        </div>
    )
}

export default Hero;