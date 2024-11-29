/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../public/bideex_logo.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { RxCross2 } from "react-icons/rx";
const Signup = () => {
  const [error, setError] = useState<string | null>(null); // Track error for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(error);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/verifyemail";
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
        userName: data.userName,
      },
      email: data.email,
      password: data.password,
    };
    console.log(formData);
    await createUser(data.email, data.password)
      .then((result: any) => {
        const loggedUser = result.user;
        updateUserProfile(data.firstName, data.lastName, data.userName).then(
          async (result: any) => {
            const loggedUser = result;
            console.log(loggedUser);
            // create user entry in the database
            // https://bideex-backend-node.vercel.app
            try {
              await fetch("http://localhost:5000/api/user/create-user", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), // Send data as JSON
              });
            } catch (error: any) {
              console.log(error);
            }
          }
        );
        console.log(loggedUser);
        toast.success("Successfully user signUp!", {
          position: "bottom-center",
        });
        navigate(from, { replace: true });
        reset();
      })
      .catch((err: any) => {
        setError(err.message);
        setIsModalOpen(true);
        return setError(err.message);
      });
  };

  return (
    <section className="max-w-6xl mx-auto">
      <header>
        <nav className="flex justify-center md:justify-start">
          <Link to="/">
            <img className="md:w-40 w-24 mt-10 " src={logo} alt="" />
          </Link>
        </nav>
      </header>
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
            <h1 className="text-center md:text-left text-2xl md:text-3xl md:text-4xl font-bold my-3 md:my-0 mx-4 md:mx-0 text-black">
              Join Bideex Today!
            </h1>
            <p className="text-xl my-3 md:my-0 mt-3 mx-4 md:mx-0 text-black">
              Create your free account and start buying, selling, and renting
              items with ease. Discover auctions, list your products, and
              connect with buyers and sellers across the world.
            </p>
          </div>
        </div>
        <div className="bg-white mb-10 md:my-8 lg:my-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-96 lg:w-96 h-full md:h-[520px]  bg-primary px-5 py-5 rounded-md"
          >
            <legend className="text-2xl font-bold text-center text-white mb-5">
              Sign Up
            </legend>
            <p className="text-white mt-3 mb-5 lg:text-sm">
              <span>Already have an account?</span>{" "}
              <Link className="text-secondary text-sm" to="/login">
                Login
              </Link>
            </p>
            <div className="md:flex">
              <div>
                <input
                  className="w-full md:w-[165px] py-2 px-4 mb-5 rounded-md mr-3 text-sm focus:outline-none hidden md:block"
                  type="text"
                  placeholder="First Name"
                  {...register("firstName")}
                  required
                />
              </div>
              <div>
                <input
                  className="w-full md:w-[165px] py-2 px-4 mb-5 rounded-md mr-3 text-sm focus:outline-none hidden md:block"
                  type="text"
                  placeholder="Last Name"
                  {...register("lasttName")}
                />
              </div>
              <div>
                {/* <input
                className="w-full md:w-[165px] py-2 px-4 mb-5 rounded-md text-sm focus:outline-none block md:hidden"
                type="text"
                placeholder="Full Name"
                {...register("fullName")}
              /> */}
              </div>
            </div>
            <input
              className="w-full py-2 px-4 mb-5 rounded-md text-sm focus:outline-none"
              type="text"
              placeholder="User Name"
              {...register("userName")}
              required
            />
            <input
              className="w-full py-2 px-4 mb-5 rounded-md text-sm focus:outline-none"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email Address is required",
                pattern: /^\S+@\S+$/i,
              })}
              required
            />
            {errors.email && typeof errors.email.message === "string" && (
              <p className="text-secondary text-sm absolute -mt-5" role="alert">
                Please enter a valid email address
              </p>
            )}
            <input
              className="w-full py-2 px-4 mb-3 rounded-md text-sm focus:outline-none"
              type="password"
              placeholder="Password (6+ characters)"
              {...register("password", {
                required: "true",
              })}
              required
            />

            {errors.password && typeof errors.password.message === "string" && (
              <p className="text-secondary text-sm absolute -mt-4" role="alert">
                Password must be at least 6 characters long.
              </p>
            )}
            <div className="flex justify-between align-center">
              <p className="text-white text-sm">
                By clicking Sign Up, you agree to{" "}
                <Link className="text-secondary text-sm" to="">
                  our Terms, Privacy Policy and Cookies Policy.
                </Link>
              </p>
            </div>
            <button className="w-full btn rounded py-3 px-8 text-white hover:bg-secondary bg-secondary border-0 text-sm mt-3">
              Sign Up
            </button>
            <div className="divider divider-error text-white text-sm">
              Or continue with
            </div>
            <div className="flex justify-center -mt-5">
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </section>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-md shadow-lg max-w-md w-full relative h-60">
            <button
              onClick={() => setIsModalOpen(false)}
              className=" absolute right-[6px] top-0 mt-4 px-1 py-1 border-2 border-gray-400 rounded-full text-xl"
            >
              <RxCross2 />
            </button>
            <h3 className="text-xl font-bold p-3">
              Do you already have a Bideex account?
            </h3>
            <hr className="mt-2" />
            <p className="py-4 p-3">
              The email address you’ve entered is already associated with an
              existing account.{" "}
              <Link to="/login" className="text-secondary hover:underline">
                Please log in using your current credentials,
              </Link>{" "}
              or use the{" "}
              <Link className="text-secondary hover:underline" to="">
                Forgot Password
              </Link>{" "}
              option below to reset your password.
              <hr />
            </p>
            <div className="text-end">
              <Link
                className="px-2 py-3  rounded border-2 border-gray-400 mr-3 text-sm"
                to=""
              >
                Forgot Password?
              </Link>
              <Link
                to=""
                className="px-2 py-3 bg-secondary rounded text-white mr-3 border-2 border-secondary text-sm"
                onClick={() => setIsModalOpen(false)}
              >
                Try a Different Email
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Signup;
