import React from 'react'
import aboutimage from "../assets/about-image.png"
import aboutimg from "../assets/about-img.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'


const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={aboutimg}></img>

        </div>
        <div className="about-section-image-container">
            <img src = {aboutimage}/>
        </div>
        <div className="about-section-text-container">
            <p className="primary-heading">
                Get your hands down on 
                best skincare secrets 
            </p>
            <p className = "primary-text">
                Are you a skincare lover like me,
                join us and open the treasure
                to amazing skincare secrets 
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Learn More</button>
                <button className="watch-video-button"><BsFillPlayCircleFill/>Watch Video</button>
            </div>
        </div>
    </div>
  )
}

export default About