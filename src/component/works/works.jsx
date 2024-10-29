import React, { useEffect, useState } from "react";
import projects from "../../data/project.json";
import ProjectCard from "./ProjectCard";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";


const Works = ({ isLight }) => {
  const Fastduration = 35;
  const Slowduration = 75;
  const [duration, setDuration] = useState(Fastduration);
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    let controls;
    if (width > 768) {
      let finalPosition = -width / 2 - 8;
      if (mustFinish) {
        controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
          ease: "linear",
          duration: duration * (1 - xTranslation.get() / finalPosition),
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
          onComplete: () => {
            setMustFinish(false);
            setRerender(!rerender);
          },
        });
      } else {
        controls = animate(xTranslation, [0, finalPosition], {
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        });
      }
    }
    return () => {
      if (controls) controls?.stop();
    };
  }, [xTranslation, width, duration,rerender,mustFinish]);
  const pr =
    window.innerWidth > 768 ? [...projects, ...projects] : [...projects];

  return (
    <section className="h-full w-screen overflow-hidden">
      <h2 className="text-center mt-8 text-2xl md:mb-8">Projects</h2>
      <p className="p-8 hidden md:block">
        These are samples of my projects. I invite you to explore them and check
        out the code. To view the samples, simply click on "Source" to see the
        code repository and then click on "Demo" to experience the project in
        action. Please note that some of these projects do not have a demo
        available because they are applications that are not deployed as
        websites, and some of them are not deployed at all.
      </p>
      <motion.div
        initial={{ y: "100%" }}
        onHoverStart={() =>{setDuration(Slowduration);setMustFinish(true)} }
        onHoverEnd={() =>{setDuration(Fastduration);setMustFinish(true)} }
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.7, delay: 0 }}
        className="p-8 md:p-0 w-fit  flex flex-col scroll-mx-0 md:h-screen md:flex-row inset-y-4 md:left-0 gap-4 "
        ref={ref}
        style={{ x: xTranslation }}
      >
        {pr.map((project, id) => (
          <ProjectCard isLight={isLight} project={project} key={id} />
        ))}
      </motion.div>
    </section>
  );
};

export default Works;
