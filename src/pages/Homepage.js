import React from 'react';

function Homepage() {
    return(
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-12">
                    <img src="images/Headshot.png" class="mx-auto d-block headshot" alt="Tim Vigneau photo"></img>
                </div>
                <div class="col-xl-6 text-center title">
                    <h1>Tim Vigneau</h1>
                    <h2>Full-Stack Web Developer</h2>
                    <hr></hr>
                    <div class="row mb-5">
                        <div class="col-4">
                            <a href="https://github.com/tjvig94" target="_blank">
                                <img src="images/github.png" alt="github page" class="social-icon"></img>
                            </a>
                        </div>
                        <div class="col-4">
                            <a href="https://www.linkedin.com/in/tim-vigneau/" target="_blank">
                                <img src="images/linkedin.png" alt="linkedin page" class="social-icon"></img>
                            </a>
                        </div>
                        <div class="col-4">
                            <a href="images/Tim_Vigneau_Resume.pdf" download="Tim Vigneau Resume">
                                <img src="images/file.png" alt="resume" class="social-icon"></img>
                            </a> 
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col text-center">
                            <a href="mailto:tjvig94@gmail.com"><button type="button" class="btn btn-outline-secondary"><h4>Email Me</h4></button></a>
                        </div>
                        <div class="col text-center">
                            <a href="https://github.com/tjvig94/portfolio" target="_blank"><button type="button" class="btn btn-outline-secondary"><h4>Check out the Code for This Page</h4></button></a>
                        </div>            
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Homepage;
