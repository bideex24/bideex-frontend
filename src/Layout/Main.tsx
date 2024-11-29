import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  const location = useLocation();
  const hideNavbarAndFooter =
    location.pathname === "/login" || location.pathname === "/signup";
  return (
    <div className="bg-white">
      {!hideNavbarAndFooter && <Navbar />}
      <div className="z-0">
        <Outlet></Outlet>
      </div>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
};

export default Main;
