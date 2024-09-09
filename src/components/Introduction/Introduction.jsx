import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";

const Introduction = () => {
  return (
    <div id='introduction' className='introduction-main w-full  font-sans bg-[#eceff1] flex flex-col justify-center items-center'>
        <div className='h-fit flex justify-center items-center flex-col  m-auto'>
          <p className='text-[#111111] font-bold text-[35px] lg:text-[50px] text-center'>HEY, I'M KAMLESH TAKHAR</p> <br />
          <p className='text-center px-5 text-[#333333] w-[650px] break-words opacity-80 '>A result-oriented <span className='font-bold'>Full Stack Web Developer</span>, building and managing end-to-end websites and web applications that drive the overall success of the product.</p>
          <div className="social-platform-links mt-[25px] w-full flex justify-center p-4 gap-[25px]">
            <a href="https://www.linkedin.com/in/kamlesh-takhar-53921126a/">
                <button title='Linkedin' className='p-2 hover:bg-blue-200 rounded-md cursor-pointer'><FaLinkedin size={30}/></button>
            </a>
            <a href="https://github.com/kamlesh-t25">
                <button title='Github' className='p-2 hover:bg-blue-200 rounded-md cursor-pointer'><FaSquareGithub size={30} /></button>
            </a>
            <a href="https://leetcode.com/u/kamlesh_takhar/">
                  <button title='Leetcode' className='p-2 hover:bg-blue-200 rounded-md cursor-pointer'><SiLeetcode size={30}/></button>
            </a>
            <a href="https://www.instagram.com/kamlesh_takhar01/">
                  <button title='Instagram' className='p-2 hover:bg-blue-200 rounded-md cursor-pointer'><FaInstagramSquare size={30} /></button>
            </a>
          </div>

          <a href="#projects-container">
            <button className='py-3 mt-[25px] bg-blue-800 px-14 rounded-[10px] text-white font-bold'>PROJECTS</button>
          </a>
        </div>
    </div>
  )
}

export default Introduction
