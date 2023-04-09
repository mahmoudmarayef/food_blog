import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Header: React.FC<HeaderProps> = ({ title, description, imageUrl }) => {
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__title">{title}</h1>
        <p className="header__description">{description}</p>
      </div>
      <div className="header__right">
        <img src={imageUrl} alt="Header image" className="header__image" />
      </div>
    </header>
  );
};

export default Header;
