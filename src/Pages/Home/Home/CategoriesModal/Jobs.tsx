import { FaSuitcase } from "react-icons/fa";
import { Link } from "react-router-dom";

type ModalProps = {
  isJobsOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Jobs: React.FC<ModalProps> = ({ isJobsOpen, onClose }) => {
  if (!isJobsOpen) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isJobsOpen ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow my-16 md:my-10 lg:my-0 py-3 md:py-24 lg:py-36 px-16 md:px-4 lg:px-72 transition-all ${isJobsOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
      <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-4  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
        <div className="flex flex-col md:flex-row lg:flex-row gap:3 md:gap-7 lg:gap-48 overflow-y-auto h-dvh md:h-full lg:h-full">
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaSuitcase /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Sales Jobs</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Marketing Jobs</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">IT and Software Jobs</Link>
            </p>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Jobs;
