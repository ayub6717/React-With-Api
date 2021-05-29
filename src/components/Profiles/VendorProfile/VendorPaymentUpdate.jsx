import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { reactLocalStorage } from "reactjs-localstorage";
import { Button } from "react-bootstrap";

const VendorPaymentUpdate = () => {
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

  const [vendorInfo, setVendorInfo] = useState(
    reactLocalStorage.getObject("vendorInfo")
  );
  const [loading, setLoading] = useState(true);
  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");
  const [card, setCard] = useState("");
  const [bkash, setBkash] = useState("");


  const fetchItem = async () => {
    fetch("https://backend.amaderservice.com/api/Vendor_Dash?vendorid=" + vendorInfo.id)
      .then((response) => response.json())
      .then((data) => doneFetching(data))

     
  };

  const doneFetching = (data) => {
    try {
      setBank(data.paymetdetail[0].bank_name);
    setAccount(data.paymetdetail[0].account_number);
    setCard(data.paymetdetail[0].card_number);
    setBkash(data.paymetdetail[0].bkash_number);
    } catch (error) {
      setBank("");
    setAccount("");
    setCard("");
    setBkash("");
    }
    
    setLoading(false);

  }

  const submitService = async () => {
    const link = "https://backend.amaderservice.com/api/paymentdetails?vendorid="
    + vendorInfo.id
    + "&bank_name="
    + bank
    +"&account_number="
    + account
    + "&card_number="
    + card
    + "&bkash_number="
    + bkash;

    fetch(link, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
      .then(response => alert("Success!"))
      .catch(error => console.error('Error:', error));
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
              <li
                onClick={() => {
                  history.push("/vendor/account");
                }}
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
                className="UserDashboardListAccount"
              >
                Payment Methods
              </li>{" "}
            </ol>
          </div>
          <div className="col-md-3"></div>

          <div className="col-md-6">

           
            <div className="">
            
            <h1>Payment Methods</h1>
            <br/>

         
              <div class="form-floating sm mb-3" style={{width:"50%"}}>
                <input
                  type="name"
                  class="form-control"
                  id="floatingInput"
                  value={bank}
                  onChange={(event) => setBank(event.target.value)}
                ></input>
                <label for="floatingInput">Bank Name</label>
              </div>
              <div class="form-floating sm mb-3" style={{width:"50%"}}>
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  value={account}
                  onChange={(event) => setAccount(event.target.value)}
                ></input>
                <label for="floatingInput">Account Number</label>
              </div>
              <div class="form-floating sm mb-3" style={{width:"50%"}}>
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  value={card}
                  onChange={(event) => setCard(event.target.value)}
                ></input>
                <label for="floatingInput">Card Number</label>
              </div>
              <div class="form-floating sm mb-3" style={{width:"50%"}}>
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  value={bkash}
                  onChange={(event) => setBkash(event.target.value)}
                ></input>
                <label for="floatingInput">bKash Number</label>
              </div>
              <div class="form-floating sm mb-3" style={{width:"100%"}}>
            <Button
              onClick={submitService}
              style={{width:"50%"}}
            >
              Update
            </Button>
          </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default VendorPaymentUpdate;
