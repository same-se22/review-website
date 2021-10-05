import React from 'react';
import { NavLink } from 'react-router-dom';
import banner from '../../img/BANNER.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className = "container " >
        <div className = "row banner-container" >
        <div className = "col-lg-5" >
       <img src = {banner}alt = "" className = "banner-pic" />
        </div> 
        <div className = "col-lg-1" > </div> 
        <div className = "col-lg-5" >
        <h1 className = "banner-heading" > A course built around </h1> 
        <p className = "banner-text mb-5" > Our work is recognized by all our students.We guarantee an excellent quality teaching in every way. </p> 
        <NavLink to = "contact" >
        <button className = "btn btn-primary btn-lg me-5 mb-3" > GET STARTED </button> 
        </NavLink> 
        <NavLink to = "/allservice" >
        <button className = "btn btn-outline-info btn-lg mb-3" > READ MORE </button> 
        </NavLink> 
        </div> 
        <div className = "col-lg-" > </div> 
        </div>
            
        </div>
    );
};

export default Banner;