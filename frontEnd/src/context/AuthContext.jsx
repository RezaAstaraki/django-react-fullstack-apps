import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const storedToken = JSON.parse(localStorage.getItem("token"));
  // const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

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
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
