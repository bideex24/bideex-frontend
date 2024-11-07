import { GiFruitBowl } from "react-icons/gi";
import { Link } from "react-router-dom";
import { PiHandSoapFill } from "react-icons/pi";
import { MdLocalLaundryService } from "react-icons/md";
type ModalProps = {
  isEssentialsOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Essentials: React.FC<ModalProps> = ({ isEssentialsOpen, onClose }) => {
  if (!isEssentialsOpen) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isEssentialsOpen ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow my-16 md:my-10 lg:my-0 py-3 md:py-24 lg:py-36 px-16 md:px-24 lg:px-24 transition-all ${isEssentialsOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
      <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-4  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:3 md:gap-1 lg:gap-5 overflow-y-auto h-dvh md:h-96 lg:h-full">
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiFruitBowl /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Groceries and Food Items</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Rice, Grains and Cereals</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Fresh Fruits and Vegetables</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Cooking Oils</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><PiHandSoapFill /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Personal Hygiene Products</Link>
            </p>
            </div>
          <div className="ml-10">
          <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Soap and Handwash</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Toothpaste and Brushes</Link>
            </p>
          </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><MdLocalLaundryService /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Cleaning Supplies</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Laundry Detergents</Link>
            </p>
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Floor Cleaners</Link>
            </p>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Essentials;
