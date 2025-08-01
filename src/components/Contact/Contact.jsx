import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success('Email sent successfully');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div
      className="contact-container bg-gradient-to-b from-white to-gray-100 py-20 flex flex-col items-center justify-center"
      id="contact"
    >
      {/* Heading */}
      <div className="w-full px-4 max-w-3xl  mb-12">
        <div className="w-full mb-6 max-w-4xl flex flex-col items-start">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide mb-2">My Projects</h1>
          <div className="w-60 h-1 bg-[#7843E9] rounded-full"></div>
        </div>
        <p className="mt-4 text-gray-600 text-lg">
          I'd love to hear from you! Fill out the form and I'll get back to you as soon as possible.
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl px-10 py-12">
        <form ref={form} onSubmit={submitHandler} className="flex flex-col gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              id="name"
              placeholder="Enter your name"
              className="p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7843E9]"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              id="email"
              placeholder="Enter your email"
              className="p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7843E9]"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Enter your message"
              className="p-4 bg-gray-100 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#7843E9]"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#7843E9] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#6930d4] transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
