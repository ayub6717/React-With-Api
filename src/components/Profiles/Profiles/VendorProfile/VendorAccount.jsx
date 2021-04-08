import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import profImage from "../profImage.jpg";
import { reactLocalStorage } from "reactjs-localstorage";
import { Button } from "react-bootstrap";

const VendorAccount = () => {
  const [isLoggedInVendor, setIsLoggedInVendor] = useState(
    reactLocalStorage.get("isLoggedInVendor")
  );
  const [loading, setLoading] = useState(true);
  const [vendorInfo, setVendorInfo] = useState(
    reactLocalStorage.getObject("vendorInfo")
  );

  function logOut() {
    reactLocalStorage.clear();
    history.push(`/login/vendor`);
  }
  const history = useHistory();
  useEffect(() => {
    loadAsync();

    if (isLoggedInVendor) {
      //alert(isLoggedIn)
      loadAsync();
    }
  }, []);

  const loadAsync = async () => {
    const res = await reactLocalStorage.getObject("vendorInfo");
    setVendorInfo(res);
    setLoading(false);
  };

  return (
    <div>
      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <div className="container pt-5">
        <h4>
          Home <span className="homeSpan">.</span> Vendor Account
        </h4>{" "}
        <br />
        <div className="row d-flex">
          <div className="col-md-3">
          <ol className="UserDashboardList">
              <li
                className="UserDashboardListAccount"
              >
                Vendor Account
              </li>
              <li
                onClick={() => {
                  history.push("/vendor/update");
                }}
              >
                Update Info
              </li>
              <li
                onClick={() => {
                  history.push("/vendor/addservice");
                }}
              >
                Add Service
              </li>
              <li
                onClick={() => {
                  history.push("/vendor/givenservice");
                }}
              >
                Service History
              </li>{" "}
              <li
                onClick={() => {
                  history.push("/vendor/pendingservice");
                }}
              >
                Pending Service
              </li>{" "}
              <li
                onClick={() => {
                  history.push("/vendor/wallet");
                }}
              >
                Vendor Wallet
              </li>{" "}
              <li
                onClick={() => {
                  history.push("/vendor/paymentupdate");
                }}
              >
                Payment Methods
              </li>{" "}
            </ol>
          </div>
          <div className="col-md-3 vl"></div>
          <div className="col-md-6">
            <h1>Personal Information</h1> <br />
            <img className="ps-5 mb-5" src={profImage} alt="" />
            <div className="">
              <table>
                <tr>
                  <td>Name</td>
                  <td>{loading ? "Name" : vendorInfo.vendor_name}</td>
                </tr>
                <tr>
                  {" "}
                  <td>Email</td>
                  <td>{loading ? "Email" : vendorInfo.email}</td>
                </tr>
                <tr>
                  {" "}
                  <td>Address</td>
                  <td>{loading ? "Address" : vendorInfo.address}</td>
                </tr>
                <tr>
                  {" "}
                  <td>Vendor ID</td>
                  <td>{loading ? "ID" : vendorInfo.id}</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="col">
            <Button
              className="btn-danger"
              style={{
                width: "120px",
                float: "right",
                height: "40px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              onClick={logOut}
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorAccount;
