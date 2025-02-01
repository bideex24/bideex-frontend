/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useContext } from "react";
// import { AuthContext } from "../../../../providers/AuthProvider";
import SingleUser from "./SingleUser/SingleUser";
import { useGetUserQuery } from "../../../../redux/api/api";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const EditProfileUser = () => {
  const { user }: any = useContext(AuthContext);

  const { data }: any = useGetUserQuery(user?.email);
  console.log(data);
  return (
    <div>
      {data?.data?.map((dbUser: any, index: number) => (
        <SingleUser dbUser={dbUser} key={index}></SingleUser>
      ))}
      {}
    </div>
  );
};

export default EditProfileUser;
