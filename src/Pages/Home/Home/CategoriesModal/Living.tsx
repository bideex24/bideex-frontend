import { FaClock, FaLightbulb, FaTools } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { GiWashingMachine } from "react-icons/gi";
import { IoBed } from "react-icons/io5";
import { Link } from "react-router-dom";

type ModalProps = {
  isLivingOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Living: React.FC<ModalProps> = ({ isLivingOpen, onClose }) => {
  if (!isLivingOpen) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isLivingOpen ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow my-16 md:my-10 lg:my-0 py-3 md:py-24 lg:py-24 px-16 md:px-16 lg:px-24 transition-all ${isLivingOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
      <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-4  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:3 md:gap-1 lg:gap-5 overflow-y-auto h-dvh md:h-96 lg:h-full">
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><IoBed /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Furniture</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Living Room Furniture</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Bedroom Furniture</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Office Furniture</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Outdoor Furniture</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Storage Furniture</Link>
            </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiWashingMachine /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Home Appliances</Link>
            </p>
            </div>
         <div className="ml-10">
         <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Refrigerators</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Refrigerators</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Washing Machines</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Air Conditioners</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Microwave Ovens</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Water Purifiers</Link>
            </p>
         </div> 
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500"><FaKitchenSet /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to=""> Kitchenware</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to=""> Cookware & Bakeware</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Cutlery & Utensils</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Storage Containers</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Kitchen Appliances</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaClock /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Home Decor</Link>
            </p>
            </div>
          <div className="ml-10">
          <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Wall Art & Paintings</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Rugs & Carpets</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Curtains & Blinds</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Decorative Lighting</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Clocks & Mirrors</Link>
            </p>
          </div>
          </div>
          <div>
            <div className="flex justify-strat">
            <span className="text-3xl text-gray-500 "><FaLightbulb /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Lighting & Fixtures</Link>
            </p>
            </div>
       <div className="ml-10">
       <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Ceiling Lights</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">LED Bulbs</Link>
            </p>
            <p>
              <Link className="text-black " to="">Chandeliers</Link>
            </p>
            <p>
              <Link className="text-black " to="">Table Lamps</Link>
            </p>
       </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaTools /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Tools & DIY Equipment</Link>
            </p>
            </div>
          <div className="ml-10">
          <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Power Tools</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Hand Tools</Link>
            </p>
            <p>
              <Link className="text-black " to="">Ladders & Scaffolding</Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Living;
