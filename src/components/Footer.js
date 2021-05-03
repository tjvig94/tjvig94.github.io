import React from 'react';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return(
        <footer className="footer py-3 mt-auto">
            <div className="container-fluid text-center">
                <span className="text-muted">Copyright Tim Vigneau, {year}. Icons by Pixel Perfect from Flaticon.com.</span>
            </div>
        </footer>     
    )
}

export default Footer;
