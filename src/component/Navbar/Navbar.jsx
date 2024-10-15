import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
const Navbar = ({ onChange, isLight }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };
  const handleclick=()=>{
    onChange();
    handleMenuItemClick();
  }
  
  return (
    <nav className={isLight ? styles.navbar : styles.darkbar}>
      <div className={styles.menu}>
        <div
          className={isLight ? styles.menuBtn : styles.menuBtndark}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </div>
        
        <ul
          className={`${isLight ? styles.menuItems : styles.menuItemsdark} ${
            menuOpen && styles.menuOpen
          }`}
        >
          <li>
            <Link onClick= {handleMenuItemClick}  to="/">Home</Link>
          </li>
          <li>
            <Link  onClick= {handleMenuItemClick}   to="/about">About</Link>
          </li>
          <li>
            <Link onClick= {handleMenuItemClick}  to="/works">Projects</Link>
          </li>
          <li>
            <Link  onClick= {handleMenuItemClick} to="/contact-me">Contact</Link>
          </li>
          <li>
            <div
              style={{ borderRadius: "50%", height: "60px", width: "60px" }}
              onClick={handleclick}
              className={isLight ? styles.dark : styles.themeButton}
            >
              {isLight ?  <MdOutlineDarkMode />:<CiLight dark /> }{" "}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
