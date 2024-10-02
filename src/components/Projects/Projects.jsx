import React from 'react'
import libraryImg from '../../assets/library_login.png'
import restaurantImg from '../../assets/tomato-restaurant.png'
import whatshappClone from '../../assets/whatshapp_clone.png'
import groupChatImg from '../../assets/chat_group.png'

const Projects = () => {
  return (
    <div id='projects-container' className="py-[75px] min-h-screen font-serif bg-[#FFFFFF] projects-main">
      <p className='text-[35px] pb-9 tracking-wide font-[800] mb-2 text-center '>PROJECTS</p>
      <div id='projects-container' className='project-main w-full flex flex-col justify-center items-center gap-[30px]'>
        <div className="project flex gap-[50px] flex-row flex-wrap py-6  justify-center w-4/5 items-center">
          <div className="left-project flex justify-center items-center w-fit lg:w-fit bg-[#ECECEC]  p-4 ">
            <img width={370} height={450} className='  '
            src={libraryImg} alt="" />
          </div>
          <div className="right-project flex flex-col items-center w-[500px] lg:items-start lg:w-[500px]  p-4 ">
            <p className='mb-4 cursor-pointer hover:text-[#e94343] tracking-wide font-bold text-[25px] lg:text-center '> Online Library Management Website </p>
            <p className='text-[17px] opacity-85 leading-relaxed '>Built a library management system with admin and user panels.
               The admin panel handles inventory and user records, while the user panel allows seamless book borrowing and
                returning, ensuring efficient management of book availability and deadlines.</p>
              <p className='flex gap-5'>
                <button className='px-[30px] py-[10px] bg-[#7843E9] rounded-[10px] w-fit mt-5 text-white font-bold hover:bg-slate-400 hover:text-black'><a href="https://library-student.onrender.com/">User Panel</a></button>
                <button className='px-[30px] py-[10px] bg-[#7843E9] rounded-[10px] w-fit mt-5 text-white font-bold hover:bg-slate-400 hover:text-black'><a href="https://library-student.onrender.com/">Admin Panel</a></button>
              </p>
          </div>
        </div>

        <div className="project flex gap-[50px] flex-row flex-wrap py-6  justify-center w-4/5 items-center">
          <div className="left-project flex justify-center items-center w-fit lg:w-fit bg-[#ECECEC]  p-4 ">
            <img width={350} height={350} src={restaurantImg} alt="" />
          </div>
          <div className="right-project flex flex-col items-center w-[500px] lg:items-start lg:w-[500px]  p-4 ">
            <p className='mb-4 cursor-pointer hover:text-[#e94343] tracking-wide font-bold text-[25px] lg:text-center '> Online Restaurant Order Platform </p>
            <p className='text-[17px] opacity-85 leading-relaxed '>Created a platform for users to browse food categories, 
              place orders, pay online, and track their order status. Developed an admin panel to track and manage orders and oversee delivery operations.</p>
              <p className='flex gap-5'>
                <button className='px-[30px] py-[10px] bg-[#7843E9] rounded-[10px] w-fit mt-5 text-white font-bold hover:bg-slate-400 hover:text-black'><a href="https://tomato-restaurant.onrender.com/">User Panel</a></button>
                <button className='px-[30px] py-[10px] bg-[#7843E9] rounded-[10px] w-fit mt-5 text-white font-bold hover:bg-slate-400 hover:text-black'><a href="https://tomato-adminpanel-0u1v.onrender.com/">Admin Panel</a></button>
              </p>
          </div>
        </div>

        <div className="project flex gap-[50px] flex-row flex-wrap py-6  justify-center w-4/5 items-center">
          <div className="left-project flex justify-center items-center w-fit lg:w-fit bg-[#ECECEC]  p-4 ">
            <img width={350} height={350} src={groupChatImg} alt="" />
          </div>
          <div className="right-project flex flex-col items-center w-[500px] lg:items-start lg:w-[500px]   p-4 ">
            <p className='mb-4 cursor-pointer hover:text-[#e94343] tracking-wide font-bold text-[25px] lg:text-center '>Group Chat Website </p>
            <p className='text-[17px] opacity-85 leading-relaxed '>Developed a real-time group chat application where users can join chat rooms and exchange messages. Messages are available only during the session and are not stored.</p>
            <p className='flex gap-5'>
                <button className='px-[30px] py-[10px] bg-[#7843E9] rounded-[10px] w-fit mt-5 text-white font-bold hover:bg-slate-400 hover:text-black'><a href="https://ichat-room-user.onrender.com/">Visit Website</a></button>
            </p>
          </div>
        </div>

        <div className="project flex gap-[50px] flex-row flex-wrap py-6  justify-center w-4/5 items-center">
          <div className="left-project flex justify-center items-center w-fit lg:w-fit bg-[#ECECEC]  p-4 ">
            <img width={350} height={350} src={whatshappClone} alt="" />
          </div>
          <div className="right-project flex flex-col items-center w-[500px] lg:items-start lg:w-[500px]  p-4 ">
            <p className='mb-4 cursor-pointer hover:text-[#e94343] tracking-wide font-bold text-[25px] lg:text-center '>WhatsApp Clone </p>
            <p className='text-[17px] opacity-85 leading-relaxed '>Developed a real-time chat application using WebSocket, emulating WhatsApp's functionality. Users can send instant messages and share files such as images and documents. The app focuses on real-time communication with seamless user interactions.</p>
            <p className='flex gap-5'>
                <button className='px-[30px] py-[10px] bg-[#7843E9] rounded-[10px] w-fit mt-5 text-white font-bold hover:bg-slate-400 hover:text-black'><a href="https://chat-app-1-56g5.onrender.com/....chat">Visit Website</a></button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
