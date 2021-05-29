import React, { useEffect, useState } from "react";
import './../SelectItem/Select.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {IoLocationSharp, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { IoLocationSharp } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
// ............................................
import { Redirect, useHistory } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import SelectSearch from "react-select-search";
import { useMediaQuery } from 'react-responsive';






function SelectItem() {

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
        <div className="SelectItem">
            <div >
                <div className="container" style={{ padding: "30px" }}>
                    <div className="row">
                        <div className="col-sm-6 T-center">
                            <img className="call-pic" src="/img/AnotherPic/call.png" alt="" />
                            <div className="head-font">
                                <h3>Your</h3>
                                <h1 >Trusted</h1>
                                <h2 >Service Partner</h2>
                            </div>
                            <p>Get all servicies you need in one place <br /> from professional expart, at home!</p>
                            <span><img className="img-width" src="/img/app-store.png" alt="app-store.png" /> <a href="https://play.google.com/store/apps/details?id=com.amaderserviceclient" target="_blank"> <img className="img-width" src="/img/play-store.png" alt="play-store" /></a> </span>
                        </div>
                        <div className="col-sm-6">
                            <div className="select-one">
                                <h5 className="get">Get Any Service, Any Time</h5>
                                <div class="form-group" style={{ marginBottom:"10px" }}>
                                    <label for="sel1" style={{ marginBottom:"7px" }}>< IoLocationSharp style={{ color: "green" }} /> Select Location</label>
                                    <SelectSearch
                                        style={{ width: "100px" }}
                                        options={locationZones}
                                        onChange={handleZones}
                                        placeholder={currLoc}
                                    />

                                </div>
                                <div class="form-group">
                                    <label for="sel1" style={{ marginBottom:"7px" }}>< BiSearchAlt2 style={{ color: "green" }} /> Find a service</label>

                                    <SelectSearch
                                        options={options}
                                        onChange={handleSelect}
                                        search
                                        placeholder="Search…"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectItem
