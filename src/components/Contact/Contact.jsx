import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const submitHandler=(e)=>{
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey:import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success("Email sent successfully ");
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
  return (
    <div className='contact-container flex flex-col justify-center items-center py-10' id='contact'>
      <div className="">
        <p className='text-[30px] tracking-wide font-[800] mb-2 text-center '>CONTACT</p>
        <p className='opacity-70 ' >Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      </div>
      <div className="w-3/6 my-10 mb-16 rounded-lg bg-white h-fit font-serif ">
        <form action="" ref={form} onSubmit={submitHandler} className='flex flex-col p-10'>
          <label htmlFor="name" className='font-[8px]'><span className='text-[14px]'>Name</span></label>
          <input type="text"   placeholder='Enter your name' name="from_name" id="name" className='bg-[#F0F0F0] p-3 h-[55px] rounded-[10px] mb-8 mt-1 ' />
          <label htmlFor="email" className='font-[8px]'><span className='text-[14px]'>Email</span></label>
          <input type="email"  placeholder='Enter your email' name="from_email" id="email" className='bg-[#F0F0F0] p-3 h-[55px] rounded-[10px] mb-8 mt-1 ' />
          <label htmlFor="message" className='font-[8px]'><span className='text-[14px]'>Message</span></label>
          <textarea  name="message"   placeholder='Enter your message' id="message"  className='bg-[#F0F0F0] p-3 h-[150px] rounded-[10px] mb-8 mt-1 resize-none '></textarea>
          <button className='py-[15px] px-[50px] text-white font-bold text-[16px] w-max bg-[#7843E9] rounded-lg ' type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
