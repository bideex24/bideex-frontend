/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "../../assets/logo.svg";
import flag from "../../assets/images/USAFlag.png";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  IoIosArrowDown,
  IoIosNotifications,
  IoIosSearch,
} from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useGetUserQuery } from "../../redux/api/api";

import userImg from "../../../public/profile-photo.jpeg";
const Navbar1 = () => {
  const { user, logOut }: any = useContext(AuthContext);
  const { data } = useGetUserQuery(user?.email);
  console.log(data);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("userId");
        // navigate(from, { replace: true });
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  const handleToggle = (e: any) => {
    console.log(e);
  };
  return (
    <div className="bg-primary">
      <div className="max-w-6xl mx-auto text-white flex justify-between align-center py-2">
        <Link to="/">
          <img
            className="w-28 md:w-24 lg:w-28 mt-0 lg:mt-2 ml-5 md:ml-0 lg:ml-0"
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="hidden md:hidden lg:block ">
          <ul className="flex align-center text-base">
            <li className="flex align-center mx-2 pt-2 inline">
              {user ? (
                <></>
              ) : (
                <>
                  <span className="mt-2 mr-2">
                    <FaUser />
                  </span>
                </>
              )}

              {data?.data.map((dbuser: any, index: number) => (
                <div>
                  {dbuser?.emailVerified == true ||
                  user.emailVerified == true ? (
                    <ul
                      key={dbuser.id || index}
                      className="flex items-center gap-3"
                    >
                      <button>
                        <IoIosNotifications className="text-2xl text-white" />
                      </button>
                      <div className="dropdown dropdown-end">
                        <div className="flex gap-3">
                          <div tabIndex={0} role="button" className="">
                            <div key={dbuser._id || index}>
                              {data?.data.map((dbUser: any, index: number) =>
                                dbUser.imagePath ? (
                                  <div key={dbUser.id || index}>
                                    <span>
                                      <img
                                        key={dbUser.id || index}
                                        className="w-9 rounded-full"
                                        src={`http://localhost:5000/uploads/${dbUser.imagePath}`}
                                        alt="userprofile"
                                      />
                                    </span>
                                  </div>
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
                          </div>
                          <button onClick={handleToggle}>
                            <IoIosArrowDown className="text-white" />
                          </button>
                        </div>
                        <ul
                          tabIndex={0}
                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 p-2 -mr-10 shadow"
                        >
                          <li className="mt-1">
                            <Link
                              to="/login"
                              className="text-black text-sm font-bold mr-4"
                            >
                              Post a ad
                            </Link>
                          </li>
                          <hr />
                          <li className="mt-1">
                            <Link
                              to=""
                              className="text-black text-sm font-bold mr-4"
                            >
                              View profile
                            </Link>
                          </li>
                          <li className="mt-1">
                            <Link
                              to="/dashboard/user"
                              className="text-black text-sm font-bold mr-4"
                            >
                              Dashboard
                            </Link>
                          </li>
                          <li className="mt-1">
                            <Link
                              to="/dashboard/profile/password&security"
                              className="text-black text-sm font-bold mr-4"
                            >
                              Settings
                            </Link>
                          </li>
                          <hr />
                          <li className="mt-1">
                            <Link
                              to="/dashboard/user"
                              className="text-black text-sm font-bold mr-4"
                            >
                              Support
                            </Link>
                          </li>
                          <li className="mt-1">
                            <Link
                              to="/dashboard/user"
                              className="text-black text-sm font-bold mr-4"
                            >
                              Community
                            </Link>
                          </li>
                          <hr />
                          <li className="mt-1">
                            <button
                              onClick={handleLogOut}
                              className="text-black text-sm font-bold mr-4"
                            >
                              Log Out
                            </button>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  ) : (
                    <div>
                      <Link className="mt-2 text-sm" to="/login">
                        Login
                      </Link>
                      <span className="ml-2 mt-2 mr-2">|</span>
                      <li className="underline pt-2 text-sm">
                        <Link to="">How It works</Link>
                        <span className="ml-2">|</span>
                      </li>
                      <li className="mx-2 pt-2 text-sm">
                        <Link to="">Help</Link>
                      </li>
                      <img className="w-10 h-5 mt-2 mr-2" src={flag} alt="" />
                      <li className="mt-2 mr-2 text-sm">
                        <Link to="">Eng</Link>
                      </li>
                      <div>
                        <Link
                          to="/"
                          className="btn btn-sm text-white text-sm hover:bg-secondary bg-secondary border-0"
                        >
                          Post an Add
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {user ? (
                <></>
              ) : (
                <>
                  <Link className="mt-2 text-sm" to="/login">
                    Login
                  </Link>
                  <span className="ml-2 mt-2 mr-2">|</span>
                  <li className="underline pt-2 text-sm">
                    <Link to="">How It works</Link>
                    <span className="ml-2">|</span>
                  </li>
                  <li className="mx-2 pt-2 text-sm">
                    <Link to="">Help</Link>
                  </li>
                  <img className="w-10 h-5 mt-2 mr-2" src={flag} alt="" />
                  <li className="mt-2 mr-2 text-sm">
                    <Link to="">Eng</Link>
                  </li>
                  <div>
                    <Link
                      to="/post-a-ad"
                      className="btn btn-sm text-white text-sm hover:bg-secondary bg-secondary border-0"
                    >
                      Post an Add
                    </Link>
                  </div>
                </>
              )}
            </li>
          </ul>
        </div>
        <div className="flex gap-2 items-center md:hidden">
          <Link className="text-2xl" to="">
            <IoIosSearch />
          </Link>
          <Link className="mr-10" to="/login">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
