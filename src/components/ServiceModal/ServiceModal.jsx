import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import service1 from "../../icons/service1.png";
import service2 from "../../icons/service2.png";
import service3 from "../../icons/service3.png";
import service4 from "../../icons/service4.png";
import service5 from "../../icons/service5.png";
import service6 from "../../icons/service6.png";
import service7 from "../../icons/service7.png";
import ServiceDetailList1 from "../ServiceDetailList/ServiceDetailList1";
import "./ServiceModal.css";
import pest from "../../icons/pest.png";

const ServiceModal = (props) => {
  const cursorStyle = { cursor: "pointer" };
  const [showList1, setShowList1] = useState(false);
  const [showList1Color, setShowList1Color] = useState("");
  const [showList2, setShowList2] = useState(false);
  const [showList2Color, setShowList2Color] = useState("");
  const [showList3, setShowList3] = useState(false);
  const [showList3Color, setShowList3Color] = useState("");
  const [showList4, setShowList4] = useState(false);
  const [showList4Color, setShowList4Color] = useState("");
  const [showList5, setShowList5] = useState(false);
  const [showList5Color, setShowList5Color] = useState("");
  const [showList6, setShowList6] = useState(false);
  const [showList6Color, setShowList6Color] = useState("");
  const [showList7, setShowList7] = useState(false);
  const [showList7Color, setShowList7Color] = useState("");
  const handleClickService1 = () => {
    setShowList1(true);
    setShowList1Color("#33669A20");
    setShowList2(false);
    setShowList2Color("");
    setShowList3(false);
    setShowList3Color("");
    setShowList4(false);
    setShowList4Color("");
    setShowList5(false);
    setShowList5Color("");
    setShowList6(false);
    setShowList6Color("");
    setShowList7(false);
    setShowList7Color("");
  };
  const handleClickService2 = () => {
    setShowList1(false);
    setShowList1Color("");
    setShowList2(true);
    setShowList2Color("#33669A20");
    setShowList3(false);
    setShowList3Color("");
    setShowList4(false);
    setShowList4Color("");
    setShowList5(false);
    setShowList5Color("");
    setShowList6(false);
    setShowList6Color("");
    setShowList7(false);
    setShowList7Color("");
  };
  const handleClickService3 = () => {
    setShowList1(false);
    setShowList1Color("");
    setShowList2(false);
    setShowList2Color("");
    setShowList3(true);
    setShowList3Color("#33669A20");
    setShowList4(false);
    setShowList4Color("");
    setShowList5(false);
    setShowList5Color("");
    setShowList6(false);
    setShowList6Color("");
    setShowList7(false);
    setShowList7Color("");
  };
  const handleClickService4 = () => {
    setShowList1(false);
    setShowList1Color("");
    setShowList2(false);
    setShowList2Color("");
    setShowList3(false);
    setShowList3Color("");
    setShowList4(true);
    setShowList4Color("#33669A20");
    setShowList5(false);
    setShowList5Color("");
    setShowList6(false);
    setShowList6Color("");
    setShowList7(false);
    setShowList7Color("");
  };
  const handleClickService5 = () => {
    setShowList1(false);
    setShowList1Color("");
    setShowList2(false);
    setShowList2Color("");
    setShowList3(false);
    setShowList3Color("");
    setShowList4(false);
    setShowList4Color("");
    setShowList5(true);
    setShowList5Color("#33669A20");
    setShowList6(false);
    setShowList6Color("");
    setShowList7(false);
    setShowList7Color("");
  };
  const handleClickService6 = () => {
    setShowList1(false);
    setShowList1Color("");
    setShowList2(false);
    setShowList2Color("");
    setShowList3(false);
    setShowList3Color("");
    setShowList4(false);
    setShowList4Color("");
    setShowList5(false);
    setShowList5Color("");
    setShowList6(true);
    setShowList6Color("#33669A20");
    setShowList7(false);
    setShowList7Color("");
  };
  const handleClickService7 = () => {
    setShowList1(false);
    setShowList1Color("");
    setShowList2(false);
    setShowList2Color("");
    setShowList3(false);
    setShowList3Color("");
    setShowList4(false);
    setShowList4Color("");
    setShowList5(false);
    setShowList5Color("");
    setShowList6(false);
    setShowList6Color("");
    setShowList7(true);
    setShowList7Color("#33669A20");
  };
  const [subCategory1, setSubCategory1] = useState([]);
  const [subCategory2, setSubCategory2] = useState([]);
  const [subCategory3, setSubCategory3] = useState([]);
  const [subCategory4, setSubCategory4] = useState([]);
  const [subCategory5, setSubCategory5] = useState([]);
  const [subCategory6, setSubCategory6] = useState([]);
  const [subCategory7, setSubCategory7] = useState([]);

  useEffect(() => {
    fetch(
      "https://backend.amaderservice.com/api/subcatagory?typename=Appliance%20Repair"
    )
      .then((response) => response.json())
      .then((data) => setSubCategory1(data));

    fetch(
      "https://backend.amaderservice.com/api/subcatagory?typename=Painting Renovation"
    )
      .then((response) => response.json())
      .then((data) => setSubCategory2(data));

    fetch(
      "https://backend.amaderservice.com/api/subcatagory?typename=Shifting"
    )
      .then((response) => response.json())
      .then((data) => setSubCategory3(data));

    fetch(
      "https://backend.amaderservice.com/api/subcatagory?typename=Cleaning"
    )
      .then((response) => response.json())
      .then((data) => setSubCategory4(data));

    fetch(
      "https://backend.amaderservice.com/api/subcatagory?typename=Trip and Travel"
    )
      .then((response) => response.json())
      .then((data) => setSubCategory5(data));

      

    fetch(
      "https://backend.amaderservice.com/api/subcatagory?typename=Beauty and Saloon"
    )
      .then((response) => response.json())
      .then((data) => setSubCategory6(data));
    

      fetch(
        "https://backend.amaderservice.com/api/subcatagory?typename=Pest"
      )
        .then((response) => response.json())
        .then((data) => setSubCategory7(data));
  
  }, []);
  const history = useHistory();
  const handleClick = () => {
    history.push("/allservices");
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >       
        <Modal.Body className="show-grid" style={{height:"90%"}}>
          <Container>
            <Row>
              <Col  style={{height:"90%"}}>
                <Row className="d-flex flex-column" style={{height:"90%"}}>
                  <Col
                    onClick={handleClickService1}
                    style={{ background: showList1Color, cursor: "pointer" }}
                    className="d-flex align-items-center "
                  >
                    <img src={service1} width="40" height="40" alt="" />
                    <p style={{marginTop:"15px", paddingLeft:"10px",fontSize:"12px", fontWeight:"bold", color:"#33669A"}}>Appliance Repair</p>
                  </Col>{" "}
                  <br />
                  <Col
                    onClick={handleClickService2}
                    style={{ background: showList2Color, cursor: "pointer" }}
                    className="d-flex align-items-center "
                  >
                    <img src={service2}  width="40" height="40" alt="" />
                    <p style={{marginTop:"15px", paddingLeft:"10px",fontSize:"12px", fontWeight:"bold", color:"#33669A"}}>Painting Renovation</p>
                  </Col>{" "}
                  <br />
                  <Col
                    onClick={handleClickService3}
                    style={{ background: showList3Color, cursor: "pointer" }}
                    className="d-flex align-items-center "
                  >
                    <img src={service3}  width="40" height="40" alt="" />
                    <p style={{marginTop:"15px", paddingLeft:"10px",fontSize:"12px", fontWeight:"bold", color:"#33669A"}}>
                      Shifting</p>
                  </Col>{" "}
                  <br />
                  <Col
                    onClick={handleClickService4}
                    style={{ background: showList4Color, cursor: "pointer" }}
                    className="d-flex align-items-center "
                  >
                    <img src={service4}  width="40" height="40" alt="" style={{cursor: "pointer"}}/>
                    <p style={{marginTop:"15px", paddingLeft:"10px",fontSize:"12px", fontWeight:"bold", color:"#33669A"}}>
                      Cleaning
                    </p>
                  </Col>{" "}
                  <br />
                  <Col
                    onClick={handleClickService5}
                    style={{ background: showList5Color, cursor: "pointer", }}
                    className="d-flex align-items-center "
                  >
                    <img src={service5}  width="40" height="40" alt="" />
                    <p style={{marginTop:"15px", paddingLeft:"10px",fontSize:"12px", fontWeight:"bold", color:"#33669A"}}>Trip and Travel</p>
                  </Col>{" "}
                  <br />
                  <Col
                    onClick={handleClickService6}
                    style={{ background: showList6Color, cursor: "pointer" }}
                    className="d-flex align-items-center "
                  >
                    <img src={service6}  width="40" height="40" alt="" />
                    <p style={{marginTop:"15px", paddingLeft:"10px",fontSize:"12px", fontWeight:"bold", color:"#33669A"}}>Beauty and Salon</p>
                  </Col>{" "}
                  <br />
                  <Col
                    onClick={handleClickService7}
                    style={{ background: showList7Color, cursor: "pointer" }}
                    className="d-flex align-items-center "
                  >
                    <img src={pest}  width="40" height="40" alt="" />
                    <p style={{marginTop:"15px", paddingLeft:"10px",fontSize:"12px", fontWeight:"bold", color:"#33669A"}}>Pest Control</p>
                  </Col>{" "}
                  <br />
                  <Col
                    onClick={handleClick}
                    style={{ background: "", cursor: "pointer" }}
                    className="d-flex align-items-center "
                  >
                    <img src={service7}  width="40" height="40" alt="" />
                    <p style={{marginTop:"15px", paddingLeft:"10px",fontSize:"12px", fontWeight:"bold", color:"#33669A"}}>All Services</p>
                  </Col>{" "}
                  
                  <br />
                </Row>
              </Col>
              <Col className="modal-scroll" style={{height:"90%"}}>
                {showList1 ? (
                  <Col  style={{height:"500px"}}>
                  {subCategory1.map((appliance) => (
                      <ServiceDetailList1
                        appliance={appliance}
                      ></ServiceDetailList1>
                    ))}
                  </Col>
                ) : null}
                {showList2 ? (
                  <Col  style={{height:"500px"}}>
                  {subCategory2.map((appliance) => (
                      <ServiceDetailList1
                        appliance={appliance}
                      ></ServiceDetailList1>
                    ))}
                  </Col>
                ) : null}
                {showList3 ? (
                  <Col  style={{height:"500px"}}>
                  {subCategory3.map((appliance) => (
                      <ServiceDetailList1
                        appliance={appliance}
                      ></ServiceDetailList1>
                    ))}
                  </Col>
                ) : null}
                {showList4 ? (
                  <Col  style={{height:"500px"}}>
                    {subCategory4.map((appliance) => (
                      <ServiceDetailList1
                        appliance={appliance}
                      ></ServiceDetailList1>
                    ))}
                  </Col>
                ) : null}
                {showList5 ? (
                  <Col  style={{height:"500px"}}>
                  {subCategory5.map((appliance) => (
                      <ServiceDetailList1
                        appliance={appliance}
                      ></ServiceDetailList1>
                    ))}
                  </Col>
                ) : null}
                {showList6 ? (
                  <Col  style={{height:"500px"}}>
                  {subCategory6.map((appliance) => (
                      <ServiceDetailList1
                        appliance={appliance}
                      ></ServiceDetailList1>
                    ))}
                  </Col>
                ) : null}
                {showList7 ? (
                  <Col  style={{height:"500px"}}>
                  {subCategory7.map((appliance) => (
                      <ServiceDetailList1
                        appliance={appliance}
                      ></ServiceDetailList1>
                    ))}
                  </Col>
                ) : null}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer style={{margin:"0px", padding:"0px"}} onClick={() => props.setModalShow(false)}>
          <p style={{padding:"5px", color:"#33669a"}}>Close</p>
        </Modal.Footer>

      </Modal>
    </>
  );
};

export default ServiceModal;
