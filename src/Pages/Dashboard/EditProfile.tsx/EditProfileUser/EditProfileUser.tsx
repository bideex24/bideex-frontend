/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useContext } from "react";
// import { AuthContext } from "../../../../providers/AuthProvider";
import SingleUser from "./SingleUser/SingleUser";
import { useGetUserQuery } from "../../../../redux/api/api";

const EditProfileUser = () => {
  // const { user }: any = useContext(AuthContext);
  const email = localStorage.getItem("email");
  const { data }: any = useGetUserQuery(email);
  console.log(data);
  return (
    <div>
      {data?.data?.map((dbUser: any) => (
        <SingleUser dbUser={dbUser}></SingleUser>
      ))}
      {}
    </div>
  );
};

export default EditProfileUser;
