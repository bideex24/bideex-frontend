/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import OTPInput from "otp-input-react";
import logo from "../../../public/bideex_logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useVerifyUserMutation } from "../../redux/api/api";
import Navbar1 from "../Shared/Navbar1";
import Footer from "../Shared/Footer";

const VerifiEmail = () => {
  const [addEmailVerifyCode, { data, isError }] = useVerifyUserMutation();
  const [empty, setEmptyError] = useState(true);
  const { user }: any = useContext(AuthContext);
  const [OTP, setOTP] = useState("");
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard/user";
  if (data?.status == true) {
    navigate(from, { replace: true });
  }
  const onSubmit = async () => {
    const verificationCode = OTP;
    const verifiCode = {
      verificationCode,
    };
    if (verificationCode == "") {
      setEmptyError(false);
      return;
    }
    addEmailVerifyCode(verifiCode);
  };
  return (
    <section>
      <Navbar1></Navbar1>
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center">
          <div>
            <div className="flex md:justify-start	 justify-center">
              <img className="md:w-40 w-24 mt-10 " src={logo} alt="" />
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
            {}
            {isError == false ? (
              empty == true ? (
                <></>
              ) : (
                <p className="text-white text-center bg-secondary mb-5 rounded">
                  Please enter your OTP
                </p>
              )
            ) : (
              <p className="text-white text-center bg-secondary mb-5 rounded">
                The code you entered is incorrect
              </p>
            )}
            <OTPInput
              value={OTP}
              onChange={setOTP}
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              inputStyles={{
                backgroundColor: "#00294d",
                outline: "none",
                fontSize: "20px",
                fontWeight: "bold",
                borderRadius: "5px",
                border: "2px solid white",
                color: "white",
                padding: "5px",
                width: "40px", // Increase width
                height: "40px",
              }}
              className="inputStyles-custom focus-input"
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
      <Footer></Footer>
    </section>
  );
};

export default VerifiEmail;
