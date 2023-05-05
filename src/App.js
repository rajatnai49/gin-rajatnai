import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Menu from "./Menu";
import Main from "./Main";
import "./App.css";

export default function Root() {
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
  const introLine = {
    hidden: {
      opacity: 0,
    },
    visible: {
      y: [100, 0],
      opacity: 1,
      transition: { ease: "easeOut" },
    },
  };
  const [color, setColor] = useState("red");

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
    const newColor = color === "red" ? "green" : "red";
    setColor(newColor);
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
      scale: 1.2,
      transition: { duration: 1 },
    },
    tap: { scale: 0.9 },
  };

  var circleStyles = {
    opacity: 1,
    fill: "none",
    stroke: "black",
  };

  var rectStyles = {
    width: "6px",
    height: "6px",
    rx: 3,
    ry: 3,
    opacity: 0.75,
    fill: "none",
    stroke: "black",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="z-30">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerIcons}
          className="header-content static flex items-baseline w-screen mt-4 sm:mt-10 sm:px-10"
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
                whileTap="tap"
                whileHover="hover"
                variants={menuButton}
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
        className="page-content flex flex-col justify-center items-center w-screen h-screen"
      >
        <Main />
      </motion.div>
    </>
  );
}
