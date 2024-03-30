import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Example content - replace with your actual content
  const skills = [
    { name: "C++", percentage: 87 },
    { name: "Python", percentage: 86 },
    { name: "Docker", percentage: 85 },
    { name: "Figma", percentage: 95 },
    { name: "TypeScript", percentage: 90 },
    { name: "Node.js", percentage: 92 },
    { name: "MongoDB", percentage: 70 },
    { name: "Three.js", percentage: 70 },
    { name: "Redux", percentage: 95 },
    { name: "Javascript", percentage: 95 },
  ];

  return (
    <div className={`works ${darkMode ? 'dark' : 'light'}`} id="skill">
      <div className="i-name" style={{marginBottom:60}}>
        <span style={{fontSize:45, color: darkMode ? "white" : ""}}>My</span>
        <span>Skills</span>
        </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              backgroundColor: `rgb(255, 112, 112)`, // Adjust background color based on percentage
              color: darkMode ? '#fff' : '#333' // Adjust text color based on dark mode
            }}
          >
            <p>{skill.name}</p>
            <p>{skill.percentage}%</p>
          </motion.div>
        ))}
      </div>
      <Link
        to="youtube-video"  // Add the ID of the element where the YouTube video is placed
        spy={true}
        smooth={true}
        duration={500}
        className="link-to-video"
      >
        Go to Video
      </Link>
    </div>
  );
};

export default Works;
