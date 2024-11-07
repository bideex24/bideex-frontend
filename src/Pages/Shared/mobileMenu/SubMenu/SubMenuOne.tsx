import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SubMenuOne.css";
import "../../Navbar.css";
import { useState } from "react";
import MobilesMenu from "./MobilesMenu";

const SubMenuOne = ({isSubOpen}:any) => {
  const [isMenuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);
  return (
    <div>
       <nav className={`nav ${isSubOpen? "nav-open": "nav-closed"}`}>
          <ul className="font-medium text-black">
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Mobiles</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Electronics</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Vehicles</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Property</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Home and Living</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Pets and Animals</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Women's Fashion</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Men's Fashion</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Hobbies Sports and Kids</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Business and Industry</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Education</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Essentials</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Agriculture</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Services</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Jobs</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
          <li>
          <hr />
          <section className="flex items-center justify-between cursor-pointer hover:font-bold">
          <button className="links hover:font-semibold" onClick={()=> setMenuMobileOpen(!isMenuMobileOpen)} >
          {
          isMenuMobileOpen? 
          <li className="flex items-center justify-between bg-slate-200" id="mobiles">
             <span>
                <FaCaretLeft />
            </span>
            <Link to="">
            Categories
            </Link>
          </li>
          : 
          <li ><Link to="">Overseas Jobs</Link></li>
        }
          </button>
           <MobilesMenu 
           isMenuMobileOpen={isMenuMobileOpen}
           ></MobilesMenu>
          </section>
            <hr />
          </li>
            </ul>
        </nav>
        <span>
                <FaCaretRight />
        </span>
     </div>
  )
};

export default SubMenuOne;
