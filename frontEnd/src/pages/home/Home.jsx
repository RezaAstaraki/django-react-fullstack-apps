import React, { useContext, useEffect } from "react";
import "./home.scss";
import AuthContext from "../../context/AuthContext";

export const Home = () => {
  const { user, notes } = useContext(AuthContext);

  return (
    <div className="home">
      Home
      {user && (
        <>
          <h3>
            hello <strong>{user}</strong> welcome
          </h3>
          <h3>here is notes:</h3>
          <ul>
            {notes?.map((item) => {
              return <li key={item.id}>{item.body}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};
