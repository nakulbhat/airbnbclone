import React from "react";
import logo from "../assets/airbnblogo.png";

const Navbar = () => {
  return (
    <nav className="h-20 flex p-4 shadow-lg">
      <img src={logo} alt="AirBnb Logo" />
    </nav>
  );
};

export default Navbar;
