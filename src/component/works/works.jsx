import React from "react";
import projects from "../../data/project.json";
import ProjectCard from "./ProjectCard";
import styles from './Works.module.css';
import { motion } from "framer-motion";

const Works = ({ isLight }) => {
  return (
    <div className={isLight?styles.mainlight:styles.maindark}>
      <section className={isLight ? styles.container : styles.containerdark}>
        <h2 className={styles.title}>Projects</h2>
        <motion.div
    initial={{y:"100%"}}
    animate={{y:0}}
    exit={{y:"-100%"}}
    transition={{ duration: 0.7, delay: 0 }}
    className={styles.projects}>
          {projects.map((project, id) => (
            <ProjectCard isLight={isLight} project={project} key={id} />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Works;
