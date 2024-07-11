import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link as ScrollLink } from 'react-scroll'



const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header>
      <div className='header-container'>
        <div className='title'>Portfolio</div>
        <div className='nav'>
          <ScrollLink to="home" spy={true} smooth={true} offset={0} duration={400} >
            <div>Home</div>
          </ScrollLink>
          {/* <ScrollLink to="skill" spy={true} smooth={true} offset={-71} duration={400} >
            <div>skill</div>
          </ScrollLink> */}
          <ScrollLink to="projects" spy={true} smooth={true} offset={0} duration={400} >
            <div>projects</div>
          </ScrollLink>
          <ScrollLink to="contact" spy={true} smooth={true} offset={0} duration={400} >
            <div>contact</div>
          </ScrollLink>
        </div>
        <div className='nav-2'>
            <summary onClick={menuToggle}>
              <GiHamburgerMenu/>
                {isOpen && ( <nav>
                  <ScrollLink to="home" spy={true} smooth={true} offset={0} duration={400} >
                    <div onClick={menuToggle}>Home</div>
                  </ScrollLink>
                  {/* <ScrollLink to="skill" spy={true} smooth={true} offset={-71} duration={500} >
                    <div onClick={menuToggle}>skill</div>
                  </ScrollLink> */}
                  <ScrollLink to="projects" spy={true} smooth={true} offset={0} duration={400} >
                    <div onClick={menuToggle}>projects</div>
                  </ScrollLink>
                  <ScrollLink to="contact" spy={true} smooth={true} offset={0} duration={400} >
                    <div onClick={menuToggle}>contact</div>
                  </ScrollLink>
              </nav>)}
            </summary>
        </div>
      </div>
    </header>
  )
}

export default Header
