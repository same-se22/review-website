import React from 'react';
import backgroundImage from './../../img/IELTS-test-center-to-select.jpg'
import './About.css'


const About = () => {
        const styles = {
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh'
        };
        return (
        <div className = "about-us-section" style = {styles}>
        <h1 className = "text-center about-heading" > About Us </h1> 
        <p className = "text-center about-text" >The International English Language Testing System (IELTS) is the world’s most popular English language proficiency test for higher education and global migration.IELTS for UKVI and IELTS Life Skills : Please contact the organisation you are applying to confirm which type of test you need to take.</p>      
        </div>
    );
};

export default About;