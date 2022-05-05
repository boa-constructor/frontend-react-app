import { initializeApp } from "firebase/app";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Header from "./Components/Header";
import SlimCharCards from "./Components/SlimCharCards";
import CharacterProfile from "./Components/CharacterProfile";
import UserProfile from "./Components/Profile";
import Nav from "./Components/Nav";
import SignUpPage from "./Components/SignUpPage";
import { UserContext } from "./contexts/user";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyB69WIWau0OsUGMqTPDA5jJs6NMsEncGR4",
  authDomain: "dndinder-68dcc.firebaseapp.com",
  databaseURL:
    "https://dndinder-68dcc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dndinder-68dcc",
  storageBucket: "dndinder-68dcc.appspot.com",
  messagingSenderId: "887332428606",
  appId: "1:887332428606:web:fd999c4c18be4c0d106a6f",
  measurementId: "G-V4QQMW9LBW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        {user ? (
          <p>Currently logged in as {user}</p>
        ) : (
          <p>You're not logged in!</p>
        )}
        <Nav />
        <SignUpPage />
        <SlimCharCards />
        <CharacterProfile />
        <UserProfile />
        <Routes>
          <Route path="/" />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
