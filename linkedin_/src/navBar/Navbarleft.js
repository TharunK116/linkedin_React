
import React from "react";
import Icon from "../atoms/icon/index";
import './navBar.css'
function Navbarleft(){
    return (
        <div className="nav-left">
        <div className="logo">
            <a href="index.html"> 
                <Icon classname="fa-brands fa-linkedin"> </Icon></a>
        </div>
        <div className="searchbar">
            <Icon classname="fa-solid fa-magnifying-glass "></Icon>
            <input
               type="text"
                name="Search"
                id="Searchbar"
                placeholder="Search" />
        </div>
    </div>
    )
}
export default Navbarleft;