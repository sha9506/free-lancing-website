import React from "react";
import Navbar from "../Modules/Navbar";
import { useNavigate } from "react-router-dom";

const Landing=()=>
{

    const navigate = useNavigate();

    return(<div>
    <div className="landing">
        <Navbar/>
        <div className="intro">
            <div className="hello">Hello!</div>
            <div className="welcome">Welcome to De-<br/>Centralized freelancing Platform! with emphasis on&nbsp;
                <span className="grey-text">community power</span>
            </div>
        </div>
        <div className="landing-tag">
            <div className="tag-line">Why settle for a boss when you can be the boss?</div>
            <button className="talk" onClick={()=>{navigate('/login')}}>Let's Talk</button>
        </div>
    </div>
    <div className="q1-bg">
        <div className="quote">
                Embrace <br />
                freedom and flexibility,
        </div>
        <div className="q-info">
                break free from intermediaries, join our <br />
                decentralized freelancing community.
        </div>
    </div>
    <div className="q2-bg">
         <div className="quote">
            Cut out the middleman,
         </div>
        <div className="q-info">
            because who needs a middleman when you're already funny!
        </div>
    </div>
</div>)
}

export default Landing;