/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import {
  FaRegBookmark,
  FaRegEdit,
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Navbar1 from "../Pages/Shared/Navbar1";
import { TfiDashboard } from "react-icons/tfi";
import {
  MdAddCircleOutline,
  MdOutlineClosedCaptionOff,
  MdOutlineEmail,
} from "react-icons/md";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IoFlashOutline } from "react-icons/io5";

const Dashboard = () => {
  const activeStyle = {
    borderLeft: "5px solid red",
    color: "red",
    // padding: "0px 0px 0px 20px",
  };
  const { user, logOut }: any = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <>
      <div>
        <Navbar1></Navbar1>
      </div>
      <div className="bg-[#f6f6f6] md:bg-[#f6f6f6]">
        <div className="max-w-6xl mx-auto flex">
          {/* dashboard sidebar */}
          <div className="w-72 h-screen bg-white">
            <ul className="text-black  mt-6 text-sm">
              <div className="mb-4 w-56 mx-auto">
                <div className="flex gap-4 items-center">
                  <div className="">
                    {user?.photoURL ? (
                      <>
                        <img
                          className="rounded-full w-12"
                          src={user?.photoURL}
                          alt=""
                        />
                      </>
                    ) : (
                      <>
                        <span className="text-3xl text-primary">
                          <FaRegUser />
                        </span>
                      </>
                    )}
                  </div>
                  <section>
                    <h1 className=" text-sm font-bold text-primary">
                      {user?.displayName}
                    </h1>
                    <h1 className="text-primary text-sm font-bold ">
                      {user.userName} @username
                    </h1>
                  </section>
                </div>
                <div className="border border-gray-200 w-72 mt-4 -ml-8"></div>
              </div>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="pl-10 flex gap-3 items-center"
                  to="/dashboard/user"
                >
                  <TfiDashboard />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="pl-10 flex gap-3 items-center"
                  to="/dashboard/profile"
                >
                  <FaRegEdit />
                  <span>Edit Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="pl-10 flex gap-3 items-center"
                  to="/dashboard/my-ads"
                >
                  <IoFlashOutline />
                  <span>My Ads</span>
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="pl-10 flex gap-3 items-center"
                  to="/dashboard/favourite-ads"
                >
                  <FaRegHeart />
                  <span> Favourite ads</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="pl-10 flex gap-3 items-center"
                  to="/dashboard/Post-an-ad"
                >
                  <MdAddCircleOutline />
                  <span>Post An Ad</span>
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="pl-10 flex gap-3 items-center"
                  to="/dashboard/bookmarked"
                >
                  <FaRegBookmark />
                  <span>Bookmarked</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="pl-10 flex gap-3 items-center"
                  to="/dashboard/message"
                >
                  <MdOutlineEmail />
                  Messages
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="pl-10 pl-10 flex gap-3 items-center"
                  to="/dashboard/close-account"
                >
                  <MdOutlineClosedCaptionOff />
                  <span>Close Account</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="pl-10 flex gap-3 items-center"
                  to="/dashboard/invoice"
                >
                  <LiaFileInvoiceDollarSolid />
                  <span>Invoice</span>
                </NavLink>
              </li>
              <button className="ml-10 flex justify-center text-sm gap-2 w-40 mt-4 bg-rose-100 px-2 rounded mb-5 text-rose-500">
                <a onClick={handleLogOut} className="">
                  Logout
                </a>
              </button>
            </ul>
          </div>
          {/* dashboard content */}
          <div className="flex-1 pl-6 py-6">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
