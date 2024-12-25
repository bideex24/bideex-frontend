/* eslint-disable @typescript-eslint/no-explicit-any */
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

  return (
    <section className="bg-white rounded-xl max-w-4xl mx-auto">
      {/* top section start here */}
      <section>
        <div className="px-6 py-4 flex justify-between items-center">
          <h4 className="text-sm font-bold">My profile</h4>
        </div>
        <hr />
      </section>
      {/* bottom section start here */}
      <section className="flex bg-[#f6f6f6] md:bg-[#f6f6f6] h-screen">
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
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </section>
    </section>
  );
};

export default EditProfile;
