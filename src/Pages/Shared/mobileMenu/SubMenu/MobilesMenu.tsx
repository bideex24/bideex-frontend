import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../Navbar.css";
interface MobileProps {
  isMenuMobileOpen: boolean; // boolean type
  }

const MobilesMenu: React.FC<MobileProps> = ({isMenuMobileOpen}:any) => {
  return (
    <div>
    <nav className={`nav ${isMenuMobileOpen? "nav-open": "nav-closed"}`}>
         <ul className="font-medium text-black">
           <li>
             <Link className="links hover:font-semibold" to="/">Pending work</Link>
           </li>
         </ul>
     </nav>
     <span>
             <FaCaretRight />
    </span>
  </div>
  )
};

export default MobilesMenu;
