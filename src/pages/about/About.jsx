import React from 'react';
import './about.css';

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="aboutMe">
            <div className="aboutMeImg">
                <img src="https://cdn-icons-png.flaticon.com/512/236/236832.png" alt="" />
            </div>
            <div className="aboutMeDetails">
                <h1 className="name">NITHYANANTHAM S</h1>
                <h3 className="desig">Fullstack Web Developer</h3>
                <h5 className="skills">
                <div htmlFor="skills">SKILLS</div>
                  <div className='skillsContainer'>  
                    <ul>
                      <li className='skillsList'>HTML 5</li>
                      <li className='skillsList'>CSS</li>
                      <li className='skillsList'>JavaScript</li>
                      <li className='skillsList'>jQuery</li>
                      <li className='skillsList'>React Js</li>
                      <li className='skillsList'>Node Js</li>
                      <li className='skillsList'>Express Js</li>
                      <li className='skillsList'>MongoDB</li>
                    </ul>
                  </div>
                </h5>
                <div className="aboutSocial">
                  <a href="/"><i className="aboutIcon fa-brands fa-facebook"></i></a>
                  <a href="/"><i className="aboutIcon fa-brands fa-instagram"></i></a>  
                </div>
            </div>
        </div>
        <div className="abouDesc">
          <p className="desc">
            This blog is a Fullstack Web Development project which was was developed using React Js as frontend library.React Router used for routing, Axios used for fetching backend data. For backend NodeJs frame is used along with ExpressJs. For Database MongoDB is used with Mongoose Framework.  
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
