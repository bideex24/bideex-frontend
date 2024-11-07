import { FaCaretLeft, FaCaretRight, FaHome } from "react-icons/fa";
import Navbar1 from "./Navbar1";
import {Link }from "react-router-dom";
import { toysGamesMenuItems, collectiblesAntiquesMenuItems,sportsEquipmentMenuItems,outdoorGearCampingMenuItems, musicalInstrumentsMenuItems, kidsClothesAccessoriesMenuItems } from "./subMenu/Sports";
import { furnitureMenuItems, homeAppliancesMenuItems,kitchenwareMenuItems,homeDecorMenuItems, lightingFixturesMenuItems, toolsEquipmentMenuItems } from "./subMenu/Living";
import { mobileMenuItems, accessoriesMenuItems,wearablesMenuItems,simMenuItems, servicesMenuItems } from "./subMenu/MobileMenu";
import { desktopMenuItems, laptopsMenuItems,tvMenuItems, camerasMenuItems, soundMenuItems,gamingMenuItems, devicesMenuItems } from "./subMenu/ElectronicsMenu";
import { carsMenuItems, motorbikesMenuItems,bicyclesMenuItems, busesMenuItems, partsMenuItems, boatsMenuItems } from "./subMenu/Vehicles";
import { womensClothingMenuItems, footWearMenuItems,bagsMenuItems, haircareMenuItems, jewelryaccessoriesMenuItems, makeupMenuItems } from "./subMenu/Womens";
import { dogsPuppiesMenuItems, catsKittensMenuItems, birdsMenuItems, fishAquariumsMenuItems, petFoodAccessoriesMenuItems, otherPetsMenuItems } from "./subMenu/Animals";
import { booksStudyMaterialsMenuItems, onlineCoursesCertificationsMenuItems, schoolSuppliesMenuItems, educationalToysMenuItems } from "./subMenu/Education";
import { groceriesFoodItemsMenuItems, personalHygieneProductsMenuItems, cleaningSuppliesMenuItems} from "./subMenu/Essentials";
import { mensClothingMenuItems, mensFootWearMenuItems,bagsLuggageMenuItems, watchesaccessoriesMenuItems, groomingMenuItems, sunglassesbeltsMenuItems } from "./subMenu/Mens";
import { apartmentsforSaleMenuItems, apartmentsforRentMenuItems,landforSaleMenuItems, commercialPropertyforRentMenuItems, roomRentalSharedHousingMenuItems } from "./subMenu/Property";
import { industrialMachineryMenuItems, officeSuppliesMenuItems,constructionEquipmentMenuItems, toolsHardwareMenuItems, printingPackagingSuppliesMenuItems, safetySecurityEquipmentMenuItems } from "./subMenu/Business";
import { farmingMenuItems, plantsMenuItems,stockMenuItems } from "./subMenu/Agriculture";
import { freelanceServicesMenuItems, homeServicesMenuItems } from "./subMenu/Services";
import { jobsMenuItems } from "./subMenu/Jobs";
import { overseasJobsMenuItems } from "./subMenu/OverseasJobs";
import "./Navbar.css";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";
import SubMenuOne from "./mobileMenu/SubMenu/SubMenuOne";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSubOpen, setSubOpen] = useState(false);
  return (
    <div className="lg:relative">
      <Navbar1></Navbar1>
     <div className="flex">
      <button onClick={()=> setIsNavOpen(!isNavOpen)} id="open" className="">
        {
          isNavOpen? 
          <span id="close"><IoMdClose /></span>
          : 
          <span id="open"><IoMdMenu  /></span>
        }
      </button>
      <nav className={`nav ${isNavOpen? "nav-open": "nav-closed"}`}>
        <ul className="font-medium text-black">
          <li>
            <Link className="links hover:font-semibold" to="/">Home</Link>
            <hr />
          </li>
          <li>
            <Link className="links hover:font-semibold" to="/">View all Ads</Link>
            <hr />
          </li>
          <li>
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setSubOpen(!isSubOpen)} >
          {
          isSubOpen? 
          <li className="flex items-center justify-between bg-slate-200
          " id="categories">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Home
            </Link>
          </li>
          : 
          <li><Link to="">Categories</Link></li>
        }
          </button>
           <SubMenuOne 
           isSubOpen={isSubOpen}
           ></SubMenuOne>
          </section>
            <hr />
          </li>
          <li>
            <Link className="links hover:font-semibold" to="/">Sell Your Items</Link>
            <hr />
          </li>
          <li>
            <Link className="links hover:font-semibold" to="/">Blog</Link>
            <hr />
          </li>
          <li>
            <Link className="links hover:font-semibold" to="/">Contact</Link>
            <hr />
          </li>
          <li>
            <Link className="links hover:font-semibold" to="/">Faqs</Link>
            <hr />
          </li>
        </ul>
      </nav>
     </div>
      <div className="small-display max-w-6xl mx-auto lg:block">
        <ul className="menu menu-horizontal py-0 text-sm">
          <li className="-ml-5">
            <button className="py-4">
            <Link to="/">
            <span><FaHome className="text-xl"/></span>
            </Link>
            </button>
          </li>
          <li>
            <button className="py-4"><Link className="font-bold main-menu" to="">View All Ads</Link></button>
          </li>
          {/* Navbar Nested level ----- 1 */}
          <li>
           <button className="py-4">
           <Link className="font-bold" to="/">Categories</Link>
           </button>
            <ul className="dropdown1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12  pb-10 text-black">
          {/* Navbar Nested level ----- 2 */}
          <li>
            <Link className="hover:font-bold" to="/categories/mobiles">Hobbies Sports and Kids
            <span>
                <FaCaretRight />
            </span>
            </Link>
          <ul className="dropdown2 ml-52 shadow-lg bg-white rounded w-72 mt-3 py-2">
          {/* Navbar Nested level ----- 3 */}
            <li>
              <Link className="hover:font-bold" to="/categories/mobiles/mobile-phone">Toys and Games 
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-40 shadow-lg bg-white rounded w-52 py-2">
              {/* Navbar Nested level ----- 4 */}
               {toysGamesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/mobiles/mobile-phone/moble-phone-accessories">Collectibles and Antiques
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-56 shadow-lg bg-white rounded w-60 py-2">
              {/* Navbar Nested level ----- 4 */}
               {collectiblesAntiquesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="">Sports Equipment
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-44 shadow-lg bg-white rounded w-52 py-2">
              {/* Navbar Nested level ----- 4 */}
               {sportsEquipmentMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="">Outdoor Gear and Camping
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-60 shadow-lg bg-white rounded w-60 py-2">
              {/* Navbar Nested level ----- 4 */}
               {outdoorGearCampingMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="">Musical Instruments
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-48 shadow-lg bg-white rounded w-60 py-2">
              {/* Navbar Nested level ----- 4 */}
               {musicalInstrumentsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="">Kids' Clothes and Accessories
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-64 shadow-lg bg-white rounded w-52 py-2">
              {/* Navbar Nested level ----- 4 */}
               {kidsClothesAccessoriesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
          </ul>
          </li>
          {/* mobiles nested end here */}
          <li>
            <Link className="hover:font-bold" to="">Electronics
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown2 ml-32 shadow-lg bg-white rounded w-80 mt-3 py-2">
          {/* Navbar Nested level ----- 3 */}
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/desktop-computer">Desktop Computers 
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-44 shadow-lg bg-white rounded w-52 py-2">
              {/* Navbar Nested level ----- 4 */}
               {desktopMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/laptops">Laptops
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-24 shadow-lg bg-white rounded w-52 py-2">
              {/* Navbar Nested level ----- 4 */}
               {laptopsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/tv-monitors">TVs and Monitors
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-40 shadow-lg bg-white rounded w-64 py-2">
              {/* Navbar Nested level ----- 4 */}
               {tvMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/cameras-accessories">Cameras and Accessories
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-52 shadow-lg bg-white rounded w-64 py-2">
              {/* Navbar Nested level ----- 4 */}
               {camerasMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/audio-sound-systems">Audio and Sound Systems
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-56 shadow-lg bg-white rounded w-64 py-2">
              {/* Navbar Nested level ----- 4 */}
               {soundMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/gaming-consoles-accessories">Gaming Consoles and Accessories
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-72 shadow-lg bg-white rounded w-60 py-2">
              {/* Navbar Nested level ----- 4 */}
               {gamingMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/smart-home-devices">Smart Home Devices
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-48 shadow-lg bg-white rounded w-60 py-2">
              {/* Navbar Nested level ----- 4 */}
               {devicesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
          </ul>
          </li>
          <li>
            <Link className="hover:font-bold" to="">Vehicles
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown2 ml-24 shadow-lg bg-white rounded w-72 mt-3 py-2">
          {/* Navbar Nested level ----- 3 */}
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/desktop-computer">Cars 
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-20 shadow-lg bg-white rounded w-40 py-2">
              {/* Navbar Nested level ----- 4 */}
               {carsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/laptops">Motorbikes
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-32 shadow-lg bg-white rounded w-40 py-2">
              {/* Navbar Nested level ----- 4 */}
               {motorbikesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/tv-monitors">Bicycles
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-28 shadow-lg bg-white rounded w-44 py-2">
              {/* Navbar Nested level ----- 4 */}
               {bicyclesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/cameras-accessories">Trucks and Buses
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-40 shadow-lg bg-white rounded w-44 py-2">
              {/* Navbar Nested level ----- 4 */}
               {busesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/audio-sound-systems">Auto Parts and Accessories
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-56 shadow-lg bg-white rounded w-64 py-2">
              {/* Navbar Nested level ----- 4 */}
               {partsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/gaming-consoles-accessories">Boats and Watercraft
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-44 shadow-lg bg-white rounded w-40 py-2">
              {/* Navbar Nested level ----- 4 */}
               {boatsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
          </ul>
          </li>
          <li>
            <Link className="hover:font-bold" to="">Agriculture
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown2 ml-28 shadow-lg bg-white rounded w-52 mt-3 py-2">
          {/* Navbar Nested level ----- 3 */}
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/desktop-computer">Farming Equipment 
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-12 shadow-lg bg-white rounded w-40 py-2 mt-8">
              {/* Navbar Nested level ----- 4 */}
               {farmingMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/laptops">Seeds and Plants
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-12 shadow-lg bg-white rounded w-40 py-2 mt-8">
              {/* Navbar Nested level ----- 4 */}
               {plantsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/tv-monitors">Livestock
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-12 shadow-lg bg-white rounded w-36 py-2 mt-8">
              {/* Navbar Nested level ----- 4 */}
               {stockMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
          </ul>
          </li>
          <li>
            <Link className="hover:font-bold" to="">Women's Fashion and Beauty
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown2 ml-60 shadow-lg bg-white rounded w-72 mt-3 py-2">
          {/* Navbar Nested level ----- 3 */}
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/desktop-computer">Clothing 
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-28 shadow-lg bg-white rounded w-80 py-2">
              {/* Navbar Nested level ----- 4 */}
               {womensClothingMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/laptops">Footwear
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-32 shadow-lg bg-white rounded w-40 py-2">
              {/* Navbar Nested level ----- 4 */}
               {footWearMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/tv-monitors">Bags & Purses
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-36 shadow-lg bg-white rounded w-40 py-2">
              {/* Navbar Nested level ----- 4 */}
               {bagsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/cameras-accessories">Jewelry & Accessories
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-56 shadow-lg bg-white rounded w-56 py-2">
              {/* Navbar Nested level ----- 4 */}
               {jewelryaccessoriesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/audio-sound-systems">Makeup & Skincare
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-48 shadow-lg bg-white rounded w-72 py-2">
              {/* Navbar Nested level ----- 4 */}
               {makeupMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/gaming-consoles-accessories">Haircare & Styling Tools
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-52 shadow-lg bg-white rounded w-72 py-2">
              {/* Navbar Nested level ----- 4 */}
               {haircareMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
          </ul>
          </li>
          <li>
            <Link className="hover:font-bold" to="">Mobiles
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown2 ml-24 shadow-lg bg-white rounded w-60 mt-3 py-2">
          {/* Navbar Nested level ----- 3 */}
            <li>
              <Link className="hover:font-bold" to="/categories/mobiles/mobile-phone">Mobile Phones 
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-36 shadow-lg bg-white rounded w-40 py-2">
              {/* Navbar Nested level ----- 4 */}
               {mobileMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/mobiles/mobile-phone/moble-phone-accessories">Mobile Phone Accessories
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-52 shadow-lg bg-white rounded w-60 py-2">
              {/* Navbar Nested level ----- 4 */}
               {accessoriesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="">Wearables
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-28 shadow-lg bg-white rounded w-48 py-2">
              {/* Navbar Nested level ----- 4 */}
               {wearablesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="">SIM Cards
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-28 shadow-lg bg-white rounded w-48 py-2">
              {/* Navbar Nested level ----- 4 */}
               {simMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="">Mobile Phone Services
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-52 shadow-lg bg-white rounded w-64 py-2">
              {/* Navbar Nested level ----- 4 */}
               {servicesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
          </ul>
          </li>
          <li>
            <Link className="hover:font-bold" to="">Property
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown2 ml-24 shadow-lg bg-white rounded w-80 mt-3 py-2">
          {/* Navbar Nested level ----- 3 */}
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/desktop-computer">Apartments for Sale 
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-44 shadow-lg bg-white rounded w-52 py-2">
              {/* Navbar Nested level ----- 4 */}
               {apartmentsforSaleMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/laptops">Apartments for Rent
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-44 shadow-lg bg-white rounded w-48 py-2">
              {/* Navbar Nested level ----- 4 */}
               {apartmentsforRentMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/tv-monitors">Land for Sale
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-32 shadow-lg bg-white rounded w-44 py-2">
              {/* Navbar Nested level ----- 4 */}
               {landforSaleMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/cameras-accessories">Commercial Property for Rent
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-60 shadow-lg bg-white rounded w-56 py-2">
              {/* Navbar Nested level ----- 4 */}
               {commercialPropertyforRentMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/audio-sound-systems">Room Rentals and Shared Housing
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-[280px] shadow-lg bg-white rounded w-[280px] py-2">
              {/* Navbar Nested level ----- 4 */}
               {roomRentalSharedHousingMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
          </ul>
          </li>
          <li>
            <Link className="hover:font-bold" to="">Services
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown2 ml-24 shadow-lg bg-white rounded w-52 mt-3 py-2">
          {/* Navbar Nested level ----- 3 */}
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/desktop-computer">Freelance Services 
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-12 shadow-lg bg-white rounded w-40 py-2 mt-8">
              {/* Navbar Nested level ----- 4 */}
               {freelanceServicesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/laptops">Home Services
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-12 shadow-lg bg-white rounded w-40 py-2 mt-8">
              {/* Navbar Nested level ----- 4 */}
               {homeServicesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
          </ul>
          </li>
          <li>
            <Link className="hover:font-bold" to="">Men's Fashion and Grooming
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown2 ml-60 shadow-lg bg-white rounded w-72 mt-3 py-2">
          {/* Navbar Nested level ----- 3 */}
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/desktop-computer">Clothing 
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-28 shadow-lg bg-white rounded w-64 py-2">
              {/* Navbar Nested level ----- 4 */}
               {mensClothingMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/laptops">Footwear
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-32 shadow-lg bg-white rounded w-40 py-2">
              {/* Navbar Nested level ----- 4 */}
               {mensFootWearMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/tv-monitors">Bags and Luggage
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-44 shadow-lg bg-white rounded w-40 py-2">
              {/* Navbar Nested level ----- 4 */}
               {bagsLuggageMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/cameras-accessories">Watches and Accessories
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-56 shadow-lg bg-white rounded w-56 py-2">
              {/* Navbar Nested level ----- 4 */}
               {watchesaccessoriesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/audio-sound-systems"> Grooming and Shaving Products
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-64 shadow-lg bg-white rounded w-64 py-2">
              {/* Navbar Nested level ----- 4 */}
               {groomingMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/gaming-consoles-accessories">Sunglasses and Belts
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-52 shadow-lg bg-white rounded w-64 py-2">
              {/* Navbar Nested level ----- 4 */}
               {sunglassesbeltsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
          </ul>
          </li>
          <li>
            <Link className="hover:font-bold" to="">Business and Industry
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown2 ml-48 shadow-lg bg-white rounded w-72 mt-3 py-2">
          {/* Navbar Nested level ----- 3 */}
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/desktop-computer">Industrial Machinery 
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-44 shadow-lg bg-white rounded w-64 py-2">
              {/* Navbar Nested level ----- 4 */}
               {industrialMachineryMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/laptops">Office Supplies
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-36 shadow-lg bg-white rounded w-48 py-2">
              {/* Navbar Nested level ----- 4 */}
               {officeSuppliesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/tv-monitors">Construction Equipment
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-52 shadow-lg bg-white rounded w-40 py-2">
              {/* Navbar Nested level ----- 4 */}
               {constructionEquipmentMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/cameras-accessories">Tools and Hardware
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-44 shadow-lg bg-white rounded w-56 py-2">
              {/* Navbar Nested level ----- 4 */}
               {toolsHardwareMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/audio-sound-systems">Printing and Packaging Supplies
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-64 shadow-lg bg-white rounded w-52 py-2">
              {/* Navbar Nested level ----- 4 */}
               {printingPackagingSuppliesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/gaming-consoles-accessories">Safety and Security Equipment
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-64 shadow-lg bg-white rounded w-52 py-2">
              {/* Navbar Nested level ----- 4 */}
               {safetySecurityEquipmentMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
          </ul>
          </li>
          <li>
            <Link className="hover:font-bold" to="">Education
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown2 ml-28 shadow-lg bg-white rounded w-80 mt-3 py-2">
          {/* Navbar Nested level ----- 3 */}
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/desktop-computer">Books and Study Materials 
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-56 shadow-lg bg-white rounded w-48 py-2">
              {/* Navbar Nested level ----- 4 */}
               {booksStudyMaterialsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/laptops">Online Courses and Certifications
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-[265px] shadow-lg bg-white rounded w-64 py-2">
              {/* Navbar Nested level ----- 4 */}
               {onlineCoursesCertificationsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/tv-monitors">School Supplies
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-36 shadow-lg bg-white rounded w-56 py-2">
              {/* Navbar Nested level ----- 4 */}
               {schoolSuppliesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/cameras-accessories">Educational Toys
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-40 shadow-lg bg-white rounded w-44 py-2">
              {/* Navbar Nested level ----- 4 */}
               {educationalToysMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
          </ul>
          </li>
          <li>
            <Link className="hover:font-bold" to="">Jobs
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-20 shadow-lg bg-white rounded w-48 py-2 mt-2">
              {/* Navbar Nested level ----- 4 */}
               {jobsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
            </ul>
          </li>
          <li>
            <Link className="hover:font-bold" to="">Home and Living
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown2 ml-40 shadow-lg bg-white rounded w-72 mt-3 py-2">
          {/* Navbar Nested level ----- 3 */}
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/desktop-computer">Furniture 
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-28 shadow-lg bg-white rounded w-52 py-2">
              {/* Navbar Nested level ----- 4 */}
               {furnitureMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/laptops">Home Appliances
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-40 shadow-lg bg-white rounded w-48 py-2">
              {/* Navbar Nested level ----- 4 */}
               {homeAppliancesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/tv-monitors">Kitchenware
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-32 shadow-lg bg-white rounded w-80 py-2">
              {/* Navbar Nested level ----- 4 */}
               {kitchenwareMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/cameras-accessories">Home Decor
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-32 shadow-lg bg-white rounded w-56 py-2">
              {/* Navbar Nested level ----- 4 */}
               {homeDecorMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/audio-sound-systems">Lighting and Fixtures
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-48 shadow-lg bg-white rounded w-56 py-2">
              {/* Navbar Nested level ----- 4 */}
               {lightingFixturesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/gaming-consoles-accessories">Tools and DIY Equipment
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-52 shadow-lg bg-white rounded w-52 py-2">
              {/* Navbar Nested level ----- 4 */}
               {toolsEquipmentMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
          </ul>
          </li>
          <li>
            <Link className="hover:font-bold" to="">Pets and Animals
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown2 ml-40 shadow-lg bg-white rounded w-64 mt-3 py-2">
          {/* Navbar Nested level ----- 3 */}
            <li>
              <Link className="hover:font-bold" to="/categories/mobiles/mobile-phone">Dogs and Puppies 
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-40 shadow-lg bg-white rounded w-56 py-2">
              {/* Navbar Nested level ----- 4 */}
               {dogsPuppiesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/mobiles/mobile-phone/moble-phone-accessories">Cats and Kittens
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-40 shadow-lg bg-white rounded w-52 py-2">
              {/* Navbar Nested level ----- 4 */}
               {catsKittensMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="">Birds
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-20 shadow-lg bg-white rounded w-48 py-2">
              {/* Navbar Nested level ----- 4 */}
               {birdsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="">Fish and Aquariums
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-48 shadow-lg bg-white rounded w-56 py-2">
              {/* Navbar Nested level ----- 4 */}
               {fishAquariumsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
            <li>
              <Link className="hover:font-bold" to="">Pet Food and Accessories
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-56 shadow-lg bg-white rounded w-48 py-2">
              {/* Navbar Nested level ----- 4 */}
               {petFoodAccessoriesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="">Other Pets
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-28 shadow-lg bg-white rounded w-56 py-2">
              {/* Navbar Nested level ----- 4 */}
               {otherPetsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
          </ul>
          </li>
          <li>
            <Link className="hover:font-bold" to="">Essentials
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown2 ml-28 shadow-lg bg-white rounded w-80 mt-3 py-2">
          {/* Navbar Nested level ----- 3 */}
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/desktop-computer">Groceries and Food Items 
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-56 shadow-lg bg-white rounded w-60 py-2">
              {/* Navbar Nested level ----- 4 */}
               {groceriesFoodItemsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/laptops">Personal Hygiene Products
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-56 shadow-lg bg-white rounded w-72 py-2">
              {/* Navbar Nested level ----- 4 */}
               {personalHygieneProductsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
            </li>
            <li>
              <Link className="hover:font-bold" to="/categories/electronics/tv-monitors">Cleaning Supplies
              <span>
                <FaCaretRight />
              </span>
              </Link>
              <ul className="dropdown3 ml-40 shadow-lg bg-white rounded w-48 py-2">
              {/* Navbar Nested level ----- 4 */}
               {cleaningSuppliesMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
              </ul>
              </li>
          </ul>
          </li>
          <li>
            <Link className="hover:font-bold" to="">Overseas Jobs
            <span>
                <FaCaretRight />
            </span>
            </Link>
            <ul className="dropdown3 ml-36 shadow-lg bg-white rounded w-44 py-2 mt-2">
              {/* Navbar Nested level ----- 4 */}
               {overseasJobsMenuItems.map((item)=>( 
                <li key={item.path}>
                  <Link className="hover:font-bold" to={item.path}>{item.label}</Link>
                </li>))}
            </ul>
          </li>
            </ul>
          </li>
          <li>
           <button className="py-4">
           <Link className="font-bold" to="">Sell Your Items</Link>
           </button>
          </li>
          <li>
          <button className="py-4">
          <Link className="font-bold" to="">Blog</Link>
          </button>
          </li>
          <li>
           <button className="py-4">
           <Link className="font-bold" to="">Contact Us</Link>
           </button>
          </li>
          <li>
            <button className="py-4">
            <Link className="font-bold" to="">FAQs</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Navbar;
