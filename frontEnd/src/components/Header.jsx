import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <NavLink className="nav-item" to="">
        Home
      </NavLink>
      <NavLink className="nav-item" to="login">
        login
      </NavLink>
    </div>
  );
};
