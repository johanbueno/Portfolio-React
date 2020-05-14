import React from "react";
import Johan from "../../images/JOHAN-B (1).webp"
import "./style.css";
import Angular from "../../images/angular.webp";
import Ajax from "../../images/ajax.webp";
import API from "../../images/API.webp";
import Bootstrap from "../../images/bootstrap.webp";
import Css from "../../images/css.webp";
import Express from "../../images/Express.webp";
import JavaScript from "../../images/javascript.webp";
import Node from "../../images/node.webp";
import Html from "../../images/html5.webp";
import MySQL from "../../images/MySql.webp";
import Git from "../../images/git.webp";
import Mongodb from "../../images/mongodb.webp";
import Reactjs from "../../images/reactjs.webp";
import Responsive from "../../images/responsive.webp";
import Jquery from "../../images/jquery1.webp"




function Home() {
  return (
    <div>
      <div id="lead">
        <div id="lead-content">
          <h2>Johan Bueno</h2>
          <picture>
            <source type="image/webp" srcset={Johan} />

            <img id="Johan" src={Johan} alt="Johan-Bueno" />
          </picture>

          <h2>Full" Stack Developer</h2>
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
              <div className="col-md-6">

                <div id="about">
                <p>Passionate Full Stack Web Developer with a background in Finance and Logistics with Certification from University of North Carolina. Life-long dedication to learning  including technical skills in HTML5, CSS3 Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS and Angular. Effective at combining creativity and problem solving to develop user friendly applications. Known among staff for being strong in detail and attention no matter the complexity of the project. Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset. </p>

                </div>

              </div>
              <div className="col-md-6   pics">
                <picture>
                  <source type="image/webp" srcset={Angular} />

                  <img src={Angular} alt="angular" />
                </picture>
                <picture>
                  <source type="image/webp" srcset={JavaScript} />
                  <img src={JavaScript} alt="javascript" />
                </picture>
                <picture>
                  <source type="image/webp" srcset={Ajax} />
                  <img src={Ajax} alt="ajax" />
                </picture>
                <picture>
                  <source type="image/webp" srcset={API} />
                  <img src={API}  alt="API" />
                </picture>
                <picture>
                  <source type="image/webp" srcset={Bootstrap} />
                  <img src={Bootstrap} alt="Bootstrap" />
                </picture>
                <picture>
                  <source type="image/webp" srcset={Node} />
                  <img src={Node} alt="node" />
                </picture>
                <picture>
                  <source type="image/webp" srcset={Git} />
                  <img src={Git} alt="git" />
                </picture>
                <picture>
                  <source type="image/webp" srcset={Html} />
                  <img src={Html}  alt="html5" />
                </picture>
                <picture>
                  <source type="image/webp" srcset={Css} />
                  <img src={Css}  alt="css" />
                </picture>
                <picture>
                  <source type="image/webp" srcset={Express} />
                  <img src={Express} alt="Express" />
                </picture>
                <picture>
                  <source type="image/webp" srcset={MySQL} />
                  <img src={MySQL}  alt="MySQL" />
                </picture>
                <picture>
                  <source type="image/webp" srcset={Mongodb}/>
                  <img src={Mongodb} alt="mongodb" />
                </picture>
                <picture>
                  <source type="image/webp" srcset={Reactjs} />
                  <img src={Reactjs} alt="reactjs" />
                </picture>
                <picture>
                  <source type="image/webp" srcset={Responsive} />
                  <img src={Responsive} alt="responsive" />
                </picture>
                <picture>
                  <source type="image/webp" srcset={Jquery} />
                  <img src={Jquery} alt="jquery" />
                </picture>

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