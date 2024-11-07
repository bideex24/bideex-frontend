import { FaBaby, FaBookOpen, FaPython } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";

type ModalProps = {
  isEducationOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Education: React.FC<ModalProps> = ({ isEducationOpen, onClose }) => {
  if (!isEducationOpen) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isEducationOpen ? "visible bg-black/20" : "invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow my-16 md:my-10 lg:my-0 py-3 md:py-24 lg:py-36 px-16 md:px-24 lg:px-24 transition-all ${isEducationOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
      <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-4  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:3 md:gap-1 lg:gap-5 overflow-y-auto h-dvh md:h-96 lg:h-full">
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaBookOpen /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Books and Study Materials</Link>
            </p>
            </div>
         <div className="ml-10">
         <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Textbooks</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Reference Books</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">E-books</Link>
            </p>
         </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaPython /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Online Courses and Certifications</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">IT and Programming</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Business and Management</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Arts and Design</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><GiNotebook /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">School Supplies</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Notebooks and Stationery</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">School Uniforms</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">Backpacks</Link>
            </p>
           </div>
          </div>
          <div>
            <div className="flex justify-start">
            <span className="text-3xl text-gray-500 "><FaBaby /></span>
            <p>
              <Link className="text-black text-xl font-bold ml-2" to="">Educational Toys</Link>
            </p>
            </div>
           <div className="ml-10">
           <p className="mt-1 md:mt-3 lg:mt-3">
              <Link className="text-black ml-0" to="">Learning Kits</Link>
            </p>
            <p>
              <Link className="text-black ml-0" to="">STEM Toys</Link>
            </p>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Education;
