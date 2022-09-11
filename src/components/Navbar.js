import React from "react";
import "../index.css"

function Navbar ({setPage, About, PortfolioWork, Contact, Resume}) {
    return (
    <>
        <div className="Navbar">
             <button onClick={() => setPage (<About/>)} className="btn">About</button>
             <button onClick={() => setPage (<PortfolioWork/>)}className="btn">Portfolio Work</button>
             <button onClick={() => setPage (<Contact/>)}className="btn">Contact</button>
             <button onClick={() => setPage (<Resume/>)}className="btn">Resume</button>
        </div>
    </>
    )
}

export default Navbar;