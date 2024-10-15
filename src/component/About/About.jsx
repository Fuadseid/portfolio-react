import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoPython } from "react-icons/io";
import cplus from "../../asset/c_icon_132529.ico";
import cplusdark from "../../asset/c-.png";
import { FaJava } from "react-icons/fa";
import { SiDart } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { SiPostgresql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
const About = ({ isLight }) => {
  return (
    <div className={isLight ? styles.mainlight : styles.maindark}>
      <section className={styles.container}>
        <div className={styles.topSection}>
          <div className={isLight ? styles.AboutMe : styles.AboutMedark}>
            <motion.h1
              className="h1tag"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              About me
            </motion.h1>
            <motion.p
              className="h1tag"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              I am a 4th-year Software Engineering student at Debre Berhan
              University. I can work with React as a frontend framework, which
              is a JavaScript library. I am also proficient in C++ and Node.js
              for backend development. Additionally, I am a Flutter mobile app
              developer for cross-platform applications. I love to solve
              problems through coding.
            </motion.p>
          </div>
          <div className={isLight ? styles.Personal : styles.Personaldark}>
            <motion.h1
              className="h1tag"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              Personal Detail
            </motion.h1>
            <motion.ul
              className="h1tag"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              <li>Name: Fuad Seid</li>
              <li>Email: fuaddbus@gmail.com</li>
              <li>Residence: Ethiopia</li>
              <li>City: Addis Ababa</li>
              <li>Freelance: Hire me on Upwork</li>
              <div
                className={
                  isLight ? styles.socialmedia : styles.socialmediadark
                }
              >
                <a href="https://github.com/Fuadseid">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/fuad-seid-8b61322a9">
                  <CiLinkedin />
                </a>
                <a href="https://upwork.com/freelancers/~01da3f6dc0c1cdd8d4">
                  <FaSquareUpwork />
                </a>
                <a href="https://instagram.com/fuadseidm07/">
                  <FaInstagram />
                </a>
              </div>
            </motion.ul>
          </div>
        </div>
        <div className={isLight ? styles.skill : styles.skilldark}>
          <motion.h1
            className="h1tag"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, delay: 0 }}
          >
            Skills
          </motion.h1>

          <div
            className={
              isLight ? styles.skillsContainer : styles.skillsContainerdark
            }
          >
            <motion.ul
              className="h1tag"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              <h3>Languages</h3>
              <li>
                <IoLogoJavascript /> JavaScript
              </li>
              <li>
                <IoLogoPython /> Python (exploring)
              </li>
              <li>
                <img src={isLight ? cplus : cplusdark} alt="" width={"25px"} />{" "}
                C++
              </li>
              <li>
                <FaJava /> Java
              </li>
              <li>
                <SiDart /> Dart
              </li>
              <h3>Frameworks and Libraries</h3>
              <li>
                <FaReact /> React
              </li>
              <li>
                <FaNodeJs /> Node.js
              </li>
              <li>
                <TbBrandReactNative /> React Native (exploring)
              </li>
              <li>
                <SiFlutter /> Flutter
              </li>
              <h3>Databases</h3>
              <li>
                <PiFileSql /> SQL
              </li>
              <li>
                <SiPostgresql /> MongoDB
              </li>
            </motion.ul>

            <motion.ul
              className="h1tag"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              <h3>Version Control</h3>
              <li>
                <FaGitAlt /> Git
              </li>
              <li>
                <FaGithub /> GitHub
              </li>
              <h3>Project Management</h3>
              <li>📊 Software Project Management</li>
              <h3>Collaboration</h3>
              <li>🤝 Team Collaboration</li>
              <h3>UI/UX</h3>
              <li>
                <FaFigma /> Figma
              </li>
              <h3>Area of Exploration</h3>
              <li>
                <IoLogoPython /> Python
              </li>
              <li>
                <TbBrandReactNative /> React Native
              </li>
            </motion.ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
