import React, { useState, useEffect, useContext } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { UserContext } from "../contexts/user";
const provider = new GoogleAuthProvider();

const SignUpPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(user === "" ? false : true);

  const clickHandler = () => {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithPopup(auth, provider)
        .then((res) => {
          setUser(res.user.displayName);
          setLoggedIn(true);
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
    localStorage.setItem("username", user);
  }, [user]);

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser("");
        setLoggedIn(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loggedIn === true) {
    localStorage.setItem("username", user);
    return (
      <div>
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
