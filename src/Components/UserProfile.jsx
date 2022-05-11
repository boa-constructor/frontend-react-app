import { useState, useEffect, useContext } from 'react';
import { getCharacterByID, getUserProfile } from '../utils/api';
import { UserContext } from '../contexts/user';
import { Link } from 'react-router-dom';
import GetCharacterByID from './GetCharacterByID';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const { user } = useContext(UserContext);
  const testUser = 'YhU5hrR4iVIVWTX0XcvT';
  let index = 0;

  useEffect(() => {
    getUserProfile(testUser)
      .then((data) => {
        setUserProfile(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [testUser]);

  const characterID_Array = userProfile.characters;
  const connections = userProfile.connections;

  let preferences = {};
  for (const key in userProfile.preferences) {
    preferences[key] = userProfile.preferences[key];
  }

  let preferred_days = preferences.days;

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
        <div className="user-details">
          <h1>{userProfile.username}</h1>
          <h2>{userProfile.name}</h2>
          <h4>Years Played: {userProfile.years_played}</h4>
          <h4>DM: {userProfile.is_dm ? 'Yes' : 'No'}</h4>
        </div>

        <div className="characters-preferences">
          <div className="characters">
            <h4>Characters:</h4>
            <ul>
              {characterID_Array &&
                characterID_Array.map((id) => {
                  return <GetCharacterByID key={id} id={id} />;
                })}
            </ul>
          </div>

          <div className="preferences">
            <div className="preferred-days">
              <h4>Preferences:</h4>
              <ul>
                Preferred Days to play:{' '}
                {preferred_days &&
                  preferred_days.map((day) => {
                    return <li key={index++}>{day}</li>;
                  })}
              </ul>
            </div>

            <div className="play-preference">
              <div>Play Online: {preferences.play_online ? 'Yes' : 'No'} </div>
              <div>Play Offline:{preferences.play_online ? 'Yes' : 'No'}</div>
            </div>
          </div>
        </div>

        <div className="avatar">
          <img src={userProfile.avatar_url} alt="avatar" />
        </div>
        <br></br>
        <div className="about-me">About Me:{userProfile.about_me}</div>
        <br></br>
        <div className="connections">
          <p>Connections:</p>
          <ul>
            {connections &&
              connections.map((connection) => {
                return <li key={index++}>{connection}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
