/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { IoIosNotifications } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import { FaChevronRight, FaRegEdit } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { TbBrandSamsungpass } from "react-icons/tb";
import { GrPlan } from "react-icons/gr";

const EditProfile = () => {
  const activeStyle = {
    borderLeft: "5px solid red",
    color: "red",
    // padding: "0px 0px 0px 20px",
  };
  const { user }: any = useContext(AuthContext);
  return (
    <section className="bg-white rounded-xl max-w-4xl mx-auto">
      <section>
        <div className="px-6 py-4 flex justify-between items-center">
          <h4 className="text-sm font-bold">My profile</h4>
          <div className="flex items-center gap-3">
            <button>
              <IoIosNotifications className="text-2xl text-gray-400" />
            </button>
            <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
            <button>
              <RiArrowDropDownLine className="text-2xl text-gray-400" />
            </button>
          </div>
        </div>
        <hr />
      </section>
      {/* bottom section start here */}
      <section className="flex bg-[#f6f6f6] md:bg-[#f6f6f6]">
        <div className="w-56 h-screen bg-white">
          <ul className="text-black  mt-6 text-sm">
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="pl-10 flex gap-2 items-center"
                to="/dashboard/profile/edit"
              >
                <MdOutlineEdit />
                <span>Edit Profile</span>
                <FaChevronRight />
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="pl-10 flex gap-2 items-center"
                to="/dashboard/profile/notification"
              >
                <FaRegEdit />
                <span>Notifications</span>
                <FaChevronRight />
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="pl-10 flex gap-2 items-center"
                to="/dashboard/profile/choose-plan"
              >
                <GrPlan />
                <span>Choose Plan</span>
                <FaChevronRight />
              </NavLink>
            </li>
            <li className="">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="pl-10 flex gap-2 items-center"
                to="/dashboard/profile/password&security"
              >
                <TbBrandSamsungpass />
                <span>Password & Security</span>
                <FaChevronRight />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 pl-6 py-6">
          <Outlet></Outlet>
        </div>
      </section>
    </section>
  );
};

export default EditProfile;
