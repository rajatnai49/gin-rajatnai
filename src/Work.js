import React, { useRef, useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { useAnimate, usePresence } from "framer-motion";
import { animate } from "framer-motion";
import { projects } from "./Projects";

import "./App.css";

export default function Wrok({ setIconColor, setTheme, theme }) {
  useEffect(() => {
    if (theme === "dark") {
      setIconColor("white");
    } else {
      setIconColor("#be185d");
    }
  }, [setIconColor, setTheme, theme]);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const handleMouseEnter = (projectId) => {
    setHoveredProjectId(projectId);
  };

  useEffect(() => {}, [hoveredProjectId]);

  const handleMouseLeave = () => {
    setHoveredProjectId(null);
  };

  const projectImg = {
    visible: {
      opacity: 0.8,
      scale: 1.02,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
      transition: {
        ease: easeInOut,
      },
    },
  };

  const uldiv = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        x: [-200, 0],
        when: "beforeChildren",
        staggerChildren: 0.1,
        transition: { ease: "easeInOut" },
      },
    },
  };

  const lidiv = {
    hidden: {
      opacity: 0,
    },
    visible: {
      x: [-200, -10],
      opacity: 1,
      transition: { ease: "easeOut" },
    },
    hover: {
      x: [0, 10, 0],
      transition: { ease: "easeInOut" },
    },
  };

  const projectItems = projects.map((project) => (
    <div>
      <a href={`work/${project.id}`}>
        <motion.li
          variants={lidiv}
          whileHover="hover"
          className="projectItem flex flex-row items-baseline page-content"
          key={project.id}
          onMouseEnter={() => handleMouseEnter(project.id)}
          onMouseLeave={handleMouseLeave}
        >
          <motion.span className="projectArrow arrowFont hidden sm:block sm:text-3xl">
            →{/* */}
          </motion.span>
          <motion.h1 className="text-xl sm:text-2xl">{project.name}</motion.h1>
          <motion.p className="ml-auto text-sm sm:text-lg">
            {project.category[0]}
          </motion.p>
        </motion.li>
      </a>
      <motion.hr className="my-3 border-1.5" />
    </div>
  ));

  const projectImages = projects.map((project) => (
    <>
      {hoveredProjectId === project.id && (
        <motion.img
          animate={hoveredProjectId === project.id ? "visible" : "hidden"}
          variants={projectImg}
          className={`${project.id} left-side w-full h-full object-cover opacity-70`}
          src={project.img}
          alt={project.id}
        />
      )}
    </>
  ));

  return (
    <>
      <div
        className="work-page flex flex-row flex-wrap w-screen justify-center mt-24"
        style={{ color: theme === "dark" ? "white" : "#be185d" }}
      >
        <motion.div className="work-div relative flex flex-row flex-warp w-screen mx-10 my-10  sm:mx-36">
          <motion.div className="left-side relative h-screen w-screen basis-1/2 hidden sm:block">
            {projectImages}
          </motion.div>
          <motion.div className="right-side basis-full sm:basis-1/2 w-2/4 sm:mx-16">
            <motion.h1 className="menu-items text-3xl font-black sm:text-5xl">
              WORK
            </motion.h1>
            <motion.hr className="my-3 border-2" />
            <motion.div className="">
              <motion.ul variants={uldiv}>{projectItems}</motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
