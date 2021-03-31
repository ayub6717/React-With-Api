import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { reactLocalStorage } from "reactjs-localstorage";

const VendorServiceList = () => {
  const [serviceHistorys, SetServiceHistorys] = useState();
  const [loading, setLoading] = useState(false);
  const [vendorInfo, setVendorInfo] = useState(
    reactLocalStorage.getObject("vendorInfo")
  );
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    fetch("https://kentradigital.com/api/Vendor_Dash?vendorid=" + vendorInfo.id)
      .then((response) => response.json())
      .then((data) => SetServiceHistorys(data.given_service))
      .then(() => setLoading(true));
  };
  console.log(serviceHistorys);
  const history = useHistory();
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
                  history.push("/vendor/account");
                }}
              >
                Vendor Account
              </li>{" "}
              <li
                onClick={() => {
                  history.push("/vendor/addservice");
                }}
              >
                Add Service
              </li>
              <li className="UserDashboardListAccount">Service History</li>
              <li
                onClick={() => {
                  history.push("/vendor/pendingservice");
                }}
              >
                Pending Service
              </li>{" "}
            </ol>
          </div>
          <div className="col-md-1 vl"></div>
          {loading ? (
            <div className="col-md-9">
              <table className="table">
                <thead style={{ backgroundColor: "#F5F6FA" }} className="">
                  <tr>
                    <th scope="col">Service Name</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Price</th>
                    <th scope="col">Customer Address</th>
                    <th scope="col">Customer Contact</th>
                    <th scope="col">Service Date</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceHistorys.map((item) => (
                    <tr key={item.id}>
                      <td>{item.service_name}</td>
                      <td>{item.price}</td>

                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.contact_number}</td>
                      <td>{item.created_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="col-md-9">
              <h2>Loading...</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorServiceList;
