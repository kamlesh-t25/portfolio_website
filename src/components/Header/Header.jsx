import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isVisible,setVisible]=useState(false);
  return (
  <>
    <div id='header' className='header bg-[#7843E9] text-white z-50'>
      <div className="left-header">
        <h4 className='tracking-wide'>KAMLESH TAKHAR</h4>
      </div>
      <div className="right-header hidden md:flex ">
        <a href="#introduction">HOME</a>
        <a href="#about-container">ABOUT</a>
        <a href="#projects-container">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </div>
      <div className="righ-header md:hidden ">
        <button onClick={()=>setVisible((prev)=>!prev)} ><FaBars size={25} /></button>
        
      </div>
    </div>
      {
          isVisible && 
          <div className="flex visible-navigation-bar fixed top-[10vh] md:hidden flex-col bg-black ">
            <div onClick={()=>setVisible((prev)=>!prev)} className="h-1/3  flex flex-col justify-between items-center font-bold tracking-wide overflow-hidden ">
            <a href="#">HOME</a>
            <a href="#about-container">ABOUT</a>
            <a href="#projects-container">PROJECTS</a>
            <a href="#contact">CONTACT</a>
            </div>
          </div>
        }
  </>
  )
}

export default Header
