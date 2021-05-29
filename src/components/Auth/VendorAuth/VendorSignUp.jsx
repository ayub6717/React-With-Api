import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import { reactLocalStorage } from "reactjs-localstorage";
import { Redirect, useHistory } from "react-router-dom";

const VendorSignUp = () => {
  //local storage data read START

  //local storage data read END
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");


  function handleClick(e) {
    register();
    e.preventDefault();
  }

  const history = useHistory();

  const register = async () => {
    try {
      const link = "https://backend.amaderservice.com/api/registerVendor?vendor_name="
        + username +
        "&address=" +
        address +
        "&email=" +
        email +
        "&password=" +
        password +
        "&re_password=" +
        rePassword;

      const data = await fetch(link);
      const item = await data.json();

      if (item == "1") {
        const link =
        "https://backend.amaderservice.com/api/Vendor_Login?email=" +
        email +
        "&password=" +
        password;

      const data = await fetch(link);
      const item = await data.json();
      console.log(item);

      if (item.length !== 0) {
        reactLocalStorage.setObject("vendorInfo", item);

        reactLocalStorage.set("isLoggedInVendor", true);

        history.push(`/vendor/account`);
      } else {
        alert("Login Error!");
      }


      } else {
        alert("Registration Error! " + item);
      }
    } catch (error) {
      alert("Registration Error!");
    }
  };

  return (
    <div>
      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <div className="container pt-5" style={{ marginTop: "150px" }}>
        <h1 className="text-center">Vendor Registration</h1> <br />
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form action="" onSubmit={handleClick}>
              <div class="form-floating mb-3">
                <input
                  type="name"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                ></input>
                <label for="floatingInput">Vendor Name</label>
              </div>
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
                <label for="floatingInput">Email Address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="address"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  required
                ></input>
                <label for="floatingInput">Office Address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  value={password}
                  maxLength={8}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                ></input>
                <label for="floatingPassword">Password</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  value={rePassword}
                  maxLength={8}
                  onChange={(event) => setRePassword(event.target.value)}
                  required
                ></input>
                <label for="floatingPassword">Confirm Password</label>
              </div>
              <div className="form-floation mb-3">
                <input
                  className="btn btn-primary form-control"
                  type="submit"
                  value="Register"
                />
              </div>
              <div className="form-floation mb-3 text-center">
              <p className="link-p" onClick={()=> history.push(`/login/vendor`)}>
                  Are You a Vendor? Switch to Vendor! 
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSignUp;
