import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import { reactLocalStorage } from "reactjs-localstorage";
import { Redirect, useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import "./UserLogin.css"
const UserLogin = () => {
  //local storage data read START

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([
    {
      id: "",
      name: "",
      email: "",
      address: "",
    },
  ]);

  //local storage data read END

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [modalShowFailure, setModalShowFailure] = useState(false);


  function handleClick(e) {
    login();
    e.preventDefault();
  }

  const history = useHistory();

  const login = async () => {
    try {
      const link =
        "https://kentradigital.com/api/userLogin?email=" +
        email +
        "&password=" +
        password;

      const data = await fetch(link);
      const item = await data.json();

      if (typeof item[0].id !== "undefined") {
        //alert("login success")
        reactLocalStorage.set("isLoggedIn", true);
        reactLocalStorage.setObject("userInfo", item);
        reactLocalStorage.set("userZone", item[0].zone_name);
        reactLocalStorage.set("userZoneId", item[0].zone_id);
        history.push(`/`);
      } else {
        setModalShowFailure(true)
      }
    } catch (error) {
      setModalShowFailure(true)
    }
  };

  return (
    <div>
      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <Modal
        show={modalShowFailure}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={()=>setModalShowFailure(false)}
      >
        <Modal.Body>
          <h1 className="text-danger" style={{textAlign:"center"}}>
            
            Login Failed!
          </h1>
        </Modal.Body>        
      </Modal>
      <div className="container pt-5" style={{ marginTop: "150px" }}>
        <h1 className="text-center">User Login</h1> <br />
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <h2>{userInfo[0].name}</h2>
            <form action="" onSubmit={handleClick}>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id=""
                  placeholder="email or phone"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                ></input>
                <label for="floatingInput">Email or Phone</label>
              </div>
              
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id=""
                  placeholder="Password"
                  value={password}
                  minLength={8}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                ></input>
                <label for="floatingPassword">Password</label>
              </div>
              <div className="form-floation mb-3">
                <input
                  className="btn btn-primary form-control"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="form-floation mb-3 text-center">
                <p className="link-p" onClick={() => history.push(`/signup`)}>
                  Haven't Registered Yet? Register Now!
                </p>
              </div>
              <div className="form-floation mb-3 text-center">
                <p className="link-p" onClick={() => history.push(`/login/vendor`)}>
                  Are you a Vendor? Switch to Vendor!
                </p>
              </div>
              {/*<div className="form-floation mb-3 text-center">
                <p className="link-p" onClick={() => history.push(`/admin/account`)}>
                  Are you an Admin? Switch to Admin!
                </p>
              </div>
              */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
