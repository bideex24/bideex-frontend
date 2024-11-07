import { AiFillCustomerService } from "react-icons/ai";
import { FaSimCard } from "react-icons/fa";
import { IoPhonePortrait, IoWatch } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { Link } from "react-router-dom";

type ModalProps = {
  isMobileOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Mobile: React.FC<ModalProps> = ({ isMobileOpen, onClose }) => {
  if (!isMobileOpen) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isMobileOpen ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow py-6 md:py-24 lg:py-36 px-16 md:px-16 lg:px-24 transition-all ${isMobileOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
      <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-6  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:3 md:gap-5 lg:gap-5 overflow-y-auto h-dvh md:h-full lg:h-full">
        <div>
         <div className="flex justify-start">
         <span className="text-3xl text-gray-500 "><IoPhonePortrait /></span>
         <p>
          <Link className="text-black text-xl font-bold" to="">Mobile Phones</Link>
        </p>
         </div>
           <div className="ml-8">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Android Phones</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">iphones</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Feature Phones</Link>
            </p>
           </div>
          </div>
          <div>
          <div className="flex justify-start">
         <span className="text-3xl text-gray-500 "><AiFillCustomerService/></span>
         <p>
              <Link className="text-black text-xl font-bold" to="">Mobile Phone Accessories</Link>
            </p>
         </div>
           <div className="ml-8">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Chargers & Adapters</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Phone Cases & Covers</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Screen Protectors</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Power Banks</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Headphones & Earphones</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Bluetooth Devices</Link>
            </p>
           </div>
          </div>
          <div>
          <div className="flex justify-start">
         <span className="text-3xl text-gray-500 "><IoWatch  /></span>
         <p>
              <Link className="text-black text-xl font-bold" to="">Wearables</Link>
            </p>
         </div>
          <div className="ml-8">
          <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Smartwatches</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Fitness Trackers</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Smart Glasses</Link>
            </p>
          </div>
          </div>
          <div>
          <div className="flex justify-start">
         <span className="text-3xl text-gray-500 "><FaSimCard/></span>
         <p>
              <Link className="text-black text-xl font-bold" to="">SIM Cards</Link>
            </p>
         </div>
           <div className="ml-8">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Prepaid SIMs</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Postpaid SIMs</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Smart Glasses</Link>
            </p>
           </div>
          </div>
          <div>
          <div className="flex justify-start">
         <span className="text-3xl text-gray-500 "><MdMiscellaneousServices  /></span>
         <p>
              <Link className="text-black text-xl font-bold" to="">Mobile Phone Services</Link>
            </p>
         </div>
            <div className="ml-8">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Phone Repairs</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Mobile Unlocking Services</Link>
            </p>
            <p>
              <Link className="text-black " to="">Data Plans & Top-Up Services</Link>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Mobile;
