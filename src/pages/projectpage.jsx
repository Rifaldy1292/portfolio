import React from "react";
import { motion } from "framer-motion";
import imageStreamingWeb from "../img/chillMovie.png";
import imageTodoListWeb from "../img/todoList.png";
import imageAdminLaundry from "../img/web admin laundrey.png";
import landingPageGarment from "../img/landing-page-garmen.png";
import laravelVue from "../img/crud-laravel-vue.png";
import Button from "../component/ui/button";
import { Link } from "react-router-dom";
import { FaLaravel, FaVuejs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiJavascript } from "react-icons/si";
import kinerjaku from "../img/kinerjaku-web.png";
import sms from "../img/pesan.png";
const projects = [
  {
    id: 6,
    title: "Kinerjaku Web",
    description:
      "This web application is designed as a tool for HR to effectively monitor and manage employee performance across each division. Featuring structured reporting, an easy-to-use dashboard, and the ability to export data in Excel or PDF formats, HR can efficiently oversee evaluations, targets, and employee development with greater transparency.",
    image: kinerjaku, // Pastikan ini didefinisikan dengan benar
    link: "https://github.com/randytjioe/management-employee-kpi",

    technology: (
      <div className="flex gap-3">
        {" "}
        <FaLaravel />
        <FaReact />
        <SiTailwindcss />
      </div>
    ),
  },
  {
    id: 5,
    title: "Web CRUD admin Laravel + vue JS",
    description:
      "A functional admin dashboard built with Laravel and Vue.js, providing essential Create, Read, Update, and Delete operations. Designed primarily for utility and data management, focusing on core features over design aesthetics.",
    image: laravelVue, // Pastikan ini didefinisikan dengan benar
    link: "https://github.com/Rifaldy1292/laravel-vue-test-project-PtPifacia",
    live: "https://landigpage-garment.vercel.app/",
    technology: (
      <div className="flex gap-3">
        {" "}
        <FaLaravel />
        <FaVuejs />
        <SiTailwindcss />
      </div>
    ),
  },
  {
    id: 4,
    title: "Landing Page PT Garmen",
    description:
      "PT Garmen Landing Page The official website showcasing PT Garmen's profile and services. Built with React and Tailwind CSS, featuring a responsive and modern design to create a professional impression for visitors.",
    image: landingPageGarment, // Pastikan ini didefinisikan dengan benar
    link: "https://github.com/Rifaldy1292/web-admin-laundery",
    live: "https://landigpage-garment.vercel.app/",
    technology: (
      <div className="flex gap-3">
        {" "}
        <SiTailwindcss />
        <FaReact />
      </div>
    ),
  },
  {
    id: 2,
    title: "Movie streaming web",
    description:
      "The movie streaming website is responsive with features such as email verification for user login. Built with React and Tailwind, it offers a seamless browsing experience. The site stores movie data and user information securely in a MySQL database.",
    image: imageStreamingWeb,
    link: "https://github.com/Rifaldy1292/misi-5-hari-senin",
    technology: (
      <div className="flex gap-3">
        {" "}
        <SiTailwindcss />
        <FaReact />
        <SiExpress />
      </div>
    ),
  },
  {
    id: 3,
    title: "Admin Laundry Web",
    description:
      "Admin web app to manage customer and transaction data. Key features include Customer Data Management: Add, change, and delete information, and add transactions. Interactive Dashboard: Displays customer statistics, revenue, and transaction reports.Built using React.js with a responsive and easy-to-use design.",
    image: imageAdminLaundry, // Pastikan ini didefinisikan dengan benar
    link: "https://github.com/Rifaldy1292/web-admin-laundery",
    technology: (
      <div className="flex gap-3">
        {" "}
        <SiTailwindcss />
        <FaReact />
      </div>
    ),
  },

  {
    id: 1,
    title: "To-do list web",
    description:
      "A Todo List website built with JavaScript allows users to add, edit, and delete tasks. Tasks are stored in the browser's local storage for easy access. The simple and responsive interface helps users manage their tasks efficiently.",
    image: imageTodoListWeb,
    link: "https://github.com/Rifaldy1292/tugas-4",
    technology: (
      <div className="flex gap-3">
        {" "}
        <SiJavascript />
      </div>
    ),
  },
];

const ProjectsPage = () => {
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
      <div className="p-8 min-h-screen ">
        <h1 className="text-4xl text-white text-center mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-700 bg-opacity-50 rounded-lg p-4 shadow-lg hover:shadow-xl transition flex flex-col"
              initial={{ opacity: 0, y: 50 }} // Memulai dengan opacity 0 dan posisi sedikit lebih rendah
              animate={{ opacity: 1, y: 0 }} // Bergerak ke posisi normal dengan opacity penuh
              transition={{
                duration: 0.8, // Durasi lebih lama untuk transisi yang lebih halus
                ease: "easeOut", // Efek easing untuk transisi lebih alami
              }}
            >
              {/* Gambar Proyek */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {/* Judul dan Deskripsi */}
              <h2 className="text-xl text-white mt-4">{project.title}</h2>
              <p className="text-gray-300 mt-2 flex-grow">
                {project.description}
              </p>
              <div className="text-xl flex text-white mt-4 gap-3">
                Tech : <div>{project?.technology}</div>
              </div>
              <div className="mt-5 flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center  bg-gray-600 text-center text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                >
                  View Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-600 text-center text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                >
                  View Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
