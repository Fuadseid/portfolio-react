import React from "react";
import styles from "./Projectcard.module.css";
const ProjectCard = ({
  project: { title, imageSrc, skills, demo, source, description },isLight
}) => {
  return (
    <div  className={isLight?styles.container:styles.containerdark}>
      <img
        src={require(`../../asset/${imageSrc}`)}
        alt={`Image of ${title}`}
        style={{ width: 288, height: 300 }}
        className={styles.image}
        
      />
   <div className={styles.all}>
          <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, skillId) => (
          <li className={styles.skill} key={skillId}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={demo}>
          Demo
        </a>
        <a className={styles.link} href={source}>
          Source
        </a>
      </div>
   </div>

    </div>
  );
};

export default ProjectCard;
