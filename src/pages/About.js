import React from 'react';
import { aboutMe } from '../portfolio-aboutme';

function About() {
    return(
        <main className="about-me">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12">
                        <h1 id="about">This Is Me</h1>
                    </div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>            
                <div className="carousel-inner">
                    {aboutMe.map(trait => {
                        return(
                            <div className={trait.first ? "carousel-item active" :  "carousel-item"}>
                                <div className="row mb-5">                                                                  
                                    <div className="col">
                                        <h3>{trait.title}</h3>
                                        <p>{trait.desc}</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={trait.image} className="trait-img" alt={trait.alt}></img>
                                    </div>
                                </div> 
                            </div>
                        )
                    })}            
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>                              
            </div>
        </main>
    )
}

export default About;
