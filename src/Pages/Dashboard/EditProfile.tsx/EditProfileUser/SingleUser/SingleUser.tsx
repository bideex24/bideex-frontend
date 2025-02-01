/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";

import { useContext, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../../../providers/AuthProvider";
import { useUpdateUserMutation } from "../../../../../redux/api/api";

const SingleUser = ({ dbUser }: any) => {
  const { user }: any = useContext(AuthContext);
  const [addUser] = useUpdateUserMutation(user);
  const [userProfile, setUserProfile] = useState("");
  const [image, setImage] = useState("");
  console.log(userProfile);
  const [firstName, setFirstName] = useState(dbUser?.name?.firstName || "");
  const [lastName, setLastName] = useState(dbUser?.name?.lastName || "");
  const [userName, setUserName] = useState(dbUser?.name?.userName || "");
  const [phoneNumber, setPhoneNumber] = useState(dbUser?.phone || "");
  const [address, setAddress] = useState(dbUser?.address || "");
  const [city, setCity] = useState(dbUser?.city || "");
  const [zipcode, setZipCode] = useState(dbUser?.zipCode || "");
  const [state, setState] = useState(dbUser?.state || "");
  const [country, setCountry] = useState(dbUser?.country || "");

  const handleChangeFirstName = (event: any) => {
    setFirstName(event.target.value);
  };
  const handleChangeLastName = (event: any) => {
    setLastName(event.target.value);
  };
  const handleChangeUserName = (event: any) => {
    setUserName(event.target.value);
  };
  const handleChange = (value: any) => {
    setPhoneNumber(value);
  };
  const handleChangeAddress = (event: any) => {
    setAddress(event.target.value);
  };
  const handleChangeCity = (event: any) => {
    setCity(event.target.value);
  };
  const handleChangeState = (event: any) => {
    setState(event.target.value);
  };
  const handleChangeZipCode = (event: any) => {
    setZipCode(event.target.value);
  };
  const handleChangeCountry = (event: any) => {
    setCountry(event.target.value);
  };

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    setUserProfile(file);
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("photo", userProfile);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("userName", userName);
    formData.append("id", dbUser._id);
    formData.append("phone", phoneNumber);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("zipCode", zipcode);
    formData.append("country", country);
    addUser(formData);
    toast.success("Successfully user update!", {
      position: "top-center",
    });
    reset();
  };
  console.log(typeof zipcode);
  console.log(errors);
  console.log(dbUser.email);
  return (
    <div className="bg-white p-5">
      <Toaster />
      <h1 className="text-sm font-bold">Edit Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Profile Picture */}
        <div
          onDrop={handleFileDrop}
          onDragOver={handleDragOver}
          className="relative w-full h-36 border-2 border-gray border-dotted flex flex-col items-center justify-center mt-10"
        >
          <div className=" mb-2">
            <div className=" w-20 h-20 rounded-full overflow-hidden border border-gray-300">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {image ? (
                <img className="w-full mt-3" src={image} alt="user" />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-white">
                  <FaCloudUploadAlt className="w-10 h-10 text-gray-300" />
                </div>
              )}
            </div>
          </div>
          <p className="text-bold text-gray-300">
            Drag and drop your profile photo here to upload.
          </p>
        </div>
        <div className="md:flex gap-3 mt-10">
          {/* First Name */}

          <div>
            {" "}
            <div className="mb-4">
              <label className="-mt-2 block text-sm font-medium text-gray-700">
                First Name
                <sup className="text-red-400 text-lg font-bold">*</sup>
              </label>
              <input
                type="text"
                onChange={handleChangeFirstName}
                value={firstName}
                required
                // {...register("firstName")}
                className="mt-1 block w-full rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={handleChangeLastName}
              className="mt-1 block w-full rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
            />
          </div>

          {/* User Name */}
          <div className="mb-4">
            <label className="-mt-1 block text-sm font-medium text-gray-700">
              User Name
              <sup className="text-red-400 text-lg font-bold">*</sup>
            </label>
            <input
              type="text"
              value={userName}
              required
              onChange={handleChangeUserName}
              className="block w-full rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
            />
          </div>
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            disabled
            value={dbUser.email}
            className="mt-1 block font-bold text-gray-500 w-full md:w-full rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-gray-300 border-2 border-gray"
          />
        </div>

        {/* Contact Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Contact Number{" "}
          </label>

          <PhoneInput
            country={"us"}
            value={phoneNumber}
            onChange={handleChange}
            inputStyle={{
              width: "100%", // Full width
              borderRadius: "0.375rem", // Matches `rounded-md`
              borderColor: "rgb(209, 213, 219)", // Matches `border-gray-300`
              borderWidth: "2px", // Matches `border-2`
              padding: "0.5rem 3rem", // Matches `px-4 py-2`
              backgroundColor: "white", // Matches `bg-white`
              fontSize: "0.875rem", // Matches `sm:text-sm`
              outline: "none", // Matches `focus:outline-none`
            }}
            buttonStyle={{
              borderRadius: "0.375rem", // Optional: Match rounded corners for the flag button
            }}
            containerStyle={{
              width: "100%", // Full width for the container
            }}
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address <sup className="text-red-400 text-lg font-bold">*</sup>
          </label>
          <input
            type="text"
            value={address}
            required
            onChange={handleChangeAddress}
            className="mt-1 block w-full rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
          />
        </div>
        <div className="md:flex gap-3">
          {/* City */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              City <sup className="text-red-400 text-lg font-bold">*</sup>
            </label>
            <input
              type="text"
              required
              onChange={handleChangeCity}
              value={city}
              className="mt-1 block w-full rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
            />
          </div>

          {/* State */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              State <sup className="text-red-400 text-lg font-bold">*</sup>
            </label>
            <input
              type="text"
              required
              onChange={handleChangeState}
              value={state}
              className="mt-1 block w-full rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
            />
          </div>

          {/* Zip Code */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Zip Code <sup className="text-red-400 text-lg font-bold">*</sup>
            </label>
            <input
              type="number"
              required
              onChange={handleChangeZipCode}
              value={zipcode}
              className="mt-1 block w-full rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
            />
          </div>
        </div>

        {/* Country */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            onChange={handleChangeCountry}
            value={country}
            className="mt-1 block w-full rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-secondary text-white py-2 mt-2 px-4 rounded-md hover:bg-secondary"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SingleUser;
