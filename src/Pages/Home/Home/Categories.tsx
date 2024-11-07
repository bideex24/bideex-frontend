import { CiGlobe, CiMobile3 } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { GiAmpleDress, GiFruitBowl } from "react-icons/gi";
import { IoBusinessOutline, IoHomeOutline } from "react-icons/io5";
import { LiaCouchSolid, LiaTshirtSolid } from "react-icons/lia";
import { MdCleaningServices, MdOutlineSportsTennis } from "react-icons/md";
import { PiCatLight, PiSuitcaseSimpleBold, PiSuitcaseSimpleDuotone, PiTreePalmLight } from "react-icons/pi";
import { RiMotorbikeFill } from "react-icons/ri";
import Mobile from "./CategoriesModal/Mobile";
import { useState } from "react";
import Electronic from "./CategoriesModal/Electronic";
import Vehicles from "./CategoriesModal/Vehicles";
import Property from "./CategoriesModal/Property";
import Living from "./CategoriesModal/Living";
import Animals from "./CategoriesModal/Animals";
import Womens from "./CategoriesModal/Womens";
import Mens from "./CategoriesModal/Mens";
import Sports from "./CategoriesModal/Sports";
import Business from "./CategoriesModal/Business";
import Education from "./CategoriesModal/Education";
import Essentials from "./CategoriesModal/Essentials";
import Agriculture from "./CategoriesModal/Agriculture";
import Services from "./CategoriesModal/Services";
import Jobs from "./CategoriesModal/Jobs";
import Overseas from "./CategoriesModal/Overseas";

const Categories = () => {
    const [isMobileOpen, setMobileOpen] = useState(false);
    const [isElectronicOpen, setElectronicOpen] = useState(false);
    const [isVehiclesOpen, setVehiclesOpen] = useState(false);
    const [isPropertyOpen, setPropertyOpen] = useState(false);
    const [isLivingOpen, setLivingOpen] = useState(false);
    const [isAnimalsOpen, setAnimalsOpen] = useState(false);
    const [isWomensOpen, setWomensOpen] = useState(false);
    const [isMensOpen, setMensOpen] = useState(false);
    const [isSportsOpen, setSportsOpen] = useState(false);
    const [isBusinessOpen, setBusinessOpen] = useState(false);
    const [isEducationOpen, setEducationOpen] = useState(false);
    const [isEssentialsOpen, setEssentialsOpen] = useState(false);
    const [isAgricultureOpen, setAgricultureOpen] = useState(false);
    const [isServicesOpen, setServicesOpen] = useState(false);
    const [isJobsOpen, setJobsOpen] = useState(false);
    const [isOverseasOpen, setOverseasOpen] = useState(false);

    return (
        <section className="my-20 max-w-6xl mx-auto bg-white">
        <div className=" text-wrap md:text-balance lg:text-balance">
        <h3 className="uppercase text-2xl font-bold text-center text-black">Categories
        </h3>
        <p className="text-xl font-normal md:font-semibold lg:font-semibold text-center text-black mb-10 text-center">Explore a wide range of products and services across categories</p>
        </div>
        <div className="grid grid-cols-1 md:ml-10 lg:ml-0 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span className="p-4  text-white text-2xl rounded-full w-16 h-16 mt-5 bg-mobile"><CiMobile3 className="text-3xl" /></span>
                <div onClick={()=>setMobileOpen(true)} className="w-64 cursor-pointer ml-3">
                    <h2 className="text-xl font-bold text-black">Mobiles</h2>
                    <p className="text-black">Buy phones, accessories, and services for all mobile needs.</p>
                </div>
                <Mobile children isMobileOpen={isMobileOpen} onClose={()=>setMobileOpen(false)}></Mobile>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span className="p-4 text-white text-2xl rounded-full w-16 h-16 mt-5 bg-electronic"><FaComputer className="text-3xl"  /></span>
                <div onClick={()=>setElectronicOpen(true)} className="w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black">Electronics</h2>
                    <p className="text-black">Find computers, TVs, cameras, and smart devices.</p>
                </div>
                <Electronic children
             isElectronicOpen={isElectronicOpen} onClose={()=>setElectronicOpen(false)}>
                </Electronic>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span className="p-4  text-white text-2xl rounded-full w-16  h-16 mt-5 bg-vehicles"><RiMotorbikeFill className="text-3xl" /></span>
                <div onClick={()=>setVehiclesOpen(true)} className=" w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black">Vehicles</h2>
                    <p className="text-black">Explore cars, bikes, and auto parts for sale or rent.</p>
                </div>
                <Vehicles children isVehiclesOpen={isVehiclesOpen} onClose={()=>setVehiclesOpen(false)}></Vehicles>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span className="p-4  text-white text-2xl rounded-full w-16  h-16 mt-5 bg-property"><IoHomeOutline className="text-3xl" /></span>
                <div onClick={()=>setPropertyOpen(true)} className="w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black">Property</h2>
                    <p className="text-black">Buy or rent homes, land, and commercial spaces.</p>
                </div>
                <Property children isPropertyOpen={isPropertyOpen} onClose={()=>setPropertyOpen(false)}></Property>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span  className="p-4  text-white text-2xl rounded-full w-16 h-16 mt-5 bg-home"><LiaCouchSolid className="text-3xl" /></span>
                <div onClick={()=>setLivingOpen(true)} className="w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black ">Home & Living</h2>
                    <p className="text-black">Shop furniture, appliances, and home decor.</p>
                </div>
                <Living children isLivingOpen={isLivingOpen} onClose={()=>setLivingOpen(false)}></Living>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span  className="p-4  text-white text-2xl rounded-full w-16  h-16 mt-5 bg-pets"><PiCatLight className="text-3xl" /></span>
                <div onClick={()=>setAnimalsOpen(true)} className="w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black">Pets & Animals</h2>
                    <p className="text-black">Adopt pets or buy supplies for your animals.</p>
                </div>
                <Animals children isAnimalsOpen={isAnimalsOpen} onClose={()=>setAnimalsOpen(false)}></Animals>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span className="p-4 bg-primary text-white text-2xl rounded-full w-16  h-16 mt-5 bg-women"><GiAmpleDress className="text-3xl" /></span>
                <div onClick={()=>setWomensOpen(true)} className=" w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black">Women’s Fashion <br /> & Beauty</h2>
                    <p className="text-black">Discover clothing, accessories, and beauty products.</p>
                </div>
                <Womens children isWomensOpen={isWomensOpen} onClose={()=>setWomensOpen(false)}></Womens>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span  className="p-4 bg-primary text-white text-2xl rounded-full w-16  h-16 mt-5 bg-men"><LiaTshirtSolid className="text-3xl" /></span>
                <div onClick={()=>setMensOpen(true)} className="w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black">Men’s Fashion & Grooming</h2>
                    <p className="text-black">Shop men’s apparel, accessories, and grooming items.</p>
                </div>
                <Mens children
             isMensOpen={isMensOpen} onClose={()=>setMensOpen(false)}>
                </Mens>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span  className="p-4 bg-primary text-white text-2xl rounded-full w-16  h-16 mt-5 bg-sports"><MdOutlineSportsTennis className="text-3xl" /></span>
                <div onClick={()=>setSportsOpen(true)} className="w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black">Sports & Kids</h2>
                    <p className="text-black">Toys, sports gear, and items for leisure activities.</p>
                </div>
                <Sports children
             isSportsOpen={isSportsOpen} onClose={()=>setSportsOpen(false)}>
                </Sports>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span  className="p-4 bg-primary text-white text-2xl rounded-full w-16  h-16 mt-5 bg-business"><IoBusinessOutline className="text-3xl" /></span>
                <div onClick={()=>setBusinessOpen(true)} className="w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black">Business & Industry</h2>
                    <p className="text-black">Find industrial machinery, tools, and office supplies.</p>
                </div>
                <Business children
             isBusinessOpen={isBusinessOpen} onClose={()=>setBusinessOpen(false)}>
                </Business>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span className="p-4  text-white text-2xl rounded-full w-16  h-16 mt-5 bg-edu"><FaGraduationCap className="text-3xl" /></span>
                <div onClick={()=>setEducationOpen(true)} className="w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black">Education</h2>
                    <p className="text-black">Access books, courses, and educational materials.</p>
                </div>
                <Education children
             isEducationOpen={isEducationOpen} onClose={()=>setEducationOpen(false)}>
                </Education>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span className="p-4 text-white text-2xl rounded-full w-16  h-16 mt-5 bg-essentiels"><GiFruitBowl className="text-3xl" /></span>
                <div onClick={()=>setEssentialsOpen(true)} className="w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black">Essentials</h2>
                    <p className="text-black">Groceries, hygiene products, and cleaning supplies.</p>
                </div>
                <Essentials children
             isEssentialsOpen={isEssentialsOpen} onClose={()=>setEssentialsOpen(false)}>
                </Essentials>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span  className="p-4 text-white text-2xl rounded-full w-16  h-16 mt-5 bg-agriculture"><PiTreePalmLight className="text-3xl" /></span>
                <div onClick={()=>setAgricultureOpen(true)} className="w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black">Agriculture</h2>
                    <p className="text-black">Buy farming equipment, seeds, and livestock.</p>
                </div>
                <Agriculture children
             isAgricultureOpen={isAgricultureOpen} onClose={()=>setAgricultureOpen(false)}>
                </Agriculture>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span  className="p-4  text-white text-2xl rounded-full w-16  h-16 mt-5 bg-services"><MdCleaningServices className="text-3xl" /></span>
                <div onClick={()=>setServicesOpen(true)} className="w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black">Services</h2>
                    <p className="text-black">Hire freelance or home services from skilled professionals.</p>
                </div>
                <Services children
             isServicesOpen={isServicesOpen} onClose={()=>setServicesOpen(false)}>
                </Services>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span  className="p-4  text-white text-2xl rounded-full w-16  h-16 mt-5 bg-job"><PiSuitcaseSimpleDuotone className="text-3xl" /></span>
                <div onClick={()=>setJobsOpen(true)} className="w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black">Jobs</h2>
                    <p className="text-black">Search for local job opportunities across industries.</p>
                </div>
                <Jobs children
             isJobsOpen={isJobsOpen} onClose={()=>setJobsOpen(false)}>
                </Jobs>
            </div>
            <div className="bg-white flex mx-auto md:mx-0 lg:mx-0">
                    <span  className="p-4  text-white text-2xl rounded-full w-16 h-16 mt-5 bg-overseas"><PiSuitcaseSimpleBold className="text-3xl" /> <CiGlobe className="-mt-9 ml-3" /></span>
                <div onClick={()=>setOverseasOpen(true)} className=" w-64 ml-3 cursor-pointer">
                    <h2 className="text-xl font-bold text-black">Overseas Jobs</h2>
                    <p className="text-black">Explore international job opportunities abroad.</p>
                </div>
                <Overseas children
             isOverseasOpen={isOverseasOpen} onClose={()=>setOverseasOpen(false)}>
                </Overseas>
            </div>
        </div>
        </section>
    )
};

export default Categories;
