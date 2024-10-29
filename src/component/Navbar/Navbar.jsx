import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = ({ isLight, onClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMenuOpen(!menuOpen);
  };

  const Navlink = () => {
    return (
      <>
        <Link className="hover:text-slate-800  dark:hover:text-slate-200   hover:text-2xl hover:border-b-2 hover:transition-all duration-300 ease-in-out hover:border-cyan-800" onClick={handleMenuItemClick} to="/">
          Home
        </Link>

        <Link className="hover:text-slate-800  dark:hover:text-slate-200   hover:text-2xl hover:border-b-2 hover:transition-all duration-300 ease-in-out hover:border-cyan-800"  onClick={handleMenuItemClick} to="/about">
          About
        </Link>

        <Link  className="hover:text-slate-800  dark:hover:text-slate-200   hover:text-2xl hover:border-b-2 hover:transition-all duration-300 ease-in-out hover:border-cyan-800" onClick={handleMenuItemClick} to="/works">
          Projects
        </Link>

        <Link className="hover:text-slate-800  dark:hover:text-slate-200   hover:text-2xl hover:border-b-2 hover:transition-all duration-300 ease-in-out hover:border-cyan-200"  onClick={handleMenuItemClick} to="/contact-me">
          Contact
        </Link>
      </>
    );
  };

  return (
    <div className="flex justify-between bg-[#D9D9D9]  w-full dark:bg-[#232A30]">
      <div className=" top-0 z-[20]  mx-auto flex flex-wrap w-full items-center justify-between  p-8 ">
        <>
          <div className="hidden  text-lg mx-60 gap-x-36 md:flex ">
            <Navlink />
          </div>
          <div className="md:hidden">
            <button onClick={handleMenuItemClick}>
              {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden  flex flex-col gap-6 text-xl items-center basis-full">
              <Navlink />
            </div>
          )}
        </>
      </div>
      <div
        style={{ borderRadius: "50%", height: "60px", width: "60px" }}
        onClick={onClick}
        className="dark:text-white mt-4 mx-auto mr-8 flex items-center justify-center relative cursor-pointer"
      >
        {isLight === "dark" ? (
          <CiLight size={24} />
        ) : (
          <MdOutlineDarkMode size={24} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
