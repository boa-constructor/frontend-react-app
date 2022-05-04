import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
const provider = new GoogleAuthProvider();

const SignUpPage = () => {
  const auth = getAuth();
  signInWithRedirect(auth, provider);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const SubmitHandler = (event) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        if (error) {
          return { errorMessage };
        }
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="SignUpPage">
      <form onSubmit={SubmitHandler}>
        <label htmlFor="username" value="username">
          Email:
        </label>
        <input
          type="text"
          required
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        ></input>
        <label htmlFor="password" value="password">
          Password:
        </label>
        <input
          type="password"
          required
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        ></input>
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
