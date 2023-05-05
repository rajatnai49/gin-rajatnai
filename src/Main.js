import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function Main() {
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
  return (
    <div className="home">
      <div className="intro-wrapper">
        <motion.div className="intro-text flex flex-col justify-center items-center">
          <motion.h1
            variants={introLine}
            className="intro-id my-3 text-3xl font-medium flex flex-col justify-center items-center sm:block sm:text-5xl"
          >
            HEY, MY NAME IS
            <div className="ml-2 font-black underline decoration-wavy underline-offset-8 hover:underline-offset-4 decoration-4 hover:decoration-8 sm:inline">
              RAJAT NAI
            </div>
          </motion.h1>
          <motion.h1
            variants={introLine}
            className="intro-id my-3 text-3xl font-medium flex flex-col justify-center items-center sm:block sm:text-5xl"
          >
            BUT YOU CAN CALL ME
            <div className="ml-2 font-black underline decoration-wavy underline-offset-8 hover:underline-offset-4 decoration-4 hover:decoration-8 sm:inline">
              GIN
            </div>
          </motion.h1>
        </motion.div>

        <div className="intro-roles flex flex-col justify-center items-center text-base mt-4 sm:text-xl">
          <motion.p variants={introLine} className="intro-role">
            I’m a Software Engineer,
          </motion.p>
          <motion.p variants={introLine} className="intro-role">
            Computer Scientist
          </motion.p>
          <motion.p variants={introLine} className="intro-role">
            &amp;full-stack web developer
          </motion.p>
        </div>
        <motion.div
          variants={introLine}
          className="intro-links flex flex-col justify-center items-center text-base mt-4 sm:text-xl"
        >
          <ul className="flex flex-row">
            <li className="mx-6">
              <div className="link-wrapper">
                <div className="link tracking-widest">
                  <a href="/work">
                    →{/* */}
                    See my projects
                  </a>
                </div>
              </div>
            </li>
            <li className="mx-6">
              <div className="link-wrapper">
                <div className="link tracking-widest">
                  <a href="/about">
                    →{/* */}
                    More about me
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
