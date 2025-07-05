import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Branding & Copyright */}
        <p className="text-sm text-gray-400 text-center lg:text-left">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Kamlesh Takhar</span>. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/kamlesh-takhar-53921126a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300 flex items-center gap-2"
          >
            <FaLinkedin className="text-xl" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/kamlesh-t25"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300 flex items-center gap-2"
          >
            <FaGithub className="text-xl" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>

        {/* Optional Footer Links */}
        <div className="text-sm text-gray-400 flex flex-wrap gap-4 justify-center lg:justify-end">
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#projects-container" className="hover:text-white transition">Projects</a>
          <a href="#about-container" className="hover:text-white transition">About</a>
          {/* Add actual links or IDs as per your layout */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
