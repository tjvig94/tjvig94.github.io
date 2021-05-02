import React from 'react';
import { aboutMe } from '../portfolio-aboutme';

function About() {
    return(
        <main class="about-me">
            <div class="container text-center">
                <div class="row mb-5">
                    <div class="col-12">
                        <h1 id="about">This Is Me</h1>
                    </div>
                </div>
                <div class="row">
                {aboutMe.map(trait => {
                    return(                                               
                        <div class="col-lg-3 this-is-me">
                            <h3>{trait.title}</h3>
                            <p>{trait.desc}</p>
                        </div>                   
                    )               
                })}    
                </div>            
            </div>
        </main>
    )
}

export default About;
