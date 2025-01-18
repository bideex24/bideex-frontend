import { NavLink, Outlet } from "react-router-dom";

const Sell = () => {
  const activeStyle = {
    // borderLeft: "5px solid red",
    color: "white",
    backgroundColor: "#FF435B",
    // padding: "0px 0px 0px 20px",
  };
  return (
    <div>
      <section className="bg-white rounded-xl max-w-4xl mx-auto">
        {/* top section start here */}

        {/* bottom section start here */}
        <section className=" h-screen">
          <div className="bg-white">
            <ul className="grid grid-cols-3 text-black   text-sm max-w-3xl mx-auto">
              <li className="pt-2 flex">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="pl-6 pr-12 pt-8 pb-8 flex justify-center items-center gap-5 rounded-t-lg"
                  to="/dashboard/post-an-ad/sell/step1"
                >
                  <span className="px-4 py-3 border border-slate-200 rounded-full">
                    01
                  </span>
                  <div>
                    <h1 className=" font-bold">Step</h1>
                    <p>Ad Information</p>
                  </div>
                </NavLink>
              </li>
              <li className="pt-2">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="px-6 pt-8 pb-8 flex justify-center items-center gap-5 rounded-t-lg"
                  to="/dashboard/post-an-ad/sell/step2"
                >
                  <span className="px-4 py-3 border border-slate-200 rounded-full">
                    02
                  </span>
                  <div>
                    <h1 className=" font-bold">Step</h1>
                    <p>User Information</p>
                  </div>
                </NavLink>
              </li>
              <li className="pt-2">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="px-6 pt-8 pb-8 flex justify-center items-center gap-5 rounded-t-lg"
                  to="/dashboard/post-an-ad/sell/step3"
                >
                  <span className="px-4 py-3 border border-slate-200 rounded-full">
                    03
                  </span>
                  <div>
                    <h1 className=" font-bold">Step</h1>
                    <p>Ad Details</p>
                  </div>
                </NavLink>
              </li>
            </ul>
            <div className="max-w-3xl mx-auto">
              <hr />
            </div>
          </div>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Sell;
