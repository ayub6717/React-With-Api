import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import "./AdminPendingOrder.css"
import { Table, Row, Col } from 'react-bootstrap';

const AdminPendingOrder = () => {
  const [serviceHistorys, SetServiceHistorys] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItem();

  }, []);
  const history = useHistory();
  const handleRowClick = (id) => {
    history.push(`/admin/a6b1q35/pendingorderdetails/${id}`);
  };
  const fetchItem = async () => {
    fetch("https://backend.amaderservice.com/api/assignedOrders")
      .then((response) => response.json())
      .then((data) => SetServiceHistorys(data))
      .then(() => setLoading(true));


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
              <li  className="UserDashboardListAccount"
              >
                Assigned Order
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/pendingquotation");
                }}
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
            <h1>Assigned Orders</h1>
            <Table responsive>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>User ID</th>
                  <th>Contact Person</th>
                  <th>Contact Person Mobile</th>
                  <th>Price</th>
                  <th>Created At</th>

                  <th>Expected At</th>
                </tr>
              </thead>
              <tbody>
                {serviceHistorys.map((item) => (

                  <tr>
                    <Link to={`/admin/a6b1q35/assignedorderdetails/${item.order_id}`} className="pendingOrderlist"
                      style={{ margin: "0px", padding: "0px", color: 'inherit', textDecoration: 'inherit' }}>

                      <td>{item.order_id}</td>
                    </Link>


                    <td>{item.user_id}</td>
                    <td>{item.contact_person}</td>
                    <td>{item.contact_person_number}</td>
                    <td>{item.price}</td>

                    <td>{item.created_at}</td>

                    <td>{item.expectedTime}</td>

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
