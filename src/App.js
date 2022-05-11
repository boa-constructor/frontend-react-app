import { initializeApp } from 'firebase/app';
import { Routes, Route, Navigate } from 'react-router-dom';
import './css/App.css';
import Header from './Components/Header';

import SignUpPage from './Components/SignUpPage';
import { UserContext } from './contexts/user';
import { useState } from 'react';
import Group from './Components/Group';
import Messages from './Components/Messages';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import EditProfile from './Components/EditProfile';
import Character from './Components/Character';
import UserProfile from './Components/UserProfile';
import CreateCharacter from './Components/CreateCharacter';
import RecipeReviewCard from './Components/MuiTes';
import CreateGroup from './Components/CreateGroup';
import Groups from './Components/Groups';

const firebaseConfig = {
  apiKey: 'AIzaSyB69WIWau0OsUGMqTPDA5jJs6NMsEncGR4',
  authDomain: 'dndinder-68dcc.firebaseapp.com',
  databaseURL:
    'https://dndinder-68dcc-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'dndinder-68dcc',
  storageBucket: 'dndinder-68dcc.appspot.com',
  messagingSenderId: '887332428606',
  appId: '1:887332428606:web:fd999c4c18be4c0d106a6f',
  measurementId: 'G-V4QQMW9LBW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(localStorage.getItem('user_id'));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header user={user} />
        {user ? <NavBar /> : <p>You're not logged in!</p>}
        <SignUpPage />
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <div>
                  <Home user={user} />
                </div>
              ) : (
                <p></p>
              )
            }
          ></Route>
          <Route
            path="/EditProfile"
            element={
              user ? (
                <EditProfile user={user} setInputs={setUser} />
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>
          <Route
            path="/CreateCharacter"
            element={user ? <CreateCharacter /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/Profile"
            element={user ? <UserProfile /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/groups"
            element={user ? <Groups /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/groups/:group_id"
            element={user ? <Group /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/groups/create"
            element={user ? <CreateGroup /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/messages"
            element={user ? <Messages /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/characters/:character_id"
            element={user ? <Character /> : <Navigate to="/" />}
          ></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
