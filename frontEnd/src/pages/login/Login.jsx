import React from "react";
import "./login.scss";

function Login() {
  return (
    <div className="login">
      <form action="" method="post">
        <fieldset>
          <legend>Login</legend>
          <input type="text" name="username" id="" placeholder="User Name" />
          <input type="password" name="password" id="" placeholder="Password" />
        </fieldset>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
