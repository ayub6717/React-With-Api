import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import profImage from "../profImage.jpg";

const AdminAccount = () => {
  const history = useHistory();
  return (
    <div>
      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <div className="container pt-5">
        <h4>
          Home <span className="homeSpan">.</span> Admin Account
        </h4>{" "}
        <br />
        <div className="row d-flex">
          <div className="col-md-2">
            <ol className="UserDashboardList">
              <li className="UserDashboardListAccount">Admin Account</li>{" "}
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/addmainservice");
                }}
              >
                Add New Service
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/addlocation");
                }}
              >
                Add New Location
              </li>              
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/pendingorder");
                }}
              >
                Pending Order
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/assignedorder");
                }}
              >
                Assigned Order
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/pendingquotation");
                }}
              >
                Pending Quotation
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/regusers");
                }}
              >
                Registered Users
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/regvendors");
                }}
              >
                Registered Vendors
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/placeorder");
                }}
              >
                Place Order
              </li>
            </ol>
          </div>
          <div className="col-md-1 vl"></div>

          <div className="col-md-9">
            <h1>Personal Information</h1> <br />
            <img className="ps-5 mb-5" src={profImage} alt="" />
            <div className="">
              <table>
                <tr>
                  <td>Name</td>
                  <td>Test</td>
                </tr>
                <tr>
                  {" "}
                  <td>Phone</td>
                  <td>019580958099</td>
                </tr>
                <tr>
                  {" "}
                  <td>Email</td>
                  <td>test@gmail.com</td>
                </tr>
                <tr>
                  {" "}
                  <td>Date of Birth</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  {" "}
                  <td>Gender</td>
                  <td>N/A</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAccount;
