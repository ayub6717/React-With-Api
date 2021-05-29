import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import cartEmptyImage from "../../images/cartEmpty.jpg";
import { useMediaQuery } from 'react-responsive';

import "./CartModal.css";
const CartModal = (props) => {
  /*react responsive starts here*/
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  /*react responsive ends here*/
  const [isLoggedIn, setIsLoggedIn] = useState(
    reactLocalStorage.get("isLoggedIn")
  );
  const [modalShow2, setModalShow2] = useState(false);
  const [unitArea, setUnitArea] = useState(0);

  const [cartEmpty, setCartEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [finalService, setFinalService] = useState([]);
  const [totalPrice, setTotalPrice] = useState();



  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetchFinalServices();
    viewCart();


  }, [props.serviceId]);

  const addToCart = async (finalServiceId, unitPrice, typecode) => {
    if (typecode == "General") {
      const link =
        "https://backend.amaderservice.com/api/addCart?userid=" +
        props.userId +
        "&serviceid=" +
        finalServiceId
        + "&price="
        + unitPrice
        + "&area=0";
      console.log("this is add to cart link" + link)
      const data = await fetch(link);
      const item = await data.json();
      viewCart();;
    } else {
      const link =
        "https://backend.amaderservice.com/api/addCart?userid=" +
        props.userId +
        "&serviceid=" +
        finalServiceId
        + "&price="
        + unitPrice * unitArea
        + "&area="
        + unitArea;
      console.log("this is add to cart link" + link)
      const data = await fetch(link);
      const item = await data.json();
      viewCart();
    }



  };

  const removeFromCart = async (orderId) => {
    const link =
      "https://backend.amaderservice.com/api/removeCart?userid=" +
      props.userId +
      "&id=" +
      orderId;
    const data = await fetch(link);
    const item = await data.json();
    viewCart();
  };

  const modalHideSecond = () => {
    setModalShow2(false);
  }
  const viewCart = async () => {
    setLoading(true)
    const link =
      "https://backend.amaderservice.com/api/ViewCart?userid=" +
      props.userId;
    const data = await fetch(link);
    const dataJSON = await data.json();
    setCart(dataJSON);
    cartEmptyHandler(dataJSON);

    const total = dataJSON.reduce((a, v) => (a = a + parseFloat(v.price)), 0);
    setTotalPrice(total);

    setLoading(false)

  };

  const fetchFinalServices = async () => {
    setLoading(true)
    const link =
      "https://backend.amaderservice.com/api/getFinalService?servicesid=" +
      props.serviceId + "&zoneid=" + props.zoneid;
    const data = await fetch(link);
    const dataJSON = await data.json();
    setFinalService(dataJSON);
    setLoading(false)
  };


  const cartEmptyHandler = async (item) => {
    if (item.length == 0) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
  };

  return (
    <div>
      {
        isDesktopOrLaptop
          ?
          <div>
            {modalShow2 ?

              <Modal
                //{...props}
                size="xl"
                centered
                onHide={() => setModalShow2(false)}
                show={modalShow2}
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Body>
                  <h1>
                    Please read this carefully
            </h1><br />
                  <div style={{ height: "400px", overflow: "scroll" }}>

                    <h4> ORDER CANCELLATION</h4>
                If you cancel your order on the same day after service provider arrival on the spot, YOU HAVE TO PAY BDT 200.   <br /> <br />
                    <h4> SERVICE USERS SHALL NOT TAKE ANY OF THE FOLLOWING ACTIONS:</h4>
                    <p style={{paddingLeft:"20px"}}>
                      - Commit to purchasing or using a Service without paying. <br />
                 - Sign up for, negotiate a price for, use, or otherwise solicit a Service with no intention of following through with your use of or payment for the Service. <br />
                 - Agree to purchase a Service when you do not meet the SERVICE PROVIDER's terms as outlined in the Posting, or agree to purchase a Service with the intention of disrupting a Posting. <br />
                 - Misuse any options made available now or in the future by AmaderService.com in connection with the use or purchase of any Service <br /> <br />
                    </p>

                    <h4> SANCTIONS FOR VIOLATING ANY OF THE RULES FOR SERVICE USERS</h4>
                If a SERVICE USER violates any of the above-referenced rules in connection with his or her Posting, AmaderService.com, in its sole discretion, may take any of the following actions: <br />
               <p style={{paddingLeft:"20px"}}>
               - Cancel the Posting. <br />
                - Limit the SERVICE USER's Account privileges. <br />
                - Suspend the SERVICE USER's Account. <br />
                - Decrease the SERVICE USER's status earned via the Feedback page.<br /> <br />
               </p>


                  </div>



                </Modal.Body>
                <Modal.Footer>
                  <Link to={`/checkout`}>
                    <Button className="btn-cartmodal2">I agree</Button>
                  </Link>
                </Modal.Footer>
              </Modal>
              :

              <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Service Details
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <Row>
                      {/*left column */}
                      <Col>
                        <div className="final-heading">
                          <Container>
                            <Row>
                              <Row>
                                <h4
                                  style={{
                                    alignSelf: "center",
                                    fontSize: "18px",
                                    paddingTop: "10px",
                                    color: "white"
                                  }}
                                >
                                  {props.serviceTitle}<br />{" "}
                                </h4>

                              </Row>
                            </Row>
                          </Container>
                        </div>
                        <div className="container-scroll2">

                          {finalService.map((item) => (
                            <div className="cart-item">
                              <Row style={{ margin: 0 }}>
                                <h4
                                  style={{
                                    width: "300px",
                                    alignSelf: "center",
                                    marginLeft: "20px",
                                    fontSize: "14px",
                                    paddingTop: "10px",
                                  }}
                                  key={item.id}
                                >
                                  {item.service_name} <br />{" "}
                                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                                    BDT {item.price}
                                  </span>
                                </h4>
                                {item.typecode == "Quotation" &&
                                  <Link
                                    style={{ textDecoration: "none", color: "33669A", width: "150px", padding: "0px" }}
                                    to={`/quotation/${item.id}`}
                                  >
                                    <Button
                                      className="btn"
                                      style={{
                                        width: "150px",
                                        backgroundColor: "#33669A",
                                        borderColor: "white",
                                        height: "30px",
                                        marginTop: "15px",
                                        marginBottom: "10px",
                                        fontSize: "12px",
                                      }}
                                    >
                                      Get Quotation
                                  </Button>
                                  </Link>
                                }

                                {item.typecode == "General" &&
                                  <Button
                                    className="btn"
                                    style={{
                                      width: "150px",
                                      backgroundColor: "#33669A",
                                      borderColor: "white",
                                      height: "30px",
                                      marginTop: "15px",
                                      marginBottom: "10px",
                                      fontSize: "12px",
                                    }}
                                    onClick={() => addToCart(item.id, item.price, "General")}
                                  >
                                    + Add to Cart
                                  </Button>
                                }

                                {item.typecode == "PerUnit" &&
                                  <Row style={{ width: "150px", margin: "0px", marginTop: "10px", padding: "0px" }}>
                                    <Col style={{ padding: "0px", width: "70px" }}>
                                      <input
                                        name="includeHeading"
                                        className="form-control"
                                        placeholder=""
                                        type="number"
                                        style={{ width: "75px", padding: "0px", height: "30px", paddingLeft: "5px" }}
                                        value={unitArea}
                                        step="200"
                                        onChange={(event) => setUnitArea(event.target.value)}
                                      />
                                    </Col>
                                    <Col style={{ padding: "0px", width: "70px" }}>
                                      <Button
                                        className="btn"
                                        style={{
                                          width: "70px",
                                          backgroundColor: "#33669A",
                                          borderColor: "white",
                                          height: "30px",
                                          marginLeft: "5px",

                                          fontSize: "12px",
                                        }}
                                        onClick={() => addToCart(item.id, item.price, "PerUnit")}
                                      >
                                        + Add
                                  </Button>
                                    </Col>

                                  </Row>
                                }
                              </Row>
                            </div>
                          ))}
                        </div>


                      </Col>
                      {/*right column */}

                      <Col>
                        <Row>
                          <div className="left-dash cart-heading">
                            <h5
                              style={{
                                color: "white",
                                paddingTop: "10px",
                                textAlign: "center",
                              }}
                            >
                              Your Cart
                            </h5>
                          </div>
                        </Row>
                        {cartEmpty ? (
                          <div>
                            <Row>
                              <div className="left-dash container-scroll img-center">
                                <img
                                  className="newimgStyle"
                                  src={cartEmptyImage}
                                  alt=""
                                  width="200"
                                />
                                <h4
                                  style={{
                                    textAlign: "center",
                                    marginTop: "0px",
                                    color: "grey",
                                  }}
                                >
                                  Cart Empty
                                </h4>
                              </div>
                            </Row>
                            <Row>
                              <div
                                className="left-dash"
                                style={{ paddingTop: "25px", paddingBottom: "25px" }}
                              ></div>
                            </Row>
                          </div>
                        ) : (
                          <div>
                            {loading ?
                              <div>
                                <Row>
                                  <div className="left-dash container-scroll img-center">

                                    <h4
                                      style={{
                                        textAlign: "center",
                                        marginTop: "100px",
                                        color: "33669A",
                                        fontSize: 22
                                      }}
                                    ></h4>
                                  </div>
                                </Row>
                                <Row>
                                  <div
                                    className="left-dash"
                                    style={{ paddingTop: "25px", paddingBottom: "25px" }}
                                  ></div>
                                </Row>
                              </div>
                              :
                              <div>

                                <Row>
                                  <div className="left-dash container-scroll">
                                    {cart.map((item) => (
                                      <div className="cart-item">
                                        <Row>
                                          <h4
                                            style={{
                                              width: "400px",
                                              alignSelf: "center",
                                              marginLeft: "20px",
                                              fontSize: "14px",
                                              paddingTop: "10px",
                                            }}
                                            key={item.id}
                                          >
                                            {item.service}<br /><br />

                                            <span style={{ fontSize: "12px", fontWeight: "600", marginTop: "30px" }}>
                                              {item.service_name} {" | "}BDT {item.price}
                                            </span>
                                          </h4>
                                          <Button
                                            style={{
                                              width: "70px",
                                              height: "30px",
                                              marginTop: "10px",
                                              backgroundColor: "#ff5454",
                                              borderColor: "white",
                                              marginBottom: "10px",
                                              fontSize: "12px",
                                            }}
                                            onClick={() => removeFromCart(item.id)}
                                          >
                                            Remove
                                            </Button>
                                        </Row>
                                      </div>
                                    ))}
                                  </div>
                                </Row>
                                <Row>
                                  <div style={{ height: "30px", backgroundColor: "#33669A" }}>
                                    <h5 style={{ color: "white", paddingTop: "5px", paddingBottom: "5px", textAlign: "center", fontSize: "18px" }}>
                                      Total Price:{" "} {totalPrice}

                                    </h5>
                                  </div>
                                </Row>
                              </div>}
                          </div>

                        )}
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button disabled={cartEmpty ? true : false} className="btn-cartmodal2" onClick={() => setModalShow2(true)}>Proceed to Checkout</Button>
                </Modal.Footer>
              </Modal>
            }
          </div>
          :
          <div>
            {modalShow2 ?

              <Modal
                //{...props}
                size="xl"
                centered
                onHide={() => setModalShow2(false)}
                show={modalShow2}
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Body style={{ height: "620px" }}>
                  <h1>
                    Terms and Conditions
                   </h1><br />
                  <div style={{ height: "520px", overflow: "scroll" }}>
                    <h2>Rules for SERVICE USERS</h2> <br />

                    <h4>1. ORDER CANCELLATION</h4>
                        If you cancel your order on the same day, YOU HAVE TO PAY BDT 300.   <br /> <br />
                    <h4>2. SERVICE USERS SHALL NOT TAKE ANY OF THE FOLLOWING ACTIONS:</h4>
                        (a) commit to purchasing or using a Service without paying; <br />
                        (b) sign up for, negotiate a price for, use, or otherwise solicit a Service with no intention of following through with your use of or payment for the Service; <br />
                        (c) agree to purchase a Service when you do not meet the SERVICE PROVIDER's terms as outlined in the Posting, or agree to purchase a Service with the intention of disrupting a Posting; or <br />
                        (d) misuse any options made available now or in the future by AmaderService.com in connection with the use or purchase of any Service <br /> <br />

                    <h4>3. SANCTIONS FOR VIOLATING ANY OF THE RULES FOR SERVICE USERS</h4>
                        If a SERVICE USER violates any of the above-referenced rules in connection with his or her Posting, AmaderService.com, in its sole discretion, may take any of the following actions: <br />
                        (a) cancel the Posting; <br />
                        (b) limit the SERVICE USER's Account privileges; <br />
                        (c) suspend the SERVICE USER's Account; and/or <br />
                        (d) decrease the SERVICE USER's status earned via the Feedback page.<br /> <br />


                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Link to={`/checkout`}>
                    <Button className="btn-cartmodal2">I agree</Button>
                  </Link>
                </Modal.Footer>
              </Modal>
              :

              <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Service Details and Cart
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ height: "550px" }}>
                  <Container>
                    <Row>
                      {/*left column */}
                      <Col md={6} className="left-dashtop" style={{ marginBottom: "30px", paddingBottom: "10px" }}>
                        <Row>
                          <div className="left-dash cart-heading">
                            <p
                              style={{
                                color: "white",
                                margin: "0px",
                                padding: "5px",
                                textAlign: "center",
                                fontSize: "12px"
                              }}
                            >
                              {props.serviceTitle}
                            </p>
                          </div>
                        </Row>
                        <div className="container-scroll2" style={{ height: "150px", backgroundColor: "", }}>

                          {finalService.map((item) => (

                            <div className="cart-item">
                              <Row style={{ margin: 0, }}>

                                <p
                                  key={item.id}
                                  style={{
                                    width: "45%",
                                    color: "33669A",
                                    margin: "0px",
                                    fontSize: "14px",
                                    padding: "5px",
                                    paddingLeft: "15px"
                                  }}
                                >
                                  {item.service_name} <br />{" "}
                                  <span style={{ fontSize: "12px" }}>
                                    BDT {item.price}
                                  </span>
                                </p>
                                {item.typecode == "Quotation" &&
                                  <Link
                                    style={{ textDecoration: "none", color: "33669A", width: "150px", padding: "0px" }}
                                    to={`/quotation/${item.id}`}
                                  >
                                    <Button
                                      className="btn"
                                      style={{
                                        width: "150px",
                                        backgroundColor: "#33669A",
                                        borderColor: "white",
                                        height: "30px",
                                        marginTop: "15px",
                                        marginBottom: "10px",
                                        fontSize: "12px",
                                      }}
                                    >
                                      Get Quotation
                                  </Button>
                                  </Link>
                                }
                                {item.typecode == "General" &&
                                  <Button
                                    className="btn"
                                    style={{
                                      width: "150px",
                                      backgroundColor: "#33669A",
                                      borderColor: "white",
                                      height: "30px",
                                      marginTop: "15px",
                                      marginBottom: "10px",
                                      fontSize: "12px",
                                    }}
                                    onClick={() => addToCart(item.id, item.price, "General")}
                                  >
                                    + Add To Cart
                                </Button>
                                }

                                {item.typecode == "PerUnit" &&
                                  <Row style={{ width: "150px", margin: "0px", marginTop: "10px", padding: "0px" }}>
                                    <Col style={{ padding: "0px", width: "70px" }}>
                                      <input
                                        name="includeHeading"
                                        className="form-control"
                                        placeholder=""
                                        type="number"
                                        style={{ width: "75px", padding: "0px", height: "30px", paddingLeft: "5px" }}
                                        value={unitArea}
                                        step="200"
                                        onChange={(event) => setUnitArea(event.target.value)}
                                      />
                                    </Col>
                                    <Col style={{ padding: "0px", width: "70px" }}>
                                      <Button
                                        className="btn"
                                        style={{
                                          width: "70px",
                                          backgroundColor: "#33669A",
                                          borderColor: "white",
                                          height: "30px",
                                          marginLeft: "5px",

                                          fontSize: "12px",
                                        }}
                                        onClick={() => addToCart(item.id, item.price, "PerUnit")}
                                      >
                                        + Add
                                  </Button>
                                    </Col>

                                  </Row>
                                }
                              </Row>
                            </div>
                          ))}
                        </div>


                      </Col>

                      {/*right column */}
                      <Col md={6}>
                        <Row>
                          <div className="left-dash cart-heading" style={{ height: "30px" }}>
                            <p
                              style={{
                                color: "white",
                                padding: "5px",
                                textAlign: "center",
                              }}
                            >
                              Your Cart
                            </p>
                          </div>
                        </Row>
                        {cartEmpty ? (
                          <div>

                            <Row>
                              <div className="left-dash container-scroll" style={{ height: "200px" }}>
                                <img
                                  className="newimgStyle"
                                  src={cartEmptyImage}
                                  alt=""
                                  width="150"
                                />
                                {cart.map((item) => (
                                  <div className="cart-item">
                                    <Row style={{ margin: 0, }}>
                                      <p
                                        key={item.id}
                                        style={{
                                          width: "100%",
                                          color: "33669A",
                                          margin: "0px",
                                          fontSize: "14px",
                                          padding: "5px",
                                        }}
                                      ></p>
                                    </Row>
                                  </div>
                                ))}
                              </div>
                            </Row>
                            <Row>
                              <div style={{ height: "30px", backgroundColor: "#33669A" }}>
                                <p style={{ color: "white", padding: "5px", textAlign: "center" }}>
                                  Cart Empty
                                </p>
                              </div>
                            </Row>
                          </div>



                        ) : (
                          <div>

                            <Row>
                              <div className="left-dash container-scroll" style={{ height: "200px" }}>
                                {cart.map((item) => (
                                  <div className="cart-item">
                                    <Row style={{ margin: 0, }}>
                                      <p
                                        key={item.id}
                                        style={{
                                          width: "65%",
                                          color: "33669A",
                                          margin: "0px",
                                          fontSize: "14px",
                                          padding: "5px",
                                          paddingLeft: "15px"
                                        }}
                                      >
                                        {item.service_name} <br />{" "}
                                        <span style={{ fontSize: "12px" }}>
                                          BDT {item.price}
                                        </span>
                                      </p>
                                      <Button
                                        style={{
                                          width: "25%",
                                          backgroundColor: "#ff5454",
                                          borderColor: "white",
                                          height: "30px",
                                          marginTop: "15px",
                                          marginBottom: "10px",
                                          fontSize: "12px",
                                        }}
                                        onClick={() => removeFromCart(item.id)}
                                      >
                                        Remove
                                    </Button>

                                    </Row>
                                  </div>
                                ))}
                              </div>
                            </Row>
                            <Row>
                              <div style={{ height: "30px", backgroundColor: "#33669A" }}>
                                <p style={{ color: "white", padding: "5px", textAlign: "center" }}>
                                  Total Price:{" "} {totalPrice}

                                </p>
                              </div>
                            </Row>
                          </div>

                        )}
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <div className="row" style={{ width: "100%" }}>
                    <div className="col" style={{ width: "80%" }}>
                      <Button className="btn" className="btn-cartmodal" onClick={() => props.onHide()}>Close</Button>

                    </div>
                    <div className="col" style={{ textAlign: "right" }}>
                      <Button disabled={cartEmpty ? true : false} className="btn-cartmodal2" onClick={() => setModalShow2(true)}>Proceed</Button>

                    </div>

                  </div>
                </Modal.Footer>
              </Modal>
            }
          </div>

      }
    </div>
  );
};

export default CartModal;
