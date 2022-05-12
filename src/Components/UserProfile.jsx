import { useState, useEffect, useContext } from 'react';

import { getUserProfile } from '../utils/api';
import { UserContext } from '../contexts/user';
import { Link } from 'react-router-dom';
import GetCharacterByID from './GetCharacterByID';

const UserProfile = () => {

  const [userProfile, setUserProfile] = useState({});
  const { user } = useContext(UserContext);

  let index = 0;

  useEffect(() => {
    getUserProfile(user)
      .then((data) => {
        setUserProfile(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  console.log(userProfile);

  const characterID_Array = userProfile.characters;

  // let preferences = {};
  // for (const key in userProfile.preferences) {
  //   preferences[key] = userProfile.preferences[key];
  // }

  // let preferred_days = preferences.days;

  return (
    <div className="your_profile">
      <h2>Welcome to your profile {userProfile.username}</h2>
      <Link to="/CreateCharacter" className="Link">
        <p>Add Character</p>
      </Link>
      <Link to="/EditProfile" className="Link">
        <p>Edit Profile</p>
      </Link>

      <img src={userProfile.avatar_url} alt="avatar" />
      <div className="user-details">
        {userProfile.username}
        {userProfile.name}
        {userProfile.years_played}
        DM: {userProfile.is_dm ? 'Yes' : 'No'}
      </div>
      <div className="characters">
        <p>Characters:</p>
        <ul>
          {characterID_Array &&
            characterID_Array.map((id) => {
              return <GetCharacterByID key={id} id={id} />;
            })}
        </ul>
      </div>
      <div className="preferred-days"></div>
      <div className="play-preference">
        Play Online: {userProfile.play_online ? 'Yes' : 'No'}
        Play Offline:{userProfile.play_online ? 'Yes' : 'No'}
      </div>
      <div className="about-connections">About Me:{userProfile.about_me}</div>
    </div>
  );
};

export default UserProfile;
