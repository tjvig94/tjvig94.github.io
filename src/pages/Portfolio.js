import React from 'react';
import { portfolio } from '../portfolio-aboutme';

function Portfolio() {
    return(
        <div className="container">
            {portfolio.map(project => {
                return(
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
                )
            })}
        </div>
    )
}

export default Portfolio;
