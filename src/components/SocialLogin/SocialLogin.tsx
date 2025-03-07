/* eslint-disable @typescript-eslint/no-explicit-any */
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetAllUserQuery } from "../../redux/api/api";
import useAxiousPublic from "../../hooks/useAxiousPublic";

const SocialLogin = () => {
  const axiosPublic = useAxiousPublic();
  // const email = localStorage.getItem("email");
  const { data } = useGetAllUserQuery(undefined);
  console.log(data);
  const { googleSignIn }: any = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result: any) => {
        const user = result.user;
        const formData = {
          email: user.email,
          emailVerified: "true",
        };
        console.log(formData);
        axiosPublic.post("/api/user/create-user", formData).then((res) => {
          if (res.data.insertedId) {
            navigate(from, { replace: true });
          }
        });
        navigate(from, { replace: true });
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="flex gap-3 align-center rounded hover:bg-gray-300 hover:py-3 py-3 hover:px-4 px-4 text-white  hover:text-black border-0 text-sm mt-3"
      >
        <span>
          <FcGoogle className="mt-1" />
        </span>
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
