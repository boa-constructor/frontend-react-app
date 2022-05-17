import { useContext, useEffect, useState } from 'react';
// import React, { useState } from 'react';
import { updateUserProfile } from '../utils/api';
import { UserContext } from '../contexts/user';
import { Link, Navigate } from 'react-router-dom';
import UserProfile from './UserProfile';
import { getUserProfile } from '../utils/api';

const SetProfile = ({ userName, setInputs }) => {
  const { user } = useContext(UserContext);
  const blankProfile = {
    username: '',
    avatar_url: '',
    years_played: 0,
    about_me: '',
    play_online: false,
    play_offline: false,
    is_dm: false,
  };

  const [userObj, setUserObj] = useState(blankProfile);

  useEffect(() => {
    getUserProfile(user)
      .then((data) => {
        setUserObj(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  const submissionHandler = (e) => {
    e.preventDefault();
    updateUserProfile(userObj, `${user}`);
    setUserObj(blankProfile);
  };

  return (
    <div>
      <h1>Welcome to your profile {userName}</h1>
      <form onSubmit={(e) => submissionHandler(e)}>
        <h3>Please enter your username:</h3>
        <input
          value={userObj.username}
          type='text'
          name='username'
          onChange={(e) =>
            setUserObj((currUserObj) => {
              return { ...currUserObj, username: e.target.value };
            })
          }
        />

        <fieldset>
          <legend>
            <h3>Online or Face to face games?</h3>
          </legend>
          <div>
            <label htmlFor='GameType'>Online</label>

            <input
              value={userObj.play_online}
              checked={userObj.play_online}
              type='checkbox'
              id='play_online'
              name='play_online'
              onChange={(e) =>
                setUserObj((currUserObj) => {
                  return { ...currUserObj, play_online: e.target.checked };
                })
              }
            ></input>
          </div>
          <div>
            <label htmlFor='GameType'>Offline</label>
            <input
              value={userObj.play_offline}
              checked={userObj.play_offline}
              type='checkbox'
              id='play_offline'
              name='play_offline'
              onChange={(e) =>
                setUserObj((currUserObj) => {
                  return { ...currUserObj, play_offline: e.target.checked };
                })
              }
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <h3> About</h3>
          <p>
            Please enter a short description about you and what you are looking
            for.
          </p>
          <textarea
            className='about_me_text'
            rows='4'
            cols='50'
            value={userObj.about_me}
            onChange={(e) =>
              setUserObj((currUserObj) => {
                return { ...currUserObj, about_me: e.target.value };
              })
            }
          ></textarea>

          <label>
            Enter your avatar URL:
            <input
              value={userObj.avatar_url}
              type='url'
              name='avatar_url'
              onChange={(e) =>
                setUserObj((currUserObj) => {
                  return { ...currUserObj, avatar_url: e.target.value };
                })
              }
            />
          </label>
          <p>
            <label htmlFor='years_played'>
              Number of years played (Rounded up):
            </label>
            <input
              value={userObj.years_played}
              type='number'
              id='quantity'
              name='years'
              min='1'
              max='100'
              onChange={(e) =>
                setUserObj((currUserObj) => {
                  return { ...currUserObj, years_played: e.target.value };
                })
              }
            />
            <label className='switch'>
              Do you DM?
              <input
                value={userObj.is_dm}
                type='checkbox'
                onChange={(e) =>
                  setUserObj((currUserObj) => {
                    return { ...currUserObj, is_dm: e.target.value };
                  })
                }
              />
              <span className='slider round'></span>
            </label>
          </p>
        </fieldset>
        <fieldset>
          <button type='submit'>Update Profile</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SetProfile;
