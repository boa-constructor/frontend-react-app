import { Routes, Route, Navigate } from 'react-router-dom';
import './css/App.css';
import { useAuth } from './contexts/authContext';
import NavBar from './Components/NavBar';
import EditProfile from './Components/EditProfile';
import UserProfile from './Components/UserProfile';
import Group from './Components/Group';
import CreateGroup from './Components/CreateGroup';
import Groups from './Components/Groups';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Messaging from './Components/Messaging';
import LandingPage from './Components/LandingPage';
import UsersList from './Components/UsersList';

function App() {
	const { currentUser } = useAuth();
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route exact path='/' element={<LandingPage />} />

				<Route path='/messaging' element={<Messaging />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/login' element={<Login />} />

				<Route
					path='/EditProfile'
					element={currentUser ? <EditProfile /> : <Navigate to='/' />}
				></Route>
				<Route
					path='/Profile'
					element={currentUser ? <UserProfile /> : <Navigate to='/' />}
				></Route>
				<Route
					path='/groups'
					element={currentUser ? <Groups /> : <Navigate to='/' />}
				></Route>
				<Route
					path='/groups/:group_id'
					element={currentUser ? <Group /> : <Navigate to='/' />}
				></Route>
				<Route
					path='/groups/create'
					element={currentUser ? <CreateGroup /> : <Navigate to='/' />}
				></Route>
				<Route
					path='/users'
					element={currentUser ? <UsersList /> : <Navigate to='/' />}
				/>
			</Routes>
		</div>
	);
}

export default App;
