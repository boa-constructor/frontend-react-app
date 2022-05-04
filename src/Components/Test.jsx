import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
const googleLogIn = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      
        clientid="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttontext="Login"
        onsuccess="{responseGoogle}"
        onfailure="{responseGoogle}"
        cookiepolicy="{'single_host_origin'}"
      </div>
        , document.getElementById('googleButton') );
      
    </div>
  
};
