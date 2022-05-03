import React from "react";

const Signup = () => {
  return (
    <div className="Signup">
      <form>
        <label htmlFor="username" value="username">
          Username:
        </label>
        <input type="text" required></input>
        <label htmlFor="email" value="email">
          Email:
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

export default Signup;
