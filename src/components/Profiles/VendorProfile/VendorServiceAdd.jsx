import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SelectSearch from "react-select-search";
import NavBar from "../../NavBar/NavBar";
import { reactLocalStorage } from "reactjs-localstorage";

const VendorServiceAdd = () => {
 
  useEffect(() => {
    fetchItemCountry();
    fetchItemCategory();
  }, []);
  const history = useHistory();
  const [countrys, setCountrys] = useState();
  const [cities, setCities] = useState();
  const [zones, setZones] = useState([]);
  const [vendorInfo, setVendorInfo] = useState(
    reactLocalStorage.getObject("vendorInfo")
  );
  const [category, setCategory] = useState();
  const [service, setService] = useState();
  const [finalService, setFinalService] = useState();
  const [finalFinal, setFinalFinal] = useState();
  const [zoneArray, setZoneArray] = useState([]);
  const [serviceValue, setServiceValue] = useState();
  const [subServiceValue, setSubServiceValue] = useState();

  const fetchItemCountry = async () => {
    const country = await fetch(
      `https://kentradigital.com/api/showCountry`
    );
    const itemCountry = await country.json();
    const newArray = itemCountry.map(({ id, country_name }) => ({
      value: id,
      name: country_name,
    }));
    setCountrys(newArray);
  };
  const fetchItemCity = async (countryId) => {
    const link =
      "https://kentradigital.com/api/city?countryid=" + countryId;

    const citiess = await fetch(link);
    const itemCity = await citiess.json();
    const newArrayCity = itemCity.map(({ id, city_name }) => ({
      value: id,
      name: city_name,
    }));
    setCities(newArrayCity);
  };
  const fetchItemZone = async (cityId) => {
    const citiess = await fetch(
      `https://kentradigital.com/api/serviceZone?cityid=` + cityId
    );
    const itemCity = await citiess.json();
    setZones(itemCity);
  };

  //service fetching starts here

  const fetchItemCategory = async () => {
    const country = await fetch(
      `https://kentradigital.com/api/showservice`
    );
    const itemCountry = await country.json();
    const newArray = itemCountry.map(({ id, category_name }) => ({
      value: id,
      name: category_name,
    }));
    setCategory(newArray);
  };
  const fetchItemService = async (cat) => {
    const citiess = await fetch(
      `https://kentradigital.com/api/subcatagory?maincatagoryid=` +
        cat
    );
    const itemCity = await citiess.json();
    const newArrayCity = itemCity.map(({ id, service_type_name }) => ({
      value: id,
      name: service_type_name,
    }));
    setService(newArrayCity);
  };
  const fetchItemFinalService = async (subCat) => {
    const citiess = await fetch(
      `https://kentradigital.com/api/servicelist?subcatagoryid=` +
        subCat
    );
    const itemCity = await citiess.json();
    const newArrayCity = itemCity.map(({ id, service_name }) => ({
      value: id,
      name: service_name,
    }));
    setFinalService(newArrayCity);
  };

  const fetchItemFinalFinal = async (serviceId) => {
    const link =
      "https://kentradigital.com/api/finalServiceList?serviceid=" +
      serviceId;
    console.log("this is fetch city link:" + link);
    const country = await fetch(link);
    const itemCountry = await country.json();
    const newArray = itemCountry.map(({ id, service_name }) => ({
      value: id,
      name: service_name,
    }));
    setFinalFinal(newArray);
  };

  const handleCheckboxChange = (event) => {
    let newArray = [...zoneArray, event.target.id];
    if (zoneArray.includes(event.target.id)) {
      newArray = newArray.filter((day) => day !== event.target.id);
    }
    setZoneArray(newArray);
  };

  const handleCountryValue = (id) => {
    fetchItemCity(id);
  };

  const handleCityValue = (id) => {
    fetchItemZone(id);
  };

  const handleCategoryValue = (id) => {
    fetchItemService(id);
  };

  const handleSubCatValue = (id) => {
    fetchItemFinalService(id);
  };

  const handleServiceValue = (id) => {
    setServiceValue(id);
    fetchItemFinalFinal(id);
  };

  const submitService = async () => {
    fetch("https://kentradigital.com/api/registerService", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        zoneid: zoneArray,
        servicecatagoryid: serviceValue,
        vendorid: vendorInfo.id,
        finalserviceid: subServiceValue,
      }),
    })
      .then((res) => res.json())
      .then((response) => alert("Success!"))
      .catch((error) => console.error("Error:", error));
  };
  return (
    <div>
      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <div className="container pt-5">
        <h4>
          Home <span className="homeSpan">.</span> Add Service
        </h4>{" "}
        <br />
        <div className="row d-flex">
          <div className="col-md-3">
            <ol className="UserDashboardList">
              <li
                onClick={() => {
                  history.push("/vendor/account");
                }}
              >
                Vendor Account
              </li>{" "}
              <li className="UserDashboardListAccount">Add Service</li>
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
            </ol>
          </div>
          <div className="col-md-2 vl"></div>
          <div className="col-md-6 text-center">
            <h2>Select Area</h2> <br />
            <div className="container">
              <SelectSearch
                id="test-id"
                options={countrys}
                onChange={handleCountryValue}
                placeholder="Select Country"
              />{" "}
              <br />
              <SelectSearch
                id="test-id"
                options={cities}
                onChange={handleCityValue}
                placeholder="Select City"
              />{" "}
              <br />
              {zones.map((area) => (
                <div className="d-flex align-items-center pb-2 mb-2">
                  <input
                    type="checkbox"
                    className="custom-control-input me-3 ms-3"
                    id={area.id}
                    value={area.id}
                    onChange={handleCheckboxChange}
                  />
                  <label className="custom-control-label" htmlFor="monday">
                    {area.zone}
                  </label>
                </div>
              ))}
              <h2>Select Service</h2> <br />
              <SelectSearch
                id="test-id"
                options={category}
                onChange={handleCategoryValue}
                placeholder="Select Category"
              />{" "}
              <br />
              <SelectSearch
                id="test-id"
                options={service}
                onChange={handleSubCatValue}
                placeholder="Select Sub Category"
              />{" "}
              <br />
              <SelectSearch
                id="test-id"
                options={finalService}
                onChange={handleServiceValue}
                placeholder="Select Service"
              />{" "}
              <br />
              <SelectSearch
                id="test-id"
                options={finalFinal}
                onChange={setSubServiceValue}
                placeholder="Select Sub Service"
              />{" "}
              <br />
              <button className="btn btn-success mb-5" onClick={submitService}>
                Register Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorServiceAdd;
