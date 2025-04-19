import React from "react";
import { motion } from "framer-motion";
import Button from "../component/ui/button";
import { Link } from "react-router-dom";
import sms from "../img/pesan.png";

const journeyData = [
  {
    id: 1,
    title: "Graduated from SMK ",
    description:
      "I graduated from SMK in 2020 majoring in Machining Engineering.",
    date: "2020",
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
    title: "Graduated from harisenin.com fullstack Web Development Bootcamp",
    description:
      "I completed an intensive web development bootcamp, gaining hands-on experience in building web applications using modern technologies. During the bootcamp, I honed my skills in React for building dynamic user interfaces, Node.js for server-side development, and MySQL for database management.",
    date: "December 2024",
    link: "https://drive.google.com/file/d/1QkJpGIzgl0pvZ6Wr8rJ1v7t_4lNsgwxm/view?usp=sharing",
  },
  {
    id: 4,
    title: "Graduated from enigmacamo React js Bootcamp",
    description:
      "I successfully completed a React JS Bootcamp at Enigmacamp, where I focused on building modern and responsive web applications. Throughout the program, I deepened my understanding of component-based architecture, state management with React, and integration with APIs.",
    date: "January 2025",
    link: "https://drive.google.com/file/d/1HrMF2b_AqBO4V6j0cBvfRqZdt5DWieT2/view?usp=sharing",
  },
];

const JourneyPage = () => {
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full h-[81px] md:text-[34px] absolute text-[white] flex justify-between md:p-[40px] p-[5px] pl-[10px] md:pl-[90px]">
          <div className="w-full  mt-auto flex justify-between">
            <Button addClass="mt-[5px]">
              <Link to="/">Home</Link>
            </Button>

            <div className="flex ">
              <motion.div
                className="bg-gray-400 cursor-pointer bg-opacity-20 rounded-full w-[42px] h-[42px] mt-[8px] ml-[20px]"
                whileHover={{ scale: 1.1 }} // Animasi saat hover
                whileTap={{ scale: 0.95 }} // Animasi saat tap
              >
                {" "}
                <Link to="/contact">
                  {" "}
                  <img src={sms} alt="SMS icon" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>{" "}
      </motion.div>
      <div className="p-8 min-h-screen text-white">
        <h1 className="text-4xl text-center font-bold mb-12">My Journey</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeyData.map((journey) => (
            <motion.div
              key={journey.id}
              className="flex flex-col bg-gray-400 bg-opacity-20 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * journey.id }}
            >
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold text-white">
                  {journey.title}
                </div>
                <div className="text-sm text-gray-400">{journey.date}</div>
              </div>

              <p className="text-gray-300 mt-4">{journey.description}</p>

              {/* Tombol hanya muncul untuk ID 3 */}
              {[3, 4].includes(journey.id) && (
                <button
                  className="mt-5 bg-gray-600 text-center text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                  onClick={() => window.open(journey.link, "_blank")}
                >
                  Show Certificate
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JourneyPage;
