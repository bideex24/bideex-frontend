import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <div className="z-0">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
};

export default Main;
