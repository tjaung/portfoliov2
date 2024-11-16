import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import emailjs from "emailjs-com";

import './css/Contact.css'

const Contact = ({classname, navigate}) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio_form",
        "template_whbvcqh",
        e.currentTarget,
        "Ze1HbGztKK8wJQHxc"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.currentTarget.reset();
    setSubmitted(true)
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail()
    // Mock submit action
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 sm:p-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-indigo-500 mb-8">Contact Me</h1>
      
      <p className="text-lg max-w-lg text-center mb-12">
        I'd love to hear from you! Whether you have a question, proposal, or just want to say hi, feel free to get in touch using the form below or through my social media.
      </p>
      
      {/* Contact Form */}
      <div className="w-full max-w-lg shadow-md rounded-lg p-8">
        {submitted ? (
          <div className="text-center text-green-500 text-lg">
            Thank you for your message! I’ll get back to you soon.
          </div>
        ) : (
          <form onSubmit={sendEmail}
            className={`${classname}`}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className={`${classname} w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-500`}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className={`${classname} w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-500`}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium  mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className={`${classname} w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-500`}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white font-semibold rounded-lg p-2 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-10 ">
        <a href="https://github.com/tjaung" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/tim-jaung" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:jaungt@gmail.com" className="hover:text-indigo-500">
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
};

export default Contact;