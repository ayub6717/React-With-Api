import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import "./UserOrder.css"
import { Table, Row, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { reactLocalStorage } from "reactjs-localstorage";
import { FaCheck } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { Button } from "react-bootstrap";

const UserOrder = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const [userInfo, setUserInfo] = useState(reactLocalStorage.getObject("userInfo"));

    const [serviceHistorys, SetServiceHistorys] = useState([]);
    const [loading, setLoading] = useState(false);
    const [resHead, setResHead] = useState([]);

    useEffect(() => {
        fetchItem();

    }, []);
    const handleClick = () => {
        history.push("/allservices");
      };
    const history = useHistory();
    const handleRowClick = async (id) => {
        const link = "https://kentradigital.com/api/completeOrder?userid="+ userInfo[0].id + "&orderid=" + id;
        const data = await fetch(link);
        const link2 = "https://kentradigital.com/api/userorders?userid="+ userInfo[0].id;
        const data2 = await fetch(link2);
        const dataJSON2 = await data2.json();
        SetServiceHistorys(dataJSON2);
        setResHead(Object.keys(dataJSON2));    
    };
    const fetchItem = async () => {
        const link = "https://kentradigital.com/api/userorders?userid="+ userInfo[0].id;
        const data = await fetch(link);
        const dataJSON = await data.json();
        SetServiceHistorys(dataJSON);
        setResHead(Object.keys(dataJSON));


    };

    return (
        <div>
                <div>
                    <div className="mb-5">
                        <NavBar></NavBar>
                    </div>
                    <div className="container pt-5" style={{marginTop:"-90px"}}>
                        {resHead.length < 1 ?
                        <div style={{display:"grid", justifyContent: 'center', marginTop:"200px"}}>
                            <h2>No Orders Yet</h2>
                            <Button onClick={handleClick}>View All Services</Button>
                        </div>
                        :                        
                        <div style={{ backgroundColor: "transparent" }}>
                            <h1>Orders</h1>
                                {resHead.map((res, i) => (
                                    <div className="row"  style={{backgroundColor:"#d4d4d490", marginBottom:"10px", borderRadius:"10px"}}>
                                        <div className="col-md-1">
                                        <p style={{fontWeight:"bold", fontSize:"16px", textAlign:"center", color:"grey"}}>Order ID 
                                        <span style={{fontWeight:"bold", fontSize:"25px", color:"grey"}}> {res}</span></p>
                                        </div>
                                        <div className="col-md-11" style={{padding:"0px"}}>

                                        {serviceHistorys[res].map((item) => (
                                            <div className="row" style={{backgroundColor:"#ffffff80", margin:"10px", borderRadius:"10px"}}>
                                                <div className="col-md-6">
                                                    <p style={{marginTop:"10px",marginBottom:"0px", fontSize:"16px", fontWeight:"600"}}>{item.service}</p>
                                                    <p style={{margin:"0px", marginBottom:"10px", fontWeight:"14px", fontWeight:"500"}}>{item.service_name}</p>
                                                </div>
                                                <div className="col-md-3">
                                                    <p style={{marginTop:"10px", color:"#000000", fontWeight:"14px", fontWeight:"500"}}>Expected at {item.expectedTime}</p>

                                                    <p style={{margin:"0px", color:"#00000080", fontWeight:"14px", fontWeight:"500"}}>Assigned to {item.vendor_name}</p>
                                                </div>
                                                <div className="col-md-3" style={{display:"flex", marginTop:"10px", justifyContent:"center"}}>
                                                    {item.status == "1" ? 
                                                        <div style={{backgroundColor:""}}>
                                                            <p style={{fontWeight:"500", color:"#309c78"}}><FaCheck
                                                                    width="40"
                                                                    height="40"
                                                                    style={{marginTop:"3px", color:"#309c78"}}
                                                                    className="d-inline-block align-top"
                                                                    alt="React Bootstrap logo"
                                                                /> Complete!</p>
                                                        </div>    
                                                        :
                                                        <div>
                                                        {item.vendor_id == "0" ? 
                                                        <div style={{backgroundColor:""}}>
                                                        <p style={{fontWeight:"500", color:"brown"}}><FaInfoCircle
                                                                width="40"
                                                                height="40"
                                                                style={{marginTop:"3px", color:"brown"}}
                                                                className="d-inline-block align-top"
                                                                alt="React Bootstrap logo"
                                                            /> Expert Not Assigned Yet</p>
                                                        </div> 
                                                        :
                                                        <div className="row" onClick={()=>handleRowClick(item.id)} style={{backgroundColor:"", cursor:"pointer"}}>
                                                            <p className="col" style={{fontWeight:"500", color:"grey", marginTop:"8px"}}>Complete?</p>
                                                            <div className="col" style={{padding:"0px",margin:"0px"}}>
                                                            <p style={{fontWeight:"500", color:"white",  margin:"0px", backgroundColor:'#309c78', padding:"5px",paddingRight:"10px", paddingLeft:"10px", borderRadius:"5px"}}> Yes</p>  
                                                            </div>                                                       
                                                        </div>
                                                        }
                                                        </div>
                                                    }
                                                </div>  
                                            </div>
                                        ))}
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>}
                        </div>
                        
                    </div>
                
        </div>
    );
};

export default UserOrder;
