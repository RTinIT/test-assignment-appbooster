import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-item">
        <NavLink
          to="/test-assignment-appbooster/converter"
          className={({ isActive }) => (isActive ? "active-page" : "menu-item")}
        >
          Converter
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="/test-assignment-appbooster/currencies-exchange-rate"
          className={({ isActive }) => (isActive ? "active-page" : "menu-item")}
        >
          All currencies
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
