import React from "react";
import { motion } from "framer-motion";
import avatar from "../img/hinh-anh-avatar-luffy-cuoi.jpg";
import SkillLogos from "../component/ui/skill";
import Button from "../component/ui/button";
import { Link } from "react-router-dom";
import sms from "../img/pesan.png";
const AboutMe = () => {
  return (
    <>
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
      <section className=" text-white py-16 px-8 min-h-screen flex items-center justify-center">
        <motion.div
          className="container mx-auto text-center max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Judul */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>

          {/* Deskripsi */}
          <p className="text-lg sm:text-xl text-gray-400 mb-8">
            I am an enthusiastic web developer with expertise in front-end
            technologies such as React, JavaScript, and Tailwind CSS. I enjoy
            building beautiful, user-friendly websites and love exploring new
            technologies. I'm also a fullstack enthusiast who is constantly
            learning and interested in understanding the backend side of web
            development.
          </p>

          {/* Foto */}
          <div className="flex justify-center mb-8">
            <motion.img
              src={avatar} // Ganti dengan path foto Anda
              alt="Your Name"
              className="w-48 h-48 object-cover rounded-full border-4 border-blue-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Kontak */}
          <div className="flex justify-center gap-4">
            <motion.a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mochamadrifkyrifaldy@gmail.com" // Ganti dengan email Anda
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition duration-300"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mochamad-rifky-rifaldy-a79177313/" // Ganti dengan LinkedIn Anda
              className=" bg-gray-400 bg-opacity-20 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition duration-300"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              LinkedIn
            </motion.a>
          </div>
          <SkillLogos />
        </motion.div>
      </section>
    </>
  );
};

export default AboutMe;
