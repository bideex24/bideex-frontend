import { useState } from "react";
import { CiFilter, CiSearch } from "react-icons/ci";
import FilterBanner from "./FilterBanner";
import { FaFilter } from "react-icons/fa";

const Banner = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  return (
    <div>
      <div className="h-96 md:h-[622px] bg-slate-100 md:bg-primary">
        <div className="z-0 pt-[20px] md:pt-[200px]">
          <div>
            <h1 className="text-center mb-5 text-xl lg:text-3xl font-bold text-black md:text-white">
              Discover Your Perfect Deal
            </h1>
            <div className="">
              <form
                action=""
                className="  lg:max-w-4xl xl:max-w-3xl mx-auto rounded z-0 flex justify-items-center justify-center"
              >
                <input
                  className="my-3 md:my-4 lg:my-4 w-32 lg:w-72 py-3 pl-8 pr-5 text-black md:text-black rounded-l-lg mt-0 md:mt-3 lg:mt-0 bg-white relative z-0"
                  type="search"
                  name=""
                  id=""
                  placeholder="I am looking for..."
                />
                <span className="text-gray-500 absolute z-10 text-2xl mr-[270px] md:mr-[425px] mt-3">
                  <CiSearch />
                </span>
                {/* <select className="w-20 md:w-32 mr-3 px-3 text-black rounded h-12 bg-white">
                                <option  className="px-6 text-black" value="">All location</option>
                                <option value="option1 text-black">Buy</option>
                                <option value="option2 text-black">Sell</option>
                                <option value="option3 text-black">Rent</option>
                                <option value="option3 text-black">Job</option>
                            </select> */}
                <button className="text-white bg-secondary mb-3 md:mb-4 px-6 rounded-r-lg">
                  Search
                </button>
                <div
                  className="text-white bg-secondary mb-3 md:mb-4 px-8 rounded-lg ml-3"
                  onClick={() => setFilterOpen(!isFilterOpen)}
                >
                  {isFilterOpen ? (
                    <span className="mt-3 absolute -ml-3 cursor-pointer text-xl">
                      <FaFilter />
                    </span>
                  ) : (
                    <span className="mt-2 absolute -ml-4 cursor-pointer text-3xl">
                      <CiFilter />
                    </span>
                  )}
                </div>
              </form>
              <FilterBanner
                children
                isFilterOpen={isFilterOpen}
                onClose={() => setFilterOpen(false)}
              ></FilterBanner>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
