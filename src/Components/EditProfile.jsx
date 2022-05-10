import { useContext } from 'react';
import React, { useState } from 'react';
import { updateUserProfile } from '../utils/api';
import { UserContext } from '../contexts/user';

const SetProfile = ({ userName, setInputs }) => {
  const { user } = useContext(UserContext);
  const [userObj, setUserObj] = useState({
    username: '',
    avatar_url: '',
    years_played: 0,
    aboutMe: '',
    play_online: false,
    play_offline: false,
    is_dm: false,
  });
  const submissionHandler = (e) => {
    e.preventDefault();
    updateUserProfile(userObj, `${user}`);
  };

  return (
    <div>
      <h1>Welcome to your profile {userName}</h1>
      <form onSubmit={(e) => submissionHandler(e)}>
        <h3>Please enter your username:</h3>
        <input
          type="text"
          name="username"
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
            <label htmlFor="GameType">Online</label>

            <input
              type="checkbox"
              id="Online"
              name="about_me"
              onChange={(e) =>
                setUserObj((currUserObj) => {
                  return { ...currUserObj, play_online: e.target.checked };
                })
              }
            ></input>
          </div>
          <div>
            <label htmlFor="GameType">Face to face</label>
            <input
              type="checkbox"
              id="Face_to_face"
              name="face_to_face"
              onChange={(e) =>
                setUserObj((currUserObj) => {
                  return { ...currUserObj, Face_to_face: e.target.checked };
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
            className="about_me_text"
            rows="4"
            cols="50"
            onChange={(e) =>
              setUserObj((currUserObj) => {
                return { ...currUserObj, aboutMe: e.target.value };
              })
            }
          ></textarea>

          <label>
            Enter your avatar URL:
            <input
              type="url"
              name="avatar_url"
              onChange={(e) =>
                setUserObj((currUserObj) => {
                  return { ...currUserObj, avatar_url: e.target.value };
                })
              }
            />
          </label>
          <p>
            <label htmlFor="quantity">
              Number of years played (Rounded up):
            </label>
            <input
              type="number"
              id="quantity"
              name="years"
              min="1"
              max="100"
              onChange={(e) =>
                setUserObj((currUserObj) => {
                  return { ...currUserObj, years_played: e.target.value };
                })
              }
            />
            <label className="switch">
              Do you DM?
              <input
                type="checkbox"
                onChange={(e) =>
                  setUserObj((currUserObj) => {
                    return { ...currUserObj, is_dm: e.target.value };
                  })
                }
              />
              <span className="slider round"></span>
            </label>
          </p>
        </fieldset>
        <fieldset>
          <input type="submit"></input>
        </fieldset>
      </form>
    </div>
  );
};

export default SetProfile;
