import React from 'react';
import "../index.css"

function Form() {
    return (
     // This section is for the conact form
        <section id="contact">

            <h1 className="contact">To get in contact with me...</h1>
                <div>

                {/* Contemplating not having this be functional until I actually finish and launch page */}
    
                    <div className= "name">Input your name:</div>
                    <input type= "text" />

                    <div className= "email">Your Email Address here:</div>
                    <input type= "email"/>

                    <div className= "message">Leave a Message here:</div>
                    <input type= "text" />
                {/* Also struggled to make submit functional but it wasn't something I was hoping to get working already */}

                     <button type="submit" id="submit">Submit</button>



                </div>

        </section>
    );
}
    
export default Form;