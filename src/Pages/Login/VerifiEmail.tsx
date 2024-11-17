/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import "./VerifiEmail.css";
import { useContext, useState } from "react";
import OTPInput from "otp-input-react";
import logo from "../../../public/login-logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const VerifiEmail = () => {
  const { user }: any = useContext(AuthContext);
  const [OTP, setOTP] = useState("");
  const { handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard/user";
  const onSubmit = async () => {
    const verificationCode = OTP;
    const verifiCode = {
      verificationCode,
    };
    console.log(verifiCode);
    // create user entry in the database
    try {
      await fetch(
        "https://bideex-backend-node.vercel.app/api/user/email-verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(verifiCode), // Send data as JSON
        }
      );
      navigate(from, { replace: true });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center">
        <div>
          <div className="flex md:justify-start	 justify-center">
            <img className="md:w-full w-72 md:ml-0 ml-36" src={logo} alt="" />
          </div>
          <h1 className="text-center md:text-start text-2xl md:text-2xl font-bold my-3 md:my-0 mx-4 md:mx-0 text-black">
            Enter Your OTP (One-Time Password)
          </h1>
          <p className="text-base my-3 md:my-0 mt-3 mx-4 md:mx-0 text-black">
            Important: For your privacy and protection, the OTP is valid for a
            limited time (usually 5-10 minutes). Please enter it as soon as
            possible.
          </p>
        </div>
      </div>
      <div className="bg-white mb-10 md:my-8 lg:my-10">
        <form
          className="w-full md:w-96 lg:w-96 h-full md:h-[520px]  bg-primary px-5 py-5 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <legend className="text-2xl font-bold text-center text-white mb-5 mt-12">
            Enter Your OTP
          </legend>
          <p className="text-white text-center mb-3">
            A verification code has been sent to{" "}
            <span className=" text-secondary"> {user?.email} </span> <br />
            Please enter it below to complete verification.
          </p>
          <OTPInput
            value={OTP}
            onChange={setOTP}
            OTPLength={6}
            otpType="number"
            disabled={false}
            autoFocus
            inputStyles={{
              backgroundColor: "#00294d", // Change background color
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "5px",
              border: "2px solid white",
              color: "white",
              padding: "5px",
              width: "40px", // Increase width
              height: "40px",
            }}
            className="inputStyles-custom "
          />
          ;
          <button className="w-full btn rounded py-3 px-8 text-white hover:bg-secondary bg-secondary border-0 text-sm mt-3">
            Verify Now
          </button>
          <div>
            <p className="text-white text-center mt-6 text-sm">
              Don't recive the OTP code
            </p>
            <div className="flex justify-center mt-4 gap-3">
              <Link className="text-secondary text-sm" to="">
                Resent OTP
              </Link>
              <span className="text-white text-sm"> Or </span>
              <Link className="text-secondary text-sm" to="/signup">
                Change Email
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VerifiEmail;
