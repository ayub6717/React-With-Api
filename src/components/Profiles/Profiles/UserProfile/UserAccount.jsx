import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import "../../Profiles/ProfileMain.css";
import profImage from "../profImage.jpg";
import { reactLocalStorage } from 'reactjs-localstorage';
import { Redirect, useHistory } from "react-router-dom";

import FooterMobile from "../../Footer/FooterMobile";
import { useMediaQuery } from 'react-responsive';

const UserAccount = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)'})

  const [isLoggedIn, setIsLoggedIn] = useState(
    reactLocalStorage.get("isLoggedIn")
  );
  const [loading, setLoading] = useState(true);
  const [userZone, setUserZone] = useState(reactLocalStorage.get("userZone") );


  const [userInfo, setUserInfo] = useState(reactLocalStorage.getObject('userInfo'));

  function logOut() {
    reactLocalStorage.clear();
    history.push(`/login`)

  }
  const history = useHistory();
  useEffect(() => {

    if (isLoggedIn) {
      //alert(isLoggedIn)

      setLoading(false)

    }
  }, []);

  return (
    <div>
      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      {isDesktopOrLaptop ?
        <div className="container pt-5">
        <h4>
          Home <span className="homeSpan">.</span> My Account
        </h4>{" "}
        <br />
        <div className="row d-flex flex-row">
          <div className="col-md-3">
            <ol className="UserDashboardList">
              <li className="UserDashboardListAccount">My Account</li>{" "}
              {/*<li
                onClick={() => {
                  history.push("/user/address");
                }}
              >
                My Addresses
              </li>*/}
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
                    <td>{loading ? "Name" : userInfo[0].name }</td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Email</td>
                    <td>{loading ? "Email" : userInfo[0].email }</td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Contact Number</td>
                    <td>{loading ? "Number" : userInfo[0].contact_number }</td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Location</td>
                    <td>{loading ? "Address" : userZone }</td>
                  </tr>
                </table>
              </div>
            </div>


          <div className="col">
            <Button className="btn-danger" style={{ width: "120px", float: "right", height: "40px", marginTop: "10px", marginBottom: "10px" }} onClick={logOut}>Log Out</Button>
          </div>
        </div>
      </div>
    :
    <div className="container pt-5" style={{marginTop:"-80px"}}>
        
        <div>
          
         
            <div>

              <h1>Personal Information</h1> <br />
              <img className="ps-5 mb-5" src={profImage} alt="" />
              <div className="">
                <table>
                  <tr>
                    <td>Name</td>
                    <td>{loading ? "Name" : userInfo[0].name }</td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Email</td>
                    <td>{loading ? "Email" : userInfo[0].email }</td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Contact Number</td>
                    <td>{loading ? "Number" : userInfo[0].contact_number }</td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Location</td>
                    <td>{loading ? "Address" : userZone }</td>
                  </tr>
                </table>
              </div>
            </div>


          <div style={{display:"flex", alignItems:"flex-end"}}>
            <Button
            style={{display:"flex", alignItems:"flex-end", margin:"auto", marginTop:"20px"}}
            onClick={logOut}>Log Out</Button>
          </div>
        </div>
      </div>
    }
      </div>
  );
};

export default UserAccount;
