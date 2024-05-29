import React from "react";

const Menu=({onclose})=>
    {
        return(<div className="menu">
            
            <div className="menu-box">
                <div className="modal-header">
                    <div><span className="grey-text">Show</span>casy.</div>
                    <button className="cancel-modal" onClick={()=>{onclose()}}>
                        Cancel
                    </button>
                </div>
                <div className="menu-items">
                    <div>Home</div>
                    <button className="menu-buttons">---</button>
                </div>
                <div className="menu-items">
                    <div>Application Status</div>
                    <button className="menu-buttons">---</button>
                </div>
                <div className="menu-items">
                    <div>Payment</div>
                    <button className="menu-buttons">---</button>
                </div>
                <div className="menu-items">
                    <div>Profile</div>
                    <button className="menu-buttons">---</button>
                </div>
            </div>
        </div>)
    }

    export default Menu;