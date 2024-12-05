import { motion } from "framer-motion";

const Button = ({ children, addClass }) => {
  return (
    <motion.button
      className={`p-[20px] text-[15px] text-white h-[37px] bg-gray-400 bg-opacity-20 flex justify-center items-center rounded-[20px] ${addClass}`}
      whileHover={{ scale: 1.1 }} // Animasi saat hover
      whileTap={{ scale: 0.95 }} // Animasi saat tap
    >
      {children}
    </motion.button>
  );
};

export default Button;
