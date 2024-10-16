import React from "react";
import styles from "./Hero.module.css";
import ppImage from "../../public/pp.jpg";
import Resume from "../../Resume/CV.pdf";
import { color, motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Hero = ({ isLight }) => {
  const [text] = useTypewriter({
    words: [
      ' Fuad Seid',
      ' a Software Engineer',
      ' a Web Developer',
      ' a Mobile App Developer',
    ],
    loop: {},
  });
  return (
    <div className={isLight ? styles.mainlight : styles.maindark}>
      <motion.section
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.7, delay: 0 }}
        className={`${isLight ? styles.container : styles.containerdark}`}
      >
        <img className={styles.image} src={ppImage} alt="" />

        <div className={isLight ? styles.content : styles.darkcontent}>
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, delay: 0 }}
            className={styles.title}
          >
            Hey 👋 there! I am
            <span style={{ fontWeight: "bold", color: isLight ? 'green' : 'aqua' }}>{text}</span>
<Cursor />
          </motion.h1>
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, delay: 0 }}
            className={styles.description}
          >
            I am a frontend developer, backend developer, and Flutter mobile app
            developer. I love working on challenging and innovative projects
            with a great team.
          </motion.p>
          <motion.ul
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, delay: 0 }}
            className={styles.list}
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
            className={styles.buttongp}
          >
            <button className={styles.CVBtn}>
              <a href={Resume} className={styles.CV} download="CV.pdf">
                Download Resume
              </a>
            </button>
            <button className={styles.contactBtn}>
              <a className={styles.contact} href="mailto:fuaddbus@gmail.com">
                Contact Me
              </a>
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
