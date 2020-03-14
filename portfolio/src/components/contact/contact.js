import React from "react";
import Johan from "../../JOHAN-BUENO.jpg"
import "./style.css";

function Contact() {
    return (
        <div>
        <div className="container">
            <div className="row">

                <div className="col-md-12  contact ">
                <img id="Johan" src={Johan} alt="ProfilePicture"></img>
                <h1>Contact</h1>
                <hr></hr>

                <div>
                    <i className="fas fa-envelope-square">johan.s.bueno@gmail.com </i>
                </div>
                <div>
                    <i className="fas fa-mobile-alt">
                        (980)312-2951</i>
                    <i className="far fa-file">
                        <a href="https://docs.google.com/document/d/1FMf7T5so_sac4FqvwdbPdpkXCgfbQ_DDcNWX3oh4fcg/edit?usp=sharing">Resume</a>
                    </i>
                </div>
                <div className="col-sm-12">
                    <i className="fab fa-linkedin">
                        <a href="https://www.linkedin.com/in/johan-bueno-3a180496/">Linkedin</a>
                    </i>
                    <i className="fab fa-github">
                        <a href="https://github.com/johanbueno">Github</a>
                    </i>

                </div>
                </div>
            </div>

        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-6  center">
                    <form action="mailto:johan.s.bueno@gmail.com" method="post" enctype="text/plain">

                        Name:<br></br>
                        <input type="text" className="form-control" name="name"></input>
                        <br></br>
                        E-mail:<br></br>
                        <input type="text" className="form-control" name="mail"></input>
                        <br></br>
                        Comment:<br></br>
                        <input type="text" className="msmbx" name="comment" size="50"></input>
                        <input className="btn btn-primary  btnsend" type="submit" value="Send">

                        </input>

                    </form>
                </div>


                <div className="col-md-3"></div>
            </div>
        </div>
        </div>
    );
}
export default Contact 