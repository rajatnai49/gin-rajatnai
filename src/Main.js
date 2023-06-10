import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Circle from "./ThreeScene";

export default function Main({ setIconColor, setTheme, theme }) {
  useEffect(() => {
    if (theme === "dark") {
      setIconColor("white");
      document.documentElement.classList.add("dark");
    } else {
      setIconColor("#be123c");
      document.documentElement.classList.remove("dark");
    }
  }, [setIconColor, setTheme, theme]);

  const contentClassName =
    theme === "dark" ? "dark:text-rose-50 dark:bg-blue-900" : "";

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

  const renderer_color = theme === "dark" ? "#000000" : "#ffffff";
  const mesh_color = theme === "dark" ? "#be123c" : "#fecdd3";
  return (
    <>
      <Circle renderer_color={renderer_color} mesh_color={mesh_color} />
      <div
        className="home page-content justify-center pl-10 pb-24 flex flex-col  h-screen sm:pb-24 sm:pr-10 sm:ml-80"
        style={{ color: theme === "dark" ? "white" : "#be123c" }}
      >
        <div className="intro-wrapper">
          <motion.div className="intro-text flex flex-col">
            <motion.div className="intro-id  text-sm font-semibold flex flex-col sm:text-xl">
              <motion.div variants={introLine} className="intro-greeting1 my-2">
                hey, i'm
              </motion.div>
              <motion.div
                variants={introLine}
                className="font-black text-4xl sm:text-8xl my-2"
              >
                RAJAT NAI
              </motion.div>
            </motion.div>
            <motion.div className="intro-id text-sm font-semibold flex flex-col sm:text-xl sm:mt-3">
              <motion.div variants={introLine} className="intro-greeting2 my-2">
                call me
              </motion.div>
              <motion.div
                variants={introLine}
                className="font-black text-4xl sm:text-8xl my-2"
              >
                GIN
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          variants={introLine}
          className="intro-roles mt-3 text-lg font-medium sm:text-2xl my-2"
        >
          <motion.p className="intro-role sm:inline-block">
            Software Engineer,
          </motion.p>
          <motion.p className="intro-role sm:inline sm:ml-3">
            &amp; full-stack web developer
          </motion.p>
        </motion.div>
        <motion.div className="intro-links mt-3 text-base font-light sm:text-xl">
          <ul className="">
            <motion.li variants={introLine} className="my-2">
              <div className="link-wrapper sm:inline-block">
                <div className="link tracking-widest">
                  <a className="relative after:bg-rose-600" href="/work">
                    <span className="arrowFont">→{/* */}</span>
                    see my projects
                  </a>
                </div>
              </div>
            </motion.li>
            <motion.li variants={introLine} className="my-2">
              <div className="link-wrapper  sm:inline">
                <div className="link tracking-widest">
                  <a className="relative after:bg-rose-600" href="/about">
                    <span className="arrowFont">→{/* */}</span>
                    more about me
                  </a>
                </div>
              </div>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}
