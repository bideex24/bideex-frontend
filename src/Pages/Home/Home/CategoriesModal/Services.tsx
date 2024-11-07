import { MdOutlineElectricalServices } from "react-icons/md";
import { SiFreelancer } from "react-icons/si";
import { Link } from "react-router-dom";

type ModalProps = {
  isServicesOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Services: React.FC<ModalProps> = ({ isServicesOpen, onClose }) => {
  if (!isServicesOpen) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isServicesOpen ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow my-16 md:my-10 lg:my-0 py-3 md:py-24 lg:py-36 px-16 md:px-4 lg:px-72 transition-all ${isServicesOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
      <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-4  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
        <div className="flex flex-col md:flex-row lg:flex-row gap:3 md:gap-7 lg:gap-48 overflow-y-auto h-dvh md:h-full lg:h-full">
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><SiFreelancer /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Freelance Services</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Graphic Design</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Digital Marketing</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><MdOutlineElectricalServices /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Home Services</Link>
            </p>
            </div>
          <div className="ml-10">
          <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Plumbing and Electrical</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">House Cleaning</Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Services;
