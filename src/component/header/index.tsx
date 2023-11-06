import React from "react";
import logo from "./logo.svg";
import "./index.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" height={32} />
    </header>
  );
};

export default Header;
