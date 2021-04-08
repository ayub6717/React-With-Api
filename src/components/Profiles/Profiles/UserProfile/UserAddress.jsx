import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";

const UserAddress = () => {
  const history = useHistory();
  return (
    <div>
      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <div className="container pt-5">
        <h4>
          Home <span className="homeSpan">.</span> My Address
        </h4>{" "}
        <br />
        <div className="row d-flex">
          <div className="col-md-3">
            <ol className="UserDashboardList">
              <li
                onClick={() => {
                  history.push("/user/account");
                }}
              >
                My Account
              </li>{" "}
              <li className="UserDashboardListAccount">My Addresses</li>
            </ol>
          </div>
          <div className="col-md-6 vl"></div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default UserAddress;
