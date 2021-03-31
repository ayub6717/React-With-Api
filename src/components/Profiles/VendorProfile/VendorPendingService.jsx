import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { reactLocalStorage } from "reactjs-localstorage";
const zoneArray = [
  {zone_id: 9},
  {zone_id:10}
];


const VendorPendingService = () => {
  const [serviceHistorys, SetServiceHistorys] = useState();
  const [loading, setLoading] = useState(false);
  const [vendorInfo, setVendorInfo] = useState(
    reactLocalStorage.getObject("vendorInfo")
  );
  useEffect(() => {
    fetchItem();
    fetchArray();
  }, []);
const fetchArray = async () => {
  console.log("posting Array -------------------------");
  fetch('https://kentradigital.com/api/registerService', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    zoneid: [9,10,11],
    servicecatagoryid: 1,
    vendorid: 1,
    finalserviceid: 1


  })
}).then(function (response) {
  console.log(response);
  console.log("posting Array -------------------------");

})
}
  const fetchItem = async () => {
    fetch("https://kentradigital.com/api/Vendor_Dash?vendorid=" + vendorInfo.id)
      .then((response) => response.json())
      .then((data) => SetServiceHistorys(data.pending_service))
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
              <li
                onClick={() => {
                  history.push("/vendor/givenservice");
                }}
              >
                Service History
              </li>{" "}
              <li className="UserDashboardListAccount">Pending Service</li>
            </ol>
          </div>
          {loading ? (
            <div className="col-md-10">
              <table className="table">
                <thead style={{ backgroundColor: "#F5F6FA" }} className="">
                  <tr>
                    <th scope="col">Service</th>
                    <th scope="col">Details</th>
                    <th scope="col">Price</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Address</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>

                  </tr>
                </thead>
                <tbody>
                  {serviceHistorys.map((item) => (
                    <tr key={item.id}>
                      <td>{item.service}</td>
                      <td>{item.service_name}</td>
                      <td>{item.price}</td>
                      <td>{item.name}</td>
                      <td>{item.order_address}</td>
                      <td>{item.contact_number}</td>
                      <td>{item.created_at}</td>
                      <td>Pending/Completion On Review</td>

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

export default VendorPendingService;
