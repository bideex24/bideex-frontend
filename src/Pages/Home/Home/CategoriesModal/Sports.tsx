import { GiClothes, GiCoinsPile, GiHiking, GiMusicalScore } from "react-icons/gi";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoFootballSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

type ModalProps = {
  isSportsOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Sports: React.FC<ModalProps> = ({ isSportsOpen, onClose }) => {
  if (!isSportsOpen) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isSportsOpen ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow my-16 md:my-10 lg:my-0 py-3 md:py-24 lg:py-36 px-16 md:px-24 lg:px-24 transition-all ${isSportsOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
      <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-4  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:3 md:gap-1 lg:gap-5 overflow-y-auto h-dvh md:h-96 lg:h-full">
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><IoLogoGameControllerB /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Toys & Games</Link>
            </p>
            </div>
          <div className="ml-10">
          <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Action Figures</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Building Blocks</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Board Games</Link>
            </p>
          </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiCoinsPile /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Collectibles & Antiques</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Vintage Coins & Stamps</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Antique Furniture</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Memorabilia</Link>
            </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><IoFootballSharp /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Sports Equipment</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Cricket Gear</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Football Equipment</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Gym Equipment</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiHiking /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Outdoor Gear and Camping</Link>
            </p>
            </div>
          <div className="ml-10">
          <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Tents and Sleeping Bags</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Hiking Backpacks</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Outdoor Furniture</Link>
            </p>
          </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiMusicalScore /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Musical Instruments</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Guitars</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Keyboards & Pianos</Link>
            </p>
            <p>
              <Link className="text-black " to="">Drums</Link>
            </p>
            <p>
              <Link className="text-black " to="">DJ Equipment</Link>
            </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiClothes /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Kids' Clothes & Accessories</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Baby Clothes</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">School Bags</Link>
            </p>
            <p>
              <Link className="text-black " to="">Shoes for Kids</Link>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Sports;
