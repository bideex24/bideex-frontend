/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../../Pages/Shared/Loading/Loading";

const PrivateRoute = ({ children }: any) => {
  const { user, loading }: any = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
