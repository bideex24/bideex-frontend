import logo from '../../assets/logo.svg';
import flag from '../../assets/images/USAFlag.png';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';

const Navbar1 = () => {
  return (
    <div className='bg-primary'>
       <div 
            className="max-w-6xl mx-auto text-white flex justify-between align-center py-2"
            >  
                <Link to="/"><img className='w-28 md:w-24 lg:w-28 mt-0 lg:mt-2 ml-5 md:ml-0 lg:ml-0' src={logo} alt="logo"/></Link>
                <div className="hidden md:hidden lg:block ">
                    <ul className="flex align-center text-base">
                        <li className="flex align-center mx-2 pt-3 inline"><span className='mt-1 mr-2'><FaUser /></span><Link to="/login">Login</Link><span className='ml-2'>|</span></li>
                        <li className='underline pt-3'><Link to="">How It works</Link><span className='ml-2'>|</span></li>
                        <li className="mx-2 pt-3"><Link to="">Help</Link></li>
                        <img className='w-10 h-5 mt-4 mr-2' src={flag} alt=""/>
                        <li className='mt-3.5 mr-2'><Link to="">Eng</Link></li>
                        {/* <select className="mr-5 text-white rounded bg-primary">
                                <option  className="text-white" value="">CHINESE
                                </option>
                                <option value="option1 text-white">SPANISH</option>
                                <option value="option2 text-white">ENGLISH</option>
                                <option value="option2 text-white">BENGALI</option>
                        </select> */}
                        <div>
                    <Link to="" className="btn text-white text-base hover:bg-secondary bg-secondary border-0">Post an Add</Link>
                </div>
                    </ul>
                </div>
               <div className='flex gap-2 items-center md:hidden'>
               <Link className='text-2xl' to=""><IoIosSearch /></Link>
               <Link className='mr-10' to="/login">Log In</Link>
               </div>
            </div>
    </div>
  )
};

export default Navbar1;
