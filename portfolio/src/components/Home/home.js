import React from "react";
import { Link } from "react-router-dom";
import Johan from "../../JOHAN-BUENO.jpg"
import "./style.css";

function Home() {
    return (

     <div id="lead">
         <div id="lead-content">
             <h1>Johan Bueno</h1>
             <img id="Johan" src={Johan} alt="Me">
             </img>
             <h2>Full Stack Developer</h2>
             <a href="https://docs.google.com/document/d/1FMf7T5so_sac4FqvwdbPdpkXCgfbQ_DDcNWX3oh4fcg/edit?usp=sharing"
             className="btn-rounded-white">Download Resume</a>
         </div>
   
          <div id="lead-down">
             <span>
             <i className="fas fa-arrow-circle-down"></i>
             </span>
          </div>

     </div>

    );
}

export default Home 