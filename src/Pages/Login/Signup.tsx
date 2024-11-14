/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../public/login-logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const from = location.state?.from?.pathname || "/dashboard/user";
  const from = location.state?.from?.pathname || "/verifiemail";
  const { createUser, updateUserProfile }: any = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    let verificationCode: any = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const formData = {
      verificationCode: verificationCode,
      name: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      email: data.email,
      password: data.password,
    };
    createUser(data.email, data.password).then((result: any) => {
      const loggedUser = result.user;
      updateUserProfile(data.firstName, data.lastName).then(async () => {
        // create user entry in the database
        try {
          await fetch("https://backend-r8m2w.bideex.com/api/user/create-user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), // Send data as JSON
          });
        } catch (err) {
          console.log(err);
        }
      });
      console.log(loggedUser);
      toast.success("Successfully user signUp!", {
        position: "bottom-center",
      });
      navigate(from, { replace: true });
      reset();
    });
    console.log(errors);
  };

  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center">
        <div>
          <Helmet>
            <title>
              Join Bideex - Sign Up to Buy, Sell, and Rent Locally &
              Internationally | Create Your Marketplace Account
            </title>
          </Helmet>
          <div>
            <Toaster />
          </div>
          <div className="flex md:justify-start	 justify-center">
            <img
              className="md:w-full w-72 md:ml-0 ml-36 mt-10 "
              src={logo}
              alt=""
            />
          </div>
          <h1 className="text-center md:text-left text-2xl md:text-3xl md:text-4xl font-bold my-3 md:my-0 mx-4 md:mx-0 text-black">
            Join Bideex Today!
          </h1>
          <p className="text-xl my-3 md:my-0 mt-3 mx-4 md:mx-0 text-black">
            Create your free account and start buying, selling, and renting
            items with ease. Discover auctions, list your products, and connect
            with buyers and sellers across the world.
          </p>
        </div>
      </div>
      <div className="bg-white mb-10 md:my-8 lg:my-10">
        <form
          className="w-full md:w-96 lg:w-96 h-full md:h-[520px]  bg-primary px-5 py-5 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <legend className="text-2xl font-bold text-center text-white mb-5">
            Sign Up
          </legend>
          <p className="text-white mt-3 mb-5 lg:text-md ">
            <span>Already have an account?</span>{" "}
            <Link className="text-secondary" to="/login">
              Login
            </Link>
          </p>
          <div className="md:flex">
            <div>
              <input
                className="w-full md:w-[165px] py-2 px-4 mb-3 rounded-md mr-3"
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
            </div>
            <div>
              <input
                className="w-full md:w-[165px] py-2 px-4 mb-3 rounded-md"
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />
            </div>
          </div>
          <input
            className="w-full py-2 px-4 mb-3 rounded-md"
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            className="w-full py-2 px-4 mb-3 rounded-md"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
          />
          {/* {errors.password?.type == "maxLength" && (
            <span className="text-secondary">
              password must be 20 character below
            </span>
          )} */}
          <div className="flex justify-between align-center">
            <p className="text-white">
              By clicking Sign Up, you agree to{" "}
              <Link className="text-secondary" to="">
                our Terms, Privacy Policy and Cookies Policy.
              </Link>
            </p>
          </div>
          <button className="w-full btn rounded py-3 px-8 text-white hover:bg-secondary bg-secondary border-0 text-xl mt-3">
            Sign Up
          </button>
          <div className="divider divider-error text-white">
            Or continue with
          </div>
          <div className="flex justify-center">
            <SocialLogin></SocialLogin>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
