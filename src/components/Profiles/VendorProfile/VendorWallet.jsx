import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { reactLocalStorage } from "reactjs-localstorage";
import { Button } from "react-bootstrap";

const VendorWallet = () => {
  const [isLoggedInVendor, setIsLoggedInVendor] = useState(
    reactLocalStorage.get("isLoggedInVendor")
  );
  const [serviceHistorys, SetServiceHistorys] = useState({
    paymetdetail: [
      {
      id: null,
      vendor_id: null,
      bank_name: null,
      account_number: null,
      card_number: null,
      bkash_number: null,
      ammount_in_wallet: null,
      created_at: null,
      updated_at: null
      }
      ],
  });

  const [loading, setLoading] = useState(true);
  const [vendorInfo, setVendorInfo] = useState(
    reactLocalStorage.getObject("vendorInfo")
  );

  const fetchItem = async () => {
    fetch("https://kentradigital.com/api/Vendor_Dash?vendorid=" + vendorInfo.id)
      .then((response) => response.json())
      .then((data) => SetServiceHistorys(data))
      .then(() => setLoading(false));
  };

  function logOut() {
    reactLocalStorage.clear();
    history.push(`/login/vendor`);
  }
  const history = useHistory();
  useEffect(() => {

    loadAsync();

    if (isLoggedInVendor) {
      //alert(isLoggedIn)
      fetchItem();

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
              <li className="UserDashboardListAccount">Vendor Account</li>{" "}
              <li
                onClick={() => {
                  history.push("/vendor/update");
                }}
              >
                Update Vendor Info
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
                  history.push("/vendor/pendingservice");
                }}
              >
                Vendor Wallet
              </li>{" "}
              <li
                onClick={() => {
                  history.push("/vendor/paymentupdate");
                }}
              >
                Update Payment Methods
              </li>{" "}
            </ol>
          </div>
          <div className="col-md-8">
            <div className="row">
            <div className="col-md-4">
              <h3 style={{color:"33669A"}}>{loading ? "Loading" : "Total: BDT " +serviceHistorys.total}</h3> <br />
            </div>
            <div className="col-md-4">
              <h3 style={{color:"red"}}>{loading ? "Loading" : "Commission: BDT " +serviceHistorys.total * 0.1}</h3> <br />
            </div>
            <div className="col-md-4">
              <h3 style={{color:"33669A"}}>{loading ? "Loading" : "Earned: BDT " +(serviceHistorys.total-(serviceHistorys.total * 0.1))}</h3> <br />
            </div>
            </div>
            <div className="">
              <table>
                <tr>
                  <td>Name</td>
                  <td>{loading ? "Name" : vendorInfo.vendor_name}</td>
                </tr>
                <tr>
                  {" "}
                  <td>Vendor ID</td>
                  <td>{loading ? "ID" : vendorInfo.id}</td>
                </tr>
                <tr>
                  {" "}
                  <td>Bank</td>
                  <td>{loading ? "ID" : serviceHistorys.paymetdetail[0].bank_name}</td>
                </tr>
                <tr>
                  {" "}
                  <td>Account Number</td>
                  <td>{loading ? "ID" : serviceHistorys.paymetdetail[0].account_number}</td>
                </tr>
                <tr>
                  {" "}
                  <td>Card Number</td>
                  <td>{loading ? "ID" : serviceHistorys.paymetdetail[0].card_number}</td>
                </tr>
                <tr>
                  {" "}
                  <td>bKash Number</td>
                  <td>{loading ? "ID" : serviceHistorys.paymetdetail[0].bkash_number}</td>
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

export default VendorWallet;
