import React, { useRef, useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { useAnimate, usePresence } from "framer-motion";
import { animate } from "framer-motion";

import "./App.css";

const projects = [
  {
    id: "brahmi",
    name: "Brahmi",
    category: ["Web Development", "UX/UI Design"],
    desc: "Brahmi is a example project for E-commerce medical website. It is a build for medical shop owner where they can display there items and manage the details in simplified manner to the customer and Customer can place order online on the site. ",
    year: 2023,
    img: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: "bashCommands",
    name: "Bash Style Jutsu",
    category: ["Algorithm", "Bash Scripting"],
    desc: "Bash Style Jutsu is a collection of bash commands based on the Naruto theme. You can add this command by given github link.",
    year: 2023,
    img: "https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "pravas",
    name: "Pravas",
    category: ["Web Development", "UX/UI Design"],
    desc: "Pravas is a example project for tours and travel agency. These services may include guided tours, vacation packages, and transportation options. The website's main focus is to provide an easy-to-use interface for users to browse, compare, and book travel services while providing detailed information about destinations, activities, and other relevant travel-related content. Additionally, the website may also feature user reviews, and photos to help users make informed decisions about their travel plans. ",
    year: 2023,
    img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: "sneakySnake",
    name: "Sneaky Snake",
    category: ["Game Design", "Javascript Development"],
    desc: "Sneaky Snake is a classic video game where the player controls a snake that slithers around a rectangular game board. The objective of the game is to eat as many pellets as possible while avoiding obstacles such as walls and the snake's own tail. The snake grows longer with each pellet eaten, making it more challenging to navigate. The game ends when the snake collides with an obstacle, and the player's score is determined by the number of pellets the snake consumes. Sneaky Snake is a fun and addictive game that is easy to play but difficult to master.",
    year: 2022,
    img: "https://images.unsplash.com/photo-1597851065532-055f97d12e47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

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
