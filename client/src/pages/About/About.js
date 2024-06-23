import React from 'react'
import './About.css'

import Image from '../../assests/images/Photooo.jpg'
const About = () => {
  return (
    <>
        <div className="about" id ="about">
            <div className="row">
                <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src={Image} alt="no image"/>
                </div>
                <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                  <h1 ><b>ABOUT ME</b></h1>
                  <p>I’m an enthusiastic and driven college student with a solid foundation in data structures, problem-solving techniques, and web development. My academic journey has equipped me with the skills to tackle complex challenges using key concepts in computer science.

I am passionate about applying my knowledge in real-world scenarios and am eager to contribute to innovative projects. Through hands-on experience and collaborative efforts, I aim to enhance my expertise, particularly in the realms of data structures and problem-solving. I thrive in dynamic environments where I can continuously learn and grow, pushing the boundaries of my technical capabilities.
                  </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About
