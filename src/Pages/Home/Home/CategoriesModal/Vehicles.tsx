import { FaBicycle, FaCar, FaMotorcycle } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { MdDirectionsBoatFilled, MdFireTruck } from "react-icons/md";
import { Link } from "react-router-dom";

type ModalProps = {
    isVehiclesOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Vehicles: React.FC<ModalProps> = ({ isVehiclesOpen, onClose }) => {
    if (!isVehiclesOpen) return null;
    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${isVehiclesOpen ? "visible bg-black/20" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow my-16 md:my-10 lg:my-0 py-3 md:py-24 lg:py-24 px-16 md:px-16 lg:px-24 transition-all ${isVehiclesOpen ? "scale-100 opacity-190" : "scale-125 opacity-0"}`}>
                <button onClick={onClose} className="btn btn-sm btn-circle btn absolute right-2 top-4  md:right-8 md:top-8 lg:right-2 lg:top-2">✕</button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:3 md:gap-1 lg:gap-5 overflow-y-auto h-dvh md:h-96 lg:h-full">
                    <div>
                    <div className="flex justify-start">
                    <span className="text-3xl text-gray-500 "><FaCar /></span>
                        <p>
                            <Link className="text-black text-xl font-bold ml-2" to="">Cars</Link>
                        </p>
                        </div>
                        <div className="ml-10">
                        <p className="mt-1 md:mt-3 lg:mt-3">
                            <Link className="text-black ml-0" to="">New Cars</Link>
                        </p>
                        <p>
                            <Link className="text-black ml-0" to="">Used Cars</Link>
                        </p>
                        <p>
                            <Link className="text-black ml-0" to="">Electric Cars</Link>
                        </p>
                        <p>
                            <Link className="text-black ml-0" to="">Hybrid Cars</Link>
                        </p>
                        </div>
                    </div>
                    <div>
                    <div className="flex justify-start">
                    <span className="text-3xl text-gray-500 "><FaMotorcycle /></span>
                        <p>
                            <Link className="text-black text-xl font-bold ml-2" to="">Motorbikes</Link>
                        </p>
                        </div>
                        <div className="ml-10">
                        <p className="mt-1 md:mt-3 lg:mt-3">
                            <Link className="text-black ml-0" to="">Scooters</Link>
                        </p>
                        <p>
                            <Link className="text-black ml-0" to="">Sports Bikes</Link>
                        </p>
                        <p>
                            <Link className="text-black ml-0" to="">Off-Road Bikes</Link>
                        </p>
                        </div>
                    </div>
                    <div>
                    <div className="flex justify-start">
                    <span className="text-3xl text-gray-500 "><FaBicycle /></span>
                        <p>
                            <Link className="text-black text-xl font-bold ml-2" to="">Bicycles</Link>
                        </p>
                        </div>
                        <div className="ml-10">
                        <p className="mt-1 md:mt-3 lg:mt-3">
                            <Link className="text-black ml-0" to="">Mountain Bikes</Link>
                        </p>
                        <p>
                            <Link className="text-black ml-0" to="">Road Bikes</Link>
                        </p>
                        <p>
                            <Link className="text-black ml-0" to="">Electric Bikes</Link>
                        </p>
                        <p>
                            <Link className="text-black ml-0" to="">Bicycle Accessories</Link>
                        </p>
                        </div>
                    </div>
                    <div>
                    <div className="flex justify-start">
                    <span className="text-3xl text-gray-500 "><MdFireTruck /></span>
                        <p>
                            <Link className="text-black text-xl font-bold ml-2" to="">Trucks & Buses</Link>
                        </p>
                        </div>
                        <div className="ml-10">
                        <p className="mt-1 md:mt-3 lg:mt-3">
                            <Link className="text-black ml-0" to="">Pickup Trucks</Link>
                        </p>
                        <p>
                            <Link className="text-black ml-0" to="">Cargo Trucks</Link>
                        </p>
                        <p>
                            <Link className="text-black ml-0" to="">Commercial Buses</Link>
                        </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-start">
                        <span className="text-3xl text-gray-500 "><GiCarWheel /></span>
                        <p>
                            <Link className="text-black text-xl font-bold ml-2" to="">Auto Parts & Accessories</Link>
                        </p>
                        </div>
                        <div className="ml-10">
                        <p className="mt-1 md:mt-3 lg:mt-3">
                            <Link className="text-black ml-0" to="">Tires & Wheels</Link>
                        </p>
                        <p>
                            <Link className="text-black ml-0" to="">Auto Parts & Accessories</Link>
                        </p>
                        <p>
                            <Link className="text-black " to="">Car Batteries</Link>
                        </p>
                        <p>
                            <Link className="text-black " to="">GPS & Navigation Systems</Link>
                        </p>
                        <p>
                            <Link className="text-black " to="">Car Audio Systems</Link>
                        </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-start">
                        <span className="text-3xl text-gray-500 "><MdDirectionsBoatFilled /></span>
                        <p>
                            <Link className="text-black text-xl font-bold ml-2" to="">Boats & Watercraft</Link>
                        </p>
                        </div>
                       <div className="ml-10">
                       <p className="mt-1 md:mt-3 lg:mt-3">
                            <Link className="text-black ml-0" to="">Speedboats</Link>
                        </p>
                        <p>
                            <Link className="text-black ml-0" to="">Speedboats</Link>
                        </p>
                        <p>
                            <Link className="text-black " to="">Jet Skis</Link>
                        </p>
                        <p>
                            <Link className="text-black " to="">Fishing Boats</Link>
                        </p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Vehicles;
