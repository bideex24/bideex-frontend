import { Link } from "react-router-dom";
import { PiDressFill, PiHandbagSimpleFill, PiHighHeelFill } from "react-icons/pi";
import { GiLipstick, GiPearlNecklace } from "react-icons/gi";
import { FaPumpSoap } from "react-icons/fa";
type ModalProps = {
  isWomensOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Womens: React.FC<ModalProps> = ({ isWomensOpen, onClose }) => {
  if (!isWomensOpen) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isWomensOpen ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow my-16 md:my-10 lg:my-0 py-3 md:py-24 lg:py-36 px-16 md:px-24 lg:px-24 transition-all ${isWomensOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
      <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-4  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:3 md:gap-1 lg:gap-5 overflow-y-auto h-dvh md:h-96 lg:h-full">
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><PiDressFill /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Clothing</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Traditional Wear (Sarees, Salwar Kameez)</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Western Wear (Dresses, Tops)</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Innerwear & Sleepwear
              </Link>
            </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><PiHighHeelFill /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Footwear</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Heels</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Flats</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Sneakers</Link>
            </p>
           </div> 
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><PiHandbagSimpleFill /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Bags & Purses</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Handbags</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Clutches</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Backpacks</Link>
            </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiPearlNecklace /></span>
            <p>
              <Link className="text-black text-xl font-bold" to="">Jewelry & Accessories</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Necklaces</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Watches</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Bracelets</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Sunglasses</Link>
            </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiLipstick /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Makeup & Skincare</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Lipsticks</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Foundations & Concealers</Link>
            </p>
            <p>
              <Link className="text-black " to="">Face Creams & Serums</Link>
            </p>
            <p>
              <Link className="text-black " to="">Face Masks</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaPumpSoap /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to=""> Haircare & Styling Tools</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Shampoos & Conditioners</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Hair Dryers & Curlers</Link>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Womens;
