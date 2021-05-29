import React, { useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

function AdminPendingOrderDetails({ match }) {
  const [serviceHistorys, SetServiceHistorys] = useState(
    [
      {
      id: "",
      vendor_id: "",
      user_id: "",
      order_id: "",
      created_at: "",
      updated_at: null,
      zone_id: "",
      service_id: "",
      name: "",
      service_name: "",
      service: "",
      zone: ""
      }
      ]
  );
  const [vendors, setVendors] = useState([]);
  const [clicked, setClicked] = useState("");
  const [pendingId, setPendingId] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const [vendorEmpty, setVendorEmpty] = useState(false);


  const [loading, setLoading] = useState(true);
  const [loadingVendor, setLoadingVendor] = useState(false);


  useEffect(() => {
    fetchItem();

  }, []);
  const history = useHistory();

  const modalHide = () => {
    setLoading(true)
    fetchItem();
    setModalShow(false)
  }

  const fetchEligibleVendors = async (pendingId, serviceID, zoneId) => {
    setPendingId(pendingId);
    setVendorEmpty(false);
    setClicked(pendingId);
    setLoadingVendor(true)

    const link = "https://backend.amaderservice.com/api/eligibleVendor?serviceid=" + serviceID + "&zoneid=" + zoneId;
    const data = await fetch(link);
    const item = await data.json();
    setVendors(item);
    setLoadingVendor(false);
    if (item.length == 0) {
      setVendorEmpty(true);

    }


  }

  const assignVendor = async (vendorId) => {
    const link =
      "https://backend.amaderservice.com/api/placeOrdertoVendor?id=" + pendingId + "&vendorid=" + vendorId;
    const data = await fetch(link);
    const item = await data.json();
    if(item == 1){
      setModalShow(true)
    }else{
      alert("fail")

    }

    //viewCart();
  };

  const fetchItem = async () => {
    setVendors([]);
    const link = "https://backend.amaderservice.com/api/pendingServices?orderid=" + match.params.id;
    
  const data = await fetch(link);
  const item = await data.json();
  if(item.length == 0){
    setLoading(true)
    history.push("/admin/a6b1q35/pendingorder");
  }else{
    setLoading(false)
  }
   SetServiceHistorys(item);
    setLoading(false);
      


  };

  return (
    <div>
       <Modal
        size="lg"   
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h1 className="text-success">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              width="140"
              height="140"
              fill="currentColor"
              class="bi bi-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
            Assigned Vendor to the Service!
          </h1>
        </Modal.Body>
        <Modal.Footer>
          <Button className="container btn-success" onClick={() => modalHide()}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <div className="container pt-5">
        <h4>
          Home <span className="homeSpan">.</span> Service History
        </h4>{" "}
        <br />
        <div className="row d-flex">
          <div className="col-md-2">
          <ol className="UserDashboardList">
            <li
                onClick={() => {
                  history.push("/admin/a6b1q35/account");
                }}
              >
                Admin Account
              </li>{" "}
              <li
                 onClick={() => {
                  history.push("/admin/a6b1q35/addmainservice");
                }}
              >
                Add New Service
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/addlocation");
                }}
              >
                Add New Location
              </li>              
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/pendingorder");
                }}
              >
                Pending Order
              </li>
              <li  onClick={() => {
                  history.push("/admin/a6b1q35/assignedorder");
                }}
              >
                Assigned Order
              </li>
              <li
                className="UserDashboardListAccount"
              >
                Pending Quotation
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/regusers");
                }}
              >
                Registered Users
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/regvendors");
                }}
              >
                Registered Vendors
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/placeorder");
                }}
              >
                Place Order
              </li>
            </ol>
          </div>
          <div className="col-md-1 vl"></div>
          {loading ?
            <div className="col-md-9">
              <h2 style={{fontSize:"14px", color:"#387cd5"}}>Loading</h2>
            </div>
            :

            <div className="col-md-9">
              <h3>User Information</h3>


              <p>
                <span style={{fontWeight:"bold"}}>User ID: </span> {serviceHistorys[0].user_id} 
                <span style={{fontWeight:"bold"}}> Username:</span> {serviceHistorys[0].name}
                <span style={{fontWeight:"bold"}}> Zone:</span> {serviceHistorys[0].zone}
                <span style={{fontWeight:"bold"}}> Created At: </span> {serviceHistorys[0].created_at}
              </p>
             
              <h3 style={{marginTop:"30px;"}}>Order Information</h3>

              <Container>

                <Row>
                  {/*left column */}
                  <Col>
                    <div className="final-heading">
                      <Container>
                        <Row>
                          <Row>
                            <h4
                              style={{
                                alignSelf: "center",
                                fontSize: "18px",
                                paddingTop: "10px",
                                color: "white"
                              }}
                            >
                              Services in Order #{serviceHistorys[0].order_id} <br />{" "}
                            </h4>

                          </Row>
                        </Row>
                      </Container>
                    </div>


                    {serviceHistorys.map((item) => (
                      <div className="cart-item" style={{ backgroundColor: clicked == item.id ? "#33669A" : "#33669A20", color: clicked == item.id ? "white" : "black" }}>
                        <Row style={{ cursor: "pointer" }}
                          onClick={() => fetchEligibleVendors(item.id, item.service_id, item.zone_id)}>
                          <h4
                            style={{
                              width: "420px",
                              alignSelf: "center",
                              marginLeft: "20px",
                              fontSize: "18px",
                              paddingTop: "10px",
                            }}
                            key={item.id}
                          >
                           {item.service_name} <br /><span style={{fontSize:"14px"}}>{item.service} <br/> Zone: {item.zone}</span>

                          </h4>
                        </Row>
                      </div>
                    ))}


                  </Col>
                  {/*right column */}

                  <Col>
                    <Row>
                      <div className="cart-heading"  style={{ backgroundColor:"#387cd5" }}>
                        <h5
                          style={{
                            color: "white",
                            paddingTop: "10px",
                            textAlign: "center",
                          }}
                        >
                          Available Vendors

                  </h5>
                      </div>
                    </Row>

                    <div>
                      {loadingVendor ?
                        <div>
                          <Row>
                            <div className="container-scroll img-center">

                              <h4
                                style={{
                                  textAlign: "center",
                                  marginTop: "100px",
                                  color: "white",
                                  fontSize: 22,
                                }}
                              >
                                Loading...
                      </h4>
                            </div>
                          </Row>
                          <Row>
                            <div
                              className=""
                              style={{ paddingTop: "25px", paddingBottom: "25px" }}
                            ></div>
                          </Row>
                        </div>
                        :
                        <div>

                          <Row>
                            {vendorEmpty ?
                              <div className="container-scroll">
                                <h3
                                  style={{ marginTop: "30px", marginLeft: "50px", color:"#387cd5" }}
                                >No Vendor available</h3>
                              </div>
                              :
                              <div className="container-scroll">
                                {vendors.map((item) => (
                                  <div className="cart-item">
                                    <Row
                                      style={{ padding: "10px", backgroundColor:"#387cd5" }}
                                    >
                                      <p
                                        style={{
                                          width: "340px",
                                          alignSelf: "center",
                                          marginTop: "auto",
                                          marginBottom: "auto",
                                          fontSize: "18px",
                                          color:"white",
                                          fontWeight:"bold",
                                          marginTop: "0px",
                                        }}
                                        key={item.id}
                                      >
                                        {item.vendor_name} <br/>

                                        <span style={{fontSize:"14px", color:"white"}}>{item.address}</span>
                                      </p>
                                      <Button
                                        className="btn"
                                        style={{
                                          width: "80px",
                                          marginTop: "5px",
                                          height: "40px",
                                          fontSize: "14px",
                                          color: "blue",
                                          fontWeight:"bold",
                                          backgroundColor:"white",
                                          borderColor:"white"
                                        }}
                                        onClick={() => assignVendor(item.id)}
                                      >
                                        Assign
                                    </Button>
                                    </Row>
                                  </div>
                                ))}
                              </div>
                            }
                          </Row>
                        </div>}
                    </div>


                  </Col>
                </Row>
              </Container>

            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default AdminPendingOrderDetails;
