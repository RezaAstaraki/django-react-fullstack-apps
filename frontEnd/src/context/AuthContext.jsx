import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  let firstRender = true;
  const storedToken = JSON.parse(localStorage.getItem("token"));

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(storedToken);

  //define logout function
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  //define refresh token
  const refreshToken = async () => {
    if (!token) {
      return;
    }
    const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: token.refresh,
      }),
    });
    if (response.status === 200) {
      const data = await response.json();
      setToken(data);
      setUser(jwtDecode(data.access).user);
      localStorage.setItem("token", JSON.stringify(data));
    } else {
      setToken(null);
      setUser(null);
      localStorage.removeItem("token");
    }
  };

  // refresh token every four minutes
  useEffect(() => {
    const fourMinutes = 1000 * 60 * 4;
    const interval = setInterval(() => {
      refreshToken();
    }, fourMinutes);
    return () => {
      clearInterval(interval);
    };
  });

  // checking for first render
  useEffect(() => {
    console.log("firstRender", firstRender);
    if (firstRender) {
      refreshToken();
    }
    firstRender = false;
  }, []);

  //define login function
  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    if (response.status === 200) {
      const data = await response.json();
      setToken(data);
      console.log("jwtDecode(data.access).user", jwtDecode(data.access).user);
      setUser(jwtDecode(data.access).user);
      localStorage.setItem("token", JSON.stringify(data));
    } else {
      alert("something wrong");
    }
  };

  const contextData = {
    user: user,
    authenticate: null,
    loginFunction: login,
    logoutFunction: logout,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
