import React from "react";
import "../index.css"

function About() {
    return (

        /*Just a basic introduction of who I am and what I do*/
        <div className="intro">

            <div className="card-img-top" src="..." alt="Card image cap"></div>
            
            
            <div className="intro-body">
            {/* Considering adding more about myself in this area for future development */}

            <p class="intro-text">
                
                My name is Ana Belmontes and I am a Jr Full Stack Web developer. 
            Although I love coding and front-end has a special place in my heart because of the creative 
            liberties we can take with it, my true strength lies in project management. This is due to 
            my previous experience in the field of Law with an emphasis on ADR as well as my professional 
            background of 10 years in the customer service industry and strong team-work based environments.
            
            </p>


            </div>
        </div>
    )
}

export default About;