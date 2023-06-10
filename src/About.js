import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { Triangle } from "./ThreeScene";

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
  const renderer_color = theme === "dark" ? "#000000" : "#ffffff";
  const mesh_color = theme === "dark" ? "#0369a1" : "#bae6fd";
  return (
    <>
      <Triangle renderer_color={renderer_color} mesh_color={mesh_color} />
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
          className="description mx-10 my-10 sm:basis-1/2 z-10"
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

          <motion.p
            className="mt-2 sm:text-lg page-content"
            variants={aboutChild}
          >
            <a
              className="relative after:bg-sky-600"
              href="https://young-dodo-ec9.notion.site/b8fea50be5f14e8387829edca6b49161?v=b2466836e9c34bed99df242bd7693b87&pvs=4"
              target="_blank"
              rel="noreferrer"
            >
              ↗{/* */}
              music
            </a>
            <a
              className="relative after:bg-sky-600 ml-5"
              href="https://young-dodo-ec9.notion.site/Notes-5781be096a474627afe9761d6c9b101c?pvs=4s"
              target="_blank"
              rel="noreferrer"
            >
              ↗{/* */}
              notes
            </a>
          </motion.p>
          <motion.p
            className="mt-2 sm:text-lg page-content"
            variants={aboutChild}
          >
            <a
              className="relative after:bg-sky-600"
              href="https://young-dodo-ec9.notion.site/ef126b975f894a6ead01679f2dd68397?v=a256b4530be44b86aad55a97323d3430&pvs=4"
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
              write
            </a>
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}
