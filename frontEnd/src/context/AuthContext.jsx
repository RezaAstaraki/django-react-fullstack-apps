import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticate, setAuthenticate] = useState(null);

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
      // console.log("data", data.access);
      console.log("user = ", jwtDecode(data.access).user);
      console.log("type = ", typeof jwtDecode(data.access));
    } else {
      alert("something wrong");
    }
  };

  // useEffect(() => {
  //   login();
  // });

  const contextData = {
    user: user,
    authenticate: null,
    loginFunction: login,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
