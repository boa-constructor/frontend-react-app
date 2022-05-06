import React, { useState } from "react";
import { postUserProfile } from "../utils/api";

const SetProfile = ({ user, setInputs }) => {
  const [userObj, setUserObj] = useState({
    username: "",
    Online: false,
    Face_to_face: false,
    aboutMe: "",
  });
  const submissionHandler = (e) => {
    postUserProfile(user);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <h1>Welcome to your profile {user.user}</h1>
      <form
        onSubmit={(e) =>
          setUserObj((currUserObj) => {
            return { ...currUserObj, username: e.target.checked };
          })
        }
      >
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
                  return { ...currUserObj, Online: e.target.checked };
                })
              }
            >
              {console.log(userObj)}
            </input>
          </div>
          <div>
            <label htmlFor="GameType">Face to face</label>
            <input
              type="checkbox"
              id="Face_to_face"
              name="face_to_face"
              onChange={(e) =>
                setUserObj((currUserObj) => {
                  console.log(userObj);
                  console.log(e.target.checked);
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
                console.log(e.target.value);
                return { ...currUserObj, aboutMe: e.target.value };
              })
            }
          ></textarea>
        </fieldset>
        <fieldset>
          <input type="submit"></input>
        </fieldset>
      </form>
    </div>
  );
};

export default SetProfile;
