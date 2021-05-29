import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import { reactLocalStorage } from "reactjs-localstorage";
import { Redirect, useHistory } from "react-router-dom";

const VendorLogin = () => {
  //local storage data read START


  //local storage data read END

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(e) {
    login();
    e.preventDefault();
  }

  const history = useHistory();

  const login = async () => {
    try {
      const link =
        "https://backend.amaderservice.com/api/Vendor_Login?email=" +
        email +
        "&password=" +
        password;

      const data = await fetch(link);
      const item = await data.json();
      console.log(item);

      if (item.length !== 0) {
        //alert("from vendor login Page")
        reactLocalStorage.setObject("vendorInfo", item);

        reactLocalStorage.set("isLoggedInVendor", true);

        history.push(`/vendor/account`);
      } else {
        alert("Login Error!");
      }
    } catch (error) {
      alert("Login Error!");
    }
  };

  return (
    <div>
      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <div className="container pt-5" style={{marginTop:"150px"}}>
        <h1 className="text-center">Vendor Login</h1> <br />
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form action="" onSubmit={handleClick}>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                ></input>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  maxLength={8}
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
               
                <p className="link-p" onClick={()=> history.push(`/signup/vendor`)}>
                Haven't Registered Yet? Register Now! 
                </p>
              </div>
              <div className="form-floation mb-3 text-center">
              <p className="link-p" onClick={()=> history.push(`/login`)}>
                  Are You an User? Switch to User! 
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;
