import React from "react";
import Banner from '../Assets/banner.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup=()=>
{
    const[firstName, setFirstName]=useState('');
    const[lastName, setLastName]=useState('');
    const[dob, setDob]=useState('');
    const[email, setEmail]=useState('');
    const[phone, setPhone]=useState('');
    const[password, setPassword]=useState('');
    const[rePassword, setRePassword]= useState('');
    const[userType, setUserType]=useState('employee');

    const navigate = useNavigate();
    const[message, setMessage]=useState('');
    const[passwordMsg, setPasswordMsg]=useState('');

    const handleSignin=()=>
    {
        if(password!==rePassword)
        {
            setPasswordMsg("Password does not match")
        }

        const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "first_name": firstName,
            "last_name": lastName,
            "dob": dob,
            "email":email,
            "phone": phone,
            "password": password,
            "user_type": userType
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://127.0.0.1:8000/sign-up/", requestOptions)
            .then((response) => {
                response.text().then((data)=>setMessage(data))
                if(response.status === 200)
                {
                    navigate('/login')
                }
            })
            .catch((error) => setMessage(error));
    
    }


    return(<div className="login">
        <img className="banner-img" src={Banner} alt="banner" />
        <div className="login-input">
            <div className="login-title"><span className="red">{message}</span><span className="grey-text">Show</span>casy.</div>
            <div className="signup-input-box">
                <div className="login-welcome">Welcome You</div>
                <div className="login-intro">Enter your details to get started and access your account</div>
                <div className="signup-form">
                    <div className="sf-type">First Name</div>
                    <input className="sf-input" type="text" placeholder="Enter your name" onChange={(e)=>{setFirstName(e.target.value)}}/>
                    <div className="sf-type">Last Name</div>
                    <input className="sf-input" type="text" placeholder="Enter your name" onChange={(e)=>{setLastName(e.target.value)}} />
                    <div className="sf-type">Phone Number</div>
                    <input className="sf-input" type="number" placeholder="Enter your phone number" onChange={(e)=>{setPhone(e.target.value)}} />
                    <div className="sf-type">Email</div>
                    <input className="sf-input" type="email" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}} />
                    <div className="sf-type">Date of birth</div>
                    <input className="sf-input" type="date" onChange={(e)=>{setDob(e.target.value)}} />
                    <div className="sf-type">Password</div>
                    <input className="sf-input" type="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}} />
                    <div className="sf-type">Re-Enter Password</div>
                    <input className="sf-input" type="password" placeholder="Enter your password" onChange={(e)=>{setRePassword(e.target.value)}} />
                    <div className="sf-type, red">{passwordMsg}</div>
                     <button className="login-button" onClick={handleSignin}>Sign In</button>
                </div>
                
            </div>
        </div>
    </div>)
}

export default Signup;