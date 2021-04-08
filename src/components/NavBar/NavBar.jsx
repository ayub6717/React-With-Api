import React, { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { MdLocationOn } from 'react-icons/md';

import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import "./NavBar.css";
import navLogo from "./navLogo.png";
const NavBar = () => {
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
    <div className="row">
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
              <a href="/#/">
              <img src={navLogo} alt="" width="130" /></a>
              {/* <p
                style={{
                  color: "#33669A",
                  fontWeight: "bolder",
                }}
                className="pt-3 ps-3"
              >
                AmaderService.com
              </p> */}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
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
    {/* <div className="row">

    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> 
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>    
  </Navbar.Collapse>
</Navbar>
    </div>  */}
    </div>
    
      
    </>
  );
};

export default NavBar;
