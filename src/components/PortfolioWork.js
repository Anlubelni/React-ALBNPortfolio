import React from "react";
import cdeRef from "../Images/cdeRef.jpg"
import crimeWatch from "../Images/crimeWatch.png"
import ehc from "../Images/ehc.jpg"
import movieMatesPic from "../Images/movieMatesPic.jpg"
import psswrdGen from "../Images/psswrdGen.jpg"
import ghost from "../Images/ghost.jpg"



import "../index.css"


function Portfolio() 
{ 
    return ( <>
        
        <div className="content-Container" >



            <div className="box1">
                <img src={cdeRef} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Code Refactoring</div>
                <a className="Link"href="https://anlubelni.github.io/code-refactor101/" target="_blank" rel="noopener noreferrer">Click to view Project</a>
            </div>



            <div className="box2">
                <img src={crimeWatch} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Crime Watch</div>
                <a className="Link"href="https://anlubelni.github.io/Crime-Watch/" target="_blank" rel="noopener noreferrer">Click to view Project</a>
            </div>


            <div className="box3">
                <img src={ehc} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Event-Hourly Calendar</div>
                <a className="Link"href="https://anlubelni.github.io/Event-HourlyCalendar/" target="_blank" rel="noopener noreferrer">Click to view Project</a>
            </div>


            <div className="box4">
                <img src={movieMatesPic} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Movie Mates</div>
                <a className="Link"href="https://moviemates-deployer.herokuapp.com/" target="_blank" rel="noopener noreferrer">Click to view Project</a>
            </div>


            <div className="box5">
                <img src={psswrdGen} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Password Generator</div>
                <a className="Link"href="https://anlubelni.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">Click to view Project</a>
            </div>


            <div className="box6">
                <img src={ghost} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Ghost Work</div>
                <a className="Link"href="https://www.lovethispic.com/uploaded_images/126801-Ghost-Dog.jpg" target="_blank" rel="noopener noreferrer">Click to view Project</a>
            </div>





        </div>
      
        </>
    )
}

export default Portfolio;