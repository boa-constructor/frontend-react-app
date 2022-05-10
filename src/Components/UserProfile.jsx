import { useState, useEffect, useContext } from 'react';
import { getUserProfile } from '../utils/api';
import { UserContext } from '../contexts/user';
import { Link } from 'react-router-dom';

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

  const characters = userProfile.characters;
  const connections = userProfile.connections;

  let preferences = {};
  for (const key in userProfile.preferences) {
    preferences[key] = userProfile.preferences[key];
  }

  console.log(connections);

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
        <div className="user-intro">
          <div className="avatar">
            <img src={userProfile.avatar_url} alt="avatar" />
          </div>

          <div className="user-details">
            <div>{userProfile.username}</div>
            <div>{userProfile.name}</div>
            <div>{userProfile.years_played}</div>
            <div>DM: {userProfile.is_dm ? 'Yes' : 'No'}</div>
          </div>
        </div>

        <div className="characters-preferences">
          <div className="characters">
            <p>Characters:</p>
            <ul>
              {characters &&
                characters.map((character) => {
                  return <li key={index++}>{character}</li>;
                })}
            </ul>
          </div>

          <div className="preferences">
            <div className="preferred-days">
              <p>Preferences:</p>
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

          <div className="about-connections">
            <div className="about-me">About Me:{userProfile.about_me}</div>
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
      </div>
    </div>
  );
};

export default UserProfile;
