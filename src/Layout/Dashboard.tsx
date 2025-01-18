/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { FaRegBookmark, FaRegEdit, FaRegHeart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
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
import { useGetUserQuery } from "../redux/api/api";
import Loading from "../Pages/Shared/Loading/Loading";
import userImg from "../../public/profile-photo.jpeg";

const Dashboard = () => {
  const activeStyle = {
    borderLeft: "5px solid red",
    color: "red",
    // padding: "0px 0px 0px 20px",
  };
  const { logOut, loading }: any = useContext(AuthContext);
  const email = localStorage.getItem("email");
  const { data, isLoading } = useGetUserQuery(email);
  console.log(data);
  if (loading || isLoading) {
    <Loading></Loading>;
  }
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // navigate(from, { replace: true });
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
      <div>
        <div className="bg-[#f6f6f6] md:bg-[#f6f6f6] h-[700px]">
          <div className="max-w-6xl mx-auto flex">
            {/* dashboard sidebar */}
            <div className="w-72  bg-white">
              <ul className="text-black  mt-6 text-sm">
                <div className="mb-4 w-56 mx-auto">
                  <div className="flex gap-4 items-center">
                    <div className="">
                      {data?.data.map((dbUser: any) =>
                        dbUser.imagePath ? (
                          <>
                            <span>
                              <img
                                className="w-9 rounded-full"
                                src={`http://localhost:5000/uploads/${dbUser.imagePath}`}
                                alt="userprofile"
                              />
                            </span>
                          </>
                        ) : (
                          <>
                            <span>
                              <img
                                className="w-9 rounded-full"
                                src={userImg}
                                alt="userprofile"
                              />
                            </span>
                          </>
                        )
                      )}
                    </div>
                    <section>
                      {data?.data.map((dbUser: any) => (
                        <>
                          {dbUser ? (
                            <>
                              <h1 className=" text-sm font-bold text-primary">
                                {`${dbUser?.name?.firstName || "firstName"} ${
                                  dbUser?.name?.lastName || "lastName"
                                }`}
                              </h1>

                              <h2 className="text-primary text-sm font-bold ">
                                @{dbUser?.name?.userName || "username"}
                              </h2>
                            </>
                          ) : (
                            <>
                              <h1 className="text-primary text-sm font-bold ">
                                @username
                              </h1>
                            </>
                          )}
                        </>
                      ))}
                    </section>
                  </div>
                  <div className="border border-gray-200 w-72 mt-4 -ml-8"></div>
                </div>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="pl-10 flex gap-3 items-center"
                    to="/dashboard/user"
                  >
                    <TfiDashboard />
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="pl-10 flex gap-3 items-center"
                    to="/dashboard/profile"
                  >
                    <FaRegEdit />
                    <span>Edit Profile</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="pl-10 flex gap-3 items-center"
                    to="/dashboard/my-ads"
                  >
                    <IoFlashOutline />
                    <span>My Ads</span>
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="pl-10 flex gap-3 items-center"
                    to="/dashboard/favourite-ads"
                  >
                    <FaRegHeart />
                    <span> Favourite ads</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="pl-10 flex gap-3 items-center"
                    to="/dashboard/post-an-ad/sell/step1"
                  >
                    <MdAddCircleOutline />
                    <span>Post An Ad</span>
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="pl-10 flex gap-3 items-center"
                    to="/dashboard/bookmarked"
                  >
                    <FaRegBookmark />
                    <span>Bookmarked</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="pl-10 flex gap-3 items-center"
                    to="/dashboard/message"
                  >
                    <MdOutlineEmail />
                    Messages
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="pl-10 pl-10 flex gap-3 items-center"
                    to="/dashboard/close-account"
                  >
                    <MdOutlineClosedCaptionOff />
                    <span>Close Account</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
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
      </div>
    </>
  );
};

export default Dashboard;
