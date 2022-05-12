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
import { postUserProfile } from "../utils/api";
const provider = new GoogleAuthProvider();

const SignUpPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(user ? true : false);

  const clickHandler = () => {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithPopup(auth, provider)
        .then((res) => {
          setUser(res.user.uid);
          console.log(res.user)
          postUserProfile({user_id: res.user.uid, email: res.user.email})
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
    localStorage.setItem("user_id", user);
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
    localStorage.setItem("user_id", user);
    return (
      <div>
        <button onClick={logout} className="Link">Logout</button>
      </div>
    );
  }

  return (
    <div className="SignUpPage">
      <button onClick={clickHandler} className="Link">
        Log-In:
      </button>

    </div>
  );
};

export default SignUpPage;
