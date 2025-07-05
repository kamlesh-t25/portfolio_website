import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // useEffect(()=>{
  //   toast.success("Working");
  // },[])

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section'); // Use <section> tags
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  useEffect(() => {
    console.log("AA2 :", activeSection);

  }, [activeSection])

  return (
    <>
      <ToastContainer />
      <div className="w-full overflow-x-hidden font-sans app">
        <Header active={activeSection} />
        <div className='bg-[#eceff1] '>
          <section id="introduction"><Introduction /></section>
          <section id="about-container"><About /></section>
          <section id="projects-container"><Projects /></section>
          <section id="contact"><Contact /></section>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
