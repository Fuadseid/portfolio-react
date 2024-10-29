import React, { useState } from "react";
import styles from "./Projectcard.module.css";
import { motion } from "framer-motion";

const ProjectCard = ({
  project: { title, imageSrc, skills, demo, source, description },
  isLight,
}) => {
  const [showOverlay, setOverlay] = useState(false);

  return (
    <motion.div
      className="p-8   relative overflow-hidden h-[200px] min-w-[200px] bg-gray-100 dark:bg-slate-800 rounded-xl md:flex justify-center items-center"
      onHoverStart={() => {
        if (window.innerWidth >= 768) {
          setOverlay(true);
        }
      }}
      onHoverEnd={() => {
        if (window.innerWidth >= 768) {
          setOverlay(false);
        }
      }}
      onClick={() => {
        if (window.innerWidth < 768) {
          setOverlay(!showOverlay);
        }
      }}
    >
      <img
        src={require(`../../asset/${imageSrc}`)}
        alt={`Image of ${title}`}
        style={{ width: 288, height: 300 }}
        className={styles.image}
      />
      {showOverlay && (
        <motion.div className="absolute inset-0 z-0 p-2 text-white  bg-cyan-600 opacity-90  justify-center items-center"
        initial={{opacity:0,y:10}}
        animate={{opacity:0.85,y:0}}
        exit={{opacity:0,y:10}}
        
        >
          <motion.h3
      
          className="font-bold text-lg"
          >{title}</motion.h3>
          <p>{description}</p>
          <ul>
            {skills.map((skill, skillId) => (
              <li key={skillId}>{skill}</li>
            ))}
          </ul>
          <div className="flex justify-between ">
            <a href={demo}>
              <button className="bg-cyan-500 text-white font-semibold  px-4 rounded hover:bg-blue-950 transition duration-200">
                Demo
              </button>
            </a>
            <a href={source}><button className="bg-cyan-500 text-white font-semibold px-4 rounded hover:bg-blue-950 transition duration-200">Source</button></a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
