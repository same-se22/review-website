import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer >
        <div className = "container" >
        <div className = "row text-center" >
        <div className = "social-icon d-flex justify-content-center mb-4" >
        <i className = "fab fa-facebook me-3" > </i>     
        <i className = "fab fa-instagram-square me-3" > </i> 
        <i className = "fab fa-twitter-square" > </i> 
        </div>
        <p className = "text-white mb-2" > Info.Support.Contact </p>
        <p className = "text-white mb-3" > Terms of use.Privacy policy </p> 
        <p> ©2021 ArtOutDoctor is Proudly Powered by <a href="http://https://www.facebook.com/profile.php?id=100056714733291" target="_blank" rel="noopener noreferrer">Jannat</a></p>
        </div> 
        </div>
        </footer>
    );
};

export default Footer;