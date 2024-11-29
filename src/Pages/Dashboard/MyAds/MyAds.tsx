import { MdOutlineModeEdit } from "react-icons/md";
import logo from "../../../../public/earning.svg";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
const MyAds = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section className="bg-white rounded-xl max-w-4xl mx-auto">
      <div className="px-6 py-4">
        <h4 className="text-sm font-bold">My Ads</h4>
      </div>
      <hr />
      <div className="px-6 py-4 flex gap-1">
        <button className="border-0 px-4 py-2 rounded text-white hover:bg-secondary bg-secondary  text-sm">
          All Ads{" "}
          <span className="bg-white  text-secondary px-1 py-1 rounded">42</span>
        </button>
        <button className="border border-gray-400 px-4 py-2 rounded">
          Published{" "}
          <span className="bg-white shadow-xl px-1 py-1 rounded">42</span>
        </button>
        <button className="border border-gray-400 px-4 py-2 rounded">
          Featured{" "}
          <span className="bg-white shadow-xl px-1 py-1 rounded">42</span>
        </button>
        <button className="border border-gray-400 px-4 py-2 rounded">
          Sold <span className="bg-white shadow-xl px-1 py-1 rounded">42</span>
        </button>
        <button className="border border-gray-400 px-4 py-2 rounded">
          Active{" "}
          <span className="bg-white shadow-xl px-1 py-1 rounded">42</span>
        </button>
        <button className="border border-gray-400 px-4 py-2 rounded">
          Expired{" "}
          <span className="bg-white shadow-xl px-1 py-1 rounded">42</span>
        </button>
      </div>
      <hr />
      <div className="px-4 py-3">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-black">Job Title</th>
                <th className="text-black">Categorie</th>
                <th className="text-black">Condition</th>
                <th className="text-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="text-black">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={logo} alt="product" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm">Bran new iphone 16 pro max</div>
                      <div className="text-sm opacity-50">$12</div>
                    </div>
                  </div>
                </td>
                <td>Electronic</td>
                <td>New</td>
                <th className="flex gap-2">
                  <button className="border border-gray-400 px-3 py-3 rounded-full">
                    <MdOutlineModeEdit className="text-black" />
                  </button>
                  <button className="border border-gray-400 px-3 py-3 rounded-full">
                    <IoEyeOutline className="text-black" />
                  </button>
                  <button className="border border-gray-400 px-3 py-3 rounded-full">
                    <RiDeleteBinLine className="text-black" />
                  </button>
                </th>
              </tr>
              {/* row 1 */}
              <tr className="text-black">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={logo} alt="product" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm">Bran new iphone 16 pro max</div>
                      <div className="text-sm opacity-50">$12</div>
                    </div>
                  </div>
                </td>
                <td>Electronic</td>
                <td>New</td>
                <th className="flex gap-2">
                  <button className="border border-gray-400 px-3 py-3 rounded-full">
                    <MdOutlineModeEdit className="text-black" />
                  </button>
                  <button className="border border-gray-400 px-3 py-3 rounded-full">
                    <IoEyeOutline className="text-black" />
                  </button>
                  <button className="border border-gray-400 px-3 py-3 rounded-full">
                    <RiDeleteBinLine className="text-black" />
                  </button>
                </th>
              </tr>
              {/* row 1 */}
              <tr className="text-black">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={logo} alt="product" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm">Bran new iphone 16 pro max</div>
                      <div className="text-sm opacity-50">$12</div>
                    </div>
                  </div>
                </td>
                <td>Electronic</td>
                <td>New</td>
                <th className="flex gap-2">
                  <button className="border border-gray-400 px-3 py-3 rounded-full">
                    <MdOutlineModeEdit className="text-black" />
                  </button>
                  <button className="border border-gray-400 px-3 py-3 rounded-full">
                    <IoEyeOutline className="text-black" />
                  </button>
                  <button className="border border-gray-400 px-3 py-3 rounded-full">
                    <RiDeleteBinLine className="text-black" />
                  </button>
                </th>
              </tr>
              {/* row 1 */}
              <tr className="text-black">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={logo} alt="product" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm">Bran new iphone 16 pro max</div>
                      <div className="text-sm opacity-50">$12</div>
                    </div>
                  </div>
                </td>
                <td>Electronic</td>
                <td>New</td>
                <th className="flex gap-2">
                  <button className="border border-gray-400 px-3 py-3 rounded-full">
                    <MdOutlineModeEdit className="text-black" />
                  </button>
                  <button className="border border-gray-400 px-3 py-3 rounded-full">
                    <IoEyeOutline className="text-black" />
                  </button>
                  <button className="border border-gray-400 px-3 py-3 rounded-full">
                    <RiDeleteBinLine className="text-black" />
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="join  ml-5">
          {[1, 2, 3, 4].map((_, index) => (
            <input
              key={index}
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label={`${index + 1}`}
              defaultChecked={index === 0}
              onChange={() => handleChange(index)}
              style={{
                backgroundColor:
                  activeIndex === index ? "#FF435B" : "transparent",
                color: activeIndex === index ? "white" : "black",
                border: "2px solid gray",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyAds;
