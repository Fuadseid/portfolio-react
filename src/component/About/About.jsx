import React from "react";
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
import { FaInstagram } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
const About = ({ isLight }) => {
  return (
    <section className="h-fit w-fit md:text-xl p-4">
      <div>
        <div className="flex flex-col md:flex-row gap-8 mb-4">
          <div className="   border p-6 hover:transition-all duration-700 ease-in-out bg-[#D9D9D9] hover:shadow-2xl hover:shadow-cyan-600 from-cyan-700 via-sky-600 to-cyan-200  border-cyan-600 overflow-hidden  rounded-md dark:bg-[#232A30] md:w-1/2">
            <motion.h1
              className="ml-6"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              About me
            </motion.h1>
            <motion.p
              className="p-6  "
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
          <div className="md:w-1/2 border p-6 hover:transition-all duration-700 ease-in-out bg-[#D9D9D9]  hover:shadow-2xl hover:shadow-cyan-600 from-cyan-700 via-sky-600 to-cyan-200  border-cyan-600 overflow-hidden  rounded-md dark:bg-[#232A30] ">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              Personal Detail
            </motion.h1>
            <br />
            <motion.ul
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
              <br />
              <div className="flex  gap-10">
                <a href="https://github.com/Fuadseid">
                  <FaGithub />
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
        <div className="border hover:transition-all duration-700 ease-in-out  hover:shadow-2xl hover:shadow-cyan-600 bg-[#D9D9D9] from-cyan-700 via-sky-600 to-cyan-200  border-cyan-600 overflow-hidden text-2xl rounded-md dark:bg-[#232A30] ">
          <motion.h1
            className="text-center"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, delay: 0 }}
          >
            Skills
          </motion.h1>
          <div className="flex flex-col md:flex-row justify-between p-6">
            <motion.ul
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              <h3 className="text-lg  md:text-2xl">Languages</h3>
              <br />
              <div className="md:flex text-lg text gap-4">
                <li>
                  <IoLogoJavascript /> JavaScript
                </li>
                <li>
                  <IoLogoPython /> Python (exploring)
                </li>
                <li>
                  <img
                    src={isLight ? cplus : cplusdark}
                    alt=""
                    width={"25px"}
                  />{" "}
                  C++
                </li>
                <li>
                  <FaJava /> Java
                </li>
                <li>
                  <SiDart /> Dart
                </li>
              </div>

              <h3 className=" mt-2 md:text-2xl">Frameworks and Libraries</h3>
              <div className="text-lg md:flex mt-4 text gap-4">
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
              </div>

              <h3 className="text-xl mt-4 md:text-2xl">Databases</h3>
              <div className="text-lg md:flex mt-4 text gap-4">
                <li>
                  <PiFileSql /> SQL
                </li>
                <li>
                  <SiPostgresql /> MongoDB
                </li>
              </div>
            </motion.ul>

            <motion.ul
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              <h3 className="text-xl md:text-2xl">Version Control</h3>
              <div className="text-lg md:flex mt-4 text gap-12">
                <li>
                  <FaGitAlt /> Git
                </li>
                <li>
                  <FaGithub /> GitHub
                </li>
              </div>

              <h3 className="text-xl mt-4 md:text-2xl">Project Management</h3>
              <br />
              <div className="text-lg md:flex text gap-12">
                <li>📊 Software Project Management</li>

                <li>🤝 Team Collaboration</li>
                <br />
              </div>

              <h3 className="text-xl mt-4 md:text-2xl">UI/UX</h3>
              <br />
              <div className="text-lg md:flex  text gap-12">
                <li>
                  <FaFigma /> Figma
                </li>
              </div>

              <h3 className="mt-4">Area of Exploration</h3>
              <div className="text-lg md:flex  text gap-12">
                <li>
                  <IoLogoPython /> Python
                </li>
                <li>
                  <TbBrandReactNative /> React Native
                </li>
              </div>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
