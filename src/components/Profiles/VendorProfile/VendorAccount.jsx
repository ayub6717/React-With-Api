import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import profImage from "../profImage.jpg";
import { reactLocalStorage } from "reactjs-localstorage";
import { Tabs, Tab, Row, Col, Nav, Table, Button, Form, Container, InputGroup, FormControl } from 'react-bootstrap'
import { BiSearchAlt2 } from "react-icons/bi";

const VendorAccount = () => {
  const [isLoggedInVendor, setIsLoggedInVendor] = useState(
    reactLocalStorage.get("isLoggedInVendor")
  );
  const [loading, setLoading] = useState(true);
  const [vendorInfo, setVendorInfo] = useState(
    reactLocalStorage.getObject("vendorInfo")
  );

  function logOut() {
    reactLocalStorage.clear();
    history.push(`/login/vendor`);
  }
  const history = useHistory();
  useEffect(() => {
    loadAsync();

    if (isLoggedInVendor) {
      //alert(isLoggedIn)
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
      </div> <br /> <br />


      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="one">
          <Row>
            <h4>
              Home <span className="homeSpan">.</span> Vendor Account
              </h4>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="one">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="two">Company Propfile</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="three">Human Resource</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="four">Orders </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="five">Operation</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Button className="btn-danger" style={{ width: "120px", height: "40px", marginTop: "10px", marginBottom: "10px" }} onClick={logOut}>Log Out</Button>
                </Nav.Item>

              </Nav>
            </Col>
            <Col sm={9} className="vll">

              <Tab.Content className="container">

                <Tab.Pane eventKey="one">
                  <div style={{}}>
                    <h2>Welcome, {loading ? "Name" : vendorInfo.vendor_name}</h2> <br />
                  </div> <br />

                  <Container>
                    <Row>
                      <Col className="vendorDash vendorDash1">
                        <div>
                          <h1>25</h1>
                          <p>Unit</p>
                        </div> <hr style={{ width: "90%", background: "white", padding: "1px", marginBottom: "3px" }} />
                        <div>
                          <h6>Completed Order</h6>
                        </div>
                      </Col>
                      <Col className="vendorDash vendorDash2">
                        <div>
                          <h1>25</h1>
                          <p>Unit</p>
                        </div> <hr style={{ width: "90%", background: "white", padding: "1px", marginBottom: "3px" }} />

                        <div>
                          <h6>Pending order</h6>
                        </div>
                      </Col>
                      <Col className="vendorDash vendorDash3">
                        <div>
                          <h1>25</h1>
                          <p>Unit</p>
                        </div> <hr style={{ width: "90%", background: "white", padding: "1px", marginBottom: "3px" }} />

                        <div>
                          <h6>Ongoing Order</h6>
                        </div>
                      </Col>
                    </Row>
                  </Container>

                  <Container>
                    <Row>
                      <Col className="vendorDash vendorDash4">
                        <div>
                          <h1>25</h1>
                          <p>Unit</p>
                        </div> <hr style={{ width: "90%", background: "white", padding: "1px", marginBottom: "3px" }} />
                        <div>
                          <h6>Total Services</h6>
                        </div>
                      </Col>
                      <Col className="vendorDash vendorDash5">
                        <div>
                          <h1>25</h1>
                          <p>Person</p>
                        </div> <hr style={{ width: "90%", background: "white", padding: "1px", marginBottom: "3px" }} />

                        <div>
                          <h6>Total Verified Hr</h6>
                        </div>
                      </Col>
                      <Col className="vendorDash vendorDash6">
                        <div>
                          <h1>25</h1>
                          <p>Taka</p>
                        </div> <hr style={{ width: "90%", background: "white", padding: "1px", marginBottom: "3px" }} />

                        <div>
                          <h6>Total Sales</h6>
                        </div>
                      </Col>
                    </Row>
                  </Container>

                  {/* <Button className="btn-danger" style={{ width: "120px", height: "40px", marginTop: "10px", marginBottom: "10px" }}>Edit</Button> */}

                </Tab.Pane>



                <Tab.Pane eventKey="two">
                  <Tabs variant="pills" defaultActiveKey="one" transition={false} id="noanim-tab-example">
                    <Tab eventKey="one" title="Basic"> <br /> <br />
                      <div>
                        <InputGroup size="sm" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Company Name</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Company Name..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                        </InputGroup>

                        <InputGroup size="sm" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Company Mobile No</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Company Name..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                        </InputGroup>


                        <InputGroup size="sm" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Company Bkash No</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Company Bkash No..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                        </InputGroup>

                        <InputGroup size="sm" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Company Email Address</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Company Email Address..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                        </InputGroup>

                        <InputGroup size="sm" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Company Address</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Company Address..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                        </InputGroup>

                        <InputGroup size="sm" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Business Type</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Business Type..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                        </InputGroup>

                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text style={{ border: "none", backgroundColor: "white" }}> <b>Description</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl as="textarea" aria-label="With textarea" placeholder="Enter Description..." style={{ borderRadius: "5px", paddingLeft: "15px" }} />
                        </InputGroup> <br />

                        <span> <Button style={{ borderColor: "#eee", backgroundColor: "#14C299", height: "40px", marginTop: "10px", marginBottom: "10px", marginLeft: "15px", float: "right" }}>Edit</Button></span> <Button className="btn-danger" style={{ height: "40px", marginTop: "10px", marginBottom: "10px", float: "right" }}>Account Delete Request</Button>


                      </div>
                    </Tab>

                    <Tab eventKey="two" title="Financial"> <br /> <br />

                      <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Bank Name</b> </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Bank Name..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                      </InputGroup>

                      <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Branch</b> </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Branch..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                      </InputGroup>


                      <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Account Name</b> </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Account Name..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                      </InputGroup>

                      <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Account No</b> </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Account No..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                      </InputGroup>

                      <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Routing No</b> </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Routing No..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                      </InputGroup>

                      <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Account Type</b> </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Account Type..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                      </InputGroup>

                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text style={{ border: "none", backgroundColor: "white" }}> <b>Addtional Notes</b> </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" placeholder="Enter Description..." style={{ borderRadius: "5px", paddingLeft: "15px" }} />
                      </InputGroup> <br />

                      <Button className="btn-danger" style={{ height: "40px", marginTop: "10px", marginBottom: "10px", float: "right" }}>Submit</Button>


                    </Tab>
                    <Tab eventKey="three" title="Admin" >
                      <div style={{ textAlign: "center" }}> <br />
                        <h2>Saiem Bijoy Jony</h2> <br />
                        <img src={profImage} alt="" />
                      </div> <br />
                      <Table striped responsive size="sm">
                        <tbody>
                          <tr>
                            <td>Name</td>
                            <td colSpan="2"> Saiem Bijoy Jony</td>
                          </tr>

                          <tr>
                            <td>Email</td>
                            <td colSpan="2">jonnyjonny32@gmail.com</td>
                          </tr>

                          <tr>
                            <td>Contact Number</td>
                            <td colSpan="2">0234679123</td>
                          </tr>

                          <tr>
                            <td>Location</td>
                            <td colSpan="2">Dhaka</td>
                          </tr>
                        </tbody>
                      </Table>
                      <Button className="btn-danger" style={{ float: "right", width: "120px", height: "40px", marginTop: "10px", marginBottom: "10px" }}>Edit</Button>
                    </Tab>
                    <Tab eventKey="four" title="Operation" >
                      <Container> <br/> <br/>
                        <Row> 
                          <Col sm={4}>
                            <h3>Service Areas</h3>
                          </Col>
                          <Col sm={8}>
                            <h5>Verification of your request is still pending.</h5>
                            <Button className="btn-danger" style={{ height: "40px", marginTop: "10px", marginBottom: "10px" }}>View the request areas <BiSearchAlt2 /></Button> <br/> <br/>
                          </Col> 

                          <Col sm={4}> 
                            <h3>Working Days</h3>
                          </Col>
                          <Col sm={8}>

                            <InputGroup> 
                              <Form.Check type="checkbox" label="Saturday" />
                              <InputGroup.Prepend>
                                <input type="time" id="appt" name="appt" style={{marginLeft:"60px"}} /> 
                              </InputGroup.Prepend>
                            </InputGroup> <br/>


                            <InputGroup> 
                              <Form.Check type="checkbox" label="Sunday" />
                              <InputGroup.Prepend>
                                <input type="time" id="appt" name="appt" style={{marginLeft:"72px"}} /> 
                              </InputGroup.Prepend>
                            </InputGroup> <br/>

                            <InputGroup> 
                              <Form.Check type="checkbox" label="Monday" />
                              <InputGroup.Prepend>
                                <input type="time" id="appt" name="appt" style={{marginLeft:"68px"}} /> 
                              </InputGroup.Prepend>
                            </InputGroup> <br/>

                            <InputGroup> 
                              <Form.Check type="checkbox" label="Tuesday" />
                              <InputGroup.Prepend>
                                <input type="time" id="appt" name="appt" style={{marginLeft:"66px"}} /> 
                              </InputGroup.Prepend>
                            </InputGroup> <br/>

                            <InputGroup> 
                              <Form.Check type="checkbox" label="Wednesday" />
                              <InputGroup.Prepend>
                                <input type="time" id="appt" name="appt" style={{marginLeft:"40px"}} /> 
                              </InputGroup.Prepend>
                            </InputGroup> <br/>

                            <InputGroup> 
                              <Form.Check type="checkbox" label="Thusday" />
                              <InputGroup.Prepend>
                                <input type="time" id="appt" name="appt" style={{marginLeft:"68px"}} /> 
                              </InputGroup.Prepend>
                            </InputGroup>
                            <Button className="btn-danger" style={{float:"right", height: "40px", marginTop: "10px", marginBottom: "10px" }}>Submit</Button>

                          </Col>
                          
                        </Row>
                      </Container>
                    </Tab>
                  </Tabs>
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

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container> <br /> <br />

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
                className="UserDashboardListAccount"
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
                onClick={() => {
                  history.push("/vendor/paymentupdate");
                }}
              >
                Payment Methods
              </li>{" "}
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
                  <td>{loading ? "Name" : vendorInfo.vendor_name}</td>
                </tr>
                <tr>
                  {" "}
                  <td>Email</td>
                  <td>{loading ? "Email" : vendorInfo.email}</td>
                </tr>
                <tr>
                  {" "}
                  <td>Address</td>
                  <td>{loading ? "Address" : vendorInfo.address}</td>
                </tr>
                <tr>
                  {" "}
                  <td>Vendor ID</td>
                  <td>{loading ? "ID" : vendorInfo.id}</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="col">
            <Button
              className="btn-danger"
              style={{
                width: "120px",
                float: "right",
                height: "40px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              onClick={logOut}
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorAccount;
