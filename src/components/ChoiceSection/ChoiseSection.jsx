import React from "react";
import icon1 from "../../icons/icon1.png";
import icon2 from "../../icons/icon2.png";
import icon3 from "../../icons/icon3.png";
import icon4 from "../../icons/icon4.png";
import maskman from "../../images/maskman3.jpg";
import maskman2 from "../../images/maskman2.jpg";

import "./ChoiseSection.css";

const ChoiseSection = () => {
  return (
    <div>
      <div>
        <h4 className="text-center pt-5" style={{ color:"#33669A"}}>WHY CHOOSE US?</h4>
        <h3
          style={{
            color: "#33669A",
          }}
        >
          Because we care about your safety
        </h3>
      </div>
      <div className="container">
        <div className="row pt-5" style={{marginTop:"0px"}}>
                
          <div className="col-md-6">
            <div className="cotainer">
              <div className="row d-flex justify-content-around" style={{ marginTop:"10px"}}>
                <div className="col-md-6 d-flex align-items-center choice-div " 
                style={{display:"flex", alignItems:"center", backgroundColor:"#ffffff", borderRadius:"10px", padding:"10px"}}>
                  <img
                    style={{ marginRight: "20px", width: "70px", height:"40px" }}
                    src={icon1}
                    alt=""
                  />
                  <p style={{ color: "#33669A", fontSize: "18px", marginTop:"20px"}}>                    
                  Ensuring Mask
                  </p>
                </div>
                <div className="col-md-6 d-flex align-items-center choice-div " 
                style={{display:"flex", alignItems:"center", backgroundColor:"#ffffff", borderRadius:"10px", padding:"10px"}}>
                                   <img
                    style={{ marginRight: "40px", width: "50px", height:"55px" }}
                    src={icon2}
                    alt=""
                  />
                  <p style={{ color: "#33669A", fontSize: "18px", marginTop:"20px"}}>
                    24/7 Support
                  </p>
                </div>
              </div>{" "}
              <br />
              <div className="row d-flex justify-content-around">
              <div className="col-md-6 d-flex align-items-center choice-div " 
                style={{display:"flex", alignItems:"center", backgroundColor:"#ffffff", borderRadius:"10px", padding:"10px"}}>
                                   <img
                    style={{ marginRight: "20px", width: "70px", height:"70px" }}
                    src={icon4}
                    alt=""
                  />
                  <p style={{ color: "#33669A", fontSize: "18px", marginTop:"20px"}}>
                    Ensuring Gloves
                  </p>
                </div>
                <div className="col-md-6 d-flex align-items-center choice-div " 
                style={{display:"flex", alignItems:"center", backgroundColor:"#ffffff", borderRadius:"10px", padding:"10px"}}>
                                   <img
                    style={{ marginRight: "20px", width: "70px", height:"70px" }}
                    src={icon3}
                    alt=""
                  />
                  <p style={{ color: "#33669A", fontSize: "18px", marginTop:"20px"}}>
                    Sanitizing hands and Equipments
                  </p>
                </div>
              </div>
            </div>
          </div>
         
        <div className="col-md-6" style={{alignItems:"center", display:"flex"}}>
        <img
          style={{ height:"250px",margin:"auto", marginTop:"-15px", marginBottom:"30px", 
          boxShadow: `1px 3px 1px #33669A`, borderRadius:"20px" }}
          src={maskman}
          alt=""
        />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ChoiseSection;
