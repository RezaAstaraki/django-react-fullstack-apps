import React, { useContext } from "react";
import "./login.scss";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loginFunction, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    await loginFunction(e);
    if (user) {
      navigate("/");
    }
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
