import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import logo from "../../../public/login-logo.svg";
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => {
   
    console.log(errors);
  };
  
  return (
   <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
    <div className="flex items-center">
   <div>
   <Helmet>
        <title>Login to Bideex - Buy, Sell and Rent Locally & Internationally | Access Your Marketplace Account</title>
    </Helmet>
    <div className="flex md:justify-start	 justify-center">
    <img className="md:w-full w-72 md:ml-0 ml-36 mt-10 " src={logo} alt="" />
    </div>
      <h1 className="text-center md:text-start text-2xl md:text-4xl font-bold my-3 md:my-0 mx-4 md:mx-0 text-black">Welcome Back to Bideex!</h1>
      <p className="text-xl my-3 md:my-0 mt-3 mx-4 md:mx-0 text-black">login to buy, sell, or rent items locally and globally. Explore auctions, list your items, and connect with buyers and sellers worldwide.  </p>
   </div>
    </div>
     <div className="bg-white mb-10 md:my-8 lg:my-10">
       <form className="w-full md:w-96 lg:w-96 h-[520px]  bg-primary px-5 py-5 rounded-md" onSubmit={handleSubmit(onSubmit)}>
        <legend className="text-2xl font-bold text-center text-white mb-5 mt-10">Log in</legend>
      <input className="w-full py-2 px-4 mb-5 rounded-md" type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input className="w-full py-2 px-4 mb-5 rounded-md"  type="password" placeholder="Password" {...register("Email")}/>
      <div className="flex justify-between align-center">
        <p>
        <input type="checkbox" name="" id="" />
          <span className="text-white mx-3">Remember Me</span>
          </p>
        <p className="text-white underline"><Link to="">Forgot Password</Link></p>
      </div>
      <div className="flex justify-center">
      <button  className="w-full btn rounded py-3 px-8 text-white hover:bg-secondary bg-secondary border-0 text-xl mt-3">Log in</button>
      </div>
      <p className="text-start text-white mt-3 lg:text-md "><span>Create New Account?</span> <Link className="text-secondary" to='/signup'>Sign up </Link></p>
      <div className="divider divider-error text-white">
      Or continue with
     </div>
      <div className="flex justify-center">
      <button className="flex gap-3 align-center rounded hover:bg-gray-300 hover:py-3 py-3 hover:px-4 px-4 text-white  hover:text-black border-0 text-xl mt-3"><span><FcGoogle className="mt-1"/></span><span>Continue with Google</span></button>
      </div>
    </form>
    </div>
   </section>
  )
};

export default Login;
