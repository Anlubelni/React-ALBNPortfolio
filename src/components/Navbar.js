import React from "react";
import "../index.css"

function Navbar ({setPage, About, PortfolioWork, Contact, Github}) {
    return (
    <>
        <div className="Navbar">
             <button onClick={() => setPage (<About/>)} className="btn">About</button>
             <button onClick={() => setPage (<PortfolioWork/>)}className="btn">Portfolio Work</button>
             <button onClick={() => setPage (<Contact/>)}className="btn">Contact</button>
             <button onClick={() => setPage (<Github/>)}className="btn">Github</button>
        </div>
    </>
    )
}

export default Navbar;