import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import {Table, Row, Col} from 'react-bootstrap';
import "./AdminPendingOrder.css"
const AdminRegVendors = () => {
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
        fetch("https://kentradigital.com/api/vendorlist")
            .then((response) => response.json())
            .then((data) => SetServiceHistorys(data.slice(1)))
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
              <li  onClick={() => {
                  history.push("/admin/a6b1q35/assignedorder");
                }}
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
                className="UserDashboardListAccount"
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

                    <div className="col-md-9" style={{background:""}}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>  
                                <th>Vendor Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Address</th>                         

                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                        {serviceHistorys.map((item) => (
                                
                            <tr>
                                <td>{item.id}</td>  
                                <td>{item.vendor_name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact_number}</td>
                                <td>{item.address}</td>                          

                                <td>{item.created_at.slice(0, -17)}</td>
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

export default AdminRegVendors;
