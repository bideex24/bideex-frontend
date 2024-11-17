/* eslint-disable @typescript-eslint/no-explicit-any */
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn, loading }: any = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result: any) => {
        const user = result.user;
        console.log(user);
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
