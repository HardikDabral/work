import React from "react";
import SubmitEmail from "./subComponents/submitEmail/SubmitEmail";
import Companies from "./subComponents/companies/Companies";
import Number from "./subComponents/number/Number";
import Blog from "./subComponents/blog/Blog";
import Faq from "./subComponents/faq/Faq";
import IntroductionVideo from "./subComponents/introductionVideo/IntroductionVideo";
import AppSection from "./subComponents/appSection/AppSection";
import TrustedBy from "./subComponents/trustedBy/TrustedBy";
import ChooseUs from "./subComponents/chooseUs/ChooseUs";
import HappyClients from "./subComponents/happyClients/HappyClients";
import LandingPage from "./subComponents/landingPage/landingPage"
import TestimonialCarousel from "./subComponents/TestimonialCarousel/TestimonialCarousel";

const Hero = () => {
    return (
        <div>
            <LandingPage />
            <TrustedBy />
            <ChooseUs />
            <IntroductionVideo />
            <HappyClients />
            <Blog />
            <TestimonialCarousel />
            <Faq />
            <AppSection />
            <Number />
            <SubmitEmail />
            <Companies />
        </div>
    )
}

export default Hero;