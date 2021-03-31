import React, { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { MdLocationOn } from 'react-icons/md';
import { Link } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';


import { BsFillGridFill } from 'react-icons/bs';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./NavBar.css";
import navLogo from "./navLogo.png";
const NavBarMobile = () => {
  //local storage data read START
  const userLilnk = "/user/account";
  const vendorLink = "/vendor/account";

  const [isLoggedIn, setIsLoggedIn] = useState(
    reactLocalStorage.get("isLoggedIn")
  );
  const [userZone, setUserZone] = useState(reactLocalStorage.get("userZone"));

  const [isLoggedInVendor, setIsLoggedInVendor] = useState(
    reactLocalStorage.get("isLoggedInVendor")
  );
  const [vendorInfo, setVendorInfo] = useState(
    reactLocalStorage.getObject("vendorInfo")
  );
  const [loggedInHere, setLoggedInHere] = useState(false);
  const [loginName, setLoginName] = useState("");

  const [userInfo, setUserInfo] = useState(
    reactLocalStorage.getObject("userInfo")
  );

  //local storage data read END

  useEffect(() => {
    //reactLocalStorage.clear();

    if (isLoggedIn) {
      //alert("navbar uer login true")
      setLoggedInHere(true);
      setLoginName(userInfo[0].name);

      //setLoginName("User")
    }else{
      reactLocalStorage.set("userZoneId", 9);
      //setUserZone("Gulshan");

    }

    if (isLoggedInVendor) {
      //alert("navbar Vendor login true")
      setLoggedInHere(true);
      setLoginName(vendorInfo.vendor_name);
    }
  }, []);

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
    <div>
    <Navbar
        className="container-fluid"
        collapseOnSelect
        expand="lg"
        bg="white"
        fixed="top"
      >
        <div className="container">
          <Navbar.Brand onClick={handleClick} style={{cursor:"pointer"}}>
            <div className="d-flex align-items-center">
              <img src={navLogo} alt="" width="130" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
            <Nav.Link as={Link} to={`/allservices`}>
              <BsFillGridFill
                width="40"
                height="40"
                style={{marginTop:"3px", color:"#33669a"}}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <b style={{ color: "#33669A" }}>  All Services</b>
            </Nav.Link>
            <Nav.Link as={Link} to={`/user/order`}>
              <FaShoppingCart
                width="40"
                height="40"
                style={{marginTop:"3px", color:"#33669a"}}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <b style={{ color: "#33669A" }}>  Orders</b>
            </Nav.Link>
            
              <Nav.Link style={{color:"#33669A"}}>


                
              <MdLocationOn
                width="40"
                height="40"
                style={{marginTop:"3px"}}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              /><b style={{ color: "#33669A" }}> {typeof(userZone) == "undefined" ? "Not Set" : userZone}</b>
                  </Nav.Link>

              {loggedInHere == true ? (
              <Nav.Link style={{color:"#33669A"}}
              onClick={() => {
                    history.push(isLoggedIn ? userLilnk : vendorLink);
                  }}
                  eventKey={2}
                >
                  <FaUser
                width="40"
                height="40"
                style={{marginTop:"3px", color:"#33669a"}}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              /><b style={{ color: "#33669A" }}> {loginName}</b>
                </Nav.Link>
              ) : (
                <Nav.Link
                  onClick={() => {
                    history.push("/login");
                  }}
                  style={{color:"#33669A"}}
                  eventKey={2}
                >
                  <FaUser
                width="40"
                height="40"
                style={{marginTop:"3px", color:"#33669a"}}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              /><b> Login{loggedInHere}</b>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
        
      </Navbar>

    </div>    
    
      
    </>
  );
};

export default NavBarMobile;
