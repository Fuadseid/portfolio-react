import React, { useEffect, useState } from "react";
import Router from "./router/index";

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('prefers-color-scheme: dark').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const changeTheme = () => {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`h-fit w-fit flex items-center justify-center cursor-pointer transition-colors duration-600 ease-in-out ${theme === 'dark' ? 'bg-[#181D21] text-white' : 'bg-white text-black'}`}>
      <Router onClick={changeTheme} isLight={theme} />
    </div>
  );
};

export default App;
