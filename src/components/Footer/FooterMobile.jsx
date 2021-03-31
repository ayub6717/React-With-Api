import React from "react";
import play from "./play-store.png";
import appstore from "./app-store.png";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { MdBatteryChargingFull } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer style={{ background: "", width: "100%", color: "white", marginTop: "100px", }}>
        <div className="container">
          <div className="row" style={{ marginBottom:"20px" }}>

            <div className="col" style={{ backgroundColor: "", height: "200px" }}>
              <p style={{ fontSize: "12px", fontWeight: "bold", color: "black" }}>CONTACT</p>
              <p style={{ fontSize: "12px", color: "black" }}>01404005022</p>
              <p style={{ fontSize: "12px", color: "black" }}>01404005023</p>
              <p style={{ fontSize: "12px", color: "black" }}>info@amaderservice.com</p>


              <p style={{ fontSize: "12px", color: "black" }}>House No: 18, Road No: 7, Ranavola, Uttara, 1230 Dhaka, Dhaka Division, Bangladesh</p>
            </div>

            <div className="col" style={{ backgroundColor: "", height: "200px", paddingLeft:"40px"}}>
              <p style={{ fontSize: "12px", fontWeight: "bold", color: "black" }}>OTHER PAGES</p>
              <p style={{ fontSize: "12px", color: "black" }}>Blog</p>
              <p style={{ fontSize: "12px", color: "black" }}>Privacy Policy</p>
              <p style={{ fontSize: "12px", color: "black" }}>Sitemap</p>
              <p style={{ fontSize: "12px", color: "black" }}>Terms of use</p>
            </div>

            {/*<div className="col-md-6" style={{ backgroundColor: "", height: "200px" }}>
              <p style={{ fontSize: "12px", fontWeight: "bold", color: "black", textAlign: "right" }}>DOWNLOAD OUR MOBILE APP</p>
              <p style={{ fontSize: "12px", color: "black", textAlign: "right", paddingLeft:"120px" }}>Tackle your to-do list wherever you are with our mobile app and make your life easy.</p>
              <div className="row" style={{ paddingTop: "0", paddingBottom: "0", display:"flex", justifyContent:'flex-end', }}>

                <div className="col-md-6" style={{}}>
                  <img src={play} alt="" style={{height:"60px", margin:"20px", marginLeft:"220px"}} />

                </div>

                <div className="col-md-6" style={{}}>
                  <img src={appstore} alt="" style={{height:"60px", margin:"20px",  marginLeft:"110px"}} />

                </div>
              </div>
  */}

              <div className="row" style={{ paddingTop: "20px", paddingBottom: "0", display:"flex", justifyContent:'center', backgroundColor:"" }}>
              <div className="col" style={{ marginLeft:"0px"}}></div>
                <div className="col" style={{ marginLeft:"0px"}}></div>
                <div className="col" style={{ marginLeft:"0px"}}></div>
                <div className="col" style={{ marginLeft:"000px"}}>
                <a
                        style={{ textDecoration: "none", }}
                        href={"https://www.facebook.com/amaderservicelimited"}
                      >
                  <FaFacebook href="https://www.facebook.com/amaderservicelimited" size= {30}  style={{color:"#33669A"}} />
                </a>
                </div>

                <div className="col" style={{ marginLeft:"0px"}}>
                <a
                        style={{ textDecoration: "none", }}
                        href={"https://www.instagram.com/amaderservice"}
                      >
                  <FaInstagram href="https://www.instagram.com/amaderservice" size= {30}  style={{color:"#33669A"}} />
                </a>

                </div>

                <div className="col" style={{ marginLeft:"0px", }}>
                <FaLinkedinIn alt="" size= {30} style={{ color:"grey"}} />

                </div>
               

              </div>

            </div>

          </div>
        <footer
          style={{
            background: "#33669A",
            color: "white",
            padding: "20px 0 20px 0 ",
            marginRight: "10px",
            marginLeft: "10px"
          }}
          className="text-center"
        >
          Copyright © 2020. All Rights Reserved
        </footer>
      </footer>
    </div>
  );
};

export default Footer;
