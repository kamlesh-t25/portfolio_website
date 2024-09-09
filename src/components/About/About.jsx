import React from 'react'

const About = () => {
  return (
    <div id='about-container' className='flex flex-col justify-start items-center gap-[20px] p-[10px] w-screen bg-[#FAFAFA] h-fit py-[65px]'>
      {/* <> */}
      <div className="flex flex-col justify-center items-center ">
          <h1 className='tracking-wide text-[30px] font-bold '>ABOUT ME</h1>
          <div className="w-3/4 m-auto text-center">        
            <p className='opacity-80'>I'm a Full Stack Web Developer managing both Front-end and Back-end to build successful Websites
                and Web Applications. I'm open to opportunities where I can contribute, learn, and grow—feel
                  free to reach out if you have a role that fits my skills.</p>
                  
          </div>
      </div>
      <div className="about-skill-section flex justify-around gap-[50px] p-7 mt-6  w-4/5 flex-900 ">
        <div className="h-max w-fit float-left max-w-[500px] ">
          <p className='text-[20px] mb-3 font-bold tracking-wide'>Get to know me !</p>
          <p className='leading-relaxed opacity-65 ' >I'm a Full Stack Web Developer currently in my 3rd year of studies, focused on building
             and managing the Frontend and Backend of Websites and Web Applications that contribute to 
             successful product outcomes. I enjoy solving complex problems and creating efficient, user-friendly 
             solutions through clean code. Check out some of my work in the 
             <span>Projects</span> section.
            <br /><br />
            I'm eager to continue learning and growing, and I'm currently open to internships and job opportunities where
            I can contribute, develop my skills, and make a real impact. If you have an opportunity that matches my skills
              and experience, feel free to reach out!
        </p>
        <a href="#contact">
          <p className='px-[30px] py-[10px] bg-[#7843E9] rounded-[10px] w-fit mt-5 text-white font-bold '>Contact</p>
        </a>
        </div>

        <div className="flex flex-col w-fit float-right min-w-[300px]">
                <h1 className='text-[20px] font-bold tracking-wide'>MY SKILLS</h1>
            <div className="skill-icons  mt-3">
                {["HTML","CSS","TAILWIND CSS","BOOTSTRAP","JAVASCRIPT","REACT.JS","NODE.JS","EXPRESS.JS","WEBSOCKET","RESTFUL API","MONGODB","MYSQL","GITHUB"].map((item,index)=>{
                  return (
                    <button className='px-6 py-3 bg-[#E7E7E7] font-semibold mr-3 my-2 opacity-70 rounded-[10px] ' key={index}>{item}</button>
                  )
                })}
            </div>
        </div>
      </div>

    </div>
  )
}

export default About
