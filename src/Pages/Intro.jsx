import React from "react";
import Icon from "../Assets/intro1.png";

const Intro=()=>
{
    return(<div className="intro-bg">
    <div className="intro-form">
        <div className="intro-heading">
            <div className="intro-line"> 
                Welcome to <br /> decentralized freelancing!
            </div>
            <div className="intro-info">
                Why settle for a boss when you can be the boss?
            </div>
        </div>
        <div className="dots">. . .</div>
        <button className="started-btn">Get Started</button>
    </div>
        <img src={Icon} alt="img" className="intro-img" />
    </div>)
}


export default Intro;