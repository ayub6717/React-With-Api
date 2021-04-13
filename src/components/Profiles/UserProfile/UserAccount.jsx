import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import "../../Profiles/ProfileMain.css";
import profImage from "../profImage.jpg";
import { reactLocalStorage } from 'reactjs-localstorage';
import { Redirect, useHistory } from "react-router-dom";

import FooterMobile from "../../Footer/FooterMobile";
import { useMediaQuery } from 'react-responsive';

import { Tabs, Tab, Row, Col, Nav, Table, Button, Form, Container } from 'react-bootstrap'
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
                  <Nav.Link eventKey="seven">Reffar & Win</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Button className="btn-danger" style={{ width: "120px", height: "40px", marginTop: "10px", marginBottom: "10px" }} onClick={logOut}>Log Out</Button>
                </Nav.Item>

              </Nav>
            </Col>
            <Col sm={9} className="vll">
              <Container>
                <Row>
                  <Col className="notific notific1">
                    <div>
                      <h4>5</h4>
                    </div> <hr style={{width:"90%", background: "white", padding:"1px", marginBottom:"3px"}} />
                    <div>
                      <h6>Completed Order</h6>
                    </div>
                  </Col>
                  <Col className="notific notific2">
                    <div>
                      <h4>2</h4>
                    </div> <hr style={{width:"90%", background: "white", padding:"1px", marginBottom:"3px"}} />

                    <div>
                      <h6>Pending order</h6>
                    </div>
                  </Col>
                  <Col className="notific notific3">
                    <div>
                      <h4>2</h4>
                    </div> <hr style={{width:"90%", background: "white", padding:"1px", marginBottom:"3px"}} />

                    <div>
                      <h6>Reward Points</h6>
                    </div>
                  </Col>
                </Row>
              </Container> <br/> <br/>
              <Tab.Content className="container">

                <Tab.Pane eventKey="one">
                  <div style={{ textAlign: "center" }}>
                    <h1>Personal Information</h1> <br />
                    <img src={profImage} alt="" />
                  </div> <br />
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
                  <Button className="btn-danger" style={{ width: "120px", height: "40px", marginTop: "10px", marginBottom: "10px" }}>Edit</Button>

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
                  <div>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control style={{ borderRadius: "3.25rem", width: "90%", backgroundColor: "#E5ECF2", paddingLeft: "15px" }} type="email" placeholder="Enter your code here..." />
                        <Button style={{ borderRadius: "12x", float: "right", marginTop: "-37px", backgroundColor: "#297A84", border: "none" }} >Apply</Button>
                      </Form.Group>
                    </Form> <br />

                    <div>
                      <p>Previously Applied Code</p>
                      <Row >
                        <Col style={{ backgroundColor: "#E5ECF2", borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px", borderRight: "1px solid gray" }} xs={2}  >
                          <div className="couponDate" style={{ textAlign: "center", lineHeight: "5px", padding: "15px" }}>
                            <h1>29</h1>
                            <p>March</p>
                            <p>2021</p>
                          </div>
                        </Col>

                        <Col style={{ backgroundColor: "#E5ECF2", borderTopRightRadius: "15px", borderBottomRightRadius: "15px" }} xs lg="5">
                          <div className="couponText">
                            <h5>Coupon Code: 2ABQ88C</h5>
                            <p>AC Basic Service 20% Off Applied</p>
                          </div>
                        </Col>

                      </Row>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="six">
                  <div style={{ textAlign: "center" }}>
                    <img style={{ width: "200px", marginBottom: "20px" }} src="img/AnotherPic/reward.png" alt="reward.png" />
                    <h1>Comming Soon</h1>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="seven">
                  <div style={{ textAlign: "center" }}>
                    <img style={{ width: "70%", marginBottom: "20px" }} src="img/AnotherPic/Referrals.png" alt="Referrals.png" />
                    <h1 className="ReffarText">AS190490</h1>
                    <h2>Share Your Referral Code</h2>
                    <p>Share Your Referral Code & get discount for next orders!</p>
                    <Button style={{color:"white"}} variant="info">Share</Button> <Button variant="success">Copy</Button>
                    
                  </div>
                </Tab.Pane>

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container> <br /> <br />

      </div>
    </div>

  );
};

export default UserAccount;
