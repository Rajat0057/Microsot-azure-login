import React from "react";
import "./Navbar.css";
import { useIsAuthenticated } from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";

const Navbar = () => {
  const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();

  // Logout function and redirect to home Page

  const handleLogOut = (logoutType) => {
    instance.logoutPopup({
      mainWindowRedirectUri: "/",
    });
    // }
  };

  return (
    <nav className="nav">
      <div className="heading">
        <h3 className="heading-text">Authentication Demo</h3>
      </div>

      <>
        {/* If user is Authenticated then show the Sign out button */}
        {isAuthenticated ? (
          <>
            <button className="sign-out" onClick={handleLogOut}>
              Signout
            </button>
          </>
        ) : (
          <>{/* If user is Not Authenticated then nothing show */}</>
        )}
      </>
    </nav>
  );
};

export default Navbar;
