import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authconfig";
import { useIsAuthenticated } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { instance } = useMsal();

  // redirect to Profile Page
  const profile = () => {
    navigate("/profile");
  };
  const isAuthenticated = useIsAuthenticated();

  // Function to redirect to the Pop login
  const handleLogIn = (loginType) => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.log(e);
    });
  };

  return (
    <div className="button-type">
      <>
        {isAuthenticated ? (
          <>
            {/* <p> Hay You are Login</p> */}
            <span className="log">You have successfully login</span>
            <button className="profile_button" onClick={profile}>
              Profile Button
            </button>
          </>
        ) : (
          // If we user not login than show the login box
          <div className="box">
            <h4 className="left">Login to your Account</h4>
            <button className="email" onClick={() => handleLogIn("popup")}>
              Signup using Microsoft Account
            </button>
          </div>
        )}
      </>
    </div>
  );
};

export default Home;
