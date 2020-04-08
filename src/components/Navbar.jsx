import React from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, toggleMode] = useDarkMode();
  return (
    <nav className="navbar">
      <div className="right">
        <h1>
          <Link to="/" className="removeUnderline">
            Crypto Tracker
          </Link>
        </h1>
      </div>
      <div className="left">
        <button className="seePrice">
          <Link to="/price" className="removeUnderline">
            see price
          </Link>
        </button>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
