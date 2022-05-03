import React from "react";

const Login = () => {
  return (
    <div className="LogIn">
      <form>
        <label htmlFor="username" value="username">
          Username:
        </label>
        <input type="text" required></input>

        <label htmlFor="password" value="password">
          Password (8 characters minimum):
        </label>
        <input type="password" minLength="8" required></input>
      </form>
    </div>
  );
};

export default Login;
