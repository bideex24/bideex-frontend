/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";

const StepThree = () => {
  const data = JSON.parse(localStorage.getItem("stepThreeData") || "{}");
  // // const data = JSON.parse(stepOne);
  const [keywords, setKeywords] = useState<string[]>(data?.key || []);
  const [inputValue, setInputValue] = useState<string>("");
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (keywords.length < 5 && !keywords.includes(inputValue.trim())) {
        setKeywords([...keywords, inputValue.trim()]);
        const stepThree = {
          key: [...keywords, inputValue.trim()],
        };
        setInputValue("");
        const data = JSON.stringify(stepThree);
        localStorage.setItem("stepThreeData", data);
      }
    }
  };

  const removeKeyword = (index: any) => {
    setKeywords(keywords.filter((_, i) => i !== index));
    const stepThree = keywords.filter((_, i) => i !== index);

    const data = JSON.stringify(stepThree);
    localStorage.setItem("stepThreeData", data);
  };
  const [images, setImages] = useState<File[]>([]); // Updated to store multiple files

  // Handle file change (from input)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setImages([...images, ...Array.from(files)]);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setImages([...images, ...files]);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    const stepOne = JSON.parse(localStorage.getItem("stepOneData") || "{}");
    const stepTwo = JSON.parse(localStorage.getItem("stepOneData") || "{}");
    const formData = new FormData();
    formData.append("sellTitle", stepOne.sellTitle);
    formData.append("sellDescription", stepOne.sellDescription);
    formData.append("sellselectedCategory", stepOne.sellselectedCategory);
    formData.append("sellselectedSubCategory", stepOne.sellselectedSubCategory);
    formData.append(
      "sellselectedSubSubCategory",
      stepOne.sellselectedSubSubCategory
    );
    formData.append("sellPrice", stepTwo.sellPrice);
    formData.append("sellCondition", stepTwo.sellCondition);
    formData.append("sellerArea", stepTwo.sellerArea);
    formData.append("sellerCity", stepTwo.sellerCity);
    formData.append("sellerEmail", stepTwo.sellerEmail);
    formData.append("sellerName", stepTwo.sellerName);
    formData.append("sellerZipcode", stepTwo.sellerZipcode);
    formData.append("keyword", keywords[0]);
    formData.append("photo", images[0]);
    console.log(formData);
  };
  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-5">
          <label className="block text-sm font-medium text-gray-700">
            (e.g., "iphone 15, smartphones, electronics, New York"){" "}
            <sup className="text-red-400 text-lg font-bold">*</sup>
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a keyword and press Enter"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none "
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className="bg-blue-100 text-black px-3 py-1 rounded-full text-sm flex items-center"
              >
                {keyword}
                <button
                  type="button"
                  onClick={() => removeKeyword(index)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
          {keywords.length === 5 && (
            <p className="text-red-500 mt-2">
              You can only add up to 5 keywords.
            </p>
          )}
        </div>
        <label className="block text-sm font-medium text-gray-700">
          Images <sup className="text-red-400 text-lg font-bold">*</sup>
        </label>
        <div
          onDrop={handleFileDrop}
          onDragOver={handleDragOver}
          className="relative w-full h-36 border-2 border-gray border-dotted flex flex-col items-center justify-center "
        >
          <div className="mb-4">
            <div className=" overflow-hidden ">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                multiple // Enable multiple files
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-none"
              />
              {images.length > 0 && images.length <= 5 ? (
                <div>
                  <div className="flex justify-center gap-5 mt-4">
                    {images.map((file, index) => (
                      <img
                        key={index}
                        className="w-32 h-32  mr-2"
                        src={URL.createObjectURL(file)}
                        alt={`upload-${index}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="">
                  <div className="flex justify-center">
                    <FaCloudUploadAlt className="w-10 h-10 text-gray-300 text-center" />
                  </div>
                  <p className="font-bold text-gray-300">
                    Drag and drop or upload up to 5 high-quality images.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex">
          <button
            type="submit"
            className="w-3/12 bg-secondary text-white py-2 mt-5 px-4 rounded-md hover:bg-secondary"
          >
            Submit Ad
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
