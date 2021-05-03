import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <ul className="nav justify-content-center mt-5 mb-5 px-3">
            <li className="nav-item nav-link home-btn">
                <Link to="/">
                    <h3>Home</h3>
                </Link>
            </li>
            <li className="nav-item nav-link about-me-btn">
                <Link to="/about">
                    <h3>About Me</h3>
                </Link>
            </li>
            <li className="nav-item nav-link portfolio-btn">
                <Link to="/portfolio">
                    <h3>Portfolio</h3>
                </Link>
            </li>
        </ul>
    )    
}

export default Header;
