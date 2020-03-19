import React from "react";
import Johan from "../../JOHAN-BUENO.jpg"
import "./style.css";
import Angular from "../../images/angular.png";
import  Ajax from "../../images/ajax.png";
import  API from "../../images/api.jpeg";
import  Bootstrap from "../../images/bootstrap.png";
import  Css   from "../../images/css.png";
import  Express   from "../../images/Express.png";
import  JavaScript   from "../../images/javascript.png";
import  Node   from "../../images/node js.png";
import  Html   from "../../images/html5.png";
import  MySQL   from "../../images/MySQL.png";
import  Git from "../../images/git.png"



function Home() {
    return (
        <div>
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
          <div className="container ">
            <div className="row">
               <div className="col-md-1">
               </div>
              <div className="col-md-10  center">
                  <div className="row">
                  <div  className="col-md-6">
   
                 <hr></hr>
   
                 <div id="about">
                 <p>Full Stack Web Developer with a Bachelor’s degree in Finance and Foreign exchange. Warehouse
                   Manager of a Distribution center. Efficient on time management and conflict resolution. Developer of
                   responsive web applications oriented on users needs. Looking for accountability on every single project. Known among staff for
                   strong with attention to detail no matter the complexity of the project. </p>
   
                  </div>
   
             </div>
                   <div  className="col-md-6   pics">
                        <img src={Angular} alt="angular"></img>
                        <img src={JavaScript} alt="javascript"></img>
                        <img src={Ajax} alt="ajax"></img>
                        <img src={API} alt="api"></img>
                        <img src={Bootstrap} alt="bootstrap"></img>
                        <img src={Node} alt="nodejs"></img>
                        <img src={Git} alt="git"></img>
                        <img src={Html} alt="html5"></img>
                        <img src={Css} alt="css"></img>
                        <img src={Express} alt="Express"></img>
                        <img src={MySQL} alt="MySQL"></img>

                 </div>
           </div>
           <div id="skills">
             <h2 className="heading">Skills</h2>
             <ul>
               <li>JavaScript</li>
               <li>Node.js</li>
               <li>Angular</li>
               <li>React</li>
               <li>JavaScript</li>
               <li>Github</li>
               <li>Node.js</li>
               <li>Express</li>
               <li>API</li>
               <li>MySQL</li>
               <li>Mongo</li>
               <li>Css</li>
               <li>Bootstrap</li>
   
             </ul>
           </div>
   
         </div>
   
            <div className="col-md-1"></div>
         </div>
          <div id="to-top">
         <span>
           <i class Name="fas fa-arrow-circle-up"></i>
         </span>  
         </div>

      </div>

     </div>

    );
}

export default Home 