import React from "react";
import SubmitEmail from "./subComponents/submitEmail/SubmitEmail";
import Companies from "./subComponents/companies/Companies";
import Number from "./subComponents/number/Number";
import Blog from "./subComponents/blog/Blog";

const Hero = () => {
    return (
        <div>
            <Blog />
            <Number />
            <SubmitEmail />
            <Companies />
        </div>
    )
}

export default Hero;