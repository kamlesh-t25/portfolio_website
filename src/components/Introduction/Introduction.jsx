import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Introduction = () => {
  return (
    <div
      id='introduction'
      className='min-h-screen w-full bg-white font-sans flex justify-center items-center px-4'
    >
      <div className='flex flex-col gap-6 max-w-3xl w-full text-left'>
        <p className='text-blue-900 mb-[-25px] font-semibold tracking-widest text-md sm:text-lg md:text-xl uppercase'>
          Full Stack Developer
        </p>
        <h1 className='text-[#111] font-bold text-[30px] sm:text-[40px] md:text-[60px] leading-tight'>
          Kamlesh Takhar
        </h1>

        {/* <p className='max-w-[700px] text-[#444] text-sm sm:text-base md:text-lg opacity-90'>
          A result-oriented <span className='font-semibold text-[#333]'>Full Stack Web Developer</span>,
          building and managing end-to-end websites and web applications that drive the overall success of the product.
        </p> */}

        <div className="flex flex-wrap gap-3 mt-2 text-sm sm:text-base">
          <a href="mailto:kamleshtakhar2783@gmail.com" className="flex items-center gap-2 hover:text-blue-600">
            <MdEmail className='text-[#7843E9]' size={22} />
            <span className='font-[300]'>kamleshtakhar2783@gmail.com</span>
          </a>

          <a href="https://www.linkedin.com/in/kamlesh-takhar-53921126a/" target="_blank" className="flex items-center gap-2 hover:text-blue-600">
            <FaLinkedinIn className='text-[#7843E9]' size={22} />
            <span className='font-[300]'>linkedin.com/in/kamlesh-takhar</span>
          </a>

          <a href="https://github.com/kamlesh-t25" target="_blank" className="flex items-center gap-2 hover:text-blue-600">
            <FaGithub className='text-[#7843E9]' size={22} />
            <span className='font-[300]'>github.com/kamlesh-t25</span>
          </a>

          <a href="https://leetcode.com/u/kamlesh_takhar/" target="_blank" className="flex items-center gap-2 hover:text-blue-600">
            <SiLeetcode className='text-[#7843E9]' size={22} />
            <span className='font-[300]'>leetcode.com/u/kamlesh_takhar</span>
          </a>
        </div>

        <a href="#projects-container">
          <button className='mt-6 bg-blue-800 hover:bg-blue-700 transition px-8 py-3 rounded-lg text-white font-semibold tracking-wide'>
            View Projects
          </button>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
