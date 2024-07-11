import React from 'react'
import './content.css'
import { Link as ScrollLink } from 'react-scroll'
import { BsGithub, BsLinkedin, BsMailbox, BsPhone } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Content = () => {
  return (
    <main className='scroll-container'>
      <div className='scroll hero' id='home'>

        <div className='name'>
          <span className='hello'>Hello,</span> I'm Hari
        </div>
        <div className='field'>
          Passionate <span className='domain'>Frontend Developer</span> with a knack for creating responsive and user-friendly webexperiences.
        </div>
        <div className='about'>
           I specialize in HTML5, CSS3, JavaScript, and have experience with React. With a keen eye for design and a commitment to clean, efficient code, I strive to deliver impactful digital solutions that elevate user experiences.
        </div>
        <div className='explore'>
          <ScrollLink to="projects" spy={true} smooth={true} offset={-20} duration={400}><button>Explore My Projects</button></ScrollLink>
        </div>
      </div>

      <div className='scroll projects' id='projects'>
        <div className='title'>My Projects</div>
        <div className='project-grid'>
          <div className='project'>
            <div className='pro-title'>IMDb Clone</div>
            <div className='pro-description'>I made this project using React Js.  This project is mainly focus on watchlist function. You can add Your Favourite movie on the watchlist. Also you can add your star rating. Each movie has watchoption, by clicking that you can see the information about the movie like Stars name, director name, streaming platform etc... I added 50 (movies + tvshows) data in this project. I used local storage for storing data.
            </div>
            <Link to='https://harivijay87.github.io/imdb/#/imdb/' target='_blank' style={{textDecoration:'none'}}>
              <button className='pro-link'>Project Link</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='scroll contact' id='contact'>
        <div className='about-me'>
          <div className='about-title'>More About Me</div>
          <div className='about-words'>
            Hi, I'm a 2024 graduate with a B.E. in Computer Science Engineering. I'm passionate about frontend development and skilled in HTML, CSS, JavaScript, and React. I'm currently seeking job opportunities where I can apply my skills to build engaging and innovative web applications. If you're looking for a dedicated and enthusiastic frontend developer, please feel free to contact me.
          </div>
        </div>
        <div className='contact-section'>
          <div className='contact-title'>Contact Me</div>
          <div className='contact-row-section'>
            <div className='contact-row'>
                <BsPhone/>
                <div className='contact-address'>+91 8428653647</div>
            </div>
            <div className='contact-row'>
              <BsMailbox/>
              
                <div className='contact-address'>
                  harivijayhari8754@gmail.com
                </div>
            </div>
            <div className='contact-row'>
              <BsGithub/>
              <Link to='https://github.com/harivijay87' target='_blank' style={{textDecoration:'none'}}>
                <div className='contact-address'>
                  https://github.com/harivijay87
                </div>
              </Link>
            </div>
            <div className='contact-row'>
              <BsLinkedin/>
              <Link to='https://www.linkedin.com/in/harivijay87/' target='_blank' style={{textDecoration:'none'}}>
                <div className='contact-address'>
                  https://www.linkedin.com/in/harivijay87/
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Content
