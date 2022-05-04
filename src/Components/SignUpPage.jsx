import React, { useState, useEffect, useContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { UserContext } from "../contexts/user";
const provider = new GoogleAuthProvider();

const SignUpPage = () => {
  console.log(localStorage.getItem("user"));
  const { user, setUser } = useContext(UserContext);

  const clickHandler = (e) => {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithPopup(auth, provider)
        .then((res) => {
          setUser(res.user.displayName);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          if (error) return { errorCode, errorMessage, email, credential };
        });
    });
  };
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (localStorage.getItem("user") !== "null") {
    return (
      <div>
        Logged in as: {localStorage.getItem("user")}
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="SignUpPage">
      <button className="loginbutton" onClick={clickHandler}>
        Log-In:
      </button>
    </div>
  );
};

export default SignUpPage;
