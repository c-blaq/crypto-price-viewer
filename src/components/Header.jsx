import React, { useState } from "react";
import logo from "../assets/images/coin-logo.png";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = ({ theme }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="p-4  bg-gray-100 dark:bg-gray-900 shadow-md flex items-center justify-between">
      <img src={logo} alt="Logo" width={80} height={80} />
      <div
        className="text-3xl cursor-pointer"
        onClick={() => {
          const mode = !darkMode;
          setDarkMode(mode);
          theme(mode ? "dark" : "light");
        }}
      >
        {darkMode ? (
          <MdOutlineLightMode className="text-white" />
        ) : (
          <MdDarkMode />
        )}
      </div>
    </header>
  );
};

export default Header;
