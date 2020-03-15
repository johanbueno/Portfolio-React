import React from "react";
import "./style.css";

function Portfolio() {
    return (
        <div>
            <div class="container">
                <h1>Portfolio</h1>
                <div class="row  portfolio">
                    <br></br>
                    <div className="modal fade" id="Modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Eat-Da-Burger</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                <img src="./assets/images/burger.png" class="card-img-top" alt="Eat-Da-Burger"></img>
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
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio