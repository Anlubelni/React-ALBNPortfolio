import React, {useState} from 'react';
import Header from "./components/Header";
import Navbar from './components/Navbar';
import About from './components/About';
import PortfolioWork from './components/PortfolioWork';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


import "./index.css";
export default function Main() {
    
    const [page, setPage] = useState(
            
            <About/>)   

    return(
            <div> 
{/* Remember to place these in order! */}

                <Header/> 




                    <div className="Content-Container">
                <Navbar 

                    setPage={setPage} 
                    About={About} 
                    PortfolioWork={PortfolioWork} 
                    Contact={Contact} 
                    Resume={Resume} />
                {page}

                    </div>




{/* Reminder that I am not usinmg the footer for now */}
                <Footer/>
              
            </div>
        )

}