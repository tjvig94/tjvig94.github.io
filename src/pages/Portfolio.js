import React from 'react';
import { portfolio } from '../portfolio-aboutme';

function Portfolio() {
    return(
        <div className="container">
            {portfolio.map(project => {
                return(
                    <div className="row mt-5">
                        <div className="col">
                            <h2>{project.title}</h2>
                            <p>{project.desc}</p>
                        </div>
                        <div className="col">
                            <img src={project.image} className="app-img" alt={project.alt}></img>
                            <div className="row text-center">
                                <div className="col">
                                    <a href={project.deployment} target="_blank" rel="noreferrer"><button>Visit the app</button></a>
                                </div>
                                <div className="col">
                                    <a href={project.repo} target="_blank" rel="noreferrer"><button>Visit the repo</button></a>
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
