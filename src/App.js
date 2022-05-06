import { initializeApp } from "firebase/app";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./css/App.css";
import Header from "./Components/Header";
import CharacterProfile from "./Components/CharacterProfile";
import SignUpPage from "./Components/SignUpPage";
import { UserContext } from "./contexts/user";
import { useState } from "react";
import Guilds from "./Components/Guilds";
import Messages from "./Components/Messages";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

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
  const [user, setUser] = useState(localStorage.getItem("username"));
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <SignUpPage />
        {user ? (
          <p>
            Currently logged in as {user} <NavBar />
          </p>
        ) : (
          <p>You're not logged in!</p>
        )}
        {/* <CharacterProfile /> */}
        {/* <SetProfile user={user} setProfile={setUser} /> */}
        <Routes>
          <Route path="/" element={<Home user={user} />}></Route>
          <Route path="/user" element={<CharacterProfile />}></Route>
          <Route path="/guilds" element={<Guilds />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
