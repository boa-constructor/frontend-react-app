import React from "react";

const CharacterProfile = () => {
  return (
    <div className="Profile">
      <h1 className="char_name"> Character Name:</h1>
      <h2 className="char_class"> Character Class:</h2>
      <h3 className="char_level">Character Level:</h3>
      <h4 className="about_char">About my Character:</h4>
      <img
        className="profile_img"
        src="https://www.looper.com/img/gallery/galadriels-backstory-explained/intro-1590771661.jpg"
        alt="Profile Pic"
      ></img>
      <br></br>
      <button type="button" className="sendMessage">
        Send Message
      </button>
    </div>
  );
};
export default CharacterProfile;
