import React from "react";
import Navbar from "../Modules/Navbar";
import { useNavigate } from "react-router-dom";
import introImg from "../Assets/img.png";
import dotImg from "../Assets/dot.png";

const Landing=()=>
{

    const navigate = useNavigate();

    return(<div>
    <div className="landing">
        <div className="landing-bg">
        <Navbar/>
        <div className="intro">
            <div className="intro-img">
                    <img className="introImg" src={introImg} alt="img" />
            </div>
            <div className="intro-line">
                <div className="welcome" >Welcome to De-<br/>centralized freelancing! <br/>
                    <span className="grey-text">with emphasis on community power</span>
                </div>
                <div className="landing-tag">
                    <div className="tag-line">Why settle for a boss when you can be the boss?</div>
                    <div className="dot"><img src={dotImg} alt="" /></div>
                    <button className="talk" onClick={()=>{navigate('/login')}}>Get Started</button>
                </div>
            </div>
        </div>
    </div>
    {/* <div className="q1-bg">
        <div className="quote">
                Embrace <br />
                freedom and flexibility,
        </div>
        <div className="q-info">
                break free from intermediaries, join our <br />
                decentralized freelancing community.
        </div>
    </div> */}
    {/* <div className="q2-bg">
         <div className="quote">
            Cut out the middleman,
         </div>
        <div className="q-info">
            because who needs a middleman when you're already funny!
        </div>
        </div> */}
    </div>
</div>)
}

export default Landing;