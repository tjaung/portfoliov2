import React from 'react'
import SkillCard from './SkillCard'
import { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaReact, FaNode, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaChartLine } from 'react-icons/fa';
import { NextJsIcon } from './Icons/NextjsIcon';
import ExpressjsIcon from './Icons/ExpressjsIcon';
import TailwindIcon from './Icons/TailwindIcon';
import TypescriptIcon from './Icons/TypescriptIcon';
import MongoIcon from './Icons/MongoIcon';
import PostgreSQL from './Icons/PostgreSQLIcon';
import MLIcon from './Icons/MLIcon';
import SparkIcon from './Icons/SparkIcon';
import AirflowIcon from './Icons/AirflowIcon';
import ThreeJsIcon from './Icons/ThreeJsIcon';
import './css/About.css'


const frontEnd = [
    { icon: <FaReact />, label: 'React', color: '#61DAFB' },
    { icon: <NextJsIcon />, label: 'Next.js', color: '#61DAFB' },
    { icon: <TailwindIcon />, label: 'Tailwind', color: '#61DAFB' },
    { icon: <ThreeJsIcon />, label: 'Three JS', color: '#61DAFB'},
    { icon: <FaHtml5 />, label: 'Tailwind', color: '#61DAFB' },
    { icon: <FaCss3Alt />, label: 'css', color: '#61DAFB' },
    { icon: <TypescriptIcon />, label: 'TypeScript', color: '#61DAFB' },
    { icon: <FaJs />, label: 'JavaScript', color: '#61DAFB' },
  ];
const backEnd = [
    { icon: <FaNode />, label: 'Node.js', color: '#68A063' },
    { icon: <ExpressjsIcon />, label: 'Express.js', color: '#68A063' },
    { icon: <MongoIcon />, label: 'MongoDB', color: '#68A063' },
    { icon: <PostgreSQL />, label: 'PostgreSQL', color: '#68A063' },
    { icon: <FaPython />, label: 'Python', color: '#68A063' },
]
const data = [
    { icon: <MLIcon />, label: 'Machine Learning', color: '#b5b269' },
    { icon: <FaDatabase />, label: 'ETL', color: '#b5b269' },
    { icon: <FaChartLine />, label: 'Data Analytics', color: '#b5b269' },
    { icon: <SparkIcon />, label: 'Apache Spark', color: '#b5b269' },
    { icon: <AirflowIcon />, label: 'Apache Airflow', color: '#b5b269' },
]
const timelineItems = [
  { year: "2019", text: "Began my Statistics program at the University of Pennsylvania." },
  { year: "", text: "Learned my first programming language, R." },
  { year: "2020", text: "Began my job as a Statistician, learning Python and big data tools." },
  { year: "2021", text: "Discovered and began the Odin Project, a free open source web development curriculum." },
  { year: "", text: "Completed the foundations course of the Odin Project." },
  { year: "2022", text: "Began my position as a Data Scientist, where I built machine learning models, data pipelines, and visualizations." },
  { year: "", text: "Learned about AWS tools and other dev tools like Docker and Airflow on the job." },
  { year: "", text: "Began the Odin Project JavaScript path." },
  { year: "", text: "Completed chapters of the JS path, creating lots of projects and learning many web development tools like React, Node.js, Express.js." },
  { year: "2023", text: "Began working on projects independently outside of any curriculums, including my portfolio page v.1." },
  { year: "2024", text: "Built my first independent fullstack project, a one year anniversary gift for my girlfriend." },
  { year: "", text: "Began my Computer Science program at Northeastern University." },
  { year: "", text: "Built my next large project, MoneySyncr.io." },
  { year: "", text: "Built my next project, DJ Condescension." },
  { year: "", text: "Built this portfolio page v.2." },
];


const About = ({navigate}) => {

  const journeyRef = useRef([]);

  // Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    journeyRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (journeyRef.current) {
        journeyRef.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-0 md:p-8 ">
      <h1 className="text-4xl sm:text-5xl font-bold text-indigo-500 mb-8 md:mb-32">About Me</h1>
      
      <div className="max-w-4xl w-full rounded-lg shadow-lg p-8">
        <section className="w-full mb-32">
          <h2 className="text-2xl font-semibold mb-2">Who I Am</h2>
          <div className='flex flex-col md:flex-row items-center justify-center md:p-5 gap-20'>
            <p className="text-lg leading-relaxed">
                Hi, I’m Tim, a full-stack developer based in Boston with a background in Data Science and a deep passion for creating impactful web applications. Currently, I'm pursuing a master’s in Computer Science at Northeastern University, where I’m further honing my skills and expanding my expertise in technology.
            </p>
            <img 
                className="profile-image h-[200px] rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-1"
                src={'/images/about/me.jpg'} 
                alt="Profile image of Tim"
            />
          </div>

        </section>

        <section className="mb-32">
          <h2 className="text-2xl font-semibold mb-2">What I Do</h2>
          <p className="text-lg leading-relaxed md:p-5">
            I specialize in developing seamless and dynamic user experiences, with a focus on full-stack applications. My experience spans working with a wide range of technologies such as React, Node.js, Django, and TypeScript. I love tackling complex problems and turning ideas into functional, polished applications.
          </p>
        </section>

        <section className="mb-32">
            <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
            <div className="fading-line"></div>
            <SkillCard title={'Frontend'} skills={frontEnd} />
            <div className="fading-line"></div>
            <SkillCard title={'Backend'} skills={backEnd} />
            <div className="fading-line"></div>
            <SkillCard title={'Data'} skills={data} />
            
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
          <p className="text-lg leading-relaxed md:p-5 mb-32">
            I've loved programming ever since I was little, however, somewhere along the way I became passionate about becoming and educator. I put my coding enjoyment to the side and worked towards
            education. Eventually, I realized that it was not the career I wanted to do for the rest of my life, so I picked my love of programmin back up and have continued on this path.
          </p>
          <div className="timeline">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
                whileInView={{ opacity: 1, y: 0 }} // Animate to visible when in view
                transition={{ duration: 0.5, delay: index * 0.2 }} // Add staggered animation
                viewport={{ once: true, amount: 0.3 }} // Trigger animation once, when 30% is visible
              >
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
    
      </div>
    </div>
  )
}

export default About