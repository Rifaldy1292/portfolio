import React from "react";
import jsIcon from "../../img/js .png";
import htmlIcon from "../../img/html-5.png";
import cssIcon from "../../img/css-3.png";
import reactIcon from "../../img/science.png";
import TailwindIcon from "../../img/Screenshot 2024-12-18 074151.png";
import phpIcons from "../../img/new-php-logo.png";
import mySql from "../../img/mysql.png";
import laravel from "../../img/Laravel-Logo.png";
import { div } from "framer-motion/client";
const SkillLogos = () => {
  const skills = [
    { name: "HTML", logo: htmlIcon },
    { name: "CSS", logo: cssIcon },
    { name: "JavaScript", logo: jsIcon },
    { name: "React", logo: reactIcon },
    { name: "Tailwind", logo: TailwindIcon },
    { name: "Php", logo: phpIcons },
    { name: "MySql", logo: mySql },
    { name: "Laravel", logo: laravel },
  ];

  return (
    <div>
      {" "}
      <div className="text-xl sm:text-xl font-bold mb-6 mx-auto mt-5">
        My Skill
      </div>
      <div className="flex space-x-4 mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="w-16 h-16 rounded overflow-hidden transition duration-300 ease-in-out transform hover:scale-110"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:filter hover:drop-shadow-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillLogos;
