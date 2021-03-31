import React, { useEffect, useState } from "react";
import './FindCategory.css'
import { Modal, Tab, Row, Col, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";



function FindCategory() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showA, setShowA] = useState(false);
    const handleCloseA = () => setShowA(false);
    const handleShowA = () => setShowA(true);

    const [showB, setShowB] = useState(false);
    const handleCloseB = () => setShowB(false);
    const handleShowB = () => setShowB(true);

    const [showC, setShowC] = useState(false);
    const handleCloseC = () => setShowC(false);
    const handleShowC = () => setShowC(true);

    const [showD, setShowD] = useState(false);
    const handleCloseD = () => setShowD(false);
    const handleShowD = () => setShowD(true);

    const [showE, setShowE] = useState(false);
    const handleCloseE = () => setShowE(false);
    const handleShowE = () => setShowE(true);

    useEffect(() => {
        fetchItem();
        fetchItemB();
        fetchItemC();
        fetchItemE();
        fetchItemF();
        fetchItemG();
        fetchItemH();
        fetchItemI();




    }, []);

    const [item, setItem] = useState([]);
    const [itemB, setItemB] = useState([]);
    const [itemC, setItemC] = useState([]);
    const [itemE, setItemE] = useState([]);
    const [itemF, setItemF] = useState([]);
    const [itemG, setItemG] = useState([]);
    const [itemH, setItemH] = useState([]);
    const [itemI, setItemI] = useState([]);



    const fetchItem = async () => {
        const link = "https://kentradigital.com/api/subcatagory?typename=Appliance%20Repair";
        const data = await fetch(link);
        const item = await data.json();
        setItem(item);
    };



    const fetchItemB = async () => {
        const link = "https://kentradigital.com/api/subcatagory?typename=Beauty%20and%20Saloon";
        const data = await fetch(link);
        const itemB = await data.json();
        setItemB(itemB);
    };


    const fetchItemC = async () => {
        const link = "https://kentradigital.com/api/subcatagory?typename=Cleaning";
        const data = await fetch(link);
        const itemC = await data.json();
        setItemC(itemC);
    };


    const fetchItemE = async () => {
        const link = "https://kentradigital.com/api/subcatagory?typename=Shifting";
        const data = await fetch(link);
        const itemE = await data.json();
        setItemE(itemE);
    };


    const fetchItemF = async () => {
        const link = "https://kentradigital.com/api/subcatagory?typename=Trip%20and%20Travel";
        const data = await fetch(link);
        const itemF = await data.json();
        setItemF(itemF);
    };

    const fetchItemG = async () => {
        const link = "https://kentradigital.com/api/subcatagory?typename=Painting%20Renovation";
        const data = await fetch(link);
        const itemG = await data.json();
        setItemG(itemG);
    };


    const fetchItemH = async () => {
        const link = "https://kentradigital.com/api/subcatagory?typename=Pest";
        const data = await fetch(link);
        const itemH = await data.json();
        setItemH(itemH);
    };

    const fetchItemI = async () => {
        const link = "https://kentradigital.com/api/gethome";
        const data = await fetch(link);
        const itemI = await data.json();
        setItemI(itemI);
    };


    const history = useHistory();
    const handleClick = () => {
        history.push("/allservices");
    };


    return (
        <div className="MoveTop">
            {/* =======================Modal Start=========================== */}
            <>
                <Modal size="lg" show={show} onHide={handleClose} animation={true} >
                    <Modal.Header closeButton>
                        <Modal.Title>Select Your Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="second">
                            <Row>
                                <Col sm={5} className="Bg-a">
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>

                                            <Nav.Link eventKey="second">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/AppliencRepair.png" alt="AcCategory.png" /></span> <span className="cate-name text-lock" > <b>Appliance Repair</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="third">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/BeautySalon mainCategory.png" alt="BeautySalon mainCategory.png" /></span> <span className="cate-name text-lock" > <b>Beauty & Salon</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="fourth">
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/cleaning.png" alt="cleaning.png" /></span> <span className="cate-name" > <b>Cleaning</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="five">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/Electrical.png" alt="Electrical.png" /></span> <span className="cate-name text-lock" > <b>Trip And travel</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="six">
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/Shifting.png" alt="Shipting.png" /></span> <span className="cate-name" > <b>Shifting</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="eight">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/Painting& Renovation.png" alt="Painting& Renovation.png" /></span> <span className="cate-name text-lock" > <b>Painting & Renovation</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="nine">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/PestControl.png" alt="PestControl.png" /></span> <span className="cate-name text-lock" > <b>Pest Control</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="ten" onClick={handleClick}>
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/Others.png" alt="Others.png" /></span> <span className="cate-name" > <b>All Services</b> </span>
                                            </Nav.Link>

                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={7} className="Bg-b">


                                    {/* ************For Appliance Api https://kentradigital.com/api/subcatagory?typename=Appliance%20Repair********** */}
                                    {item.map((item) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="second" key={item.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={item.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={item.service_type_icon} /> <span className="cate-name"> <b>{item.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}

                                    {/* ************For Appliance Api End********** */}


                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemB.map((itemB) => (
                                        <Tab.Content >
                                            <Tab.Pane eventKey="third" key={itemB.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemB.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemB.service_type_icon} /> <span className="cate-name"> <b>{itemB.service_type_name}</b> </span> </span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                    {/* ************For Cleaning Api https://kentradigital.com/api/subcatagory?typename=Cleaning */}
                                    {itemC.map((itemC) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="fourth" key={itemC.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemC.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemC.service_type_icon} /> <span className="cate-name"> <b>{itemC.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}


                                    {/* ************or Cleaning Api Api End**********





                                    {/* ************For Cleanning https://kentradigital.com/api/subcatagory?typename=Shifting********** */}

                                    {itemE.map((itemE) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="six" key={itemE.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemE.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemE.service_type_icon} /> <span className="cate-name"> <b>{itemE.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}

                                    {/* ************For Pest Control Api End********** */}





                                    {/* ************For Trip And Travel Api https://kentradigital.com/api/subcatagory?typename=Trip%20and%20Travel********** */}

                                    {itemF.map((itemF) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="five" key={itemF.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemF.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemF.service_type_icon} /> <span className="cate-name"> <b>{itemF.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemG.map((itemG) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="eight" key={itemG.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemG.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemG.service_type_icon} /> <span className="cate-name"> <b>{itemG.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}






                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemH.map((itemH) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="nine" key={itemH.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemH.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemH.service_type_icon} /> <span className="cate-name"> <b>{itemH.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                </Col>
                            </Row>
                        </Tab.Container>
                    </Modal.Body>
                </Modal>

                {/* BeautySalon */}
                <Modal size="lg" show={showA} onHide={handleCloseA} animation={true} >
                    <Modal.Header closeButton>
                        <Modal.Title>Select Your Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="third">
                            <Row>
                                <Col sm={5} className="Bg-a">
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>

                                            <Nav.Link eventKey="second">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/AppliencRepair.png" alt="AcCategory.png" /></span> <span className="cate-name text-lock" > <b>Appliance Repair</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="third">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/BeautySalon mainCategory.png" alt="BeautySalon mainCategory.png" /></span> <span className="cate-name text-lock" > <b>Beauty & Salon</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="fourth">
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/cleaning.png" alt="cleaning.png" /></span> <span className="cate-name" > <b>Cleaning</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="five">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/Electrical.png" alt="Electrical.png" /></span> <span className="cate-name text-lock" > <b>Trip And travel</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="six">
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/Shifting.png" alt="Shipting.png" /></span> <span className="cate-name" > <b>Shifting</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="eight">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/Painting& Renovation.png" alt="Painting& Renovation.png" /></span> <span className="cate-name text-lock" > <b>Painting & Renovation</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="nine">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/PestControl.png" alt="PestControl.png" /></span> <span className="cate-name text-lock" > <b>Pest Control</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="ten" onClick={handleClick}>
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/Others.png" alt="Others.png" /></span> <span className="cate-name" > <b>All Services</b> </span>
                                            </Nav.Link>

                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={7} className="Bg-b">


                                    {/* ************For Appliance Api https://kentradigital.com/api/subcatagory?typename=Appliance%20Repair********** */}
                                    {item.map((item) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="second" key={item.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={item.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={item.service_type_icon} /> <span className="cate-name"> <b>{item.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}

                                    {/* ************For Appliance Api End********** */}


                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemB.map((itemB) => (
                                        <Tab.Content >
                                            <Tab.Pane eventKey="third" key={itemB.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemB.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemB.service_type_icon} /> <span className="cate-name"> <b>{itemB.service_type_name}</b> </span> </span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                    {/* ************For Cleaning Api https://kentradigital.com/api/subcatagory?typename=Cleaning */}
                                    {itemC.map((itemC) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="fourth" key={itemC.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemC.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemC.service_type_icon} /> <span className="cate-name"> <b>{itemC.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}


                                    {/* ************or Cleaning Api Api End**********





                                    {/* ************For Cleanning https://kentradigital.com/api/subcatagory?typename=Shifting********** */}

                                    {itemE.map((itemE) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="six" key={itemE.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemE.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemE.service_type_icon} /> <span className="cate-name"> <b>{itemE.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}

                                    {/* ************For Pest Control Api End********** */}





                                    {/* ************For Trip And Travel Api https://kentradigital.com/api/subcatagory?typename=Trip%20and%20Travel********** */}

                                    {itemF.map((itemF) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="five" key={itemF.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemF.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemF.service_type_icon} /> <span className="cate-name"> <b>{itemF.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemG.map((itemG) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="eight" key={itemG.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemG.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemG.service_type_icon} /> <span className="cate-name"> <b>{itemG.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}






                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemH.map((itemH) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="nine" key={itemH.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemH.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemH.service_type_icon} /> <span className="cate-name"> <b>{itemH.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                </Col>
                            </Row>
                        </Tab.Container>
                    </Modal.Body>
                </Modal>


                {/* Cleanning */}
                <Modal size="lg" show={showB} onHide={handleCloseB} animation={true} >
                    <Modal.Header closeButton>
                        <Modal.Title>Select Your Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="fourth">
                            <Row>
                                <Col sm={5} className="Bg-a">
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>

                                            <Nav.Link eventKey="second">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/AppliencRepair.png" alt="AcCategory.png" /></span> <span className="cate-name text-lock" > <b>Appliance Repair</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="third">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/BeautySalon mainCategory.png" alt="BeautySalon mainCategory.png" /></span> <span className="cate-name text-lock" > <b>Beauty & Salon</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="fourth">
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/cleaning.png" alt="cleaning.png" /></span> <span className="cate-name" > <b>Cleaning</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="five">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/Electrical.png" alt="Electrical.png" /></span> <span className="cate-name text-lock" > <b>Trip And travel</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="six">
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/Shifting.png" alt="Shipting.png" /></span> <span className="cate-name" > <b>Shifting</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="eight">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/Painting& Renovation.png" alt="Painting& Renovation.png" /></span> <span className="cate-name text-lock" > <b>Painting & Renovation</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="nine">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/PestControl.png" alt="PestControl.png" /></span> <span className="cate-name text-lock" > <b>Pest Control</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="ten" onClick={handleClick}>
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/Others.png" alt="Others.png" /></span> <span className="cate-name" > <b>All Services</b> </span>
                                            </Nav.Link>

                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={7} className="Bg-b">


                                    {/* ************For Appliance Api https://kentradigital.com/api/subcatagory?typename=Appliance%20Repair********** */}
                                    {item.map((item) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="second" key={item.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={item.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={item.service_type_icon} /> <span className="cate-name"> <b>{item.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}

                                    {/* ************For Appliance Api End********** */}


                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemB.map((itemB) => (
                                        <Tab.Content >
                                            <Tab.Pane eventKey="third" key={itemB.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemB.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemB.service_type_icon} /> <span className="cate-name"> <b>{itemB.service_type_name}</b> </span> </span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                    {/* ************For Cleaning Api https://kentradigital.com/api/subcatagory?typename=Cleaning */}
                                    {itemC.map((itemC) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="fourth" key={itemC.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemC.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemC.service_type_icon} /> <span className="cate-name"> <b>{itemC.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}


                                    {/* ************or Cleaning Api Api End**********





                                    {/* ************For Cleanning https://kentradigital.com/api/subcatagory?typename=Shifting********** */}

                                    {itemE.map((itemE) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="six" key={itemE.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemE.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemE.service_type_icon} /> <span className="cate-name"> <b>{itemE.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}

                                    {/* ************For Pest Control Api End********** */}





                                    {/* ************For Trip And Travel Api https://kentradigital.com/api/subcatagory?typename=Trip%20and%20Travel********** */}

                                    {itemF.map((itemF) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="five" key={itemF.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemF.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemF.service_type_icon} /> <span className="cate-name"> <b>{itemF.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemG.map((itemG) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="eight" key={itemG.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemG.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemG.service_type_icon} /> <span className="cate-name"> <b>{itemG.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}






                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemH.map((itemH) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="nine" key={itemH.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemH.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemH.service_type_icon} /> <span className="cate-name"> <b>{itemH.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                </Col>
                            </Row>
                        </Tab.Container>
                    </Modal.Body>
                </Modal>



                {/* Shifting */}
                <Modal size="lg" show={showC} onHide={handleCloseC} animation={true} >
                    <Modal.Header closeButton>
                        <Modal.Title>Select Your Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="six">
                            <Row>
                                <Col sm={5} className="Bg-a">
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>

                                            <Nav.Link eventKey="second">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/AppliencRepair.png" alt="AcCategory.png" /></span> <span className="cate-name text-lock" > <b>Appliance Repair</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="third">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/BeautySalon mainCategory.png" alt="BeautySalon mainCategory.png" /></span> <span className="cate-name text-lock" > <b>Beauty & Salon</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="fourth">
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/cleaning.png" alt="cleaning.png" /></span> <span className="cate-name" > <b>Cleaning</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="five">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/Electrical.png" alt="Electrical.png" /></span> <span className="cate-name text-lock" > <b>Trip And travel</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="six">
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/Shifting.png" alt="Shipting.png" /></span> <span className="cate-name" > <b>Shifting</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="eight">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/Painting& Renovation.png" alt="Painting& Renovation.png" /></span> <span className="cate-name text-lock" > <b>Painting & Renovation</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="nine">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/PestControl.png" alt="PestControl.png" /></span> <span className="cate-name text-lock" > <b>Pest Control</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="ten" onClick={handleClick}>
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/Others.png" alt="Others.png" /></span> <span className="cate-name" > <b>All Services</b> </span>
                                            </Nav.Link>

                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={7} className="Bg-b">


                                    {/* ************For Appliance Api https://kentradigital.com/api/subcatagory?typename=Appliance%20Repair********** */}
                                    {item.map((item) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="second" key={item.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={item.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={item.service_type_icon} /> <span className="cate-name"> <b>{item.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}

                                    {/* ************For Appliance Api End********** */}


                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemB.map((itemB) => (
                                        <Tab.Content >
                                            <Tab.Pane eventKey="third" key={itemB.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemB.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemB.service_type_icon} /> <span className="cate-name"> <b>{itemB.service_type_name}</b> </span> </span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                    {/* ************For Cleaning Api https://kentradigital.com/api/subcatagory?typename=Cleaning */}
                                    {itemC.map((itemC) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="fourth" key={itemC.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemC.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemC.service_type_icon} /> <span className="cate-name"> <b>{itemC.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}


                                    {/* ************or Cleaning Api Api End**********





                                    {/* ************For Cleanning https://kentradigital.com/api/subcatagory?typename=Shifting********** */}

                                    {itemE.map((itemE) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="six" key={itemE.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemE.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemE.service_type_icon} /> <span className="cate-name"> <b>{itemE.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}

                                    {/* ************For Pest Control Api End********** */}





                                    {/* ************For Trip And Travel Api https://kentradigital.com/api/subcatagory?typename=Trip%20and%20Travel********** */}

                                    {itemF.map((itemF) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="five" key={itemF.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemF.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemF.service_type_icon} /> <span className="cate-name"> <b>{itemF.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemG.map((itemG) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="eight" key={itemG.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemG.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemG.service_type_icon} /> <span className="cate-name"> <b>{itemG.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}






                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemH.map((itemH) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="nine" key={itemH.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemH.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemH.service_type_icon} /> <span className="cate-name"> <b>{itemH.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                </Col>
                            </Row>
                        </Tab.Container>
                    </Modal.Body>
                </Modal>

                {/* Painting */}
                <Modal size="lg" show={showD} onHide={handleCloseD} animation={true} >
                    <Modal.Header closeButton>
                        <Modal.Title>Select Your Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="eight">
                            <Row>
                                <Col sm={5} className="Bg-a">
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>

                                            <Nav.Link eventKey="second">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/AppliencRepair.png" alt="AcCategory.png" /></span> <span className="cate-name text-lock" > <b>Appliance Repair</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="third">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/BeautySalon mainCategory.png" alt="BeautySalon mainCategory.png" /></span> <span className="cate-name text-lock" > <b>Beauty & Salon</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="fourth">
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/cleaning.png" alt="cleaning.png" /></span> <span className="cate-name" > <b>Cleaning</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="five">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/Electrical.png" alt="Electrical.png" /></span> <span className="cate-name text-lock" > <b>Trip And travel</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="six">
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/Shifting.png" alt="Shipting.png" /></span> <span className="cate-name" > <b>Shifting</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="eight">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/Painting& Renovation.png" alt="Painting& Renovation.png" /></span> <span className="cate-name text-lock" > <b>Painting & Renovation</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="nine">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/PestControl.png" alt="PestControl.png" /></span> <span className="cate-name text-lock" > <b>Pest Control</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="ten" onClick={handleClick}>
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/Others.png" alt="Others.png" /></span> <span className="cate-name" > <b>All Services</b> </span>
                                            </Nav.Link>

                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={7} className="Bg-b">


                                    {/* ************For Appliance Api https://kentradigital.com/api/subcatagory?typename=Appliance%20Repair********** */}
                                    {item.map((item) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="second" key={item.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={item.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={item.service_type_icon} /> <span className="cate-name"> <b>{item.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}

                                    {/* ************For Appliance Api End********** */}


                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemB.map((itemB) => (
                                        <Tab.Content >
                                            <Tab.Pane eventKey="third" key={itemB.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemB.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemB.service_type_icon} /> <span className="cate-name"> <b>{itemB.service_type_name}</b> </span> </span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                    {/* ************For Cleaning Api https://kentradigital.com/api/subcatagory?typename=Cleaning */}
                                    {itemC.map((itemC) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="fourth" key={itemC.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemC.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemC.service_type_icon} /> <span className="cate-name"> <b>{itemC.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}


                                    {/* ************or Cleaning Api Api End**********





                                    {/* ************For Cleanning https://kentradigital.com/api/subcatagory?typename=Shifting********** */}

                                    {itemE.map((itemE) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="six" key={itemE.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemE.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemE.service_type_icon} /> <span className="cate-name"> <b>{itemE.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}

                                    {/* ************For Pest Control Api End********** */}





                                    {/* ************For Trip And Travel Api https://kentradigital.com/api/subcatagory?typename=Trip%20and%20Travel********** */}

                                    {itemF.map((itemF) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="five" key={itemF.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemF.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemF.service_type_icon} /> <span className="cate-name"> <b>{itemF.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemG.map((itemG) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="eight" key={itemG.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemG.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemG.service_type_icon} /> <span className="cate-name"> <b>{itemG.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}






                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemH.map((itemH) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="nine" key={itemH.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemH.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemH.service_type_icon} /> <span className="cate-name"> <b>{itemH.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                </Col>
                            </Row>
                        </Tab.Container>
                    </Modal.Body>
                </Modal>


                {/* PesT Control */}
                <Modal size="lg" show={showE} onHide={handleCloseE} animation={true} >
                    <Modal.Header closeButton>
                        <Modal.Title>Select Your Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="nine">
                            <Row>
                                <Col sm={5} className="Bg-a">
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>

                                            <Nav.Link eventKey="second">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/AppliencRepair.png" alt="AcCategory.png" /></span> <span className="cate-name text-lock" > <b>Appliance Repair</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="third">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/BeautySalon mainCategory.png" alt="BeautySalon mainCategory.png" /></span> <span className="cate-name text-lock" > <b>Beauty & Salon</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="fourth">
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/cleaning.png" alt="cleaning.png" /></span> <span className="cate-name" > <b>Cleaning</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="five">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/Electrical.png" alt="Electrical.png" /></span> <span className="cate-name text-lock" > <b>Trip And travel</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="six">
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/Shifting.png" alt="Shipting.png" /></span> <span className="cate-name" > <b>Shifting</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="eight">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/Painting& Renovation.png" alt="Painting& Renovation.png" /></span> <span className="cate-name text-lock" > <b>Painting & Renovation</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="nine">
                                                <span><img className="img-lock" style={{ width: "25px" }} src="/img/MainCategory/PestControl.png" alt="PestControl.png" /></span> <span className="cate-name text-lock" > <b>Pest Control</b> </span>
                                            </Nav.Link>

                                            <Nav.Link eventKey="ten" onClick={handleClick}>
                                                <span><img style={{ width: "25px" }} src="/img/MainCategory/Others.png" alt="Others.png" /></span> <span className="cate-name" > <b>All Services</b> </span>
                                            </Nav.Link>

                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={7} className="Bg-b">


                                    {/* ************For Appliance Api https://kentradigital.com/api/subcatagory?typename=Appliance%20Repair********** */}
                                    {item.map((item) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="second" key={item.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={item.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={item.service_type_icon} /> <span className="cate-name"> <b>{item.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}

                                    {/* ************For Appliance Api End********** */}


                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemB.map((itemB) => (
                                        <Tab.Content >
                                            <Tab.Pane eventKey="third" key={itemB.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemB.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemB.service_type_icon} /> <span className="cate-name"> <b>{itemB.service_type_name}</b> </span> </span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                    {/* ************For Cleaning Api https://kentradigital.com/api/subcatagory?typename=Cleaning */}
                                    {itemC.map((itemC) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="fourth" key={itemC.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemC.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemC.service_type_icon} /> <span className="cate-name"> <b>{itemC.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}


                                    {/* ************or Cleaning Api Api End**********





                                    {/* ************For Cleanning https://kentradigital.com/api/subcatagory?typename=Shifting********** */}

                                    {itemE.map((itemE) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="six" key={itemE.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemE.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemE.service_type_icon} /> <span className="cate-name"> <b>{itemE.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}

                                    {/* ************For Pest Control Api End********** */}





                                    {/* ************For Trip And Travel Api https://kentradigital.com/api/subcatagory?typename=Trip%20and%20Travel********** */}

                                    {itemF.map((itemF) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="five" key={itemF.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemF.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemF.service_type_icon} /> <span className="cate-name"> <b>{itemF.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemG.map((itemG) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="eight" key={itemG.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemG.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemG.service_type_icon} /> <span className="cate-name"> <b>{itemG.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}






                                    {/* ************For Pest Control Api https://kentradigital.com/api/subcatagory?typename=Pest********** */}

                                    {itemH.map((itemH) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey="nine" key={itemH.id} className="content-border">
                                                <Link
                                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                                    to={itemH.id}
                                                >
                                                    <span className="mid" style={{ padding: "5px", paddingLeft: "15px", display: "inline-block" }}><img style={{ width: "30px" }} src={itemH.service_type_icon} /> <span className="cate-name"> <b>{itemH.service_type_name}</b> </span></span>
                                                </Link>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                    {/* ************For Pest Control Api End********** */}

                                </Col>
                            </Row>
                        </Tab.Container>
                    </Modal.Body>
                </Modal>
            </>
            {/* =======================Modal end=========================== */}




            {/* =========================CateGory========================= */}

            <div className="container con-style">
                <div className="row row-cols-5 col-width">

                    <div className="col col-pad" onClick={() => history.push("/1")} style={{ cursor: "pointer" }}>
                        <div className="img-border">
                            <div className="img-effect">
                                <img className="img-category" data-toggle="modal" data-target="#myModal" src="/img/MainCategory/AcCategory.png" alt="AcCategory.png" />
                                <h6 style={{ paddingTop: "20px", fontWeight: "bold" }}>Ac Repair Service</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col col-pad" onClick={handleShow} style={{ cursor: "pointer" }}>
                        <div className="img-border">
                            <div className="img-effect">
                                <img className="img-category" data-toggle="modal" data-target="#myModal" src="/img/MainCategory/AppliencRepair.png" alt="AppliencRepair.png" />
                                <h6 style={{ paddingTop: "20px", fontWeight: "bold" }}>Appliance Repair</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col col-pad" onClick={handleShowA} style={{ cursor: "pointer" }}>
                        <div className="img-border">
                            <div className="img-effect">
                                <img className="img-category" data-toggle="modal" data-target="#myModal" src="/img/MainCategory/BeautySalon mainCategory.png" alt="BeautySalon mainCategory.png" />
                                <h6 style={{ paddingTop: "20px", fontWeight: "bold" }}>Beauty & Salon</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col col-pad" onClick={handleShowB} style={{ cursor: "pointer" }}>
                        <div className="img-border">
                            <div className="img-effect" >
                                <img className="img-category" data-toggle="modal" data-target="#myModal" src="/img/MainCategory/cleaning.png" alt="cleaning.png" />
                                <h6 style={{ paddingTop: "20px", fontWeight: "bold" }}>Cleaning</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col col-pad" onClick={() => history.push("/95")} style={{ cursor: "pointer" }}>
                        <div className="img-border">
                            <div className="img-effect" >
                                <img className="img-category" data-toggle="modal" data-target="#myModal" src="/img/MainCategory/Electrical.png" alt="Electrical.png" />
                                <h6 style={{ paddingTop: "20px", fontWeight: "bold" }}>Electrical</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col col-pad" onClick={handleShowC} style={{ cursor: "pointer" }}>
                        <div className="img-border">
                            <div className="img-effect">
                                <img className="img-category img-shift" data-toggle="modal" data-target="#myModal" src="/img/MainCategory/Shifting.png" alt="shifting.png" />
                                <h6 style={{ paddingTop: "20px", fontWeight: "bold" }}>Shifting</h6>
                            </div>
                        </div>
                    </div>



                    <div className="col col-pad" onClick={() => history.push("/64")} style={{ cursor: "pointer" }}>
                        <div className="img-border">
                            <div className="img-effect">
                                <img className="img-category" data-toggle="modal" data-target="#myModal" src="/img/MainCategory/Plumbing& Sanitary.png" alt="Plumbing& Sanitary.png" />
                                <h6 style={{ paddingTop: "20px", fontWeight: "bold" }}>Plumbing & Sanitary</h6>
                            </div>
                        </div>
                    </div>


                    <div className="col col-pad" onClick={handleShowD} style={{ cursor: "pointer" }}>
                        <div className="img-border">
                            <div className="img-effect">
                                <img className="img-category" data-toggle="modal" data-target="#myModal" src="/img/MainCategory/Painting& Renovation.png" alt="Painting& Renovation.png" />
                                <h6 style={{ paddingTop: "20px", fontWeight: "bold" }}>Painting & Renovation</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col col-pad" onClick={handleShowE} style={{ cursor: "pointer" }}>
                        <div className="img-border">
                            <div className="img-effect">
                                <img className="img-category" data-toggle="modal" data-target="#myModal" src="/img/MainCategory/PestControl.png" alt="PestControl.png" />
                                <h6 style={{ paddingTop: "20px", fontWeight: "bold" }}>Pest Control</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col col-pad" onClick={handleClick} style={{ cursor: "pointer" }}>
                        <div className="img-border">
                            <div className="img-effect">
                                <img className="img-category" data-toggle="modal" data-target="#myModal" src="/img/MainCategory/Others.png" alt="Others.png" />
                                <h6 style={{ paddingTop: "20px", fontWeight: "bold" }}>All Services</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindCategory
