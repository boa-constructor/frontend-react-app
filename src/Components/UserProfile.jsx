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



  return (
    <>
      <div className="flexbox_container">
        <div className="profile_page">
          <div className="your_profile">
            <h2> Welcome to your profile {userProfile.username}</h2>
            <Link to="/CreateCharacter" className="Link">
              <p>Add Character</p>
            </Link>
            <Link to="/EditProfile" className="Link">
              <p>Edit Profile</p>
            </Link>
            <img
              src={userProfile.avatar_url}
              alt="avatar"
              className="profile_user_avatar"
            />
            <br></br>
            {userProfile.name}
            <b> Number of years played: </b>
            {userProfile.years_played}
            <br></br>
            <br></br>
            <b> DM: </b>
            {userProfile.is_dm ? 'Yes' : 'No'}
            <br></br>
            <b> Play Online: </b>
            {userProfile.play_online ? '✔️' : '✖️'}
            <br></br>
            <b> Play Offline: </b>
            {userProfile.play_online ? '✔️' : '✖️'}
            <br></br>
            <b> About Me: </b>
            <br></br>
            {userProfile.about_me}
          </div>
        </div>
        <div className="use2r_characters">
          <p>Characters:</p>
          <ul>
            {characterID_Array &&
              characterID_Array.map((id) => {
                return (
                  <div className="single_character">
                    <GetCharacterByID key={id} id={id} />
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </>

  );
};

export default UserProfile;
