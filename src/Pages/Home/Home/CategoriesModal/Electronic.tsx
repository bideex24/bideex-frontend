import { BsSpeakerFill } from "react-icons/bs";
import { FaCamera, FaLaptopCode } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { IoTv } from "react-icons/io5";
import { Link } from "react-router-dom";

type ModalProps = {
  isElectronicOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Electronic: React.FC<ModalProps> = ({ isElectronicOpen, onClose }) => {
  if (!isElectronicOpen) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isElectronicOpen ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow my-16 md:my-10 lg:my-0 py-3 md:py-16 lg:py-16 px-16 md:px-24 lg:px-36 transition-all ${isElectronicOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
      <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-4  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:3 md:gap-1 lg:gap-5 overflow-y-auto h-dvh md:h-96 lg:h-full">
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaComputer /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Desktop Computers</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Gaming PCs</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">All-in-One PCs</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Monitors</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Gaming Consoles & Accessories</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">PlayStation Consoles</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Xbox Consoles</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Gaming Controllers</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">VR Headsets</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Nintendo Consoles</Link>
            </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaLaptopCode /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Computer Accessories</Link>
            </p>
            </div>
          <div className="ml-10">
          <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Laptops</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Gaming Laptops</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Business Laptops</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">2-in-1 Laptops</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Laptop Accessories</Link>
            </p>
          </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><IoTv /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">TVs & Monitors</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Smart TVs</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">OLED & QLED TVs</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">TV Mounts & Accessories</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Smart Home Devices</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Smart Lights & Switches</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Security Systems</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Smart Thermostats</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaCamera /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Cameras & Accessories</Link>
            </p>
            </div>
           <div className="ml-10"> <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Digital Cameras</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">DSLR Cameras</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Camera Lenses</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Camera Stands & Tripods</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Drones & Quadcopters</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Security Cameras</Link>
            </p></div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><BsSpeakerFill /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Audio & Sound Systems</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Home Theater Systems</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Portable Speakers</Link>
            </p>
            <p>
              <Link className="text-black " to="">Headphones & Earbuds</Link>
            </p>
            <p>
              <Link className="text-black " to="">Microphones & Audio Mixers</Link>
            </p>
            <p>
              <Link className="text-black " to="">Smart Speakers</Link>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Electronic;
