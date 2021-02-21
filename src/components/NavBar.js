import React from "react";
import {Link} from "react-router-dom";

const NavBar = ({handleBGChange, downloadLink}) => {

    return (
        <nav className="navbar-container">

                 <a href={downloadLink} className="navbar-link tooltip" download="NASA_image" target="_blank">
                     <i className="fas fa-arrow-down"></i>
                     <span className="tooltiptext-right transparent-box">Download Backgound Image</span>
                     </a>

                 <nav className="navbar-right-cluster">
                     <span className="navbar-link tooltip" onClick={handleBGChange}>
                         <i className="fas fa-sync"></i>
                            <span className="tooltiptext-left transparent-box">Change Background</span>
                         </span>
                     <Link to="/search" className="navbar-link tooltip"><i className="fas fa-search"></i>
                     
                            <span className="tooltiptext-left transparent-box">Search NASA Images</span>
                     </Link>
                     <Link to="/" className="navbar-link tooltip"><i className="fas fa-home"></i>
                            <span className="tooltiptext-left transparent-box">Home</span>
                     </Link>

                  </nav>
        </nav>

   

    );
};

export default NavBar;