import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import "./AdminPendingQuotation.css"
import { Table, Row, Col } from 'react-bootstrap';
import { Modal, Button } from "react-bootstrap";
import tick from './../../../icons/tick.jpg'

const AdminPendingOrder = () => {
  const [serviceHistorys, SetServiceHistorys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);


  useEffect(() => {
    fetchItem();

  }, []);
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");
  const modalHide = () => {
    setModalShow(false)

    history.push(`/admin/a6b1q35/pendingquotation`);

  }
  const history = useHistory();
  const handleRowClick = (id) => {
    history.push(`/admin/a6b1q35/pendingorderdetails/${id}`);
  };
  const fetchItem = async () => {
    fetch("https://backend.amaderservice.com/api/pendingquotations")
      .then((response) => response.json())
      .then((data) => SetServiceHistorys(data))
      .then(() => setLoading(true));


  };

  const sendEmail = async (userId, serviceId) => {
    
    fetch("https://backend.amaderservice.com/api/sentquota_email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: userId,
        service_id: serviceId,
        message: message,
        
      }),
    })
      .then((res) => res.json())
      .then((response) =>  setEmailSent(true))
      .catch((error) => console.error("Error:", error));
    
   


  };

  return (
    <div>
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
          <div className="col-md-9" style={{ backgroundColor: "transparent" }}>
            <h1>Pending Quotation</h1>
            <Table responsive>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Area in sqft.</th>
                  <th>Details</th>

                  <th>Created At</th>

                  <th>Expected At</th>
                </tr>
              </thead>
              <tbody>
                {serviceHistorys.map((item) => (

                  <tr onClick={()=>setModalShow(true)} style={{cursor:"pointer"}}>
                   <td >{item.order_id}</td>
                    <td>{item.user_id}</td>
                    <td>{item.name}</td>

                    <td>{item.contact_number}</td>
                    <td>{item.area}</td>
                    <td>{item.description}</td>

                    <td>{item.created_at}</td>

                    <td>{item.expectedTime}</td>
                    <div>
                  <Modal
                  size="lg"
                  show={modalShow}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  onHide={() => modalHide()}
          
                >
                  <Modal.Header>
                    <h3 className="text" style={{ textAlign: "center" }}>
                      Send quotation Email to {item.name}
                    </h3>
                  </Modal.Header>
                  <Modal.Body>
                    {!emailSent ?
                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      id="floatingPassword"
                      type="text"
                      rows="8"
                      style={{height:"300px"}}
                      placeholder="number"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      required
                    ></textarea>
                    <label for="floatingPassword">Email Body</label>
                  </div>
                  :
                  <div>
                  <h4 style={{textAlign:"center", color:"green"}}>
                    
                    <br/>Email successfully sent!
                  </h4>
                  </div>
                }

                  </Modal.Body>
                  <Modal.Footer>

                  {!emailSent ? 
                  <Button onClick={()=>sendEmail(item.user_id, item.service_id)}>Send Email</Button> 
                  : 
                  <Button onClick={()=>modalHide()}>Close</Button>
                  }
                  </Modal.Footer>
                  </Modal>
                  </div>

                  </tr>
                  

                ))}
              </tbody>
            </Table>



          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AdminPendingOrder;
