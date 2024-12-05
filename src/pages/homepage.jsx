import Navbar from "../component/navbar";
import Content from "../component/content";
import Footer from "../component/footer";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[70px]">
        <Content></Content>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
