import React  from "react";
import NavbarRight from "./NavbarRight";
import Navbarleft from "./Navbarleft";
import './navBar.css'
function Navbar(){
    return  (
        <nav className="navbar">
        <div className="nav-container">
           <Navbarleft/>
            <NavbarRight/>
        </div>
    </nav>




    )
}

export default Navbar;