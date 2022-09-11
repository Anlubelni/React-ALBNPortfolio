import React, {useState} from 'react';
import Header from "./components/Header";
import Navbar from './components/Navbar';
import About from './components/About';



import "./index.css";
export default function Main() {
    const [page, setPage] = useState(<About/>)
    return(
        <div> 

            <Header/> 
                <div className="Content-Container">
            <Navbar 
            setPage={setPage}
            About={About} 
            /*PortfolioWork={PortfolioWork} 
            Contact={Contact} Github={Github} *//>
            {page}
                </div>

        </div>
)

}