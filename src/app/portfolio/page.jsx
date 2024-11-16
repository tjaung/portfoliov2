"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Transition.module.css";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Home from "@/components/Home";
import About from "@/components/About";
import GooeyMenu from "@/components/GooeyMenu";

export default function PortfolioHome() {
  const [section, setSection] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isBlack, setBlack] = useState(true);
  const [isWhite, setWhite] = useState(false);

  const topRef = useRef(null);

  // Update body and html background colors when isBlack changes
  useEffect(() => {
    document.body.style.backgroundColor = isBlack ? "#FFFFFF" : "#000000"; // Black or white
    document.documentElement.style.backgroundColor = isBlack ? "#FFFFFF" : "#000000";

    // Clean up effect on component unmount
    return () => {
      document.body.style.backgroundColor = "";
      document.documentElement.style.backgroundColor = "";
    };
  }, [isBlack]);

  const goToTop=()=>{
    document.querySelector("#top").scrollTo(0,0)
  };

  const handleNavigation = (newSection) => {
    if (newSection !== section) {
      setHidden(false); // Reset hidden state
      setIsTransitioning(true);
  
      setTimeout(() => {
        setSection(newSection); // Update the section state to render new content
        
        // Scroll to the top after the section update
        goToTop()
  
        setTimeout(() => {
          setBlack(!isBlack); // Toggle the background color and text color
          setIsTransitioning(false);
          
          setTimeout(() => {
            setHidden(true);
            setWhite(!isWhite);
          }, 300); // Match slide-out duration
        }, 300); // Match slide-in duration
      }, 300); // Match slide-in duration
    }
  };
  

  // Define the content to display based on the `section` state
  const renderContent = () => {
    switch (section) {
      case "home":
        return (
          <Home 
            className={`${isBlack ? styles.whiteBackground : styles.blackBackground}`}
            navigate={handleNavigation} // Pass handleNavigation function to Home
          />
        );
      case "projects":
        return (
            <Projects 
                className={`${isBlack ? styles.whiteBackground : styles.blackBackground}`}
                navigate={handleNavigation}
            />
        )
      case "about":
        return (
            <About 
            navigate={handleNavigation}
            />)
      case "contact":
        return (
            <Contact 
            classname={`${isBlack ? styles.whiteBackground : styles.blackBackground}`}
            navigate={handleNavigation}
            />)
      default:
        return <p>Section not found.</p>;
    }
  };

  return (
    <div className={`h-screen ${styles.container}`} ref={topRef} id="top">
      <div className={`${isBlack ? styles.whiteBackground : styles.blackBackground} h-full`}>
      <GooeyMenu handleNavigation={handleNavigation} currentSection={section} />


        <div className={`${styles.content} ${isBlack ? styles.whiteBackground : styles.blackBackground} h-[90vh]`}>
          {renderContent()}
        </div>
      </div>

      {/* Left Overlay */}
      <div className={`${styles.overlay} ${styles.left} 
        ${isTransitioning ? styles.slideIn : styles.slideOut} 
        ${!isWhite ? styles.black : styles.white}`}>

            <div className={`${styles.left} 
                ${!isWhite ? styles.white : styles.black} 
                ${styles.innerOffset} z-10`}>
            </div> 
        </div>

      {/* Right Overlay */}
        <div className={`${styles.overlay} ${styles.right} 
            ${isTransitioning ? styles.slideIn : styles.slideOut} 
            ${!isWhite ? styles.black : styles.white}`}>
            
            <div className={`${styles.right} 
                ${!isWhite ? styles.white : styles.black} 
                ${styles.innerOffset} z-10`}>
            </div> 

        </div>
    </div>
  );
}
