import "./rootLayout.scss";
import React from "react";

import { Outlet, NavLink } from "react-router-dom";

function RootLayout() {
  return (
    <div className="root-layout">
      <header className="header">
        <NavLink className="nav-item" to="">
          Home
        </NavLink>
        <NavLink className="nav-item" to="login">
          login
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
