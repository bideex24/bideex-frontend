import { CiFaceFrown } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoFlashOutline } from "react-icons/io5";
import phone from "../../../../public/favicon.ico";
const UserDashboard = () => {
  return (
    <section className="max-w-6xl mx-auto">
      {/* top three cart section start here */}
      <section className="flex gap-6">
        <div className="w-[305px] h-40 bg-white shadow-2xl rounded-xl flex justify-center items-center gap-4">
          <div className="w-20 h-20 rounded-full  border border-green-500">
            <FaRegCircleCheck className="text-5xl text-green-400 absolute mt-3.5 ml-3.5" />
          </div>
          <div>
            <p className="text-2xl font-bold">30</p>
            <h3 className="text-xl">Total Ad Posted</h3>
          </div>
        </div>
        <div className="w-[305px] h-40 bg-white shadow-2xl rounded-xl flex justify-center items-center gap-4">
          <div className="w-20 h-20 rounded-full  border border-purple-500">
            <IoFlashOutline className="text-5xl text-purple-400 absolute mt-3.5 ml-3.5" />
          </div>
          <div>
            <p className="text-2xl font-bold">23</p>
            <h3 className="text-xl">Featured Ads</h3>
          </div>
        </div>
        <div className="w-[305px] h-40 bg-white shadow-2xl rounded-xl flex justify-center items-center gap-4">
          <div className="w-20 h-20 rounded-full  border border-pink-500">
            <CiFaceFrown className="text-5xl text-pink-400 absolute mt-3.5 ml-3.5" />
          </div>
          <div>
            <p className="text-2xl font-bold">45</p>
            <h3 className="text-xl">Expired Ads</h3>
          </div>
        </div>
      </section>
      {/* top three cart section end here */}
      {/* bottom two cart section start here */}
      <section className="flex gap-6 mt-6">
        {/* left cart start here */}
        <div className="w-[470px] min-h-screen bg-white shadow-2xl rounded-xl">
          <h3 className="text-2xl font-bold py-6 px-6">My Activite Log</h3>
          <hr />
          <section className="px-6">
            <section className="flex items-center gap-3 py-4">
              <div>
                <IoMdNotificationsOutline className="text-purple-400 text-4xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Your profile updated</h4>
                <p>1 day ago</p>
              </div>
            </section>
            <section className="flex items-center gap-3 py-4">
              <div>
                <IoMdNotificationsOutline className="text-purple-400 text-4xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold">You change your password</h4>
                <p>1 day ago</p>
              </div>
            </section>
            <section className="flex items-center gap-3 py-4">
              <div>
                <IoMdNotificationsOutline className="text-purple-400 text-4xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Your ads approved!</h4>
                <p>1 day ago</p>
              </div>
            </section>
            <section className="flex items-center gap-3 py-4">
              <div>
                <IoMdNotificationsOutline className="text-purple-400 text-4xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold">You submit a new ads</h4>
                <p>1 day ago</p>
              </div>
            </section>
            <section className="flex items-center gap-3 py-4">
              <div>
                <IoMdNotificationsOutline className="text-purple-400 text-4xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  You subscribe as a pro user!
                </h4>
                <p>1 day ago</p>
              </div>
            </section>
          </section>
        </div>
        {/* right cart start here */}
        <div className="w-[470px] min-h-screen bg-white shadow-2xl rounded-xl">
          <h3 className="text-2xl font-bold py-6 px-6">Recent Ads</h3>
          <hr />
          <section className="px-6">
            <section className="flex items-center gap-3 py-4">
              <div>
                <img
                  className="w-16 h-16 bg-slate-300 rounded"
                  src={phone}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-xl font-bold">iPhone 11 Pro Max</h4>
                <p>30 minutes ago</p>
              </div>
            </section>
            <section className="flex items-center gap-3 py-4">
              <div>
                <img
                  className="w-16 h-16 bg-slate-300 rounded"
                  src={phone}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-xl font-bold">iPhone 11 Pro Max</h4>
                <p>30 minutes ago</p>
              </div>
            </section>
            <section className="flex items-center gap-3 py-4">
              <div>
                <img
                  className="w-16 h-16 bg-slate-300 rounded"
                  src={phone}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-xl font-bold">iPhone 11 Pro Max</h4>
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
