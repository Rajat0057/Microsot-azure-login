import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authconfig";
import { callMsGraph } from "../graph";
import "./profile.css";

const Profile = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  // Change the state with the information about log in user
  useEffect(() => {
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) =>
          setGraphData(response)
        );
      });
  });

  return (
    //    If user is Authenticated then show the information about user
    <div className="profile">
      {graphData ? (
        <>
          <div className="profile-container">
            <div className="profile-box">
              <div className="profile-data">
                <ul type="none">
                  <li>
                    <span>First Name :</span>
                    {graphData.givenName}
                  </li>
                  <li>
                    <span>Last Name :</span>
                    {graphData.surname}
                  </li>

                  <li>
                    <span>Email :</span>
                    {graphData.userPrincipalName}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Profile;
