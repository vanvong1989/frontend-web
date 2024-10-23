import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";

const Header = ({setShowLogin}) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [header, setHeader] = useState(false);
  const [token, setToken] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 40 ? setHeader(true) : setHeader(false);
    };
  
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${header? "py-3 bg-white shadow-sm" : ""} fixed w-full mx-auto top-0 left-0 right-0 
    py-4 z-30 transition-all max-padd-container flexBetween `}>
      <Link to={"/"}>
        <img src={logo} alt="logoImg" height={177} width={177} />
      </Link>
      <div className="flexBetween gap-x-5 sm:gap-x-14 md:gap-x-16  lg:gap-x-24 ">
        <Navbar
          containerStyles={"hidden md:flex   gap-x-5  xl:gap-x-10 medium-15 absolute right-[35%] "}
        />
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col gap-y-12 fixed top-20 right-5 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-state-900/5 transition-all duration-300"
              : "fixed top-20 -right-[100%] transition-all duration-300"
          }`}
        />
        <div className="flexBetween gap-x-3 sm:gap-x-8 ">
          {!menuOpened ? (
            <MdMenu
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-secondary text-2xl"
            />
          ) : (
            <MdClose
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-secondary text-2xl"
            />
          )}
        </div>

        <Link to={"/cart"} className="flex relative">
          <GiShoppingBag className="text-[22px] text-white bg-secondary h-9 w-9 p-2 rounded-xl" />
          <span className="bg-white text-sm absolute -top-2 -right-3 flexCenter w-5 h-5 rounded-full shadow-md">
            0
          </span>
        </Link>
        {!token ? (
          <button onClick={()=>setShowLogin(true)} className="btn-outline rounded-full">Login</button>
        ) : (
          <div className="group relative">
            <FaCircleUser className="text-2xl" />
            <ul className="bg-primary shadow-sm p-3 w-24 ring-1 ring-slate-900/15 rounded absolute right-0 group-hover:flex flex-col hidden">
              <li className="flexCenter gap-x-2 cursor-pointer">
                <FiPackage className="text-[19px]" />
                <p>Orders</p>
              </li>
              <hr className="my-2" />
              <li className="flexCenter gap-x-2 cursor-pointer">
                <TbLogout className="text-[19px]" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
