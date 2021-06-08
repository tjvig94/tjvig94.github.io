import React from 'react';
import { portfolio } from '../portfolio-aboutme';

function Portfolio() {
    return(
        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators pt-5">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>            
                <div className="carousel-inner">
                    {portfolio.map(project => {
                        return(
                            <div className={project.first === true ? "carousel-item active" : "carousel-item"} data-bs-interval="9999999">
                                <div className="row mt-5">
                                    <div className="col-lg-6">
                                        <h2>{project.title}</h2>
                                        <p>{project.desc}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={project.image} className="app-img" alt={project.alt}></img>
                                        <div className="row text-center mt-3">
                                            <div className="col">
                                                <a href={project.deployment} target="_blank" rel="noreferrer">
                                                    <button type="button" className="btn btn-outline-secondary">Visit the app</button>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a href={project.repo} target="_blank" rel="noreferrer">
                                                    <button type="button" className="btn btn-outline-secondary">Visit the repo</button>
                                                </a>
                                            </div>
                                        </div>                           
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
    )
}

export default Portfolio;
