import React, { useContext } from "react";
import "./login.scss";
import AuthContext from "../../context/AuthContext";

function Login() {
  const { loginFunction } = useContext(AuthContext);
  return (
    <div className="login">
      <form action="" method="post" onSubmit={(e) => loginFunction(e)}>
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
