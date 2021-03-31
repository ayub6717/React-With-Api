import React from "react";
import "./ServiceDetailList1.css";
import { Link } from "react-router-dom";
import errorImage from "../../images/errorIcon.png";
import { useMediaQuery } from 'react-responsive';

const ServiceDetailList1 = (props) => {
  /*react responsive starts here*/
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  /*react responsive ends here*/

  const { id, service_type_name, service_type_icon } = props.appliance;
  return (
    <div>
      <div className="serviceDetailList">
        {isDesktopOrLaptop ?
          <Link
            style={{ textDecoration: "none", color: "33669A" }}
            to={`/${id}`}
          >
            <div className="row">
              <div className="col-md-3" style={{ backgroundColor: "" }}>
                <img src={service_type_icon} alt="" style={{ width: "60px", height: "60px", padding:"5px" }}
                  onError={(e) => {
                    e.target.src = errorImage
                  }} />
              </div>



              <div className="col-md-9" style={{ backgroundColor: "", marginTop: "20px" }}>
              <p style={{color:"#33669A",}}>
                {service_type_name}
                </p>
              </div>

            </div>
            <div>

            </div>
          </Link>
          :
          <Link
            style={{ textDecoration: "none", color: "33669A" }}
            to={`/${id}`}
          >
            <div style={{ justifyContent: "center", backgroundColor: "#33669A20", 
            marginTop: "0px", marginBottom: "10px", padding: "10px", borderRadius: "10px", }}>


            <p style={{marginTop:"15px", paddingLeft:"10px",fontSize:"12px", fontWeight:"600", color:"#33669A"}}>
                {service_type_name}
                </p>

                
            </div>


            <div>

            </div>
          </Link>
        }

      </div>
    </div>
  );
};

export default ServiceDetailList1;
