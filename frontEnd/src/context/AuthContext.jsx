import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticate, setAuthenticate] = useState(null);

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: { "Context-Type": "application/json" },
      body: {
        username: e.target.username.value,
        password: e.target.password.value,
      },
    });
    if (response.status === 200) {
      data = await response.json();
      console.log("data", data);
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
