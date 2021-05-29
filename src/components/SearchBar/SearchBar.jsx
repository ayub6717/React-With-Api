import "./SearchBar.css";
import SelectSearch from "react-select-search";
import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { Redirect, useHistory } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { useMediaQuery } from 'react-responsive';

const SearchBar = () => {
    /*react responsive starts here*/

    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
      query: '(max-device-width: 1224px)'
    })
    /*react responsive ends here*/
  useEffect(() => {
    fetchItem();
    fetchZones();
  }, []);
  let history = useHistory();

  const [options, setOptions] = useState([]);
  const [locationZones, setLocationZones] = useState([]);
  const [currLoc, setCurrLoc] = useState(reactLocalStorage.get("userZone"));


  const handleSelect = function (id) {
    history.push(`/${id}`);
  };

  const handleZones = function (id, name) {
    reactLocalStorage.set("userZone", name.name);
    reactLocalStorage.set("userZoneId", id);
    setCurrLoc(name.name)
    window.location.reload();

  };

  const fetchItem = async () => {
    const options = await fetch(
      `https://backend.amaderservice.com/api/subcatagory?typename=`
    );
    const item = await options.json();
    const newArray = item.map(({ id, service_type_name }) => ({
      value: id,
      name: service_type_name,
    }));
    setOptions(newArray);
  };

  const fetchZones = async () => {
    const options = await fetch(
      `https://backend.amaderservice.com/api/serviceZone`
    );
    const item = await options.json();
    const newArray = item.map(({ id, zone }) => ({
      value: id,
      name: zone,
    }));
    setLocationZones(newArray);
  };

  return (
    <div>
      <div style={{ paddingTop: "0px" }} className="container">
      {isDesktopOrLaptop && 
          <div className="row justify-content-center">
            <div className="col-md-3">             
               
                <SelectSearch
                style={{width:"100px"}}
                options={locationZones}
                onChange={handleZones}
                placeholder={currLoc}
              />
            </div>

            <div className="col-md-3">
  
              <SelectSearch
                className="select-search"
                options={options}
                onChange={handleSelect}
                search
                
                placeholder="Find your service here…"
              />                         
            </div>
            
          </div>
        
          }
          {isTabletOrMobile &&
            <div className="row">
            <div className="col" style={{marginTop:"20px"}}>
              
               
                <SelectSearch
                options={locationZones}
                onChange={handleZones}
                placeholder={currLoc}
              />
            </div>
  
            <div className="col" style={{marginTop:"20px"}}>
  
              <SelectSearch
                options={options}
                onChange={handleSelect}
                search
                placeholder="Search…"
              />                         
            </div>
            
          </div>
        
          }       
        
        </div>
    </div>
  );
};

export default SearchBar;
