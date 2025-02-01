/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import CustomToolBar from "./CustomToolBar";
import "./CustomToolBar";
import { useNavigate } from "react-router-dom";
const categories = [
  {
    label: "Electronics",
    subCategories: [
      {
        label: "Mobile Phones",
        subCategories: ["Smartphones", "Feature Phones", "Accessories"],
      },
      {
        label: "Laptops",
        subCategories: ["Gaming Laptops", "Ultrabooks", "Accessories"],
      },
    ],
  },
  {
    label: "Vehicles",
    subCategories: [
      {
        label: "Cars",
        subCategories: ["SUVs", "Sedans", "Electric Cars"],
      },
      {
        label: "Motorbikes",
        subCategories: ["Cruisers", "Sport Bikes", "Scooters"],
      },
    ],
  },
  {
    label: "Real Estate",
    subCategories: [
      {
        label: "Residential",
        subCategories: ["Apartments", "Houses", "Villas"],
      },
      {
        label: "Commercial",
        subCategories: ["Shops", "Offices", "Warehouses"],
      },
    ],
  },
];
const StepOne = () => {
  const data = JSON.parse(localStorage.getItem("stepOneData") || "{}");
  const [nextStep] = useState(data.sellselectedCategory || "");
  console.log(nextStep);
  const [description, setValueDescription] = useState(
    data?.sellDescription || ""
  );
  const [selectedCategory, setSelectedCategory] = useState(
    data?.sellselectedCategory || ""
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    data?.sellselectedSubCategory || ""
  );
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(
    data?.sellselectedSubSubCategory || ""
  );

  const [title, setChangleTitle] = useState(data?.sellTitle || "");
  const handleChangleTitle = (e: any) => {
    setChangleTitle(e.target.value);
  };

  console.log(title);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    const stepOne = {
      sellTitle: title,
      sellDescription: description,
      sellselectedCategory: selectedCategory,
      sellselectedSubCategory: selectedSubCategory,
      sellselectedSubSubCategory: selectedSubSubCategory,
    };
    const data = JSON.stringify(stepOne);
    localStorage.setItem("stepOneData", data);
  };

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory("");
    setSelectedSubSubCategory("");
  };

  const handleSubCategoryChange = (event: any) => {
    setSelectedSubCategory(event.target.value);
    setSelectedSubSubCategory("");
  };

  const handleSubSubCategoryChange = (event: any) => {
    setSelectedSubSubCategory(event.target.value);
  };
  const currentSubCategories =
    categories.find((cat) => cat.label === selectedCategory)?.subCategories ||
    [];
  const currentSubSubCategories =
    currentSubCategories.find((subCat) => subCat.label === selectedSubCategory)
      ?.subCategories || [];
  console.log(errors);
  console.log(nextStep);
  const navigate = useNavigate();

  const handleClick = (event: any) => {
    event.preventDefault(); // Prevent the default button action
    setTimeout(() => {
      navigate("/dashboard/post-an-ad/sell/step2");
    }, 1000); // 2-second delay before navigation
  };
  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className=" mt-5">
          <label className="block text-sm font-medium text-gray-700">
            (e.g, "Brand New iphone 15 for Sale in New York"){" "}
            <sup className="text-red-400 text-lg font-bold">*</sup>
          </label>
          <input
            type="text"
            value={title}
            required
            placeholder="What are you selling?"
            onChange={handleChangleTitle}
            className="mt-1 block w-full rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
          />
        </div>
        {/* Description */}
        <div className="mb-4 mt-2">
          <label className="block text-sm font-medium text-gray-700">
            (e.g, "This is a bran-new iphone 15, unlocked, 256GB storage and
            comes with all accessories.Located in New York."){" "}
            <sup className="text-red-400 text-lg font-bold">*</sup>
          </label>
          <div>
            {/* Toolbar */}
            <CustomToolBar></CustomToolBar>
            {/* Input Field */}
            <ReactQuill
              className="h-32"
              value={description}
              onChange={setValueDescription}
              modules={{
                toolbar: {
                  container: "#toolbar",
                },
              }}
              formats={[
                "header",
                "font",
                "bold",
                "italic",
                "underline",
                "link",
                "list",
                "bullet",
                "image",
                "code-block",
                "formula",
              ]}
              theme="snow"
            />
          </div>
        </div>
        <div>
          {/* Main Category Dropdown */}
          <label>
            Select Category:{" "}
            <sup className="text-red-400 text-lg font-bold">*</sup>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
              style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
            >
              <option value="">-- Select Category --</option>
              {categories.map((category) => (
                <option key={category.label} value={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
          </label>

          {/* Subcategory Dropdown */}
          {currentSubCategories.length > 0 && (
            <label>
              Select Sub-Category:
              <select
                value={selectedSubCategory}
                onChange={handleSubCategoryChange}
                className="rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
                style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
              >
                <option value="">-- Select Sub-Category --</option>
                {currentSubCategories.map((subCategory) => (
                  <option key={subCategory.label} value={subCategory.label}>
                    {subCategory.label}
                  </option>
                ))}
              </select>
            </label>
          )}

          {/* Sub-Subcategory Dropdown */}
          {currentSubSubCategories.length > 0 && (
            <label>
              Select Sub-Sub-Category:
              <select
                value={selectedSubSubCategory}
                onChange={handleSubSubCategoryChange}
                className="rounded-md border-gray-300  focus:outline-none px-4 py-2 sm:text-sm bg-white border-2 border-gray"
                style={{ width: "100%", padding: "5px" }}
              >
                <option value="">-- Select Sub-Sub-Category --</option>
                {currentSubSubCategories.map((subSubCategory) => (
                  <option key={subSubCategory} value={subSubCategory}>
                    {subSubCategory}
                  </option>
                ))}
              </select>
            </label>
          )}

          {/* Display Selected Values */}
          <div style={{ marginTop: "20px" }}>
            <strong>Selected Category:</strong> {selectedCategory || "None"}{" "}
            <br />
            <strong>Selected Sub-Category:</strong>{" "}
            {selectedSubCategory || "None"} <br />
            <strong>Selected Sub-Sub-Category:</strong>{" "}
            {selectedSubSubCategory || "None"}
          </div>
        </div>
        {/* Submit Button */}
        {nextStep != "" ? (
          <div>
            <button
              type="submit"
              onClick={handleClick}
              className="w-3/12 bg-secondary text-white py-2 mt-5 px-4 rounded-md hover:bg-secondary"
            >
              Next
            </button>
          </div>
        ) : (
          <button
            type="submit"
            className="w-3/12 bg-secondary text-white py-2 mt-5 px-4 rounded-md hover:bg-secondary"
          >
            Next
          </button>
        )}
      </form>
    </div>
  );
};

export default StepOne;
