import React from 'react'

const Header = () => {
  return (
    <div id='header' className='header bg-[#7843E9] text-white z-50'>
      <div className="left-header">
        <h4 className='tracking-wide'>KAMLESH TAKHAR</h4>
      </div>
      <div className="right-header">
        <a href="#introduction">HOME</a>
        <a href="#about-container">ABOUT</a>
        <a href="#projects-container">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </div>
    </div>
  )
}

export default Header
