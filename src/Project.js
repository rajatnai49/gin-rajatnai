import React, { useRef, useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { useAnimate, usePresence } from "framer-motion";
import { animate } from "framer-motion";

export default function Project({ project }) {
  useEffect(() => {
    console.log(`Selected project: ${project.name}`);
    console.log(`Description: ${project.desc}`);
  }, [project]);

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.desc}</p>
    </div>
  );
}
