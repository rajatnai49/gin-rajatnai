import React, { useEffect } from "react";
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
    // const image = {
    //   hidden: {
    //     opacity: 0,
    //   },
    //   visible: {
    //     x: [200, 0],
    //     opacity: 0.75,
    //     transition: { ease: "easeOut" },
    //   },
    // };
    const renderer_color = theme === "dark" ? "#000000" : "#ffffff";
    const mesh_color = theme === "dark" ? "#0369a1" : "#bae6fd";
    return (
        <>
            <Triangle renderer_color={renderer_color} mesh_color={mesh_color} />
            <div
                className="about-page flex flex-col w-screen justify-start mt-10 "
                style={{ color: theme === "dark" ? "white" : "#0369a1" }}
            >
                {/* <motion.div
          variants={image}
          className="photo mx-10 mt-8 basis-3/4 h-2/5 rounded-xl  shadow-inner shadow-cyan-500 sm:basis-1/4 sm:order-last sm:h-3/5"
        ></motion.div> */}
                <motion.div
                    variants={about}
                    className="description mx-10 my-8 sm:basis-1/2 z-10 h-3/5 sm:mx-32"
                >
                    <motion.h1
                        variants={aboutChild}
                        className="menu-items text-3xl font-black sm:text-5xl"
                    >
                        ABOUT
                    </motion.h1>
                    <motion.hr
                        variants={aboutChild}
                        className="mt-3 border-t-4"
                        style={{ borderTopColor: theme === "dark" ? "white" : "#0369a1" }}
                    />
                    <motion.p
                        variants={aboutChild}
                        className="text-sm page-content tracking-wider my-5 sm:my-10 sm:text-2xl"
                    >
                        Hey there! I'm <strong>Rajat N. Nai</strong>, hailing from Gujarat,
                        India. I'm passionate about <strong>software development</strong>{" "}
                        and love delving into exciting projects on GitHub. I enjoy diving
                        into the realms of web development, cloud computing, and data
                        science, constantly expanding my knowledge.I find joy in taking
                        notes and <strong>sharing</strong> what I learn with others.
                    </motion.p>
                    <motion.p
                        variants={aboutChild}
                        className="text-sm page-content tracking-wider my-5 sm:my-10 sm:text-2xl"
                    >
                        Apart from my tech adventures, I also indulge in{" "}
                        <strong>comic book</strong> writing and character design as a fun
                        hobby.
                    </motion.p>

                    <motion.p
                        variants={aboutChild}
                        className="text-sm page-content tracking-wider my-5 sm:my-10 sm:text-2xl"
                    >
                        <strong>Life</strong> is all about living it to the fullest and
                        embracing every opportunity to learn, and that's exactly what I
                        strive for!
                    </motion.p>

                    <motion.p
                        className="mt-2 sm:text-2xl page-content"
                        variants={aboutChild}
                    >
                        {/* <a
                            className="relative after:bg-sky-600 "
                            href="https://young-dodo-ec9.notion.site/Notes-5781be096a474627afe9761d6c9b101c?pvs=4s"
                            target="_blank"
                            rel="noreferrer"
                        >
                            ↗
                            notes
                        </a> */}
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
                    {/*<motion.p
                        className="my-2 sm:text-2xl page-content"
                        variants={aboutChild}
                    >
                        <a
                            className="relative after:bg-sky-600"
                            href="https://www.notion.so/gin-sen/ef126b975f894a6ead01679f2dd68397?v=a256b4530be44b86aad55a97323d3430"
                            target="_blank"
                            rel="noreferrer"
                        >
                            ↗
                            anime & manga
                        </a>

                    </motion.p>*/}
                </motion.div>
            </div>
        </>
    );
}
