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
  return (
    <>
      <Navbar1></Navbar1>
      <div className="flex">
        {/* dashboard sidebar */}
        <div className="w-64 min-h-screen bg-white shadow-2xl">
          <ul className="text-black w-40 mx-auto mt-6 text-xl">
            <div className="mb-4">
              <div className="flex justify-center">
                {user?.photoURL ? (
                  <>
                    <img src={user?.photoURL} alt="" />
                  </>
                ) : (
                  <>
                    <span className="text-3xl text-green-400">
                      <FaRegUser />
                    </span>
                  </>
                )}
              </div>
              <h1 className="text-center text-black font-bold">
                {user?.displayName}
              </h1>
              <h1 className="text-black">{user?.email}</h1>
              <div className="border border-gray-200 w-64 -ml-12"></div>
            </div>
            <li>
              <NavLink className="flex gap-3 items-center" to="/dashboard/user">
                <TfiDashboard className="text-black" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="py-4">
              <NavLink
                className="flex gap-3 items-center"
                to="/dashboard/edit-profile"
              >
                <FaRegEdit className="text-black" />
                <span>Edit Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex gap-3 items-center"
                to="/dashboard/my-ads"
              >
                <IoFlashOutline className="text-black text-2xl" />
                <span>My Ads</span>
              </NavLink>
            </li>
            <li className="py-4">
              <NavLink
                className="flex gap-3 items-center"
                to="/dashboard/favourite-ads"
              >
                <FaRegHeart className="text-black" />
                <span> Favourite ads</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex gap-3 items-center"
                to="/dashboard/Post-an-ad"
              >
                <MdAddCircleOutline className="text-black" />
                <span>Post An Ad</span>
              </NavLink>
            </li>
            <li className="py-4">
              <NavLink
                className="flex gap-3 items-center"
                to="/dashboard/bookmarked"
              >
                <FaRegBookmark className="text-black" />
                <span>Bookmarked</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex gap-3 items-center"
                to="/dashboard/message"
              >
                <MdOutlineEmail className="text-black" />
                Messages
              </NavLink>
            </li>
            <li className="py-4">
              <NavLink
                className="flex gap-3 items-center"
                to="/dashboard/close-account"
              >
                <MdOutlineClosedCaptionOff className="text-black" />
                <span>Close Account</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex gap-3 items-center"
                to="/dashboard/invoice"
              >
                <LiaFileInvoiceDollarSolid className="text-black" />
                <span>Invoice</span>
              </NavLink>
            </li>
          </ul>
          <button className="flex justify-center text-2xl gap-2 w-40 mt-4 bg-rose-100 px-2 rounded ml-8 mb-5 text-rose-500">
            <a onClick={handleLogOut} className="">
              Logout
            </a>
          </button>
        </div>
        {/* dashboard content */}
        <div className="flex-1 px-6 py-6">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
