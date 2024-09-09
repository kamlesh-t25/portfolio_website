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
  return (
    <>
    <ToastContainer />
      <div className="w-full overflow-x-hidden font-sans app">
        <Header />
        <Introduction />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
