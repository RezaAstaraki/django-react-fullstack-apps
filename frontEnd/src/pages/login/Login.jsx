import React, { useContext, useEffect } from "react";
import "./login.scss";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loginFunction, user } = useContext(AuthContext);
  const navigate = useNavigate();
  //redirect to home if user exist
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  const handleSubmit = async (e) => {
    await loginFunction(e);
  };

  return (
    <div className="login">
      <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend>Login</legend>
          <input
            required={true}
            type="text"
            name="username"
            id=""
            placeholder="User Name"
          />
          <input
            required={true}
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
        </fieldset>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
