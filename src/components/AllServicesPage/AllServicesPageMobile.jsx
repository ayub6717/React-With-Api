import React, { useEffect, useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./AllServicesPage.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBarDropDown from "../NavBar/NavBarDropDown";
import { NavbarBrand, Row, Col } from "react-bootstrap";
import FooterMobile from "../Footer/FooterMobile";
import { useMediaQuery } from 'react-responsive';
const AllServicesPage = () => {
  useEffect(() => {
    fetchItem();
  }, []);
  const [item, setItem] = useState();
  const [resHead, setResHead] = useState([]);
  const [resHeadMax, setResHeadMax] = useState([]);

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
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })

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
      <NavBarMobile></NavBarMobile>

      {resHeadMax.length > 0 &&
      <Row>

        <Col xs={3} style={{ margin: "0px", padding: "0px", }}>

          {resHead.map((res, i) => (
            <div style={{ height: "60px", backgroundColor: "red", marginBottom: "5px" }}>

              <h2 style={{
                color: "white", textAlign: "center", fontSize: "12px", width: "100%", margin: "0px",
                marginRight: "0px"
              }}>{res}</h2>


            </div>))

          }
        </Col>
      

        <Col xs={8} style={{ margin: "0px", padding: "0px" }}>

          {resHead.map((res, i) => (
            <section style={{ padding: "0px", paddingLeft: "00px", marginBottom: "0px", marginTop: "30px", backgroundColor: "red" }}>

              <h2 ref={ScrollHead[i + 1]} style={{
                marginBottom: "20px", backgroundColor: "#33669a",
                paddingTop: "10px", paddingBottom: "10px", color: "white", textAlign: "center", fontSize: "22px",
                marginRight: "0px"
              }}>{res}</h2>


            </section>))

          }




        </Col>
        </Row>


      }

      

<FooterMobile></FooterMobile>


    </div >
  );
};

export default AllServicesPage;
