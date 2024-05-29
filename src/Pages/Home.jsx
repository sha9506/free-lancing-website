import React from "react";
import Navbar from "../Modules/Navbar";

const Home=()=>
{
    return(<div className="home">
        <Navbar/>
        <div className="home-head">
            <div className="hh1">Have an idea?</div>
            <div className="hh2">Let’s rock <span className="grey-text">the world</span></div>
        </div>

    </div>)
}

export default Home;