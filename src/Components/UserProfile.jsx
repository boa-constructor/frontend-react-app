import { useState, useEffect, useContext } from 'react';
import { getUserProfile } from '../utils/api';
import { UserContext } from '../contexts/user';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    getUserProfile(user)
      .then((data) => {
        setUserProfile(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  return (
    <div>
      <h2>Welcome to your profile </h2>
      <Link to="/CreateCharacter" className="Link">
        Add Character
      </Link>
      <br></br>
      <Link to="/EditProfile" className="Link">
        Edit Profile
      </Link>
    </div>
  );
};

export default UserProfile;
