import React from 'react';
import { aboutMe } from '../portfolio-aboutme';

function About() {
    return(
        <main className="about-me">
            <div className="container text-center">
                <div className="row mb-5">
                    <div className="col-12">
                        <h1 id="about">This Is Me</h1>
                    </div>
                </div>
                <div className="row">
                {aboutMe.map(trait => {
                    return(                                               
                        <div className="col-lg-3 this-is-me">
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
