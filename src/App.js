import React, { useRef, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import Menu from "./Menu";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";
import Project from "./Project";
import { projects } from "./Projects";
import "./App.css";

export default function Root() {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "light");

  useEffect(() => {
    // Store the current theme in local storage
    localStorage.setItem("theme", theme);

    // Update the class of the HTML element
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (menuColor === "#fff") setMenuColor("#a21caf");
    else setMenuColor("#fff");
  };

  const [iconColor, setIconColor] = useState("black");
  const [menuColor, setMenuColor] = useState("#a21caf");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuBtn = document.querySelector(".icons-style");
  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
    if (!isMenuOpen) menuBtn.classList.add("open");
    else menuBtn.classList.remove("open");
    if (theme === "dark") {
      setMenuColor("#fff");
    } else {
      setMenuColor("#a21caf");
    }
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
    hover: {
      "& circle:nth-child(2)": {
        x: -90,
        opacity: 0,
        transition: { duration: 0.2 },
      },
    },
    tap: {},
  };

  // menu icon style
  var circleStyles = {
    opacity: 1,
    fill: "none",
    stroke: isMenuOpen ? menuColor : iconColor,
    strokeWidth: 2,
  };
  var rectStyles = {
    width: "6px",
    height: "6px",
    rx: 3,
    ry: 3,
    opacity: 0.75,
    fill: "none",
    stroke: isMenuOpen ? menuColor : iconColor,
    strokeWidth: 2,
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
              <motion.button
                onClick={handleThemeSwitch}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: 360 }}
              >
                {theme === "dark" ? (
                  <i className="fa-regular fa-sun font-thin text-xl sm:text-2xl"></i>
                ) : (
                  <i className="fa-regular fa-moon font-thin text-xl sm:text-2xl"></i>
                )}
              </motion.button>
            </motion.div>
            <motion.div variants={icon} className="header-icon mx-4">
              <motion.button
                className="hamburger-btn"
                aria-label="Open menu"
                onClick={handleClick}
              >
                <div style={{ transform: "none" }}>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    variants={menuButton}
                    whileHover="hover"
                    whileTap="tap"
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
                  </motion.svg>
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
        <Menu theme={theme} />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isOpen ? "hidden" : "visible"}
        variants={intro}
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  setIconColor={setIconColor}
                  setTheme={setTheme}
                  theme={theme}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  setIconColor={setIconColor}
                  setTheme={setTheme}
                  theme={theme}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact
                  setIconColor={setIconColor}
                  setTheme={setTheme}
                  theme={theme}
                />
              }
            />
            <Route
              path="/work"
              element={
                <Work
                  setIconColor={setIconColor}
                  setTheme={setTheme}
                  theme={theme}
                >
                  {projects.map((project) => (
                    <Route
                      key={project.id}
                      path={`/work/${project.id}`}
                      element={<Project project={project} />}
                    />
                  ))}
                </Work>
              }
            />
          </Routes>
        </Router>
      </motion.div>
    </>
  );
}
