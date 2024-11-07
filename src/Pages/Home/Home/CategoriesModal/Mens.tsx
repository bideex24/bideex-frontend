import { FaSuitcase } from "react-icons/fa";
import { GiPerfumeBottle } from "react-icons/gi";
import { IoWatch } from "react-icons/io5";
import { PiShirtFoldedFill, PiSneakerFill, PiSunglassesFill } from "react-icons/pi";
import { Link } from "react-router-dom";

type ModalProps = {
  isMensOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Mens: React.FC<ModalProps> = ({ isMensOpen, onClose }) => {
  if (!isMensOpen) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isMensOpen ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow my-16 md:my-10 lg:my-0 py-3 md:py-24 lg:py-36 px-16 md:px-24 lg:px-24 transition-all ${isMensOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
      <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-4  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:3 md:gap-1 lg:gap-5 overflow-y-auto h-dvh md:h-96 lg:h-full">
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><PiShirtFoldedFill /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Clothing</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Formal Wear (Suits, Blazers)</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Casual Wear (T-Shirts, Jeans)</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Ethnic Wear (Kurtas, Sherwanis)</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><PiSneakerFill /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Footwear</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Dress Shoes</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Casual Shoes</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Sports Shoes</Link>
            </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><IoWatch /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Watches & Accessories</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Watch</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Wallets</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Caps & Hats</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiPerfumeBottle /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Grooming & Shaving Products</Link>
            </p>
            </div>
        <div className="ml-10">
        <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Electric Shavers</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Beard Trimmers</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Perfumes & Deodorants</Link>
            </p>
        </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><PiSunglassesFill /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Sunglasses & Belts</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Aviator Sunglasses</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Leather Belts</Link>
            </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaSuitcase /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Bags & Luggage</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Backpacks</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Handbags</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Travel Bags</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Messenger Bags</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Duffel Bags</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Laptop Bags</Link>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Mens;
