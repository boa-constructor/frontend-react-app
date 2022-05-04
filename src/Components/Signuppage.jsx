import React from "react";
import "firebaseui/dist/firebaseui.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {
  const SubmitHandler = (e) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, e.target.email, e.target.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="SignUpPage">
      <form onSubmit={SubmitHandler}>
        <label htmlFor="username" value="username">
          Username:
        </label>
        <input type="text" required></input>
        <label htmlFor="password" value="password">
          Password:
        </label>
        <input type="password" required></input>
        <label htmlFor="confirmpassword" value="confirmpassword">
          Confirm Password:
        </label>
        <input type="password" required></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUpPage;
