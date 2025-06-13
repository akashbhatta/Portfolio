import React from "react";
import './Navbar.css';

const Navbar = ()=>{
    return (
        <header>
           <div className="navbar">
            <div className="logo">Akash </div>
            <div className="nav-links">
             <ul>
                   <li><a href="#home">Home</a></li>
                   <li><a href="#about">About</a></li>
                   <li><a href="#project">Project</a></li>
                   <li><a href="#skills">Skills</a></li>
                   <li><a href="#contact">Contact</a></li>
            </ul>
            </div>


        </div>
        </header>
       

    );
}
export default Navbar;