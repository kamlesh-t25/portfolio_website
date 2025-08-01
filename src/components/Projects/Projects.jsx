import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const projects = [
  {
    name: 'Library Management System - User Panel',
    stack: 'React.js, Node.js, Express, MongoDB',
    desc: 'A full-stack system where users can seamlessly browse, borrow, and return books with real-time inventory updates. It ensures deadline tracking and borrowing restrictions using RESTful APIs and session-based logic.',
    links: {
      view: 'https://library-student.onrender.com/',
      github: 'https://github.com/kamlesh-t25/Library',
    }
  },
  {
    name: 'Library Management System - Admin Panel',
    stack: 'React.js, Node.js, Express, MongoDB',
    desc: 'An admin dashboard to manage book inventory, track user activities, and handle overdue returns. It uses secure CRUD operations, server-side filtering, and role-based access control.',
    links: {
      view: 'https://library-admin-panel.onrender.com/',
      github: 'https://github.com/kamlesh-t25/Library',
    }
  },
  {
    name: 'Restaurant Ordering Platform - User Panel',
    stack: 'React.js, Node.js, Express, MongoDB, Stripe API',
    desc: 'An online food ordering system that allows customers to browse dishes, place orders, make payments, and track order status with a dynamic and responsive interface.',
    links: {
      view: 'https://tomato-restaurant.onrender.com/',
      github: 'https://github.com/kamlesh-t25/RestaurantWebApp',
    }
  },
  {
    name: 'Restaurant Ordering Platform - Admin Panel',
    stack: 'React.js, Node.js, Express, MongoDB',
    desc: 'Admin interface for tracking live orders, managing menu items, and updating delivery statuses. Uses protected routes and dashboards for operational efficiency.',
    links: {
      view: 'https://tomato-adminpanel-0u1v.onrender.com/',
      github: 'https://github.com/kamlesh-t25/RestaurantWebApp',
    }
  },
  {
    name: 'Group Chat Application',
    stack: 'React.js, Node.js, Express, Socket.io',
    desc: 'A real-time group chat platform where users can join rooms and exchange live messages via WebSocket. No message persistence; focused on transient communication.',
    links: {
      view: 'https://ichat-room-user.onrender.com/',
      github: 'https://github.com/kamlesh-t25/ichat-room',
    }
  },
  // Add more if needed
];

const Projects = () => {
  return (
    <div className="py-[75px] min-h-screen bg-white font-serif px-6 flex flex-col items-center">
      {/* Header */}
      <div className="w-full mb-6 max-w-4xl flex flex-col items-start">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide mb-2">My Projects</h1>
        <div className="w-60 h-1 bg-[#7843E9] rounded-full"></div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-10 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div key={index} className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-gray-800 mb-1">{project.name}</h2>
            <p className="text-sm font-semibold text-gray-600 mb-4">{project.stack}</p>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-4">{project.desc}</p>
            <div className="flex justify-between gap-4">
              <a
                href={project.links.view}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7843E9] font-bold flex gap-2 items-center "
              >
                View Project
                <FaLink />

              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex gap-2 items-center font-bold text-[#7843E9] "
              >
                GitHub
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
