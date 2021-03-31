import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { reactLocalStorage } from "reactjs-localstorage";
import { Button } from "react-bootstrap";

const VendorUpdate = () => {

  const [vendorInfo, setVendorInfo] = useState(
    reactLocalStorage.getObject("vendorInfo")
  );
  const [vName, setVName] = useState(vendorInfo.vendor_name);
  const [vAddress, setVAddress] = useState(vendorInfo.address);
  const [vEmail, setVEmail] = useState(vendorInfo.email);
  const [vContact, setVContact] = useState(vendorInfo.contact);

  const history = useHistory();
  const updateInfo = async () => {
    const link = "https://kentradigital.com/api/vendorUpdateInfo?vendorid=" 
    + vendorInfo.id + "&email=" 
    + vEmail + "&address=" + vAddress + "&contact=" + vContact;
    const country = await fetch(link).then(res => res.json())
    .then(response => alert("Success! Code: " + response))
    .catch(error => console.error('Error:', error));
  };
  return (
    <div>
      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <div className="container pt-5">
        <h4>
          Home <span className="homeSpan">.</span> Vendor Update Info
        </h4>{" "}
        <br />
        <div className="row d-flex">
          <div className="col-md-3">
            <ol className="UserDashboardList">
              <li
                onClick={() => {
                  history.push("/vendor/account");
                }}
              >
                Vendor Account
              </li>{" "}
              <li className="UserDashboardListAccount">Vendor Update</li>
              <li
                onClick={() => {
                  history.push("/vendor/givenservice");
                }}
              >
                Service History
              </li>{" "}
            </ol>
          </div>
          <div className="col-md-6 vl">
            <div class="form-floating mb-3">
              <input
                type="name"
                class="form-control"
                id="floatingInput"
                placeholder="name"
                value={vName}
                onChange={(event) => setVName(event.target.value)}
              ></input>
              <label for="floatingInput">Vendor Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="name"
                class="form-control"
                id="floatingInput"
                placeholder="name"
                value={vContact}
                onChange={(event) => setVContact(event.target.value)}
              ></input>
              <label for="floatingInput">Contact Number</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="name"
                class="form-control"
                id="floatingInput"
                placeholder="name"
                value={vAddress}
                onChange={(event) => setVAddress(event.target.value)}
              ></input>
              <label for="floatingInput">Vendor Address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="name"
                class="form-control"
                id="floatingInput"
                placeholder="name"
                value={vEmail}
                onChange={(event) => setVEmail(event.target.value)}
              ></input>
              <label for="floatingInput">Vendor Email</label>
            </div>
          </div>

          <Button
              className="btn"
              style={{
                width: "120px",
                float: "right",
                height: "40px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              onClick={()=>updateInfo()}
            >
              Update
            </Button>

          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default VendorUpdate;
