import { motion } from "framer-motion";
import Button from "./ui/button";
import avatar from "../img/hinh-anh-avatar-luffy-cuoi.jpg";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="md:p-[40px] md:pl-[90px] flex pl-[10px] pb-16">
      <div className="w-[200px] mt-[120px] ">
        {/* Animasi untuk tombol */}
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Memulai dengan transparansi 0 dan posisi di atas
          animate={{ opacity: 1, y: 0 }} // Teks dan tombol akan muncul dengan animasi
          transition={{ duration: 1, delay: 0.3 }} // Durasi animasi dan sedikit delay untuk tombol
        >
          <Button addClass="mt-[15px]">
            {" "}
            <Link to="/aboutMe">AboutMe</Link>{" "}
          </Button>
          <Button addClass="mt-[15px]">
            <Link to="/project">Project</Link>
          </Button>

          <Button addClass="mt-[15px]">
            {" "}
            <Link to="/journey">Journey</Link>{" "}
          </Button>
        </motion.div>
      </div>
      <div className="e w-full flex flex-col md:flex-row h-full px-4 md:px-10">
        <div className="md:ml-[50px]">
          <div className="flex flex-col md:flex-row items-center">
            {/* Animasi untuk gambar */}
            <motion.img
              src={avatar}
              alt="avatar"
              className="object-cover  object-top w-[150px] h-[150px] md:w-[270px] md:h-[270px] border border-white border-[1px] rounded-[15px] mb-4 md:mb-0 md:mr-[40px]"
              initial={{ scale: 0 }} // Memulai dengan gambar kecil
              animate={{ scale: 1 }} // Menjadi ukuran normal (zoom-in)
              transition={{ duration: 1 }} // Durasi animasi
            />
            {/* Animasi untuk teks */}
            <motion.span
              className="text-white text-[14px] md:text-[18px] text-center md:text-left"
              initial={{ x: -200, opacity: 0 }} // Memulai dengan posisi teks di sebelah kiri dan transparan
              animate={{ x: 0, opacity: 1 }} // Geser ke posisi normal dan opasitas penuh
              transition={{ duration: 1, delay: 0.3 }} // Durasi dan delay sedikit sebelum teks bergerak
            >
              Welcome to my portfolio! I’m a junior Front-End Developer
              passionate about building responsive websites. Currently, I’m
              learning Fullstack Development. I work with React, HTML, CSS, and
              JavaScript, and I’m expanding my skills with Node.js, Express, and
              MySQL. I’m focused on creating user-friendly applications and
              always improving my skills. Feel free to check out some of the
              projects I’ve worked on!
            </motion.span>
          </div>
          <div>
            <motion.div
              className="text-white mt-[20px] text-[18px] md:text-[32px] text-center md:text-left"
              initial={{ x: -200, opacity: 0 }} // Memulai dengan posisi teks di sebelah kiri dan transparan
              animate={{ x: 0, opacity: 1 }} // Geser ke posisi normal dan opasitas penuh
              transition={{ duration: 1, delay: 0.5 }} // Durasi dan delay sedikit
            >
              Creating an efficient and intuitive web experience
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
