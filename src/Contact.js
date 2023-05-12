import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function Contact({ setIconColor, setTheme, theme }) {
  useEffect(() => {
    if (theme === "dark") {
      setIconColor("white");
    } else {
      setIconColor("#15803d");
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
  return (
    <>
      <div
        className="relative about-page flex flex-row flex-wrap w-screen h-screen justify-center sm:mt-10"
        style={{ color: theme === "dark" ? "white" : "#15803d" }}
      >
        <motion.div
          variants={about}
          className="description mx-10 my-10 w-full sm:mx-36"
        >
          <motion.h1
            variants={aboutChild}
            className="menu-items text-3xl font-black sm:text-5xl"
          >
            CONTACT
          </motion.h1>
          <motion.hr variants={aboutChild} className="mt-3 border-2" />
          <motion.div
            variants={aboutChild}
            className="page-content flex flex-row flex-wrap sm:flex-nowrap w-full mt-16 text-lg"
          >
            <div className="flex justify-between w-full sm:px-10">
              <h2 className="sm:text-3xl font-semibold">Mail</h2>
              <div className="flex flex-col sm:text-xl">
                <a
                  className="relative after:bg-green-700 order-last sm:ml-10 "
                  href="mailto:rajatnai49@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  ↗{/* */}
                  rajatnai49@gmail.com
                </a>
              </div>
            </div>
            <div className="flex justify-between w-full mt-12 sm:mt-0 sm:px-10">
              <h2 className="sm:text-3xl font-semibold">Social Media</h2>
              <div className="flex flex-col sm:text-xl">
                <a
                  className="relative after:bg-green-700 "
                  href="https://young-dodo-ec9.notion.site/8925502b519e454e992a08743d0b0900?v=69f795a949d748b284d1f4b22e204f86  "
                  target="_blank"
                  rel="noreferrer"
                >
                  ↗{/* */}
                  twitter
                </a>
                <a
                  className="relative after:bg-green-700"
                  href="https://young-dodo-ec9.notion.site/8925502b519e454e992a08743d0b0900?v=69f795a949d748b284d1f4b22e204f86  "
                  target="_blank"
                  rel="noreferrer"
                >
                  ↗{/* */}
                  github
                </a>
                <a
                  className="relative after:bg-green-700"
                  href="https://young-dodo-ec9.notion.site/8925502b519e454e992a08743d0b0900?v=69f795a949d748b284d1f4b22e204f86  "
                  target="_blank"
                  rel="noreferrer"
                >
                  ↗{/* */}
                  linkedin
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
