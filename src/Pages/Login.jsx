import React from "react";
import Banner from '../Assets/banner.png';
import { useNavigate } from "react-router-dom";

const Login=()=>
{

    const navigate = useNavigate();

    return(<div className="login">
        <img className="banner-img" src={Banner} alt="banner" />
        <div className="login-input">
            <div className="login-title"><span className="grey-text">Show</span>casy.</div>
            <div className="login-input-box">
                <div className="login-welcome">Welcome Back</div>
                <div className="login-intro">Enter your email and password to access your account</div>
                <div className="login-form">
                    <div className="lf-type">Email</div>
                    <input className="lf-input" type="text" placeholder="Enter your email" />
                    <div className="lf-type">Password</div>
                    <input className="lf-input" type="password" placeholder="Enter your password" />
                    <div className="remember-me">
                        <div><input type="checkbox" /> Remember Me</div>
                        <button className="forgot-pass">Forgot Password</button>
                     </div>
                     <button className="login-button" onClick={()=>{navigate('/home')}}>Sign In</button>
                    <button className="sign-up-button" onClick={()=>{navigate('/signup')}}>Register New Account</button>
                </div>
                
            </div>
        </div>
    </div>)
}

export default Login;