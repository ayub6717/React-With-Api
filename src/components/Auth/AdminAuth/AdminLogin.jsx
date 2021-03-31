import React from "react";
import NavBar from "../../NavBar/NavBar";

const AdminLogin = () => {
  return (
    <div>
      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <div className="container pt-5">
        <h1 className="text-center">Admin Login</h1> <br />
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form action="">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
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
                  maxLength={8}
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
              <div className="form-floation mb-3 text-center"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
