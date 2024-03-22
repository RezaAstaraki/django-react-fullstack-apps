import React, { useContext } from "react";
import "./home.scss";
import AuthContext from "../../context/AuthContext";

export const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="home">
      Home
      {user && (
        <h3>
          hello <strong>{user}</strong> welcome
        </h3>
      )}
    </div>
  );
};
