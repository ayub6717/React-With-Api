import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import "../../Profiles/ProfileMain.css";
import profImage from "../profImage.jpg";
import { reactLocalStorage } from 'reactjs-localstorage';
import { Redirect, useHistory } from "react-router-dom";

import FooterMobile from "../../Footer/FooterMobile";
import { useMediaQuery } from 'react-responsive';

import { Tabs, Tab, Row, Col, Nav, Table } from 'react-bootstrap'
import UserOrder from "./UserOrder";













const UserAccount = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })

  const [isLoggedIn, setIsLoggedIn] = useState(
    reactLocalStorage.get("isLoggedIn")
  );
  const [loading, setLoading] = useState(true);
  const [userZone, setUserZone] = useState(reactLocalStorage.get("userZone"));


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
      <NavBar></NavBar> <br /> <br /> <br />

      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="one">
          <Row>
            <h4>
              Home <span className="homeSpan">.</span> My Account
              </h4>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="one">My Account</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="two">Order History</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="three">Pending Orders</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="four">Billing Information</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="five">Apply Coupon</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="six">Reward Points</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Button className="btn-danger" style={{ width: "120px", height: "40px", marginTop: "10px", marginBottom: "10px" }} onClick={logOut}>Log Out</Button>
                </Nav.Item>

              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="vll container">

                <Tab.Pane eventKey="one">
                  <div style={{ textAlign: "center" }}>
                    <h1>Personal Information</h1> <br />
                    <img src={profImage} alt="" />
                  </div> <br/>
                  <Table striped responsive size="sm">
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td colSpan="2">{loading ? "Name" : userInfo[0].name}</td>
                      </tr>

                      <tr>
                        <td>Email</td>
                        <td colSpan="2">{loading ? "Email" : userInfo[0].email}</td>
                      </tr>

                      <tr>
                        <td>Contact Number</td>
                        <td colSpan="2">{loading ? "Number" : userInfo[0].contact_number}</td>
                      </tr>

                      <tr>
                        <td>Location</td>
                        <td colSpan="2">{loading ? "Address" : userZone}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab.Pane>
                <Tab.Pane eventKey="two">
                  <UserOrder />
                </Tab.Pane>

                <Tab.Pane eventKey="three">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab.Pane>

                <Tab.Pane eventKey="four">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab.Pane>

                <Tab.Pane eventKey="five">
                  Apply Coupon Comming Soon...
              </Tab.Pane>

                <Tab.Pane eventKey="six">
                  Reward Points Comming Soon...
              </Tab.Pane>

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container> <br/> <br/>

      </div>
    </div>

  );
};

export default UserAccount;
