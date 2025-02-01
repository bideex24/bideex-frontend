/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import logo from "../../../public/bideex_logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard/user";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn }: any = useContext(AuthContext);
  const onSubmit = (data: any) => {
    // let email = localStorage.setItem("userId", data.email);
    // console.log(email);
    signIn(data.email, data.password)
      .then((result: any) => {
        const user = result.user;
        console.log(user);
        toast.success("User login Successfull!", {
          position: "bottom-center",
        });
        navigate(from, { replace: true });
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <section className="max-w-6xl mx-auto">
      <header>
        <nav className="flex md:justify-start	 justify-center">
          <Link to="/">
            <img className="md:w-40 w-24 mt-10 " src={logo} alt="" />
          </Link>
        </nav>
      </header>
      <section className=" grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center">
          <div>
            <Helmet>
              <title>
                Login to Bideex - Buy, Sell and Rent Locally & Internationally |
                Access Your Marketplace Account
              </title>
            </Helmet>
            <div>
              <Toaster />
            </div>
            <h1 className="text-center md:text-start text-2xl md:text-4xl font-bold my-3 md:my-0 mx-4 md:mx-0 text-black">
              Welcome Back to Bideex!
            </h1>
            <p className="text-xl my-3 md:my-0 mt-3 mx-4 md:mx-0 text-black">
              login to buy, sell, or rent items locally and globally. Explore
              auctions, list your items, and connect with buyers and sellers
              worldwide.{" "}
            </p>
          </div>
        </div>
        <div className="bg-white mb-10 md:my-8 lg:my-10">
          <form
            className="w-full md:w-96 lg:w-96 h-[520px]  bg-primary px-5 py-5 rounded-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <legend className="text-2xl font-bold text-center text-white mb-5 mt-10">
              Log in
            </legend>
            <input
              className="w-full py-2 px-4 rounded-md text-sm focus:outline-none"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email Address is required",
                pattern: /^\S+@\S+$/i,
              })}
              required
            />
            {errors.email && typeof errors.email.message === "string" && (
              <p className="text-secondary text-sm absolute" role="alert">
                Please enter a valid email address
              </p>
            )}
            <input
              className="w-full py-2 px-4 mt-5 rounded-md text-sm focus:outline-none"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {/* {errors.email && typeof errors.email.message === "string" && (
            <p className="text-secondary text-sm absolute" role="alert">
              Please minimum 6 characters password
            </p>
          )} */}
            <div className="flex justify-between align-center mt-5">
              <p>
                <input type="checkbox" name="" id="" />
                <span className="text-white mx-3 text-sm">Remember Me</span>
              </p>
              <p className="text-white underline text-sm">
                <Link to="">Forgot Password</Link>
              </p>
            </div>
            <div className="flex justify-center">
              <button className="w-full btn rounded py-3 px-8 text-white hover:bg-secondary bg-secondary border-0 text-sm mt-3">
                Log in
              </button>
            </div>
            <p className="text-start text-white mt-3 lg:text-md text-sm">
              <span>Create New Account?</span>{" "}
              <Link className="text-secondary text-sm" to="/signup">
                Sign up{" "}
              </Link>
            </p>
            <div className="divider divider-error text-white text-sm">
              Or continue with
            </div>
            <div className="flex justify-center">
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Login;
