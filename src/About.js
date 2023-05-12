import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function About({ setIconColor, setTheme, theme }) {
  useEffect(() => {
    if (theme === "dark") {
      setIconColor("white");
    } else {
      setIconColor("#0369a1");
    }
  }, [setIconColor, setTheme, theme]);
  const about = {
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
  const aboutChild = {
    hidden: {
      opacity: 0,
    },
    visible: {
      y: [200, 0],
      opacity: 1,
      transition: { ease: "easeOut" },
    },
  };
  const image = {
    hidden: {
      opacity: 0,
    },
    visible: {
      x: [200, 0],
      opacity: 0.75,
      transition: { ease: "easeOut" },
    },
  };
  return (
    <>
      <div
        className="about-page flex flex-row flex-wrap w-screen justify-center sm:mt-10 "
        style={{ color: theme === "dark" ? "white" : "#0369a1" }}
      >
        <motion.div
          variants={image}
          className="photo mx-10 mt-10 sm:basis-1/4 sm:order-last"
        >
          <img
            className="shadow-xl rounded-2xl shadow-amber-700 saturate-200 brightness-100 contrast-100"
            src="law1.jpg"
            alt="my_photo"
          />
        </motion.div>
        <motion.div
          variants={about}
          className="description mx-10 my-10 sm:basis-1/2"
        >
          <motion.h1
            variants={aboutChild}
            className="menu-items text-3xl font-black sm:text-5xl"
          >
            ABOUT
          </motion.h1>
          <motion.hr
            variants={aboutChild}
            className="mt-3 border-2 rounded-xl"
          />
          <motion.p
            variants={aboutChild}
            className="text-base page-content tracking-wider my-5 sm:my-10 sm:text-2xl"
          >
            I am a computer science student with expertise in various
            programming languages and full-stack web developer in India. I like
            to learn new technologies and participate in the Hackathons and
            open-source communities.
          </motion.p>
          <motion.h2
            variants={aboutChild}
            className="text-xl menu-items font-black underline underline-offset-8 sm:text-2xl"
          >
            OTHER STUFF
          </motion.h2>
          <motion.p
            className="mt-5 sm:text-lg page-content"
            variants={aboutChild}
          >
            <a
              className="relative after:bg-sky-600"
              href="https://young-dodo-ec9.notion.site/8925502b519e454e992a08743d0b0900?v=69f795a949d748b284d1f4b22e204f86  "
              target="_blank"
              rel="noreferrer"
            >
              ↗{/* */}
              anime & manga
            </a>
            <a
              className="relative after:bg-sky-600 ml-5"
              href="https://rajatnai.hashnode.dev/"
              target="_blank"
              rel="noreferrer"
            >
              ↗{/* */}
              blog
            </a>
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}
