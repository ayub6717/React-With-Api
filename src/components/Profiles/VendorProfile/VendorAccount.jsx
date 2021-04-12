import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import profImage from "../profImage.jpg";
import { reactLocalStorage } from "reactjs-localstorage";
import { Tabs, Tab, Row, Col, Nav, Table, Button, Form, Container, InputGroup, FormControl, Modal } from 'react-bootstrap'
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineOrderedList, AiOutlineUser } from "react-icons/ai";
import { FaUser, FaPencilAlt, FaClock } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { MdCreditCard } from "react-icons/md";
import { ImDownload, ImHome } from "react-icons/im";
import { BiPaperPlane } from "react-icons/bi";







const VendorAccount = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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

      <div>
        <Modal size="xl" show={show} onHide={handleClose} animation={true}  >
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Container>
            <div className="modbody">
              <Row className="conBac">
                <Col sm={4}> <br />
                  <p> <AiOutlineOrderedList /> ORDER INFO</p> <hr style={{ width: "100%" }} /> <br />
                  <p> <b>Order Id:</b>  <small className="OrderSpan">T-3845-78687</small> </p>
                  <p> <b>Status:</b>  <small className="OrderSpanTwo">Accecpted</small>  </p>
                  <p><b>Job Additional Info: </b></p>
                  <p><b>Ticket Create Time: </b>  <small>11 Apr, 2021 11:30 AM</small> </p>
                  <p><b>Create At: </b>  <small>11:42 Am, 11 Apr 2021</small> </p>
                  <p><b>Deleverd Time & Date: </b>  <small>Job is not delevery yet</small> </p>
                  <p> <b>Where:</b>  <small className="OrderSpanTree">At home</small> </p>

                  <div className="ModAction">
                    <p>Actions</p>
                    <Button className="ModButton">Process</Button>
                    <Button className="btn-danger ModButtonTwo">Request Cancel</Button>
                  </div> <br />


                </Col>
                <Col sm={4}>   <br />
                  <p><AiOutlineUser /> DELEVERY INFO</p> <hr style={{ width: "100%" }} /> <br />
                  <p><b>Deleverd Name: </b>  <small>Saiful Islam</small> </p>
                  <p><b>Deleverd Mobile: </b>  <small>01743258890</small> </p>
                  <p><b>Deleverd Address: </b>  <small>Sector no: 10, Uttara</small> </p>


                </Col>
                <Col sm={4}>  <br />
                  <p><FaUser /> RESOURCE INFO</p> <hr style={{ width: "100%" }} /> <br />
                  <Row>

                    <Col sm={4}>
                      <img className="Modimg" src="img/AnotherPic/Ayub.jpg" alt="Ayub.jpg" />
                    </Col>
                    <Col sm={8} style={{ paddingLeft: "20px" }}>
                      <p> <small>Name: Rudro Rohan</small> </p>
                      <p> <small>Mobile: 01743258890</small> </p>
                      <p><small>Email: rudrorohan@gmail.com</small> </p>
                      <Button className="ModButtonImg">Change</Button>
                      <Button className="btn-danger ModButtonTwoImg">View</Button>
                    </Col>
                  </Row>
                </Col>
              </Row> <br />

              <Row className="conBac">

                <Col>
                  <p className="ModPP"><GrServices /> <b>SERVICE LIST</b> </p>
                </Col>
                <Col xs={6}>
                  <p className="ModP"> <span className="ModServ">< IoCartSharp /> <b>Add Service</b></span> <span className="ModServ"><FaPencilAlt /> <b>Add Meterial</b> </span></p>
                </Col> <hr style={{ width: "100%", padding: "1px" }} />

                <Col sm={6}> <br />
                  <Table style={{ border: "1px solid rgb(209, 204, 204)", padding: "15px" }} hover>
                    <tbody>
                      <tr>
                        <td>Job Additional Info: </td>
                        <td>Include something</td>
                      </tr>
                      <tr>
                        <td>Schedule Date:</td>
                        <td>11-Apr-2021</td>
                      </tr>
                      <tr>
                        <td>Preferred Time:</td>
                        <td>5:00 pm - 6:00 pm</td>
                      </tr>

                    </tbody>
                  </Table>
                  <div>
                    <Button className="ModButton"><FaClock /> Reschedule</Button>
                  </div> <br />


                </Col>
                <Col sm={6}>   <br />
                  <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Control as="select">
                        <option>LCD/LED TV Repair Services</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>


                </Col>
              </Row> <br />


              <Row className="conBac">

                <Col>
                  <p className="ModPP"><MdCreditCard /> <b>PAYMENT INFO</b> </p>
                </Col> <hr style={{ width: "100%", padding: "1px" }} />

                <Col sm={12}> <br />
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>SERVICE NAME</th>
                        <th>QUANTITY</th>
                        <th>UNIT PRICE</th>
                        <th>PRICE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>LCD/LED TV Repair Service</td>
                        <td>1.0</td>
                        <td>1000.00 TK</td>
                        <td>1000.00 TK</td>
                      </tr>

                      <tr>
                        <td colSpan="4"> <b>Total Price</b> </td>
                        <td colSpan="2"> <b>1000 TK</b> </td>
                      </tr>
                    </tbody>
                  </Table><br /> <br />


                </Col>


                <Col sm={6}>
                  <Table hover>
                    <thead>
                      <tr>
                        <th style={{ textAlign: "center" }} colSpan="4">Cost & Profit </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Total Ammount</td>
                        <td>1000.00 TK</td>
                      </tr>

                      <tr>
                        <td>Discount</td>
                        <td>0.00</td>
                      </tr>

                      <tr>
                        <td>Roundind Cut Off</td>
                        <td>0.00 </td>
                      </tr>

                      <tr>
                        <td> <b>GROSS AMMOUNT</b> </td>
                        <td> <b>1000.00 </b> </td>
                      </tr>

                      <tr>
                        <td>Delevery Charge</td>
                        <td>0.00 </td>
                      </tr>

                      <tr>
                        <td>Paid</td>
                        <td>0.00 </td>
                      </tr>

                      <tr>
                        <td>Due</td>
                        <td>1000.00 TK</td>
                      </tr>


                      <tr>
                        <td> Payment Status </td>
                        <td> <span className="DueSpan">Due</span> </td>
                      </tr> <br />
                    </tbody>
                  </Table>
                  <p className="DueSpanTwo">Edit Cost</p>
                </Col>


                <Col sm={6}>
                  <Table hover>
                    <thead>
                      <tr>
                        <th colSpan="4" style={{ textAlign: "center" }}>Payment Info </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Total Cost</td>
                        <td>0.00</td>
                      </tr>

                      <tr>
                        <td>Total Discount By Partner</td>
                        <td>0.00</td>
                      </tr>

                      <tr>
                        <td>GROSS COST</td>
                        <td>0.00 TK</td>
                      </tr>
                    </tbody>
                  </Table>
                  <p className="ModP"> <span className="ModServ">< IoCartSharp /> <b>Adjust Payment</b></span> <span className="ModServ"> <ImDownload /> <b> Download Quotation</b> </span></p>
                </Col>
              </Row> <br />

              <Row className="conBac">

                <Col>
                  <p className="ModPP"><ImHome /> <b>Comments</b> </p>
                </Col>
                <Col xs={6}>
                  <p className="ModP"> <span className="ModServ">< IoCartSharp /> <b>Order Complain</b></span></p>
                </Col> <hr style={{ width: "100%", padding: "1px" }} />

                <Col sm={6}> <br />
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Type Comment..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" style={{ borderColor: "#d1d4d6" }}><BiPaperPlane /> </Button>
                    </InputGroup.Append>
                  </InputGroup> <br />


                </Col>
                <Col sm={6}>   <br />
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Enter Order Complain..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" style={{ borderColor: "#d1d4d6" }}><BiPaperPlane /> </Button>
                    </InputGroup.Append>
                  </InputGroup> <br />


                </Col>
              </Row> <br />
            </div>

          </Container>

          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </div>

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
                  <Nav.Link eventKey="two">Company Profile</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="three">Human Resource</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="four">Orders </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="five">Wallet</Nav.Link>
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
                      <Container> <br /> <br />
                        <Row>
                          <Col sm={4}>
                            <h3>Service Areas</h3>
                          </Col>
                          <Col sm={8}>

                            <Button className="btn-danger" style={{ height: "40px", marginTop: "10px", marginBottom: "10px" }}>View the request areas <BiSearchAlt2 /></Button> <br /> <br />
                          </Col>

                          <Col sm={4}>
                            <h3>Working Days</h3>
                          </Col>
                          <Col sm={8}>

                            <InputGroup>
                              <Form.Check type="checkbox" label="Saturday" />
                              <InputGroup.Prepend>
                                <input type="time" id="appt" name="appt" style={{ marginLeft: "60px" }} /> <span style={{ marginLeft: "10px" }}>To</span> <input type="time" id="appt" name="appt" style={{ marginLeft: "10px" }} />
                              </InputGroup.Prepend>
                            </InputGroup> <br />


                            <InputGroup>
                              <Form.Check type="checkbox" label="Sunday" />
                              <InputGroup.Prepend>
                                <input type="time" id="appt" name="appt" style={{ marginLeft: "72px" }} />  <span style={{ marginLeft: "10px" }}>To</span> <input type="time" id="appt" name="appt" style={{ marginLeft: "10px" }} />
                              </InputGroup.Prepend>
                            </InputGroup> <br />

                            <InputGroup>
                              <Form.Check type="checkbox" label="Monday" />
                              <InputGroup.Prepend>
                                <input type="time" id="appt" name="appt" style={{ marginLeft: "68px" }} /> <span style={{ marginLeft: "10px" }}>To</span> <input type="time" id="appt" name="appt" style={{ marginLeft: "10px" }} />
                              </InputGroup.Prepend>
                            </InputGroup> <br />

                            <InputGroup>
                              <Form.Check type="checkbox" label="Tuesday" />
                              <InputGroup.Prepend>
                                <input type="time" id="appt" name="appt" style={{ marginLeft: "66px" }} /> <span style={{ marginLeft: "10px" }}>To</span> <input type="time" id="appt" name="appt" style={{ marginLeft: "10px" }} />
                              </InputGroup.Prepend>
                            </InputGroup> <br />

                            <InputGroup>
                              <Form.Check type="checkbox" label="Wednesday" />
                              <InputGroup.Prepend>
                                <input type="time" id="appt" name="appt" style={{ marginLeft: "40px" }} /> <span style={{ marginLeft: "10px" }}>To</span> <input type="time" id="appt" name="appt" style={{ marginLeft: "10px" }} />
                              </InputGroup.Prepend>
                            </InputGroup> <br />

                            <InputGroup>
                              <Form.Check type="checkbox" label="Thusday" />
                              <InputGroup.Prepend>
                                <input type="time" id="appt" name="appt" style={{ marginLeft: "68px" }} /> <span style={{ marginLeft: "10px" }}>To</span> <input type="time" id="appt" name="appt" style={{ marginLeft: "10px" }} />
                              </InputGroup.Prepend>
                            </InputGroup>
                            <Button className="btn-danger" style={{ float: "right", height: "40px", marginTop: "10px", marginBottom: "10px" }}>Submit</Button>

                          </Col>

                        </Row>
                      </Container>
                    </Tab>
                  </Tabs>
                </Tab.Pane>

                <Tab.Pane eventKey="three">
                  <Tabs variant="pills" defaultActiveKey="Members" id="uncontrolled-tab-example">
                    <Tab eventKey="Members" title="Members">
                      <div className="HumanMain"> <br />
                        <div className="HumanTab">
                          <img className="HumanTabImg" src="img/AnotherPic/Ayub.jpg" alt="Ayub.jpg" />  <br /> <br />
                          <p>MD AYUB </p>
                          <p> <b>MANAGER</b> </p>
                        </div>
                        <span className="DueSpanHuTwo">Delete</span> <span className="DueSpanHu">Edit</span>
                      </div> <br />

                      <Container>

                        <Row>
                          <Col xs={4}>
                            <div className="HumanTab">
                              <img className="HumanTabImg" src="img/AnotherPic/Ayub.jpg" alt="Ayub.jpg" />  <br /> <br />
                              <p>MD AYUB </p>
                              <p> <b>Service Provider</b> </p>
                            </div>
                            <span className="DueSpanHuTwo">Delete</span> <span className="DueSpanHu">Edit</span>

                          </Col>

                          <Col xs={4}>
                            <div className="HumanTab">
                              <img className="HumanTabImg" src="img/AnotherPic/Ayub.jpg" alt="Ayub.jpg" />  <br /> <br />
                              <p>MD AYUB </p>
                              <p> <b>Service Provider</b> </p>
                            </div>
                            <span className="DueSpanHuTwo">Delete</span> <span className="DueSpanHu">Edit</span>

                          </Col>

                          <Col xs={4}>
                            <div className="HumanTab">
                              <img className="HumanTabImg" src="img/AnotherPic/Ayub.jpg" alt="Ayub.jpg" />  <br /> <br />
                              <p>MD AYUB </p>
                              <p> <b>Service Provider</b> </p>
                            </div>

                            <span className="DueSpanHuTwo">Delete</span> <span className="DueSpanHu">Edit</span>
                            <br /> <br />
                          </Col>



                          <Col xs={4}>
                            <div className="HumanTab">
                              <img className="HumanTabImg" src="img/AnotherPic/Ayub.jpg" alt="Ayub.jpg" />  <br /> <br />
                              <p>MD AYUB </p>
                              <p> <b>Service Provider</b> </p>
                            </div>
                            <span className="DueSpanHuTwo">Delete</span> <span className="DueSpanHu">Edit</span>

                          </Col>

                          <Col xs={4}>
                            <div className="HumanTab">
                              <img className="HumanTabImg" src="img/AnotherPic/Ayub.jpg" alt="Ayub.jpg" />  <br /> <br />
                              <p>MD AYUB </p>
                              <p> <b>Service Provider</b> </p>
                            </div>
                            <span className="DueSpanHuTwo">Delete</span> <span className="DueSpanHu">Edit</span>

                          </Col>

                          <Col xs={4}>
                            <div className="HumanTab">
                              <img className="HumanTabImg" src="img/AnotherPic/Ayub.jpg" alt="Ayub.jpg" />  <br /> <br />
                              <p>MD AYUB </p>
                              <p> <b>Service Provider</b> </p>
                            </div>
                            <span className="DueSpanHuTwo">Delete</span> <span className="DueSpanHu">Edit</span>

                          </Col>

                        </Row>
                      </Container>
                    </Tab>



                    <Tab eventKey="AddNew" title="Add New">
                      <div> <br />
                        <InputGroup size="sm" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Name</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Name..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                        </InputGroup>

                        <InputGroup size="sm" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Gender</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Gender..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                        </InputGroup>


                        <InputGroup size="sm" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Mobile No</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Mobile No..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                        </InputGroup>

                        <InputGroup size="sm" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Alternate No</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Alternate No..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                        </InputGroup>

                        <InputGroup size="sm" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Date Of Birth</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Date Of Birth..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                        </InputGroup>

                        <InputGroup size="sm" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Address</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Address..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                        </InputGroup>

                        <InputGroup size="sm" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" style={{ border: "none", backgroundColor: "white" }}> <b>Role</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Role..." style={{ borderRadius: "3.25rem", paddingLeft: "15px" }} />
                        </InputGroup>

                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text style={{ border: "none", backgroundColor: "white" }}> <b>Categories</b> </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl as="textarea" aria-label="With textarea" placeholder="Enter Categories..." style={{ borderRadius: "5px", paddingLeft: "15px" }} />
                        </InputGroup> <br />

                        <Form>
                          <Form.Group>
                            <Form.Label> <b>Upload image</b> </Form.Label>
                            <Form.File id="exampleFormControlFile1" />
                          </Form.Group> <br />

                          <Form.Group>
                            <Form.Label> <b>Upload Documents</b> </Form.Label>
                            <Form.File id="exampleFormControlFile1" />
                          </Form.Group>


                        </Form> <br />

                        <span> <Button style={{ borderColor: "#eee", backgroundColor: "#14C299", height: "40px", marginTop: "10px", marginBottom: "10px", marginLeft: "15px", float: "right" }}>Done</Button></span>


                      </div>
                    </Tab>


                  </Tabs>
                </Tab.Pane>

                <Tab.Pane eventKey="four">
                  <Tabs variant="pills" defaultActiveKey="Pending" id="uncontrolled-tab-example">
                    <Tab eventKey="Pending" title="Pending"> <br />
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Order Id</th>
                            <th>Status</th>
                            <th>Category</th>
                            <th>Customer Name</th>
                            <th>Schedule Date</th>
                            <th>Action</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>T-5066-18013</td>
                            <td>  <p style={{ backgroundColor: "#309D78", padding: "4px", textAlign: "center", color: "white" }}>Accepted</p> </td>
                            <td>Personal Beauty Care</td>
                            <td>Musfiq Ahmed</td>
                            <td>11 Apr, 2021 5:00pm</td>
                            <td><p onClick={handleShow} style={{ cursor: "pointer", backgroundColor: "#309D78", padding: "4px", textAlign: "center", color: "white" }}><BiSearchAlt2 /></p></td>
                          </tr>
                          <tr>
                            <td>T-5066-1801</td>
                            <td>  <p style={{ backgroundColor: "gray", padding: "4px", textAlign: "center", color: "white" }}>cancelled</p> </td>
                            <td>Home Cleaning</td>
                            <td>Shimul Rahman</td>
                            <td>12 Apr, 2021 6:00pm</td>
                            <td><p onClick={handleShow} style={{ cursor: "pointer", backgroundColor: "#309D78", padding: "4px", textAlign: "center", color: "white" }}><BiSearchAlt2 /></p></td>
                          </tr>

                          <tr>
                            <td>T-50606-18014</td>
                            <td>  <p style={{ backgroundColor: "#63c6ed", padding: "4px", textAlign: "center", color: "white" }}>Process</p> </td>
                            <td>Home Cleaning</td>
                            <td>Shimul Rahman</td>
                            <td>12 Apr, 2021 6:00pm</td>
                            <td><p onClick={handleShow} style={{ cursor: "pointer", backgroundColor: "#309D78", padding: "4px", textAlign: "center", color: "white" }}><BiSearchAlt2 /></p></td>
                          </tr>
                        </tbody>
                      </Table>
                    </Tab>
                    <Tab eventKey="History" title="History"> <br />
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Order Id</th>
                            <th>Status</th>
                            <th>Category</th>
                            <th>Customer Name</th>
                            <th>Schedule Date</th>
                            <th>Action</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>T-5066-18013</td>
                            <td>  <p style={{ backgroundColor: "#309D78", padding: "4px", textAlign: "center", color: "white" }}>Accepted</p> </td>
                            <td>Personal Beauty Care</td>
                            <td>Musfiq Ahmed</td>
                            <td>11 Apr, 2021 5:00pm</td>
                            <td><p style={{ backgroundColor: "#309D78", padding: "4px", textAlign: "center", color: "white" }}><BiSearchAlt2 /></p></td>
                          </tr>
                          <tr>
                            <td>T-5066-1801</td>
                            <td>  <p style={{ backgroundColor: "gray", padding: "4px", textAlign: "center", color: "white" }}>cancelled</p> </td>
                            <td>Home Cleaning</td>
                            <td>Shimul Rahman</td>
                            <td>12 Apr, 2021 6:00pm</td>
                            <td><p style={{ backgroundColor: "#309D78", padding: "4px", textAlign: "center", color: "white" }}><BiSearchAlt2 /></p></td>
                          </tr>

                          <tr>
                            <td>T-50606-18014</td>
                            <td>  <p style={{ backgroundColor: "#63c6ed", padding: "4px", textAlign: "center", color: "white" }}>Process</p> </td>
                            <td>Home Cleaning</td>
                            <td>Shimul Rahman</td>
                            <td>12 Apr, 2021 6:00pm</td>
                            <td><p style={{ backgroundColor: "#309D78", padding: "4px", textAlign: "center", color: "white" }}><BiSearchAlt2 /></p></td>
                          </tr>
                        </tbody>
                      </Table>
                    </Tab>
                  </Tabs>
                </Tab.Pane>

                <Tab.Pane eventKey="five">

                  <Tabs variant="pills" defaultActiveKey="Overview" id="uncontrolled-tab-example">
                    <Tab eventKey="Overview" title="Overview">
                      <div> <br />
                        <Container>
                          <Row>

                            <div>
                              <div className="CurrentBalance">
                                <p>Wallet Status</p>
                                <h1>2947 ৳</h1>
                                <h5 style={{ marginBottom: "30px" }}>Currernt Balance</h5>
                              </div>
                            </div>

                            <Col className="Vennotific Vennotific1">
                              <div>
                                <h4>2500</h4>
                                <small>Taka</small>
                              </div> <hr style={{ width: "90%", background: "white", padding: "1px", marginBottom: "3px" }} />
                              <div>
                                <h6>Total Income</h6>
                              </div>
                            </Col>
                            <Col className="Vennotific Vennotific2">
                              <div>
                                <h4>2500</h4>
                                <small>Taka</small>
                              </div> <hr style={{ width: "90%", background: "white", padding: "1px", marginBottom: "3px" }} />

                              <div>
                                <h6>Total Commission</h6>
                              </div>
                            </Col>
                            <Col className="Vennotific Vennotific3">
                              <div>
                                <h4>2500</h4>
                                <small>Taka</small>
                              </div> <hr style={{ width: "90%", background: "white", padding: "1px", marginBottom: "3px" }} />

                              <div>
                                <h6>Total Earning</h6>
                              </div>
                            </Col>
                          </Row>
                        </Container> <br /> <br />
                      </div>
                    </Tab>
                    <Tab eventKey="Transactions" title="Transactions">
                     <div> <br/> <br/>
                       <h1>Comming</h1>
                     </div>
                    </Tab>
                    <Tab eventKey="Withdraw" title="Withdraw">
                      <div className="CurrentBalanceWithdraw"> <br />
                        <h2>Current Balance: ৳2947 </h2>
                        <Form>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label> <b>Witdraw Ammount</b> </Form.Label>
                            <Form.Control type="email" placeholder="Enter Witdraw Ammount..." />
                          </Form.Group>
                        </Form>
                        <span> <Button style={{ borderColor: "#eee", backgroundColor: "#14C299", height: "40px", marginTop: "10px", marginBottom: "10px", marginLeft: "15px", float: "right" }}>Submit</Button></span>
                      </div>
                    </Tab>

                    <Tab eventKey="Recharge" title="Recharge">
                      <div className="CurrentBalanceWithdraw"> <br />
                        <h2>Current Balance: ৳2947 </h2>
                        <Form>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label> <b>Recharge Ammount</b> </Form.Label>
                            <Form.Control type="email" placeholder="Enter Recharge Ammount..." />
                          </Form.Group>
                        </Form>
                        <span> <Button style={{ borderColor: "#eee", backgroundColor: "#14C299", height: "40px", marginTop: "10px", marginBottom: "10px", marginLeft: "15px", float: "right" }}>Submit</Button></span>
                      </div>
                    </Tab>
                  </Tabs>
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
