import React from 'react';
import {
    NavLink
} from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className = "container mb-5 header-text" >
        <nav className = "navbar navbar-expand-lg my-nav navbar-dark fixed-top" >
        <div className = "container" >
        <NavLink className = "navbar-brand text-black"
        to = "/home" > <h3>IELTS </h3>
        </NavLink>
        <button className = "navbar-toggler "
        type = "button">
        <span className = "navbar-toggler-icon" > </span> 
        </button> 
        <div className = "collapse navbar-collapse"
        id = "navbarSupportedContent">
        <ul className = "navbar-nav ms-auto mb-2 mb-lg-0" >
        <li className = "nav-item" >
        <NavLink className = "nav-link active  text-black"
        to = "/home" > Home </NavLink> 
        </li> 
        <li className = "nav-item" >
        <NavLink className = "nav-link active  text-black"
        to = "/allservice" > Services </NavLink> 
        </li>
        <li className = "nav-item" >
        <NavLink className = "nav-link  text-black"
        to = "/about" > About us </NavLink> 
        </li> 
        <li className = "nav-item" >
        <NavLink className = "nav-link  text-black"
        to = "/contact"> Contact us </NavLink> </li>
        </ul>

        </div> 
        </div> 
        </nav> 
        </div>
    );
};

export default Header;
