import { FaHouse, FaLandmarkFlag } from "react-icons/fa6";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdApartment } from "react-icons/md";
import { PiBuildingApartmentDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

type ModalProps = {
  isPropertyOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Property: React.FC<ModalProps> = ({ isPropertyOpen, onClose }) => {
  if (!isPropertyOpen) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isPropertyOpen ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow my-0 md:my-10 lg:my-0 py-0 md:py-24 lg:py-36 px-16 md:px-24 lg:px-10 transition-all ${isPropertyOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
      <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-4  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:3 md:gap-1 lg:gap-5 overflow-y-auto h-dvh md:h-96 lg:h-full">
          <div>
          <div className="flex justify-start">
          <span className="text-3xl text-gray-500 "><MdApartment /></span>
            <p>
              <Link className="text-black text-xl font-bold" to="">Apartments for Sale</Link>
            </p>
            </div>
            <div className="ml-8">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">New Apartments</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Used Apartments</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Luxury Apartments</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Studio Apartments</Link>
            </p>
          </div>
          </div>
          <div>
           <div className="flex justify-start">
           <span className="text-3xl text-gray-500 ">  <span className="text-3xl text-gray-500 "><PiBuildingApartmentDuotone /></span></span>
           <p>
              <Link className="text-black text-xl font-bold" to="">Apartments for Rent</Link>
            </p>
           </div>
            <div className="ml-8">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Short-term Rentals</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Long-term Rentals</Link>
            </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaLandmarkFlag /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Land for Sale</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Residential Land</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Commercial Land</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Agricultural Land</Link>
            </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><HiBuildingOffice /></span>
            <p>
              <Link className="text-black text-xl font-bold" to="">Commercial Property for Rent</Link>
            </p>
            </div>
           <div className="ml-8">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Office Spaces</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Office Spaces</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Retail Spaces</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Warehouses</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Coworking Spaces</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaHouse /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Room Rentals & Shared Housing</Link>
            </p>
            </div>
          <div className="ml-10">
          <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Shared Apartments</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Hostels</Link>
            </p>
            <p>
              <Link className="text-black " to="">Paying Guest (PG) Accommodations</Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Property;
