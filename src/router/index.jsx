import {  Routes, Route } from "react-router-dom";
import About from "../component/About/About";
import Hero from "../component/Hero/Hero";
import Navbar from "../component/Navbar/Navbar";
import Contact from "../component/contact/Contact"
import Works from "../component/works/works"
import styles from './router.css'; // Ensure the correct path and file name
import { useState } from "react";

const Index = () => {
  const [onLight, setOnLight] = useState(true);

  function changeTheme() {
    setOnLight(!onLight);
  }

  return (
   
      <div className={`${onLight ? styles.Router : styles.Routerdark}`}>
        <Navbar onChange={changeTheme} isLight={onLight} />
        <Routes >
          <Route path="/" element={<Hero isLight={onLight} />} />
          <Route path="/about" element={<About isLight={onLight} />} />
          <Route path="/works" element={<Works isLight={onLight} />} />
          <Route path="/contact-me" element={<Contact isLight={onLight} />} />

        </Routes>
      </div>
    
  );
};

export default Index;
