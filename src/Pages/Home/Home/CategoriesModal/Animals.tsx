import { BiSolidBowlRice } from "react-icons/bi";
import { FaCat, FaDog, FaDove } from "react-icons/fa";
import { GiRabbit } from "react-icons/gi";
import { IoFish } from "react-icons/io5";
import { Link } from "react-router-dom";

type ModalProps = {
  isAnimalsOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Animals: React.FC<ModalProps> = ({ isAnimalsOpen, onClose }) => {
  if (!isAnimalsOpen) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isAnimalsOpen ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow my-16 md:my-10 lg:my-0 py-3 md:py-24 lg:py-36 px-16 md:px-24 lg:px-24 transition-all ${isAnimalsOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
      <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-4  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:3 md:gap-1 lg:gap-5 overflow-y-auto h-dvh md:h-96 lg:h-full">
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaDog /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Dogs & Puppies</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Breeds for Sale</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Rescue & Adoption</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Dog Accessories</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaCat /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Cats & Kittens</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Breeds for Sale</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Rescue & Adoption</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Cat Accessories</Link>
            </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaDove /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Birds</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Parrots</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Canaries & Finches</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Bird Cages
              </Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Bird Food</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><IoFish /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Fish & Aquariums</Link>
            </p>
            </div>
          <div className="ml-10">
          <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Aquarium Fish</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Aquarium Accessories</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Fish Food</Link>
            </p>
          </div> 
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><BiSolidBowlRice />
            </span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Pet Food & Accessories</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Pet Toys</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Pet Health Products</Link>
            </p>
            <p>
              <Link className="text-black " to="">Grooming Products</Link>
            </p>
           </div>
           
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiRabbit /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Other Pets</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Rabbits</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to=""> Hamsters</Link>
            </p>
            <p>
              <Link className="text-black " to="">Reptiles (Snakes, Lizards)</Link>
            </p>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Animals;
