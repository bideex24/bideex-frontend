import { GiBulldozer, GiCctvCamera, GiDrill, GiPowerGenerator } from "react-icons/gi";
import { ImPrinter } from "react-icons/im";
import { LuPackageOpen } from "react-icons/lu";
import { Link } from "react-router-dom";

type ModalProps = {
  isBusinessOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Business: React.FC<ModalProps> = ({ isBusinessOpen, onClose }) => {
  if (!isBusinessOpen) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isBusinessOpen ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow my-16 md:my-10 lg:my-0 py-3 md:py-24 lg:py-36 px-10 md:px-24 lg:px-24 transition-all ${isBusinessOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
      <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-4  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:3 md:gap-1 lg:gap-5 overflow-y-auto h-dvh md:h-96 lg:h-full">
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiPowerGenerator /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Industrial Machinery</Link>
            </p>
            </div>
          <div className="ml-10">
          <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Generators</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Compressors</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Industrial Cranes</Link>
            </p>
          </div>  
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><ImPrinter /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Office Supplies</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Printers & Scanners</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Office Furniture</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiBulldozer /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Construction Equipment</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Bulldozers</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Concrete Mixers</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Scaffolding</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiDrill /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Tools & Hardware</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Power Drills</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Welding Equipment</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><LuPackageOpen /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Printing & Packaging Supplies</Link>
            </p>
            </div>
            <div className="ml-10">
            <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Packaging Materials</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Printing Machines</Link>
            </p>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiCctvCamera /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Safety & Security Equipment</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Fire Extinguishers</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">CCTV Systems</Link>
            </p>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Business;
