import React, { useState } from "react";
import MenuImg from '../Assets/menu.svg';
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";

const Navbar=()=>
{
    const[showModal, setShowModal]= useState(false);
    const navigate = useNavigate();


    return(<div className="navbar">
        {showModal ? (
        <Menu
          onclose={() => {
            setShowModal(false);
          }}
        />
      ) : null}
        <div className="title">WorkHere.</div>
        <div className="nav-item">
            <button className="talk-button" onClick={()=>{navigate('/login')}}>Let's Talk</button>
            <button className="menu-button"  
                onClick={() => {
                setShowModal(true); }}>
                <img src={MenuImg} alt="menu" className="menu-img"  />
            </button> 
        </div>
    </div>)
}

export default Navbar;