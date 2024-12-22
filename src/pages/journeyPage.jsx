import React from "react";
import { motion } from "framer-motion";

const journeyData = [
  {
    id: 1,
    title: "Graduated from SMK ",
    description:
      "I graduated from SMK in 2020 majoring in Machining Engineering.",
    date: " 2020",
  },
  {
    id: 2,
    title: "Started Learning Web Development",
    description:
      "I began my journey into web development by learning HTML, CSS, and JavaScript. This was the foundation of my career in the tech world.",
    date: "January 2021",
  },

  {
    id: 3,
    title: "Graduated from fullstack Web Development Bootcamp",
    description:
      "I completed an intensive web development bootcamp , gaining hands-on experience in building web applications using modern technologies. During the bootcamp, I honed my skills in React for building dynamic user interfaces, Node.js for server-side development, and MySQL for database management.",
    date: "December 2024",
  },
];

const JourneyPage = () => {
  return (
    <div className="p-8 min-h-screen text-white">
      <h1 className="text-4xl text-center font-bold mb-12">My Journey</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {journeyData.map((journey) => (
          <motion.div
            key={journey.id}
            className="flex flex-col  bg-gray-400 bg-opacity-20 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * journey.id }}
          >
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-white-400">
                {journey.title}
              </div>
              <div className="text-sm text-gray-400">{journey.date}</div>
            </div>

            <p className="text-gray-300 mt-4">{journey.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JourneyPage;
