import React from "react";
import { motion } from "framer-motion";
import imageStreamingWeb from "../img/chillMovie.png";
import imageTodoListWeb from "../img/todoList.png";
import imageAdminLaundry from "../img/web admin laundrey.png";

const projects = [
  {
    id: 1,
    title: "To-do list web",
    description:
      "A Todo List website built with JavaScript allows users to add, edit, and delete tasks. Tasks are stored in the browser's local storage for easy access. The simple and responsive interface helps users manage their tasks efficiently.",
    image: imageTodoListWeb,
    link: "https://github.com/Rifaldy1292/tugas-4",
  },
  {
    id: 2,
    title: "Movie streaming web",
    description:
      "The movie streaming website is responsive with features such as email verification for user login. Built with React and Tailwind, it offers a seamless browsing experience. The site stores movie data and user information securely in a MySQL database.",
    image: imageStreamingWeb,
    link: "https://github.com/Rifaldy1292/misi-5-hari-senin",
  },
  {
    id: 3,
    title: "Admin Laundry Web",
    description:
      "Admin web app to manage customer and transaction data. Key features include Customer Data Management: Add, change, and delete information, and add transactions. Interactive Dashboard: Displays customer statistics, revenue, and transaction reports.Built using React.js with a responsive and easy-to-use design.",
    image: imageAdminLaundry, // Pastikan ini didefinisikan dengan benar
    link: "https://github.com/Rifaldy1292/web-admin-laundery",
  },
];

const ProjectsPage = () => {
  return (
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

            {/* Tombol */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-gray-600 text-center text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
