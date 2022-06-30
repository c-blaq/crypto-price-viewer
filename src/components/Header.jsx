import React from "react";
import logo from "../assets/images/coin-logo.png";

const Header = () => {
  return (
    <header className="p-4  bg-gray-100 shadow-md ">
      <img src={logo} alt="Logo" width={80} height={80} />
    </header>
  );
};

export default Header;
