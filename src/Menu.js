import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function Menu() {
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
  const linkElement = {
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
    <div className="menu-content flex flex-col justify-center ml-20 w-screen h-screen sm:ml-96">
      <div className="menu-items text-3xl font-black sm:text-5xl">
        <nav>
          <ol>
            <li>
              <motion.div variants={linkElement} className="item-inner my-8">
                <a href="/">
                  <h1>HOME</h1>
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div variants={linkElement} className="item-inner my-8">
                <a href="/work">
                  <h1>WORK</h1>
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div variants={linkElement} className="item-inner my-8">
                <a href="/about">
                  <h1>ABOUT</h1>
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div variants={linkElement} className="item-inner my-8">
                <a href="/contact">
                  <h1>CONTACT</h1>
                </a>
              </motion.div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="menu-socials sm:text-2xl">
        <ul>
          <div>
            <motion.div variants={linkElement} className="flex">
              <li>
                <div className="item-inner my-5">
                  <div className="link-wrapper">
                    <div className="link">
                      <a href="#" target="_blank" rel="noreferrer">
                        ↗{/* */}
                        twitter
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="item-inner my-5 ml-5">
                  <div className="link-wrapper">
                    <div className="link">
                      <a href="#" target="_blank" rel="noreferrer">
                        ↗{/* */}
                        github
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <br />
            </motion.div>
            <motion.div variants={linkElement}>
              <li>
                <div className="item-inner">
                  <div className="link-wrapper">
                    <div className="link">
                      <a href="#" target="_blank" rel="noreferrer">
                        ↗{/* */}
                        discord
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <br />
            </motion.div>
          </div>
        </ul>
      </div>
    </div>
  );
}
