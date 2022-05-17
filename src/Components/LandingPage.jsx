import React, { useState, useEffect, useContext } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import { UserContext } from '../contexts/user';
import { postUserProfile } from '../utils/api';
import GetCharactersList from './GetCharactersList';
const provider = new GoogleAuthProvider();
const LandingPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(user ? true : false);

  const clickHandler = () => {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithPopup(auth, provider)
        .then((res) => {
          setUser(res.user.uid);
          console.log(res.user.email);
          postUserProfile({ user_id: res.user.uid, email: res.user.email });
          setLoggedIn(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          if (error) return { errorCode, errorMessage, email, credential };
        });
    });
  };

  return (
    <div className="landing_page">
      <div className="landing_image_container">
        <img
          className="landing_image"
          src="https://media.dnd.wizards.com/styles/story_banner/public/images/head-banner/HERO_StartBox.jpg"
          alt="A party fight a vicious green dragon"
        />
      </div>
      <br></br>

      <button onClick={(e) => clickHandler(e)} className="sign_up_button">
        Sign Up
      </button>

      <br></br>
      <div className="about_the_site">
        <h2>About the site</h2>
        <img
          className="site_photo"
          src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <p className="about_site_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
          urna vitae lorem consequat hendrerit pellentesque vel augue. Fusce nec
          pulvinar tellus. Quisque tellus arcu, malesuada placerat vestibulum
          nec, lacinia at ipsum. Aenean sollicitudin ullamcorper metus, sed
          efficitur neque pharetra vitae. In at convallis massa, nec aliquam
          purus. Donec vitae nunc nunc. Interdum et malesuada fames ac ante
          ipsum primis in faucibus.
          <br></br>
          <br></br> Duis dictum nunc malesuada magna semper, sed dignissim purus
          pellentesque. Suspendisse porta ut nisi sit amet lacinia. Nulla nulla
          tellus, eleifend a odio a, luctus dapibus neque. Curabitur blandit
          consequat tempus. Vestibulum eros sem, bibendum quis ultrices vitae,
          tincidunt in nisi. Praesent nec tincidunt velit. Praesent interdum sed
          enim vitae mollis. Integer ac nibh libero. Mauris mollis dignissim
          sem, id sollicitudin odio tincidunt et.
        </p>
      </div>
      <div className="about_us">
        <h2>About the team</h2>
        <img
          className="team_photo"
          src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div>
        <p className="about_us_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          efficitur sem sem, a tempor elit congue sit amet. Phasellus efficitur
          metus diam, ut tincidunt lacus egestas nec. Aliquam erat volutpat. Sed
          vestibulum massa augue, vitae fringilla odio pulvinar a. Vestibulum
          pellentesque nunc et neque porttitor, vel tristique urna varius. Sed
          non augue blandit, lacinia arcu ut, varius nunc. Quisque ante ante,
          placerat non consequat id, pretium pretium elit. Cras eget mollis
          enim. Maecenas posuere accumsan orci nec fermentum. Proin et iaculis
          augue. <br></br>
          <br></br>Sed dolor metus, mattis sit amet maximus non, finibus eget
          urna. Ut vitae interdum massa, vel suscipit mauris. Etiam ac porttitor
          diam, sed congue lorem. Aliquam erat volutpat. Duis dapibus ultrices
          erat et hendrerit. Donec interdum erat vel ex rutrum, vel dapibus odio
          ultricies. Sed ac cursus nisi. Donec fringilla urna eu ipsum
          tincidunt, in vestibulum ex aliquet. Sed vehicula dui nec hendrerit
          aliquet. Pellentesque et lectus vel sem ultricies facilisis molestie
          ac mi. Nunc massa massa, rhoncus eget ornare eget, blandit et sapien.
          Phasellus vulputate euismod libero, ac ultrices magna convallis et.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
