import React from "react";
import { postUserProfile } from "../utils/api";
const SetProfile = ({ user, setInputs }) => {
  const submissionHandler = (e) => {
    e.preventDefault();
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
      <form onSubmit={submissionHandler}>
        <fieldset>
          <legend>
            <h3>Online or Face to face games?</h3>
          </legend>
          <div>
            <label htmlFor="GameType">Online</label>
            <input type="checkbox" id="Online"></input>
          </div>
          <div>
            <label htmlFor="GameType">Face to face</label>
            <input type="checkbox" id="Face_to_face"></input>
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
            onChange={handleChange}
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
