import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  logo: string;
}

const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
      </ul>
      <div className="navbar__buttons">
        {/* <Link className="navbar__login" to="/login">
          Sign In
        </Link>
        <Link className="navbar__signup" to="/login">
          Sign Up
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
