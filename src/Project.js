import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { projects } from "./Projects";

export default function Project({ project, setIconColor, setTheme, theme }) {
  useEffect(() => {
    if (theme === "dark") {
      setIconColor("white");
    } else {
      setIconColor("#92400e");
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
  const currentProjectIndex = projects.findIndex((p) => p.key === project.key);
  const nextProjectIndex = (currentProjectIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  return (
    <>
      <div
        className="w-screen z-40 font-black justify-center"
        style={{ color: theme === "dark" ? "white" : "#92400e" }}
      >
        <motion.div
          variants={about}
          className="description mx-10 my-8 sm:basis-1/2 z-10 h-3/5 sm:mx-32"
        >
          <motion.h1
            variants={aboutChild}
            className="menu-items text-3xl font-black sm:text-4xl"
          >
            {project.name}
          </motion.h1>
          <motion.hr
            variants={aboutChild}
            className="mt-3 border-2 rounded-xl"
            style={{ borderTopColor: theme === "dark" ? "white" : "#92400e" }}
          />
          <motion.div
            variants={aboutChild}
            className="text-sm flex flex-col justify-center align-center sm:flex-row w-full sm:text-lg my-8"
          >
            <motion.div className="sm:w-1/2">
              <motion.p>
                <strong>Categories</strong>:
                {project.category.map((category, index) => (
                  <span
                    className="font-normal ml-2"
                    key={index}
                  >{` ${category} `}</span>
                ))}
              </motion.p>
              <motion.p className="flex flex-row align-center my-8">
                <strong>Technologies</strong>:
                {project.technologies.map((tech, index) => (
                  <span className="font-normal" key={index}>
                    <img
                      src={`../images/icons/${tech}.png`}
                      className="w-6 mx-2"
                      alt={tech}
                    />
                  </span>
                ))}
              </motion.p>
              {Object.keys(project.team).length > 0 && (
                <motion.p className="flex flex-row align-center my-8">
                  <strong>Team</strong>:
                  {Object.keys(project.team).map((memberKey) => (
                    <span key={memberKey} className="font-normal ml-2">
                      {` ${project.team[memberKey].name} `}
                    </span>
                  ))}
                </motion.p>
              )}
              <motion.p>
                <strong>Year</strong>:
                <span className="font-normal ml-2">{project.year}</span>
              </motion.p>
            </motion.div>

            <motion.div className="sm:w-1/2 mt-6 sm:mt-0">
              <motion.p className="text-lg font-normal tracking-wider mb-4">
                {project.desc}
              </motion.p>
              <motion.a
                href={project.link}
                target="blank"
                className="relative after:bg-amber-700 p-1 font-normal text-lg"
              >
                ↗ View Project
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={aboutChild}
            className="w-full mt-2 flex justify-end items-center"
          >
            {nextProject && (
              <>
                <strong>Next Project:</strong>
                <motion.a
                  href={`/work/${nextProject.key}`}
                  className="relative after:bg-amber-700 font-normal text-lg ml-5"
                >
                  ↗ {nextProject.name}
                </motion.a>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
