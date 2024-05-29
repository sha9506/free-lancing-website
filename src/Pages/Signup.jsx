import React from "react";
import Banner from '../Assets/banner.png';
import { useNavigate } from "react-router-dom";

const Signup=()=>
{

    const navigate = useNavigate();

    return(<div className="login">
        <img className="banner-img" src={Banner} alt="banner" />
        <div className="login-input">
            <div className="login-title"><span className="grey-text">Show</span>casy.</div>
            <div className="signup-input-box">
                <div className="login-welcome">Welcome You</div>
                <div className="login-intro">Enter your details to get started and access your account</div>
                <div className="signup-form">
                    <div className="sf-type">Name</div>
                    <input className="sf-input" type="text" placeholder="Enter your name" />
                    <div className="sf-type">Phone Number</div>
                    <input className="sf-input" type="number" placeholder="Enter your phone number" />
                    <div className="sf-type">Email</div>
                    <input className="sf-input" type="email" placeholder="Enter your email" />
                    <div className="sf-type">Date of birth</div>
                    <input className="sf-input" type="date" />
                    <div className="sf-type">Password</div>
                    <input className="sf-input" type="password" placeholder="Enter your password" />
                    <div className="sf-type">Re-Enter Password</div>
                    <input className="sf-input" type="password" placeholder="Enter your password" />
                     <button className="login-button" onClick={()=>{navigate('/home')}}>Sign In</button>
                </div>
                
            </div>
        </div>
    </div>)
}

export default Signup;