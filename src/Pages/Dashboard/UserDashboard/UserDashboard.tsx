import { CiFaceFrown } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoFlashOutline } from "react-icons/io5";
import phone from "../../../../public/favicon.ico";
import { IoMdNotificationsOutline } from "react-icons/io";
const UserDashboard = () => {
  return (
    <section className="max-w-4xl mx-auto">
      {/* top three cart section start here */}
      <section className="flex gap-6">
        <div className="w-[260px] h-40 bg-white  rounded-xl flex justify-center items-center gap-4">
          <div className="w-12 h-12 rounded-full  border border-primary">
            <FaRegCircleCheck className="text-xl text-primary absolute mt-3 ml-3" />
          </div>
          <div>
            <p className="text-sm font-bold">30</p>
            <h3 className="text-sm">Total Ad Posted</h3>
          </div>
        </div>
        <div className="w-[260px] h-40 bg-white  rounded-xl flex justify-center items-center gap-4">
          <div className="w-12 h-12 rounded-full  border border-purple-500">
            <IoFlashOutline className="text-xl text-purple-400 absolute mt-3 ml-3" />
          </div>
          <div>
            <p className="text-sm font-bold">23</p>
            <h3 className="textsm">Featured Ads</h3>
          </div>
        </div>
        <div className="w-[260px] h-40 bg-white  rounded-xl flex justify-center items-center gap-4">
          <div className="w-12 h-12 rounded-full  border border-pink-500">
            <CiFaceFrown className="text-xl text-pink-400 absolute mt-3 ml-3" />
          </div>
          <div>
            <p className="text-sm font-bold">45</p>
            <h3 className="textsm">Expired Ads</h3>
          </div>
        </div>
      </section>
      {/* top three cart section end here */}
      {/* bottom two cart section start here */}
      <section className="flex gap-6 mt-6">
        {/* left cart start here */}
        <div className="w-[400px] h-fit bg-white rounded-xl ">
          <h3 className="text-sm font-bold py-6 px-6">My Activite Log</h3>
          <hr />
          <section className="px-6">
            <section className="flex items-center gap-3 py-4">
              <div>
                <IoMdNotificationsOutline className="text-secondary text-2xl" />
              </div>
              <div>
                <h4 className="text-sm font-bold">Your profile updated</h4>
                <p>1 day ago</p>
              </div>
            </section>
            <section className="flex items-center gap-3 py-4">
              <div>
                <IoMdNotificationsOutline className="text-secondary text-2xl" />
              </div>
              <div>
                <h4 className="text-sm font-bold">Your profile updated</h4>
                <p>1 day ago</p>
              </div>
            </section>
            <section className="flex items-center gap-3 py-4">
              <div>
                <IoMdNotificationsOutline className="text-secondary text-2xl" />
              </div>
              <div>
                <h4 className="text-sm font-bold">Your profile updated</h4>
                <p>1 day ago</p>
              </div>
            </section>
          </section>
        </div>
        {/* right cart start here */}
        <div className="w-[400px] h-fit bg-white  rounded-xl">
          <h3 className="text-sm font-bold py-6 px-6">Recent Ads</h3>
          <hr />
          <section className="px-6">
            <section className="flex items-center gap-3 py-4">
              <div>
                <img
                  className="w-10 h-10 bg-slate-300 rounded"
                  src={phone}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-sm font-bold">iPhone 11 Pro Max</h4>
                <p>30 minutes ago</p>
              </div>
            </section>
            <section className="flex items-center gap-3 py-4">
              <div>
                <img
                  className="w-10 h-10 bg-slate-300 rounded"
                  src={phone}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-sm font-bold">iPhone 11 Pro Max</h4>
                <p>30 minutes ago</p>
              </div>
            </section>
            <section className="flex items-center gap-3 py-4">
              <div>
                <img
                  className="w-10 h-10 bg-slate-300 rounded"
                  src={phone}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-sm font-bold">iPhone 11 Pro Max</h4>
                <p>30 minutes ago</p>
              </div>
            </section>
          </section>
        </div>
      </section>
      {/* top two cart section end here */}
    </section>
  );
};

export default UserDashboard;
