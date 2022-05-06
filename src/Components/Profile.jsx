import React from "react";
const UserProfile = () => {
  return (
    <div>
      <h1> User Profile</h1>
      <h1 className="user"> Username:</h1>
      <h2 className="characters"> Active Characters:</h2>
      <button>Create New Character</button>
      <h3 className="rating">Average rating:</h3>
      <h4 className="about_char">About my Character:</h4>
      <img
        className="profile_img"
        src="https://cdn3.whatculture.com/images/2019/01/3fb6450054e436ff-600x338.png"
        alt="Profile Pic"
      ></img>
    </div>
  );
};

export default UserProfile;
