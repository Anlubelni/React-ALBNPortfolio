import React from "react";
import "../index.css"

function Navbar () {
    return (
    <>
        <div className="Navbar">
             <button className="btn">About</button>
             <button className="btn">Work Portfolio</button>
             <button className="btn">Contact</button>
             <button className="btn">Resume</button>
        </div>
    </>
    )
}

export default Navbar;