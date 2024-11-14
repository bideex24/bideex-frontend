import { AiFillGoogleCircle } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary mt-56">
      <div className="max-w-6xl lg:mx-auto grid grid-cols-1 md:grid-cold-4 lg:grid-cols-4 bg-primary py-10 gap-8 mx-8">
        <nav className=" text-wrap md:text-balance lg:text-balance">
          <h6 className="text-white text-xl font-bold">About Bideex</h6>
          <p className="text-white text-start">
            Bideex is a global marketplace that connects buyers and sellers from
            around the world.Whether you want to buy, sell, or rent items,
            Bideex makes it easy and secure. With a wide range of categories,
            you can find everything from electronics and vehicles to jobs and
            services. Join Bideex today and experience a smarter way to trade!
          </p>
        </nav>
        <nav>
          <h6 className="text-white text-xl">Help & Support</h6>
          <p className="text-white">Need help?</p>
          <p className="text-white">Our support team is here for you.</p>
          <p>
            <Link to="" className="link link-hover text-secondary">
              Contact Us
            </Link>
          </p>
          <p>
            <Link to="" className="link link-hover text-secondary">
              Help Center.
            </Link>
          </p>
        </nav>
        <nav>
          <h6 className="text-white text-xl">Quick Link</h6>
          <p>
            <Link to="" className="link link-hover text-secondary">
              Sell Your Items
            </Link>
          </p>
          <p>
            <Link to="" className="link link-hover text-secondary">
              About Us
            </Link>
          </p>
          <p>
            <Link to="" className="link link-hover text-secondary">
              Careers
            </Link>
          </p>
          <p>
            <Link to="" className="link link-hover text-secondary">
              Terms and Conditions
            </Link>
          </p>
          <p>
            <Link to="" className="link link-hover text-secondary">
              Privacy Policy
            </Link>
          </p>
        </nav>
        <form>
          <h6 className="text-white text-xl">Follow Us</h6>
          <div className="flex gap-2 my-3">
            <p>
              <Link to="">
                <CiFacebook className="text-white text-4xl" />
              </Link>
            </p>
            <p>
              <Link to="">
                <AiFillGoogleCircle className="text-white text-4xl" />
              </Link>
            </p>
            <p>
              <Link to="">
                <TiSocialLinkedinCircular className="text-white text-4xl" />
              </Link>
            </p>
            <p>
              <Link to="">
                <TiSocialTwitterCircular className="text-white text-4xl" />
              </Link>
            </p>
            <p>
              <Link to="">
                <MdOutlineEmail className="text-white text-4xl" />
              </Link>
            </p>
          </div>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white text-xl ">
                Sign Up to NewSletter
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="input  join-item"
              />
            </div>
            <Link
              to="/signup"
              className="btn rounded py-3 px-8 text-white hover:bg-secondary bg-secondary border-0 text-xl w-36 mt-4"
            >
              Signup
            </Link>
          </fieldset>
        </form>
      </div>
      <aside className="px-8 md:px-10 lg:px-20  py-10">
        <p className="text-white text-center text-xl ">
          Bideex © {new Date().getFullYear()} - All Rights Reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
