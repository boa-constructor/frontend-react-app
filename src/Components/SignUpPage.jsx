import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const provider = new GoogleAuthProvider();

const SignUpPage = () => {
  const clickHandler = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        if (error) return { errorCode, errorMessage, email, credential };
      });
  };

  return (
    <div className="SignUpPage">
      <button className="loginbutton" onClick={clickHandler}>
        Log-In:
      </button>
    </div>
  );
};

export default SignUpPage;
