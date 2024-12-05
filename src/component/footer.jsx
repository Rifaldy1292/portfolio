import logoGithub from "../img/Github.png";
import logoLinkedin from "../img/Linkedin.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="w-full flex fixed bottom-0 left-0 right-0 flex justify-center" // Membuat div ini berada di tengah
      initial={{ x: "50px" }} // Mulai dari luar layar (di sebelah kiri)
      animate={{ x: 0 }} // Bergerak ke tengah (x=0)
      transition={{ duration: 0.5 }} // Durasi animasi 1 detik
    >
      <motion.div
        className="flex justify-center items-center p-[20px]"
        whileHover={{ scale: 1.1 }} // Zoom in saat hover pada seluruh div
      >
        <a
          href="https://github.com/Rifaldy1292"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src={logoGithub}
            alt="GitHub logo"
            className="mr-[10px] cursor-pointer"
            whileHover={{ scale: 1.2 }} // Zoom in saat hover pada logo GitHub
            whileTap={{ scale: 0.95 }} // Zoom out saat tap pada logo GitHub
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mochamad-rifky-rifaldy-a79177313/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src={logoLinkedin}
            alt="LinkedIn logo"
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }} // Zoom in saat hover pada logo LinkedIn
            whileTap={{ scale: 0.95 }} // Zoom out saat tap pada logo LinkedIn
          />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
