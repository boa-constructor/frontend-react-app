import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
const provider = new GoogleAuthProvider();

const SignUpPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const clickHandler = () => {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence);
    signInWithPopup(auth, provider)
      .then((res) => {
        setLoggedInUser(res.user.displayName);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        if (error) return { errorCode, errorMessage, email, credential };
      });
  };
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLoggedInUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (loggedInUser) {
    return (
      <div>
        Logged in as: {loggedInUser}
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
