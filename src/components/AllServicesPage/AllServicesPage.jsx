import React, { useEffect, useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./AllServicesPage.css";
import { Link } from "react-router-dom";
// import Footer from "../Footer/Footer";
import NavBarDropDown from "../NavBar/NavBarDropDown";
import { NavbarBrand, Row, Col } from "react-bootstrap";
// import FooterMobile from "../Footer/FooterMobile";
import { useMediaQuery } from 'react-responsive';
import errorImage from "../../images/errorIcon.png";

const AllServicesPage = () => {
  useEffect(() => {
    fetchItem();
  }, []);
  const [item, setItem] = useState();
  const [resHead, setResHead] = useState([]);
  const [resHeadMax, setResHeadMax] = useState([]);
  const [heading, setHeading] = useState("Appliance Repair");


  const fetchItem = async () => {
    const link =
      "https://kentradigital.com/api/allservice";
    const data = await fetch(link);
    const dataJSON = await data.json();
    setItem(dataJSON);
    setResHead(Object.keys(dataJSON));
    setResHeadMax(Object.keys(dataJSON).map((str, index) => ({ value: str, id: index + 1 })));
    console.log(JSON.stringify(resHeadMax));
    
  };
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)'})

  const ScrollHead = resHeadMax.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const handleClick = id =>
  ScrollHead[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

  return (
    <div>

      <NavBar></NavBar>
      
      <div style={{paddingTop:"10px"}}>  
      <div style={{backgroundColor:"#d1d1d150", width:"100%", height:"2px"}}></div>      

      {isDesktopOrLaptop ?
      <div className="row">
        <div className="col-md-3">
          <nav className="section-nav">
          <h1 style={{ color: "#33669A", fontSize: "35px", marginTop: "0px", fontWeight: "bold", textAlign: "left",marginLeft:"45px" }}>
            All Services</h1>
            <ul>
              {resHeadMax.map((item) => (
                <div style={{ paddingBottom: "3px" }}>
                  <li style={{textDecoration:"none"}} key={item.id}>
                    <a onClick={() => handleClick(item.id)} style={{color:"#33669A",textDecoration:"none"}}>{item.value}</a>
                  </li>
                </div>))
              }
            </ul>
          </nav>
        </div>
        
        

        {resHeadMax.length > 0 &&
          <div className="scroll-class col-md-8">

            {resHead.map((res, i) => (
              <section  style={{ paddingBottom: "5px", marginBottom: "0px", marginTop:"30px" }}>

                <h2 ref={ScrollHead[i+1]} style={{ marginBottom: "30px", color: "#33669A", }}>{res}</h2>
                <div className="row">
                  {item[res].slice(0, 3).map((item, i) => (

                    <div className="col-md-4">
                      <Link
                        style={{ textDecoration: "none", color: "#33669A" }}
                        to={`/${item.id}`}
                      >
                        <div key={i} style={{ padding: "5px", width: "250px" }}>
                          <img src={item.bannerImage}  alt=""
                            style={{ borderRadius: "10px", width: "250px", height: "150px", boxShadow: `1px 3px 1px #33669A`, }} />
                          <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px", textAlign: "center", color: "#33669A", }}>{item.service_type_name}</p>

                        </div>
                      </Link>

                    </div>
                  ))
                  }
                  <p style={{ fontSize: "20px", marginTop: "10px", textAlign: "left", color: "#33669A", }}>{item[res].slice(3).length > 0 ? "All Services in " + res : ""}</p>

                  {item[res].slice(3).map((item, i) => (
                    <div className="col-md-4">
                      <Link
                        style={{ textDecoration: "none", color: "33669A" }}
                        to={`/${item.id}`}
                      >
                      <div key={i} style={{ width: "250px", border: `2px solid #33669A`, marginBottom: "20px", borderRadius: "5px", }}>
                        <p style={{ fontSize: "16px", fontWeight: "bold", textAlign: "center", padding: "10px", color: "#33669A", margin: "auto" }}>{item.service_type_name}</p>

                      </div>
                      </Link>
                    </div>
                  ))
                  }
                </div>

              </section>))
            }





          </div>

        }

        </div>
      :
        <div style={{margin:"0px",  padding:"0px"}}>
                    {resHeadMax.length > 0 &&

<Row style={{margin:"0px", padding:"0px"}}>
          <Col xs={3} style={{margin:"0px", padding:"0px", }}>

            {resHead.map((res, i) => (
              <div onClick={() => setHeading(res)} style={{ backgroundColor: res == heading ? "white" : "#d3d3d350", margin:"1px"}}>

                <h2  style={{
                color: "black", textAlign:"center", fontSize:"10px", fontWeight:"600", padding:"10px", margin:"0px", paddingTop:"20px", paddingBottom:"20px",
                marginRight:"0px" }}>{res}</h2>


              </div>))

            }




          </Col>

          

          <Col xs={8} style={{margin:"0px", padding:"0px", marginLeft:"20px", marginRight:"0px"}}>

          {item[heading].map((item, i) => (
                    <div className="col-md-4">
                      <Link
                        style={{ textDecoration: "none", color: "33669A" }}
                        to={`/${item.id}`}
                      >
                      <div key={i} className="row" style={{ alignItems:"center", display:"flex", 
                      borderRadius: "5px",marginRight:"0px" }}>
                      <img src={item.bannerImage} alt="" onError={(e) => { e.target.src = errorImage }} 
                      style={{ borderRadius: "15px", width: "60px", height: "60px", padding:"8px",}} />
                          
                        <p style={{ fontSize: "12px", fontWeight: "600", textAlign: "left", color: "black",width:"70%", padding:"0px", margin:"0px" }}>{item.service_type_name}</p>

                      </div>
                      </Link>
                    </div>
                  ))
                  }




          </Col> <br/> <br/> <br/> <br/> <br/>

        
        </Row> 
}

        </div>
      }

{/* {isDesktopOrLaptop ?
        <Footer></Footer>
        :
        <FooterMobile></FooterMobile>
} */}

      </div>
    </div>
  );
};

export default AllServicesPage;
