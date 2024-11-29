/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "../../assets/logo.svg";
import flag from "../../assets/images/USAFlag.png";
import { FaRegUserCircle, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useGetUserQuery } from "../../redux/api/api";

const Navbar1 = () => {
  const { user }: any = useContext(AuthContext);
  const { data, isLoading } = useGetUserQuery(undefined);
  console.log("user", data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(data.data.length);
  return (
    <div className="bg-primary">
      {data?.data.map((user: any) => (
        <h1 className="text-white">{user.email}</h1>
      ))}
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
              {user ? (
                <>
                  <li className="mt-1">
                    <Link
                      to="/dashboard/user"
                      className="text-white text-sm font-bold mr-4"
                    >
                      Dashboard
                    </Link>
                  </li>
                  {user?.photoURL ? (
                    <>
                      <img
                        className="w-10 rounded-full"
                        alt="user"
                        src={user.photoURL}
                      />
                    </>
                  ) : (
                    <>
                      <span className="text-3xl text-white">
                        <FaRegUserCircle />
                      </span>
                    </>
                  )}
                </>
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
                </>
              )}
            </li>
            <div>
              <Link
                to=""
                className="btn text-white text-sm hover:bg-secondary bg-secondary border-0"
              >
                Post an Add
              </Link>
            </div>
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
