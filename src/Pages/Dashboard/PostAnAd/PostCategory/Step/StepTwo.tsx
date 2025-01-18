/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const StepTwo = () => {
  const data = JSON.parse(localStorage.getItem("stepTwoData") || "{}");
  console.log(data);
  const [price, setPrice] = useState(data.sellPrice || "");
  const [newProduct, setNewProduct] = useState(
    data?.sellCondition?.condition || ""
  );
  console.log(newProduct);
  const [usedProduct, setUsedProduct] = useState(
    data?.sellCondition?.condition || ""
  );
  const [name, setName] = useState(data.sellerName || "");
  const [email, setEmail] = useState(data.sellerEmail || "");
  const [city, setCity] = useState(data.sellerCity || "");
  const [zipcode, setZipCode] = useState(data.sellerZipcode || "");
  const [area, setArea] = useState(data.sellerArea || "");
  const handlePrice = (event: any) => {
    setPrice(event.target.value);
  };
  const handleConditionNew = (event: any) => {
    setNewProduct(event.target.value);
  };
  const handleConditionUsed = (event: any) => {
    setUsedProduct(event.target.value);
  };

  const handleName = (event: any) => {
    setName(event.target.value);
  };
  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handleChangeCity = (event: any) => {
    setCity(event.target.value);
  };
  const handleChangeArea = (event: any) => {
    setArea(event.target.value);
  };
  const handleChangeZipCode = (event: any) => {
    setZipCode(event.target.value);
  };

  const { handleSubmit } = useForm();
  const onSubmit = () => {
    const stepTwo = {
      sellPrice: price,
      sellConditionUsed: usedProduct,
      sellConditionNew: newProduct,
      sellerName: name,
      sellerEmail: email,
      sellerCity: city,
      sellerZipcode: zipcode,
      sellerArea: area,
    };
    const formData = JSON.stringify(stepTwo);
    localStorage.setItem("stepTwoData", formData);
  };
  return (
    <div className="max-w-3xl mx-auto pb-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Price */}
        <div className="my-5">
          <label className="block text-sm font-medium text-gray-700">
            Price <sup className="text-red-400 text-lg font-bold">*</sup>
          </label>
          <input
            type="text"
            value={price}
            required
            placeholder="Price"
            onChange={handlePrice}
            className="mt-1 block w-full rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
          />
        </div>
        <label className="" htmlFor="">
          Condition
          <sup className="text-red-400 text-lg font-bold">*</sup>
        </label>
        <div className="flex gap-3 ml-16">
          <label htmlFor="new">New</label>
          <input
            type="radio"
            id="new"
            value="newProduct"
            onChange={handleConditionNew}
          />

          <label htmlFor="used">Used</label>
          <input
            type="radio"
            id="use"
            value="usedProduct"
            onChange={handleConditionUsed}
          />
        </div>
        <div className="my-5">
          <label className="block text-sm font-medium text-gray-700">
            Name <sup className="text-red-400 text-lg font-bold">*</sup>
          </label>
          <input
            type="text"
            value={name}
            required
            placeholder="Write your name"
            onChange={handleName}
            className="mt-1 block w-full rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
          />
        </div>
        <div className="my-5">
          <label className="block text-sm font-medium text-gray-700">
            Email <sup className="text-red-400 text-lg font-bold">*</sup>
          </label>
          <input
            type="text"
            value={email}
            required
            placeholder="Write your email"
            onChange={handleEmail}
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
              className="mt-1 block w-[250px] rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
            />
          </div>

          {/* State */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Area <sup className="text-red-400 text-lg font-bold">*</sup>
            </label>
            <input
              type="text"
              required
              onChange={handleChangeArea}
              value={area}
              className="mt-1 block w-[250px] rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
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
              className="mt-1 block w-[250px] rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
            />
          </div>
        </div>
        <div className="flex gap-4">
          {/* Previous Step Button */}
          <NavLink
            className="w-3/12 bg-primary text-white py-2 mt-5 px-4 rounded-md hover:bg-secondary"
            to="/dashboard/post-an-ad/sell/step1"
          >
            <button type="submit" className="ml-14">
              {" "}
              Previous
            </button>
          </NavLink>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-3/12 bg-secondary text-white py-2 mt-5 px-4 rounded-md hover:bg-secondary"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
