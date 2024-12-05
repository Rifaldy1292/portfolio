import Button from "./ui/button";
import Clock from "./ui/clock";
import sms from "../img/pesan.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-[81px] md:text-[34px]  text-[white] flex justify-between md:p-[40px] p-[5px] pl-[10px] md:pl-[90px]">
        <div className="w-full  mt-auto flex justify-between">
          <Button addClass="mt-[5px]">
            <Link to="/">Home</Link>
          </Button>

          <p className="ml-[50px] text-[22px] font-semibold">
            Mochamad Rifky Rifaldy
          </p>
          <div className="flex ">
            <Clock> </Clock>
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
  );
};

export default Navbar;
