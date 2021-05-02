import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    return(
        <ul className="nav justify-content-center mt-5 mb-5 px-3">
            <li className="nav-item nav-link home-btn">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </li>
            <li className="nav-item nav-link about-me-btn">
                <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    About Me
                </Link>
            </li>
            <li className="nav-item nav-link portfolio-btn">
                <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio
                </Link>
            </li>
        </ul>
    )    
}

export default Header;
