import React from "react";
import icon1 from "../../icons/icon1.png";
import icon2 from "../../icons/icon2.png";
import icon3 from "../../icons/icon3.png";
import icon4 from "../../icons/icon4.png";
import maskman from "../../images/maskman3.jpg";
import maskman2 from "../../images/maskman2.jpg";

import "./ChoiseSection.css";

const ChoiseSectionMobile = () => {
  return (
    <div>
      <div>
        <h4 className="text-center pt-5" style={{ color: "#33669A", marginTop:"-20px" }}>WHY CHOOSE US?</h4>
        <h3
          style={{
            color: "#33669A",
          }}
        >
          Because we care about your safety
        </h3>
      </div>
      <div className="container" style={{ backgroundColor: "#d1d1d160", padding:"10px", borderRadius:"10px" }}>

      <div className="row" style={{margin:"0px"}}>
        <div className="col" style={{ height: "100px", backgroundColor: "#ffffff", borderRadius: "10px", marginRight:"5px", marginBottom:"10px"  }}>

          <div className="row"
            style={{ display: "flex", alignItems: "center", justifyContent: 'flex-start', padding: "10px", marginTop:"10px" }}>
            <img
              style={{ marginRight: "00px", width: "70px", height: "35px" }}
              src={icon1}
              alt=""
            />
            <p style={{ color: "#33669A", fontSize: "12px", width: "50px", marginTop:"15px" }}>
            Ensuring Mask
              </p>
          </div>

          </div>

          <div className="col" style={{ height: "100px", backgroundColor: "#ffffff", borderRadius: "10px",marginLeft:"5px", marginBottom:"10px" }}>

            <div className="row"
              style={{ display: "flex", alignItems: "center", justifyContent: 'flex-start', padding: "10px", marginTop:"10px" }}>
              <img
                style={{ marginRight: "00px", width: "60px", height: "40px" }}
                src={icon2}
                alt=""
              />
              <p style={{ color: "#33669A", fontSize: "12px", width: "50px", marginTop:"15px" }}>
              24/7 Support
                </p>
            </div>

          </div>

        </div>

        <div className="row" style={{margin:"0px"}}>
        <div className="col" style={{ height: "100px", backgroundColor: "#ffffff", borderRadius: "10px", marginRight:"5px", marginBottom:"10px"  }}>

          <div className="row"
            style={{ display: "flex", alignItems: "center", justifyContent: 'flex-start', padding: "10px", marginTop:"5px", marginLeft:"0px" }}>
            <img
              style={{ marginRight: "00px", width: "55px", height: "35px" }}
              src={icon4}
              alt=""
            />
            <p style={{ color: "#33669A", fontSize: "12px", width: "50px" , marginTop:"20px",  }}>
            Ensuring Gloves
              </p>
          </div>

          </div>

          <div className="col" style={{ height: "100px", backgroundColor: "#ffffff", borderRadius: "10px",marginLeft:"5px", marginBottom:"10px" }}>

            <div className="row"
              style={{ display: "flex", alignItems: "center", justifyContent: 'flex-start', padding: "10px" }}>
              <img
                style={{ marginRight: "00px", width: "60px", height: "40px" }}
                src={icon3}
                alt=""
              />
              <p style={{ color: "#33669A", fontSize: "12px", width: "50px" }}>
                Sanitizing hands and Equipments
                </p>
            </div>

          </div>

        </div>

        <div className="row">
          <div className="col" style={{ backgroundColor: "", margin: "00px" }}>
            <img
              style={{
                margin: "auto", width: "inherit",
                borderRadius: "10px"
              }}

              src={maskman}
              alt=""
            />
          </div>

        </div>


      </div>
    </div>
  );
};

export default ChoiseSectionMobile;
