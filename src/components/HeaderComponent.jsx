import React from "react";
import {Button} from "@material-ui/core";
import HeroImg from "../assets/hero-b.png";
import {LoginSignUp} from "./LoginSignUpComponent.jsx";


function Header(){
    return(
        <header className="header">
            <div className="header-div1">
                <h1>Learn Without Limits</h1>
                <p>Take the next step in your career with a world class learning experience.</p>
                <LoginSignUp pos="signupheader"/>
            </div>
            <div className="header-div2">
                <img src={HeroImg} alt="Hero Image" />
            </div>
        </header>
    )
}

export {Header};