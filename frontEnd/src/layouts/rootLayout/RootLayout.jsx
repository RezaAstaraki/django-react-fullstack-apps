import "./rootLayout.scss";
import React, { useContext, useEffect } from "react";

import { Outlet, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function RootLayout() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="root-layout">
      <header className="header">
        <div className="right-side-menu">
          <NavLink className="nav-item" to="">
            Home
          </NavLink>
        </div>

        <div className="left-side-menu">
          {!user ? (
            <NavLink className="nav-item" to="login">
              login
            </NavLink>
          ) : (
            <>
              <span className="logo-name">{user}</span>
              <NavLink className="nav-item" to="/logout">
                Logout
              </NavLink>
            </>
          )}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
