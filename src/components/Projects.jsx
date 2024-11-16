import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaReact, FaNode, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaPhp } from 'react-icons/fa';
import { NextJsIcon } from './Icons/NextjsIcon';
import ExpressjsIcon from './Icons/ExpressjsIcon';
import TailwindIcon from './Icons/TailwindIcon';
import TypescriptIcon from './Icons/TypescriptIcon';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ImageCarousel from './ImageCarousel';
import CodeTyping from './CodeTyping';

const projects = [
  {
    title: 'DJ Condescension',
    description: 
      `DJ Condescension is a music recommendation player to give you some new songs you'll love! 
      Just beware, he will be roasting you and your music taste.`,
    tech: `Mostly client side application using
      REST API calls to Spotify, Eleven Labs, and OpenAI.`,
    stack: ['React', 'Express.js', 'TypeScript'],
    link: 'https://djcondescension.com/',
    images: ['/images/projects/djcondescension/playing.png', '/images/projects/djcondescension/dj.png', '/images/projects/djcondescension/intro.png'],
  },
  {
    title: 'MoneySyncr',
    description: 
      `More than just a budgeting app, Moneysyncr automatically gets your transactions across multiple
      accounts to consolidate all of your spending in one place, pay your credit card bills from any of your 
      own linked accounts, and investigate your spending habits.`,
    tech: `Django for secure backend authenticationm Appwrite for banking data storage.
      REST API calls to Plaid and Dwolla.`,
    stack: ['React', 'Next.js', 'Django', 'Appwrite', 'PostgreSQL', 'TypeScript', 'Python'],
    link: 'https://www.moneysyncr.io/',
    images: ['/images/projects/moneysyncr/Screenshot 2024-10-29 at 2.50.37 AM.png', 
      '/images/projects/moneysyncr/budget.png', 
      '/images/projects/moneysyncr/Screenshot 2024-11-14 at 6.36.21 PM.png'],
  },
  {
    title: 'Anniversary Page',
    description: 
      `A gift for my girlfriend for our one year anniversary. She likes to look through our messages often to reminisce. 
      Scrolling through our DM's is a pain with the loading times, so loads thousands of messages and media in seconds. 
      You only get to see a preview site.`,
    tech: `React and MongoDB for authentication and storage.`,
    stack: ['React', 'MongoDB', 'JavaScript'],
    link: 'https://messagememories.netlify.app',
    images: ['/images/projects/anniversary/intropreview.png', 
      '/images/projects/anniversary/sectionpreview.png', 
      '/images/projects/anniversary/mediapreview.png'],
  },
];

const skills = [
  { icon: <FaReact />, label: 'React', color: '#61DAFB' },
  { icon: <NextJsIcon />, label: 'Next.js', color: '#4d4d4d' },
  { icon: <TailwindIcon />, label: 'Tailwind', color: '#54d3e5' },
  { icon: <FaNode />, label: 'Node.js', color: '#68A063' },
  { icon: <ExpressjsIcon />, label: 'Express.js', color: '#b5b269' },
  { icon: <TypescriptIcon />, label: 'TypeScript', color: '#3490e9' },
  { icon: <FaJs />, label: 'JavaScript', color: '#d9d932' },
  { icon: <FaPython />, label: 'Python', color: '#007396' },
];

const projectVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.85, y: -50, transition: { duration: 0.5, ease: 'easeIn' } }
};

const Projects = ({ className, navigate }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-0 md:p-8 ">
      <h1 className="text-4xl sm:text-5xl font-bold text-indigo-500 mb-8">My Projects</h1>
        <div className="text-center w-full mt-0  md:mt-12 mb-52 px-0 md:px-4 flex flex-col items-center justify-center relative">
            <div className='flex flex-col md:flex-row'>
              <div className='md:w-7/12 py-5 px-12 mt-8 md:text-left'>
                <p className="text-lg mb-4 md:px-24">
                  I&apos;ve been building fullstack applications for a wide user audience. My inspiration for each one has either been a necessity in my own life, driven by a passion, or spawned from a fleeting idea.
                </p>
                <p className="text-lg md:px-24">
                  I hope that you can get to use my applications as well to get some purposeful use, or just to have some fun with it.
                </p>
              </div>
              <div className='text-left flex items-center justify-center'>
                <CodeTyping classname={className}/>
              </div>
            </div>
          <motion.div className="text-indigo-500 align-center my-8" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}>
            <FaArrowDown size={30} />
          </motion.div>
        </div>

      <div className="w-full max-w-4xl">
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-h-screen p-3 rounded-lg shadow-xl my-4 flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              exit="exit"
              variants={projectVariants}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                <a href={project.link} target="_blank" className="text-indigo-500">
                  {project.title} <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: '16px' }}/>
                </a>
              </h2>
              
              {/* Image Carousel */}
              <ImageCarousel images={project.images} />

              {/* Project description and tech stack */}
              <div className="mt-4 text-md px-0 md:px-52 text-center">
                <p className='mb-3'>{project.description}</p>
                <p>{project.tech}</p>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
