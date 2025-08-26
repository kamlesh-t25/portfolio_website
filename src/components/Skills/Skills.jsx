import React from 'react'
import { Link } from 'react-router-dom'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, FaAws, FaGithub, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiSocketdotio, SiApollographql, SiMongodb, SiMysql,SiGo, SiDocker } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';

const skillData = [
  { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-600" /> },
  { name: "TAILWIND CSS", icon: <SiTailwindcss className="text-4xl text-cyan-500" /> },
  { name: "BOOTSTRAP", icon: <FaBootstrap className="text-4xl text-purple-600" /> },
  { name: "JAVASCRIPT", icon: <FaJs className="text-4xl text-yellow-500" /> },
  { name: "JAVA", icon: <FaJava className="text-4xl text-red-600" /> },
  { name: "GO", icon: <SiGo className="text-4xl text-cyan-600" /> }, 
  { name: "REACT.JS", icon: <FaReact className="text-4xl text-blue-400 animate-spin-slow" /> },
  { name: "NEXT.JS", icon: <SiNextdotjs className="text-4xl text-black" /> },
  { name: "NODE.JS", icon: <FaNodeJs className="text-4xl text-green-600" /> },
  { name: "EXPRESS.JS", icon: <SiExpress className="text-4xl text-gray-700" /> },
  { name: "WEBSOCKET", icon: <SiSocketdotio className="text-4xl text-purple-500" /> },
  { name: "RESTFUL API", icon: <SiApollographql className="text-4xl text-indigo-500" /> },
  { name: "MONGODB", icon: <SiMongodb className="text-4xl text-green-700" /> },
  { name: "MYSQL", icon: <SiMysql className="text-4xl text-blue-700" /> },
    { name: "POSTGRESQL", icon: <SiPostgresql className="text-4xl text-blue-800" /> },
  { name: "AWS", icon: <FaAws className="text-4xl text-orange-500" /> },
  { name: "DOCKER", icon: <SiDocker className="text-4xl text-blue-500" /> },
  { name: "GITHUB", icon: <FaGithub className="text-4xl text-gray-900" /> },
];


const Skills = () => {
  return (
    <section className='min-h-screen bg-white w-full px-6 py-16 flex flex-col items-center'>
      {/* Header */}
      <div className="w-full max-w-4xl flex flex-col items-start">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide mb-2">My Skills</h1>
        <div className="w-44 h-1 bg-[#7843E9] rounded-full"></div>
      </div>

      {/* Skills Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl">
        {skillData.map((item, index) => (
          <div key={index} className='flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-5
            transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
            <div>{item.icon}</div>
            <p className='mt-3 font-semibold text-center text-sm tracking-wide'>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
