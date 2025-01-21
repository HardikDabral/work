import React from "react";
import SubmitEmail from "./subComponents/submitEmail/SubmitEmail";
import Companies from "./subComponents/companies/Companies";
import Number from "./subComponents/number/Number";

const Hero = () => {
    return (
        <div>
            <Number />
            <SubmitEmail />
            <Companies />
        </div>
    )
}

export default Hero;