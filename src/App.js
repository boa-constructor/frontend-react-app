import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import './css/App.css';
import Header from './Components/Header';
import { Container } from 'react-bootstrap';
import { UserContext } from './contexts/user';
import { useState } from 'react';

import Home from './Components/Home';
import NavBar from './Components/NavBar';
import EditProfile from './Components/EditProfile';
import Character from './Components/Character';
import UserProfile from './Components/UserProfile';
import CreateCharacter from './Components/CreateCharacter';
import Group from './Components/Group';
import CreateGroup from './Components/CreateGroup';
import Groups from './Components/Groups';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import { AuthProvider } from './contexts/authContext';
import LandingPage from './Components/LandingPage';
import UsersList from './Components/UsersList';

function App() {
  const [user, setUser] = useState(localStorage.getItem('user_id'));

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className='App'>
          <Header user={user} />
          {user ? <NavBar /> : <p>You're not logged in!</p>}

          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/'
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
              path='/EditProfile'
              element={
                user ? (
                  <EditProfile user={user} setInputs={setUser} />
                ) : (
                  <Navigate to='/' />
                )
              }
            ></Route>
            <Route
              path='/CreateCharacter'
              element={user ? <CreateCharacter /> : <Navigate to='/' />}
            ></Route>
            <Route
              path='/Profile'
              element={user ? <UserProfile /> : <Navigate to='/' />}
            ></Route>
            <Route
              path='/groups'
              element={user ? <Groups /> : <Navigate to='/' />}
            ></Route>
            <Route
              path='/groups/:group_id'
              element={user ? <Group /> : <Navigate to='/' />}
            ></Route>
            <Route
              path='/groups/create'
              element={user ? <CreateGroup /> : <Navigate to='/' />}
            ></Route>
            <Route
              path='/characters/:character_id'
              element={user ? <Character /> : <Navigate to='/' />}
            ></Route>
            <Route
              path='/users'
              element={user ? <UsersList /> : <Navigate to='/' />}
            />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
