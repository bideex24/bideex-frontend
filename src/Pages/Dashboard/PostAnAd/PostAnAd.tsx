import { NavLink, Outlet } from "react-router-dom";

const PostAnAd = () => {
  const activeStyle = {
    // borderLeft: "5px solid red",
    color: "red",
    // padding: "0px 0px 0px 20px",
  };
  return (
    <div>
      <section className="bg-white rounded-xl max-w-4xl mx-auto">
        {/* top section start here */}
        <section>
          <div className="px-6 py-4 flex justify-between items-center mt-1">
            <h4 className="text-sm font-bold">Post Ad</h4>
          </div>
          <hr />
        </section>
        {/* bottom section start here */}
        <section className=" bg-[#f6f6f6] md:bg-[#f6f6f6] h-screen">
          <div className="bg-white">
            <ul className="flex text-black   text-sm">
              <li className="py-2">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="pl-10 flex gap-2 items-center"
                  to="/dashboard/post-an-ad/sell"
                >
                  <span>Sell</span>
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="pl-10 flex gap-2 items-center"
                  to="/dashboard/post-an-ad/service"
                >
                  <span>Service</span>
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="pl-10 flex gap-2 items-center"
                  to="/dashboard/post-an-ad/rent"
                >
                  <span>Rent</span>
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="pl-10 flex gap-2 items-center"
                  to="/dashboard/post-an-ad/job"
                >
                  <span>Job</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </section>
      </section>
    </div>
  );
};

export default PostAnAd;
