import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import CodeTyping from './CodeTyping';

const Home = ({ className, navigate }) => {
  return (
    <div className={`${className} h-full w-full flex flex-col md:flex-row items-center md:items-start justify-center sm:justify-start px-4`}>
      {/* Centered on mobile, Left-aligned on larger screens */}
      <div className="z-10 flex flex-col items-center sm:items-start text-center sm:text-left p-6 sm:p-8 max-w-[90%]  mx-auto sm:ml-8">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Hello, my name is <span className="text-indigo-500">Tim.</span>
        </h1>
        <p className="text-lg sm:text-2xl max-w-md sm:max-w-lg mb-8">
          {`I'm a fullstack developer in Boston.`}
        </p>
        {/* Social Links */}
        <div className="flex gap-6 mb-8">
          <a
            href="https://github.com/tjaung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-500 transition-colors"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/tim-jaung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-500 transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        {/* nav buttons */}
        <section className='flex flex-col md:flex-row md:gap-24 my-8'>
          <div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto md:min-w-52">
              {/* <p className="text-lg">See what I've been making:</p> */}
              <button
                className="px-6 py-3 rounded-full text-indigo-500 font-semibold text-md transition-transform transform hover:scale-110"
                onClick={() => navigate("projects")}
              >
                Projects
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
              {/* <p className="text-lg">Get to know me better:</p> */}
              <button
                className="px-6 py-3 rounded-full text-indigo-500 font-semibold text-md transition-transform transform hover:scale-110"
                onClick={() => navigate("about")}
              >
                About
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
              {/* <p className="text-lg">Get in contact with me:</p> */}
              <button
                className="px-6 py-3 rounded-full text-indigo-500 font-semibold text-md transition-transform transform hover:scale-110"
                onClick={() => navigate("contact")}
              >
                Contact
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* <div className='self-center w-full'>
        <CodeTyping classname={className}/>
      </div> */}
      
    </div>
  );
};

export default Home;
