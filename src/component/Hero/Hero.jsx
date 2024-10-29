import React from "react";
import ppImage from "../../public/pp.jpg";
import Resume from "../../Resume/CV.pdf";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = ({ isLight }) => {
  const [text] = useTypewriter({
    words: [
      " Fuad Seid",
      " a Software Engineer",
      " a Web Developer",
      " a Mobile App Developer",
    ],
    loop: {},
  });

  return (
    <div className="h-fit w-screen">
      <motion.section
        initial={{ y: "100%" }}
        className="h-screen"
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.7, delay: 0 }}
      >
        <div className="flex space-x-8 md:ml-12  mt-10 max-sm:flex-col">
          <div className="bg-gradient-to-r hidden  md:block  animate-floating hover:transition-all duration-700 ease-in-out hover:h-[300px] hover:w-[241px] hover:shadow-2xl hover:shadow-cyan-600 from-cyan-700 via-sky-600 to-cyan-200 h-[289px] w-[230px] border-8 border-cyan-600 rounded-custom overflow-hidden">
            <img
              className="h-full w-full rounded-custom"
              src={ppImage}
              alt="Profile"
            />
          </div>

          <div className="mt-10  text-lg p-6 text-wrap md:w-1/2">
            <motion.h1
              className="text-xl sm:text-h1-sm"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              Hey 👋 there! I am
              <span
              className= 'font-bold text-cyan-400 dark:text-green-500 '
            
              >
                {text}
              </span>
              <Cursor />
            </motion.h1>
            <motion.p
              className=" w-full md:text-xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              I am a frontend developer, backend developer, and Flutter mobile
              app developer. I love working on challenging and innovative
              projects with a great team.
            </motion.p>
            <motion.ul
              className="text-h3 space-y-3 mt-4 sm:text-h2-sm"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              <li>🌍 I live in Ethiopia.</li>
              <li>💻 I love to code.</li>
              <li>🎬 I love movies.</li>
              <li>✈️ I love to travel.</li>
            </motion.ul>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
            >
              <div className="flex mt-4 space-x-4">
                <button className="bg-cyan-500 text-white font-semibold px-4 rounded hover:bg-blue-950 transition duration-200 text-h3 sm:text-h2-sm">
                  <a href={Resume} download="CV.pdf">
                    Download Resume
                  </a>
                </button>
                <button className="bg-cyan-500 text-white font-semibold px-4 rounded hover:bg-blue-950 transition duration-200 text-h3 sm:text-h2-sm">
                  <a href="mailto:fuaddbus@gmail.com">Contact Me</a>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
