import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SelectSearch from "react-select-search";
import NavBar from "../../NavBar/NavBar";
import { Modal, Button } from "react-bootstrap";

const AdminAddLocaion = () => {
  useEffect(() => {
    fetchItemCatagory();
  }, []);
  const [optionsCatagory, setOptionsCatagory] = useState([]);
  const [optionsSubCategory, setOptionsSubCatagory] = useState([]);
  const [optionsService, setOptionsService] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [categoryName, setCategoryName] = useState();
  const [serviceName, setServiceName] = useState();
  const [serviceId, setServiceId] = useState();
  const [subCategoryId, setSubCategoryId] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [modalSecond, setModalSecond] = useState(false);
  const [subCategory, setSubCategory] = useState();
  const [finalName, setFinalName] = useState();
  const [finalPrice, setFinalPrice] = useState();



  const history = useHistory();

  const createCategory = async () => {
    const optionsCatagory = await fetch("https://kentradigital.com/api/addCountry?countryname="
      + categoryName);
    fetchItemCatagory();

  };

  const createSubCategory = async (id) => {
    const link = "https://kentradigital.com/api/addCity?cityname=" + subCategory
      + "&countryid="
      + categoryId;
    const optionsCatagory = await fetch(link);
    fetchItemSubCatagory(id);

  };

  const createService = async (id) => {

    const link = "https://kentradigital.com/api/addService?servicename=" + serviceName
      + "&servicetypeid="
      + subCategoryId;
    fetch(link)
      .then((res) => res.json())
      .then((result) => { console.log(result); });
    fetchItemService(id);
  };

  const createFinalService = async () => {
    const link = "https://kentradigital.com/api/addZone?zonename="
      + finalName
      + "&cityid="
      + subCategoryId;
    fetch(link)
      .then((res) => res.json())
      .then((result) => { console.log(JSON.stringify(result)); });

  };

  const handleCategory = (id) => {
    setCategoryId(id);
    fetchItemSubCatagory(id);
  }

  const handleSubCategory = (id) => {
    setSubCategoryId(id);
    fetchItemService(id);
  }

  const handleService = (id) => {
    setServiceId(id);
  }

  const fetchItemCatagory = async () => {
    const optionsCatagory = await fetch(
      `https://kentradigital.com/api/showCountry`
    );
    const itemCatagory = await optionsCatagory.json();
    const newArrayCatagory = itemCatagory.map(({ id, country_name }) => ({
      value: id,
      name: country_name,
    }));
    setOptionsCatagory(newArrayCatagory);
  };


  const fetchItemSubCatagory = async (id) => {
    const optionsCatagory = await fetch(
      `https://kentradigital.com/api/city?countryid=` + id
    );
    const itemCatagory = await optionsCatagory.json();
    const newArrayCatagory = itemCatagory.map(({ id, city_name }) => ({
      value: id,
      name: city_name,
    }));
    setOptionsSubCatagory(newArrayCatagory);
  };

  const fetchItemService = async (id) => {
    const link = `https://kentradigital.com/api/servicelist?subcatagoryid=` + id;
    const optionsCatagory = await fetch(link);
    const itemCatagory = await optionsCatagory.json();
    const newArrayCatagory = itemCatagory.map(({ id, service_name }) => ({
      value: id,
      name: service_name,
    }));
    setOptionsService(newArrayCatagory);
  };

  const modalHide = async (id) => {
    createFinalService()
      .then(() => setModalSecond(true))
  }
  const modalSecondhide = () => {
    setModalShow(false);
    setModalSecond(false)
    setFinalName("");    
  }

  return (
    <div>
      <Modal
        size="lg"
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {modalSecond ?
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
           Done!
          </h1>
          </Modal.Body>
          :

          <Modal.Body>
            <h1>
              Add this new Zone?
          </h1>
            <h2>
              Title: {finalName} 
            </h2>
          </Modal.Body>
        }
        <Modal.Footer>
          {modalSecond ?
            <Button className="container btn-success" onClick={() => modalSecondhide()}>
              Done
      </Button>
            :

            <Button className="container btn-success" onClick={() => modalHide()}>
              Yes
          </Button>
          }
        </Modal.Footer>
      </Modal>

      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <div className="container pt-5">
        <h4>
          Home <span className="homeSpan">.</span> Add New Service
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
              <li  className="UserDashboardListAccount"
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
              <li
                onClick={() => {
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
          <div className="col-md-2 vl"></div>
          <div className="col-md-8">
            <div className="container">
            <h1>Add New Location</h1>


              <div className="bg-white p-5" style={{ marginTop: "30px" }}>
                <h2 style={{ textAlign: "center", marginTop: -30, marginBottom: 20 }}>Step 1</h2>

                <div className="row justify-content-center">
                  <div className="col-md-6">
                    Select Country
                    <SelectSearch
                      id="test-id"
                      options={optionsCatagory}
                      onChange={handleCategory}
                      placeholder="Country"
                    />
                  </div>
                  <div className="col-md-6">
                    Or Add New Country
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          style={{ height: "40px" }}
                          value={categoryName}
                          onChange={(event) => setCategoryName(event.target.value)}
                          placeholder="New Country"
                        />
                      </div>
                      <div className="col-md-4">
                        <button className="btn btn-success" onClick={() => createCategory()}>Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5" style={{ marginTop: "30px" }}>
                <h2 style={{ textAlign: "center", marginTop: -30, marginBottom: 20 }}>Step 2</h2>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    Select City
                    <SelectSearch
                      id="test-id"
                      options={optionsSubCategory}
                      onChange={handleSubCategory}
                      placeholder="City"
                    />
                  </div>
                  <div className="col-md-6">
                    Or Add New City
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          style={{ height: "40px" }}
                          value={subCategory}
                          onChange={(event) => setSubCategory(event.target.value)}
                          placeholder="New City"
                        />
                      </div>
                      <div className="col-md-4">
                        <button className="btn btn-success" onClick={() => createSubCategory(categoryId)}>Add City</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5" style={{ marginTop: "30px", marginBottom: "30px" }}>
                <h2 style={{ textAlign: "center", marginTop: -30, marginBottom: 20 }}>Step 3</h2>

                Add New Zone
                <input
                  className="form-control"
                  type="text"
                  name=""
                  id=""
                  style={{ marginBottom: "20px" }}
                  value={finalName}
                  onChange={(event) => setFinalName(event.target.value)}
                  placeholder="New Zone"
                />{" "}                
                <button className="btn btn-success" style={{ width: "100%" }} onClick={() => setModalShow(true)}>Add Zone</button>
                <br />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddLocaion;
