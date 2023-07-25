import React from 'react'
import "./About-me.css"
import First from "../../assets/images/First.png"
import Middle from "../../assets/images/Middle.png"
import Last from "../../assets/images/Last.png"
const AboutMe = () => {
  return (
    <div className="AboutMe" id="aboutme">
      <div className="block_1">
        <div className="content author">
          <span className='author'>Sultonov Hayotjon</span>
          <span className='job'>Frontend Developer</span>
          <div className="inform">Frontend developer looking for ideas and
            projects for himself and others</div>
        </div>
        <div className="image">
          <div className="imagesShape">
            <div className="first">
            </div>
            <div className="middle">
            </div>
            <div className="last">
            </div>
          </div>
        </div>
      </div>
      <div className="block_2">
        <div className="about_me">
          <div className="img_title_1">
          <img src={Middle} width={"60px"} alt="" />
          </div>
          <span className='text'>
            A few years ago, I became interested in developing websites and interfaces.
            Since then, I have been steadily improving my skills. Now I am developing
            websites and web applications to order or for myself.
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutMe