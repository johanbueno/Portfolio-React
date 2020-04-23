import React from "react";
import "./style.css";
import $ from "jquery";
import burger from "../../images/burger.png";
import weather from "../../images/weather.png";
import giftify from "../../images/giftify/main-dashboard.png";
import events from "../../images/Events.png";
import google  from "../../images/google-api.png"
import developer from "../../images/developer_profile/developer-profile.png";
import password from "../../images/PASSWORD.png";
import ModalCard from '../Modal'


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})


function Portfolio() {
   
    return (
        <div  className="main">
            <div className="container ">
                <div className="row  portfolio">
                    <br></br>
                    
                    
                    <div  className="col  repos" >
                        <ModalCard  

                        ></ModalCard>
                    </div>
                    <div className="col  repos">
                        <div className="modal fade" id="Modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Eat-Da-Burger</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <img src={burger} className="card-img-top" alt="Eat-Da-Burger"></img>
                                        <p>
                                            Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd
                                            like to eat.
                                            Whenever a user submits a burger's name, your app will display the burger on the
                                            left side of the page -- waiting to be devoured.
                                            Each burger in the waiting area also has a Devour it! button. When the user clicks
                                            it, the burger will move to the right side of the page.
                                            Your app will store every burger in a database, whether devoured or not.
        
                                </p>
                                        <hr></hr>
                                        <h3>Technologies</h3>
                                        <p>

                                            * MySQL
                                            * Node
                                            * Express
                                            * MVC design
                                            * Handlebars
                                </p>
                                        ...
                            </div>
                                    <div className="modal-footer">

                                        <button onclick="window.location.href = 'https://burgerjsb.herokuapp.com/';"
                                            type="button" className="btn btn-primary">Live</button>
                                        <button onclick="window.location.href = 'https://github.com/johanbueno/Eat-Da-Burger';"
                                            type="button" className="btn btn-primary">Check Repo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" >

                            <div className="card-body">
                                <h5 className="card-title">Eat-Da-Burger</h5>
                                <img src={burger} className="card-img-top" alt="Eat-Da-Burger"></img>

                                <br></br>
                                <br></br>
                                <button type="button" className="btn btn-primary-repos" data-toggle="modal" data-target="#Modal1">
                                    Launch App
                        </button>
                            </div>
                        </div>
                    </div>
                    <div className="col  repos">
                        <div className="modal fade" id='modal-events' tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Hook Events</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <img src={events} className="card-img-top" alt="Events Dashboard"></img>


                                        <p>User can input city or keyword to get a list of upcoming events
                                            Events are listed with details. User can then get more details.
                                            User is able to get directions from current location to the venue or click to get
                                            tickets to
                                            the event.
        
                                </p>
                                        <hr></hr>
                                        <h3>Technologies</h3>
                                        <p>

                                            * Ajax Call
                                            * Google API
                                            * Javascript
                                            * Materialize
                                </p>

                                        <h3>Google API</h3>
                                        <img  src={google} alt="google-maps"></img>
                                ...
                            </div>
                                    <div className="modal-footer">

                                        <button 
                                            onclick="window.location.href = 'https://johanbueno.github.io/project_done/';"
                                            type="button" className="btn btn-primary">Live</button>
                                        <button onclick="window.location.href = 'https://github.com/johanbueno/project_done';"
                                            type="button" className="btn btn-primary">Check Repo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" >

                            <div className="card-body">
                                <h5 className="card-title">Hook Events</h5>
                                <img src={events} className="card-img-top" alt="Weather Dashboard"></img>

                                <br></br>
                                <br></br>
                                <br></br>
                                <button type="button" className="btn btn-primary-repos" data-toggle="modal" data-target="#modal-events">
                                    Launch App
                        </button>
                            </div>
                        </div>
                    </div>
                    <div className="col  repos">
                        <div className="modal fade" id="Modalgiftify" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Giftify</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <img src={giftify} className="card-img-top"
                                            alt="Giftify"></img>
                                        <br></br>
                                        <br></br>

                                        <h5>Looking for that perfect gift, but don't know where to start? Well we have the
                                    perfect app for you!</h5>
                                        <p>
                                            This application helps the user search for and buy the perfect gift for their
                                            special someone. They can choose from a selection of Featured and Top Rated Gifts,
                                            or they can search for a gift directly from the homepage.
        
                                </p>
                                        <hr></hr>



                                        <h3>Technologies</h3>
                                        <p>
                                            * MySQL
                                            * Sequelize
                                            * Passport.js Authenticate
                                            * Node
                                            * Express
                                            * MVC design
                                            * Handlebars
                                            * Etsy API
                                            * Algolia
                                </p>
                                        <img className="card-img-top" src="./assets/images/giftify/Sign-up.png" alt="Sign-up"></img>
                                        <hr></hr>
                                        <img className="card-img-top" src="./assets/images/giftify/tshirt.png" alt="tshirt"></img>
                                        ...
                            </div>
                                    <div className="modal-footer">

                                        <button onclick="window.location.href = 'https://giftify-project2.herokuapp.com/';"
                                            type="button" className="btn btn-primary">Live</button>
                                        <button onclick="window.location.href = 'https://github.com/cmarshman/Giftify';"
                                            type="button" className="btn btn-primary">Check Repo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" >

                            <div className="card-body">
                                <h5 className="card-title">Giftify</h5>
                                <img src={giftify} className="card-img-top" alt="Giftify"></img>

                                <br></br>
                                <br></br>
                                <button type="button" className="btn btn-primary-repos" data-toggle="modal" data-target="#Modalgiftify">
                                    Launch App
                        </button>
                            </div>
                        </div>
                    </div>
                    <div className="col  repos">
                        <div className="modal fade" id="ModalWeather" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Weather Dashboard</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <img src={weather}
                                            className="card-img-top" alt="Weather_Dashboard"></img>
                                        <br></br>
                                        <br></br>

                                        <p>Weather Dashboard build with jQuery 3.2.1.User could search current weather
                                            conditions for multiple cities. The App is correlated with current time and display
                                            the next
                                    day forecast.</p>

                                        <hr></hr>
                                        <h3>Features</h3>
                                        <p>
                                            Display the current weather conditions:
                                            City,Date,Icon image,Temperature,Humidity,Wind speed.
                                            Exhibit UV index.
                                            Display the forecast for next day with:
                                            Date
                                            Icon image as Background
                                            Temperature
                                            Humidity.
                                            Create a history according user Seacrh.
                                            Dinamically buttons with event handeling to research the current Weather for that
                                            specific city clicked.
        
                                </p>
                                        ...
                            </div>
                                    <div className="modal-footer">

                                        <button
                                            onclick="window.location.href = 'https://johanbueno.github.io/Weather_Dashboard/';"
                                            type="button" className="btn btn-primary">Live</button>
                                        <button
                                            onclick="window.location.href = 'https://github.com/johanbueno/Weather_Dashboard';"
                                            type="button" className="btn btn-primary">Check Repo</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="card" >

                            <div className="card-body">
                                <h5 className="card-title">Weather Dashboard</h5>

                                <img  src={weather} className="card-img-top" alt="weather dashboard"></img>
                                <br></br>
                                <br></br>
                                <button type="button" className="btn btn-primary-repos" data-toggle="modal" data-target="#ModalWeather">
                                    Launch App
                        </button>
                            </div>
                        </div>
                    </div>
                    <div className="col  repos">
                        <div className="modal fade" id="ModalPassword" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Password Generator</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <img src={password} className="card-img-top" alt="Password_generator"></img>
                                        <br></br>


                                        <p>Password Generator. The user could choose from Special Characters, Numeric,
                                    UpperCase and LowerCase in a range from 8 to 128 Characters.</p>

                                        <hr></hr>
                                        <h3>Features</h3>
                                        <p>
                                            Responsive interface
                                            javascript
                                            Object handling
                                            the application validate the user entry
                                            The user could copy the Password to their clipboard
                                </p>

                                        ...
                            </div>
                                    <div className="modal-footer">

                                        <button
                                            onclick="window.location.href = 'https://johanbueno.github.io/Password_generator/';"
                                            type="button" className="btn btn-primary">Live</button>
                                        <button
                                            onclick="window.location.href = 'https://github.com/johanbueno/Password_generator';"
                                            type="button" className="btn btn-primary">Check Repo</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Password Generator</h5>

                                <img src={password} className="card-img-top" alt="Password_generator"></img>

                                <br></br>
                                <br></br>
                                <button type="button" className="btn btn-primary-repos" data-toggle="modal" data-target="#ModalPassword">
                                    Launch App
                        </button>
                            </div>
                        </div>


                    </div>
                    <div className="col  repos">
                        <div className="modal fade" id="ModalProfile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Developer Profile Generator</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <img src={developer} className="card-img-top" alt="developerProfile"></img>
                                        <p>Command-line application that generates a PDF profile from a GitHub username. The application will be run with the following command:
        
                                            node index.js
                                </p>
                                        <hr></hr>
                                        <h3>
                                            Features
                                </h3>
                                        <p>
                                            The Profile will be populated with the following:
        
                                            Profile image
                                            User name
                                            Link to User GitHub profile
                                            location
                                            User bio
                                            Number of public repositories
                                            Number of followers
                                            Number of users following
                                            Styling with User color selection
                                </p>

                                        ...
                            </div>
                                    <div className="modal-footer">

                                        <button onclick="window.location.href = 'https://github.com/johanbueno/Developer_Profile_Generator';"
                                            type="button" className="btn btn-primary">Check Repo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" >

                            <div className="card-body">
                                <h5 className="card-title">Developer Profile Generator</h5>
                                <img src={developer} className="card-img-top" alt="developerProfile"></img>

                                <br></br>
                                <br></br>
                                <button type="button" className="btn btn-primary-repos" data-toggle="modal" data-target="#ModalProfile">
                                    Launch App
                        </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
    );
}



export default Portfolio