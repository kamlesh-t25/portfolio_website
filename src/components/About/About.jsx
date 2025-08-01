import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='min-h-screen bg-white w-full px-6 py-16  flex flex-col items-center'>
      {/* Section Header */}
      <div className="w-full max-w-4xl flex flex-col items-start">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide mb-2">About Me</h1>
        <div className="w-48 h-1 bg-[#7843E9] rounded-full"></div>
      </div>

      {/* About Content */}
      <div className="mt-10 w-full max-w-4xl flex flex-col gap-6 text-gray-800">
        <p className='text-xl font-semibold tracking-wide text-[#7843E9]'>Get to know me!</p>
        <p className='text-base leading-7 opacity-80'>
          I'm a <span className="font-medium text-black">Full Stack Web Developer</span> currently in my final year of studies,
          focused on building and managing the frontend and backend of websites and web applications that contribute to
          successful product outcomes.
          <br /><br />
          I enjoy solving complex problems and creating efficient, user-friendly solutions through clean code.
          Check out some of my work in the <span className="font-semibold text-[#7843E9]">Projects</span> section.
          <br /><br />
          I'm eager to continue learning and growing, and I'm currently open to internships and job opportunities
          where I can contribute, develop my skills, and make a real impact.
          <br />
          If you have an opportunity that matches my skills and experience, feel free to reach out!
        </p>

        {/* Contact Button */}
        <a href="#contact" className='self-start mt-4'>
          <button className='px-6 py-3 bg-[#7843E9] hover:bg-[#5c31b7] text-white font-bold rounded-lg transition-all duration-300'>
            Contact
          </button>
        </a>
      </div>
    </section>
  )
}

export default About
