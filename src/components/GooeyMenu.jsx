import React, { useState } from "react";
import { FaHome, FaUser, FaCode, FaPhone } from "react-icons/fa";
import "./css/GooeyMenu.css";

const GooeyMenu = ({ handleNavigation, currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (section) => {
    setIsOpen(false); // Close the menu on click
    handleNavigation(section); // Trigger navigation
  };

  // Define menu items and their target sections
  const menuItems = [
    { label: <FaHome/>, section: "home" },
    { label: <FaCode/>, section: "projects" },
    { label: <FaUser/>, section: "about" },
    { label: <FaPhone/>, section: "contact" },
  ];

  return (
    <nav className={`menu ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="menu-open-button">
        <span className="hamburger hamburger-1"></span>
        <span className="hamburger hamburger-2"></span>
        <span className="hamburger hamburger-3"></span>
      </div>

      {/* Dynamically render menu items */}
      {menuItems
        .filter((item) => item.section !== currentSection) // Exclude current section
        .map((item, index) => (
          <a
            key={index}
            className="menu-item"
            onClick={() => handleMenuClick(item.section)}
          >
            {item.label}
          </a>
        ))}
    </nav>
  );
};

export default GooeyMenu;
