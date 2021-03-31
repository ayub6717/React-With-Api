import React, { useState } from "react";
import "./Services.css";
import service1 from "../../icons/service1.png";
import service2 from "../../icons/service2.png";
import service3 from "../../icons/service3.png";
import service4 from "../../icons/service4.png";
import service5 from "../../icons/service5.png";
import service6 from "../../icons/service6.png";
import service7 from "../../icons/service7.png";
import ac from "../../icons/ac.png";
import cleaning from "../../icons/cleaning.png";
import electric from "../../icons/electric.png";
import plumbing from "../../icons/plumbing.png";
import bookatrip from "../../icons/bookatrip.png";

import pest from "../../icons/pest.png";

import ServiceModal from "../ServiceModal/ServiceModal";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import { Col, Row, Button } from "react-bootstrap";

const Services = () => {
  /*react responsive starts here*/

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  });
  const screenWidth = window.innerWidth;
  const gridDimension = screenWidth/4;
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  /*react responsive ends here*/
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    history.push("/allservices");
  };
  return (
    <div className="container main-container">
      <ServiceModal
        show={modalShow}
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
      />
      {isDesktopOrLaptop &&
        <div className="desktopServices">
        <div className="row" style={{paddingRight:"50px", paddingLeft:"50px", paddingBottom:"10px", paddingTop:"30px"}}>
          
          <div onClick={() => history.push("/1")} className="col" style={{boxShadow: `2px 2px 2px #d0d0d0`, cursor:"pointer", borderRadius:"30px", display:"flex",margin:"10px", alignItems:"center", justifyContent:"center"}}>
            <div className="row" style={{ display:"flex", alignItems:"center", justifyContent:"center", }}>
              <img src={ac} alt="" style={{width:"60px", height:"60px", margin:"10px", padding:"0px"}} />
              <p style={{ cursor: "pointer", color:"#000000", fontSize:"14px", fontWeight:"bold", textAlign:"center", marginTop:"-10px" }}>AC Repair</p>
            </div>
          </div>
          <div onClick={() => setModalShow(true)} className="col" style={{boxShadow: `2px 2px 2px #d0d0d0`, cursor:"pointer", borderRadius:"30px", display:"flex",margin:"10px", alignItems:"center", justifyContent:"center"}}>
            <div className="row" style={{ display:"flex", alignItems:"center", justifyContent:"center", }}>
              <img src={service2} alt="" style={{width:"60px", height:"60px", margin:"10px", padding:"0px"}} />
              <p style={{ cursor: "pointer", color:"#000000", fontSize:"14px", fontWeight:"bold", textAlign:"center", marginTop:"-10px" }}>Appliance Repair</p>
            </div>
          </div>
          <div onClick={() => setModalShow(true)} className="col" style={{boxShadow: `2px 2px 2px #d0d0d0`, cursor:"pointer", borderRadius:"30px", display:"flex",margin:"10px", alignItems:"center", justifyContent:"center"}}>
            <div className="row" style={{ display:"flex", alignItems:"center", justifyContent:"center", }}>
              <img src={service6} alt="" style={{width:"60px", height:"60px", margin:"10px", padding:"0px"}} />
              <p style={{ cursor: "pointer", color:"#000000", fontSize:"14px", fontWeight:"bold", textAlign:"center", marginTop:"-10px" }}>Beauty {'&'} Salon</p>
            </div>
          </div>
          <div onClick={() => setModalShow(true)} className="col" style={{boxShadow: `2px 2px 2px #d0d0d0`, cursor:"pointer", borderRadius:"30px", display:"flex",margin:"10px", alignItems:"center", justifyContent:"center"}}>
            <div className="row" style={{ display:"flex", alignItems:"center", justifyContent:"center", }}>
              <img src={cleaning} alt="" style={{width:"60px", height:"60px", margin:"10px", padding:"0px"}} />
              <p style={{ cursor: "pointer", color:"#000000", fontSize:"14px", fontWeight:"bold", textAlign:"center", marginTop:"-10px" }}>Cleaning</p>
            </div>
          </div>
          <div onClick={() => history.push("/71")} className="col" style={{boxShadow: `2px 2px 2px #d0d0d0`, cursor:"pointer", borderRadius:"30px", display:"flex",margin:"10px", alignItems:"center", justifyContent:"center"}}>
            <div className="row" style={{ display:"flex", alignItems:"center", justifyContent:"center", }}>
              <img src={electric} alt="" style={{width:"60px", height:"60px", margin:"10px", padding:"0px"}} />
              <p style={{ cursor: "pointer", color:"#000000", fontSize:"14px", fontWeight:"bold", textAlign:"center", marginTop:"-10px" }}>Electrical</p>
            </div>
          </div>
        </div>
        <div className="row" style={{paddingRight:"50px", paddingLeft:"50px", paddingTop:"10px", paddingBottom:"30px"}}>
          
          <div onClick={() => setModalShow(true)} className="col" style={{boxShadow: `2px 2px 2px #d0d0d0`, cursor:"pointer", borderRadius:"30px", display:"flex",margin:"10px", alignItems:"center", justifyContent:"center"}}>
            <div className="row" style={{ display:"flex", alignItems:"center", justifyContent:"center", }}>
              <img src={service3} alt="" style={{width:"60px", height:"60px", margin:"10px", padding:"0px"}} />
              <p style={{ cursor: "pointer", color:"#000000", fontSize:"14px", fontWeight:"bold", textAlign:"center", marginTop:"-10px" }}>Shifting</p>
            </div>
          </div>
          <div onClick={() => history.push("/64")} className="col" style={{boxShadow: `2px 2px 2px #d0d0d0`, cursor:"pointer", borderRadius:"30px", display:"flex",margin:"10px", alignItems:"center", justifyContent:"center"}}>
            <div className="row" style={{ display:"flex", alignItems:"center", justifyContent:"center", }}>
              <img src={plumbing} alt="" style={{width:"60px", height:"60px", margin:"10px", padding:"0px"}} />
              <p style={{ cursor: "pointer", color:"#000000", fontSize:"14px", fontWeight:"bold", textAlign:"center", marginTop:"-10px" }}>Plumbing {"&"} Sanitary</p>
            </div>
          </div>
          <div onClick={() => setModalShow(true)} className="col" style={{boxShadow: `2px 2px 2px #d0d0d0`, cursor:"pointer", borderRadius:"30px", display:"flex",margin:"10px", alignItems:"center", justifyContent:"center"}}>
            <div className="row" style={{ display:"flex", alignItems:"center", justifyContent:"center", }}>
              <img src={service1} alt="" style={{width:"60px", height:"60px", margin:"10px", padding:"0px"}} />
              <p style={{ cursor: "pointer", color:"#000000", fontSize:"14px", fontWeight:"bold", textAlign:"center", marginTop:"-10px" }}>Painting {"&"} Renovation</p>
            </div>
          </div>
          <div onClick={() => setModalShow(true)} className="col" style={{boxShadow: `2px 2px 2px #d0d0d0`, cursor:"pointer", borderRadius:"30px", display:"flex",margin:"10px", alignItems:"center", justifyContent:"center"}}>
            <div className="row" style={{ display:"flex", alignItems:"center", justifyContent:"center", }}>
              <img src={pest} alt="" style={{width:"60px", height:"60px", margin:"10px", padding:"0px"}} />
              <p style={{ cursor: "pointer", color:"#000000", fontSize:"14px", fontWeight:"bold", textAlign:"center", marginTop:"-10px" }}>Pest Control</p>
            </div>
          </div>
          <div onClick={() => history.push("/allservices")} className="col" style={{boxShadow: `2px 2px 2px #d0d0d0`, cursor:"pointer", borderRadius:"30px", display:"flex",margin:"10px", alignItems:"center", justifyContent:"center"}}>
            <div className="row" style={{ display:"flex", alignItems:"center", justifyContent:"center", }}>
              <img src={service7} alt="" style={{width:"60px", height:"60px", margin:"10px", padding:"0px"}} />
              <p style={{ cursor: "pointer", color:"#000000", fontSize:"14px", fontWeight:"bold", textAlign:"center", marginTop:"-10px" }}>Others</p>
            </div>
          </div>
        </div>
      </div>

      }
      {isTabletOrMobile &&
      <div style={{backgroundColor:"", margin:"-24px", marginTop:"00px"}}>
        <Row>
          
            <div onClick={() => history.push("/1")}
              style={{
                borderRadius: "5px", backgroundColor: '#ffffff', flexDirection:"column", height:gridDimension, 
                width:gridDimension, border:"1px solid #33669A50",display:"flex", alignItems:"center", 
                justifyContent:"center", paddingTop:"20px"
              }}>
                <img src={ac} alt="" width="20" height="20" />
                <p style={{ color: "black", cursor: "pointer", fontSize: "10px", 
                textAlign: "center", fontWeight:"700"  }}>AC Repair</p>
            </div>

            <div onClick={() => setModalShow(true)}
              style={{
                borderRadius: "5px", backgroundColor: '#ffffff', flexDirection:"column", height:gridDimension, 
                width:gridDimension, border:"1px solid #33669A50",display:"flex", alignItems:"center", 
                justifyContent:"center", paddingTop:"20px"
              }}>
                <img src={service2} alt="" width="20" height="20" />
                <p style={{ color: "black", cursor: "pointer", fontSize: "10px", 
                textAlign: "center", fontWeight:"700"  }}>Appliance Repair</p>
            </div>

            <div onClick={() => setModalShow(true)}
              style={{
                borderRadius: "5px", backgroundColor: '#ffffff', flexDirection:"column", height:gridDimension, 
                width:gridDimension, border:"1px solid #33669A50",display:"flex", alignItems:"center", 
                justifyContent:"center", paddingTop:"20px"
              }}>
                <img src={service6} alt="" width="20" height="20" />
                <p style={{ color: "black", cursor: "pointer", fontSize: "10px", 
                textAlign: "center", fontWeight:"700"  }}>Beauty {"&"} Salon</p>
            </div>

            <div onClick={() => setModalShow(true)}
              style={{
                borderRadius: "5px", backgroundColor: '#ffffff', flexDirection:"column", height:gridDimension, 
                width:gridDimension, border:"1px solid #33669A50",display:"flex", alignItems:"center", 
                justifyContent:"center", paddingTop:"20px"
              }}>
                <img src={cleaning} alt="" width="20" height="20" />
                <p style={{ color: "black", cursor: "pointer", fontSize: "10px", 
                textAlign: "center", fontWeight:"700"  }}>Cleaning</p>
            </div>           
          
        </Row>
        
        <Row>
          
            <div onClick={() => history.push("/71")}
              style={{
                borderRadius: "5px", backgroundColor: '#ffffff', flexDirection:"column", height:gridDimension, 
                width:gridDimension, border:"1px solid #33669A50",display:"flex", alignItems:"center", 
                justifyContent:"center", paddingTop:"20px"
              }}>
                <img src={electric} alt="" width="20" height="20" />
                <p style={{ color: "black", cursor: "pointer", fontSize: "10px", 
                textAlign: "center", fontWeight:"700"  }}>Electrical</p>
            </div>

            <div onClick={() => setModalShow(true)}
              style={{
                borderRadius: "5px", backgroundColor: '#ffffff', flexDirection:"column", height:gridDimension, 
                width:gridDimension, border:"1px solid #33669A50",display:"flex", alignItems:"center", 
                justifyContent:"center", paddingTop:"20px"
              }}>
                <img src={service3} alt="" width="20" height="20" />
                <p style={{ color: "black", cursor: "pointer", fontSize: "10px", 
                textAlign: "center", fontWeight:"700"  }}>Shifting</p>
            </div>

            <div onClick={() => history.push("/64")}
              style={{
                borderRadius: "5px", backgroundColor: '#ffffff', flexDirection:"column", height:gridDimension, 
                width:gridDimension, border:"1px solid #33669A50",display:"flex", alignItems:"center", 
                justifyContent:"center", paddingTop:"20px"
              }}>
                <img src={plumbing} alt="" width="20" height="20" />
                <p style={{ color: "black", cursor: "pointer", fontSize: "10px", 
                textAlign: "center", fontWeight:"700"  }}>Plumbing {"&"} Sanitary</p>
            </div>

            <div onClick={() => setModalShow(true)}
              style={{
                borderRadius: "5px", backgroundColor: '#ffffff', flexDirection:"column", height:gridDimension, 
                width:gridDimension, border:"1px solid #33669A50",display:"flex", alignItems:"center", 
                justifyContent:"center", paddingTop:"20px"
              }}>
                <img src={service1} alt="" width="20" height="20" />
                <p style={{ color: "black", cursor: "pointer", fontSize: "10px", 
                textAlign: "center", fontWeight:"700"  }}>Painting {"&"} Renovation</p>
            </div>          
          
          
        </Row>
        
        <Row>
          
            <div onClick={() => setModalShow(true)}
              style={{
                borderRadius: "5px", backgroundColor: '#ffffff', flexDirection:"column", height:gridDimension, 
                width:gridDimension, border:"1px solid #33669A50",display:"flex", alignItems:"center", 
                justifyContent:"center", paddingTop:"20px"
              }}>
                <img src={pest} alt="" width="20" height="20" />
                <p style={{ color: "black", cursor: "pointer", fontSize: "10px", 
                textAlign: "center", fontWeight:"700"  }}>Pest Control</p>
            </div>

            <div onClick={() => history.push("/13")}
              style={{
                borderRadius: "5px", backgroundColor: '#ffffff', flexDirection:"column", height:gridDimension, 
                width:gridDimension, border:"1px solid #33669A50",display:"flex", alignItems:"center", 
                justifyContent:"center", paddingTop:"20px"
              }}>
                <img src={bookatrip} alt="" width="20" height="20" />
                <p style={{ color: "black", cursor: "pointer", fontSize: "10px", 
                textAlign: "center", fontWeight:"700"  }}>Book a Trip</p>
            </div>

            <div onClick={() => setModalShow(true)}
              style={{
                borderRadius: "5px", backgroundColor: '#ffffff', flexDirection:"column", height:gridDimension, 
                width:gridDimension, border:"1px solid #33669A50",display:"flex", alignItems:"center", 
                justifyContent:"center", paddingTop:"20px"
              }}>
                <img src={service5} alt="" width="20" height="20" />
                <p style={{ color: "black", cursor: "pointer", fontSize: "10px", 
                textAlign: "center", fontWeight:"700"  }}>Trip {"&"} Travel</p>
            </div>

            <div onClick={() => history.push("/allservices")}
              style={{
                borderRadius: "5px", backgroundColor: '#ffffff', flexDirection:"column", height:gridDimension, 
                width:gridDimension, border:"1px solid #33669A50",display:"flex", alignItems:"center", 
                justifyContent:"center", paddingTop:"20px"
              }}>
                <img src={service7} alt="" width="20" height="20" />
                <p style={{ color: "black", cursor: "pointer", fontSize: "10px", 
                textAlign: "center", fontWeight:"700"  }}>Others</p>
            </div>

            
          
        </Row>
        
        </div>
      }


    </div>
  );
};

export default Services;
