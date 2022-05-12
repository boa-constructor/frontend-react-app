import { useState, useEffect, useContext } from 'react';

import { getUserProfile } from '../utils/api';
import { UserContext } from '../contexts/user';
import { Link } from 'react-router-dom';
import GetCharacterByID from './GetCharacterByID';

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
  console.log(userProfile)

  return (
    <div>
      <h2>Welcome to your profile {userProfile.username}</h2>

      <Link to="/CreateCharacter" className="Link">
        Add Character
      </Link>
      <br></br>
      <Link to="/EditProfile" className="Link">
        Edit Profile
      </Link>

      <div className="user-profile">
        <div className="user-intro">
          <div className="avatar">
            <img src={userProfile.avatar_url} alt="avatar" />
          </div>

          <div className="user-details">
            <div>{userProfile.username}</div>
            <div>Years Played: {userProfile.years_played}</div>
            <div>DM: {userProfile.is_dm === "true" ? 'Yes' : 'No'}</div>
          </div>
        </div>

        <div className="characters-preferences">
          <div className="characters">
            <p>Characters:</p>
            <ul>
              {userProfile.characters &&
                userProfile.characters.map((id) => {
                  return <GetCharacterByID key={id} id={id} />;
                })}
            </ul>
            <div className="play-preference">
              <p>Play Online: {userProfile.play_online ? 'Yes' : 'No'} </p>
              <p>Play Offline: {userProfile.play_online ? 'Yes' : 'No'}</p>
            </div>
          <p className="about-me">About Me: {userProfile.about_me}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
