import React, { useRef, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { color, motion } from "framer-motion";
import Menu from "./Menu";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";
import "./App.css";

export default function Root() {
  const [iconColor, setIconColor] = useState("black");
  const [menuColor, setMenuColor] = useState("#a21caf");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  // framer animation variants
  const intro = {
    hidden: {
      opacity: 0,
      zIndex: -20,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      zIndex: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const headerIcons = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const icon = {
    hidden: {
      opacity: 0,
    },
    visible: {
      y: [-100, 0],
      opacity: 1,
      transition: { ease: "easeOut" },
    },
  };
  const menuButton = {
    hover: {},
    tap: {},
  };

  // menu icon style
  var circleStyles = {
    opacity: 1,
    fill: "none",
    stroke: isMenuOpen ? menuColor : iconColor,
  };
  var rectStyles = {
    width: "6px",
    height: "6px",
    rx: 3,
    ry: 3,
    opacity: 0.75,
    fill: "none",
    stroke: isMenuOpen ? menuColor : iconColor,
  };

  return (
    <>
      <header
        className="z-30"
        style={{ color: isMenuOpen ? menuColor : iconColor }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerIcons}
          className="header-content static flex items-baseline w-screen mt-4 sm:mt-10 sm:px-16"
        >
          <div className="left-part flex items-baseline justify-center">
            <motion.div variants={icon} className="header-icon logo mx-4">
              <a href="/">
                <i class="fa-regular fa-chess-king text-2xl sm:text-3xl"></i>
              </a>
            </motion.div>
            <motion.h5
              variants={icon}
              className="header-icon full-identity mx-4 sm:text-xl"
            >
              <span className="nickname">gin</span>/
              <span className="fullname">rajat nai</span>
            </motion.h5>
          </div>

          <div className="right-part flex items-center justify-center ml-auto">
            <motion.div
              variants={icon}
              className="header-icon theme-switch mx-4"
            >
              <i class="fa-regular fa-moon font-thin text-xl sm:text-2xl"></i>
            </motion.div>
            <motion.div variants={icon} className="header-icon mx-4">
              <motion.button
                className="hamburger-btn"
                aria-label="Open menu"
                onClick={handleClick}
              >
                <div style={{ transform: "none" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width={36}
                    height={36}
                    className="icons-style sm:w-12 sm:h-12"
                  >
                    <title>Menu</title>
                    <motion.circle cx={12} cy={12} r={3} {...circleStyles} />
                    <motion.circle cx={24} cy={12} r={3} {...circleStyles} />
                    <motion.circle cx={36} cy={12} r={3} {...circleStyles} />
                    <motion.circle cx={36} cy={24} r={3} {...circleStyles} />
                    <motion.circle cx={36} cy={36} r={3} {...circleStyles} />
                    <motion.circle cx={24} cy={36} r={3} {...circleStyles} />
                    <motion.circle cx={12} cy={36} r={3} {...circleStyles} />
                    <motion.circle cx={12} cy={24} r={3} {...circleStyles} />
                    <motion.rect x={21} y={21} {...rectStyles} />
                    <motion.rect x={21} y={21} {...rectStyles} />
                  </svg>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </header>
      <motion.div
        initial="hidden"
        className="menu absolute"
        animate={isOpen ? "visible" : "hidden"}
        variants={intro}
      >
        <Menu />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isOpen ? "hidden" : "visible"}
        variants={intro}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Main setIconColor={setIconColor} />} />
            <Route
              path="/about"
              element={<About setIconColor={setIconColor} />}
            />
            <Route
              path="/contact"
              element={<Contact setIconColor={setIconColor} />}
            />
            <Route
              path="/work"
              element={<Work setIconColor={setIconColor} />}
            />
          </Routes>
        </Router>
      </motion.div>
    </>
  );
}
