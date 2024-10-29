import { Routes, Route } from "react-router-dom";
import About from "../component/About/About";
import Hero from "../component/Hero/Hero";
import Navbar from "../component/Navbar/Navbar";
import Contact from "../component/contact/Contact";
import Works from "../component/works/works";

const Index = ({ onClick, isLight }) => {
  return (
    <div className="h-fit w-fit">
      <Navbar onClick={onClick} isLight={isLight} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Index;
