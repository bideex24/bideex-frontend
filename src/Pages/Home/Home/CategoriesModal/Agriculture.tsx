import { FaTractor } from "react-icons/fa";
import { GiSeedling, GiSheep } from "react-icons/gi";
import { Link } from "react-router-dom";

type ModalProps = {
  isAgricultureOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Agriculture: React.FC<ModalProps> = ({ isAgricultureOpen, onClose }) => {
  if (!isAgricultureOpen) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isAgricultureOpen ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow my-16 md:my-10 lg:my-0 py-3 md:py-24 lg:py-36 px-16 md:px-24 lg:px-24 transition-all ${isAgricultureOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
      <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-4  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:3 md:gap-5 lg:gap-8 overflow-y-auto h-dvh md:h-96 lg:h-full">
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500"><FaTractor /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Farming Equipment</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Tractors</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Irrigation Pumps</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiSeedling /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Seeds and Plants</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Fruit and Vegetable Seeds</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Flowering Plants</Link>
            </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiSheep /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Livestock</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Cattle</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Poultry</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Sheep & Goats</Link>
            </p>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Agriculture;
