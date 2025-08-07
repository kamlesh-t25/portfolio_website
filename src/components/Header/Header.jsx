import { button } from 'framer-motion/client';
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Header = ({ active }) => {

  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <div id='header' className='header bg-[#7843E9] text-white z-50'>
        <div className="left-header">
          <a href='/' className='tracking-wide' >KAMLESH TAKHAR</a>
        </div>
        <div className="right-header hidden md:flex ">
          <a href="#about-container">ABOUT</a>
          <a href="#experience-container">EXPERIENCE</a>
          <a href="#skills-container">SKILLS</a>
          <a href="#projects-container">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>
        <div onClick={() => setVisible((prev) => !prev)}  className="righ-header md:hidden ">
          {
            !isVisible ?
            <button ><FaBars size={25} /></button>:
            <button><IoMdClose size={25} /></button>
          }
        </div>
      </div>
      {
        isVisible &&
        <div className="flex visible-navigation-bar fixed top-[7vh] md:hidden flex-col bg-black ">
          <div onClick={() => setVisible((prev) => !prev)} className="h-1/3  flex flex-col justify-between items-center font-bold tracking-wide overflow-hidden ">
            <a href="#about-container">ABOUT</a>
            <a href="#experience-container">EXPERIENCE</a>
            <a href="#skills-container">SKILLS</a>
            <a href="#projects-container">PROJECTS</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      }
    </>
  )
}

export default Header
