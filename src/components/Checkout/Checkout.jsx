import React, { useEffect, useState, Text } from "react";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";
import NavBar from "../NavBar/NavBar";
import "./Checkout.css";
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { reactLocalStorage } from "reactjs-localstorage";
import { Redirect, useHistory } from "react-router-dom";
import DatePicker from 'react-date-picker';
import SelectSearch from "react-select-search";
// import Footer from "../Footer/Footer";
// import FooterMobile from "../Footer/FooterMobile";
import { useMediaQuery } from 'react-responsive';
import "react-date-picker/dist/DatePicker.css";
function Checkout(props) {
  const [userInfo, setUserInfo] = useState(reactLocalStorage.getObject("userInfo"));
  const [userZoneId, setUserZoneId] = useState(reactLocalStorage.get("userZoneId"));

  const { promiseInProgress } = usePromiseTracker();
  const [checkouts, setCheckouts] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    const link = "https://backend.amaderservice.com/api/ViewCart?userid=" + userInfo[0].id;

    trackPromise(
      fetch(link)
        .then((response) => response.json())
        .then((data) => setCheckouts(data))
    );
  }, []);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })

  const [textValues, setTextValues] = useState({});
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [house, setHouse] = useState("");
  const [road, setRoad] = useState("");
  const [apartment, setApartment] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");

  const [orderId, setOrderId] = useState("");
  const [timeEmpty, setTimeEmpty] = useState();

  const [date, onChangeDate] = useState(new Date());
  const [timeZone, setTimeZone] = useState([
    {
      value: "10 AM",
      name: "10 AM"
    },
    {
      value: "11 AM",
      name: "11 AM"
    },
    {
      value: "12 PM",
      name: "12 PM"
    },
    {
      value: "1 PM",
      name: "1 PM"
    },
    {
      value: "2 PM",
      name: "2 PM"
    },
    {
      value: "3 PM",
      name: "3 PM"
    },
    {
      value: "4 PM",
      name: "4 PM"
    },
    {
      value: "5 PM",
      name: "5 PM"
    },
    {
      value: "6 PM",
      name: "6 PM"
    },
    {
      value: "7 PM",
      name: "7 PM"
    },
    {
      value: "8 PM",
      name: "8 PM"
    },
    {
      value: "9 PM",
      name: "9 PM"
    },
    {
      value: "10 PM",
      name: "10 PM"
    },
  ]);
  const [timeString, setTimeString] = useState("");


  function handleClick() {
    if (timeString !== "") {
      placeorder();
    } else {
      setTimeEmpty(true)
    }

  }
  const history = useHistory();

  const modalHide = () => {
    setModalShow(false)

    history.push(`/`);

  }
  const handleTimeZone = (value) => {
    setTimeString(value)
    setTimeEmpty(false)

  }
  const checkDate = () => {
    const correctDateMonth = date.getMonth() + 1;
    const completeDate = date.getDate() + "-" + correctDateMonth + "-" + date.getFullYear();
  }

  const placeorder = async () => {
    try {
      const link =
        "https://backend.amaderservice.com/api/update?userid=" +
        userInfo[0].id +
        "&contact_person=" +
        name +
        "&contact_person_number=" +
        number +
        "&order_address=" +
        "Apartment: " + apartment +
        ", House: " + house +
        ", Road: " + road +
        ", Area: " + area +
        ", City: " + city +
        ", Postal: " + postal

        ;
      const correctDateMonth = date.getMonth() + 1;

      const completeDate = date.getDate() + "-" + correctDateMonth + "-" + date.getFullYear();
      fetch(link)
        .then((response) => response.json())
        .then(async (data) => {
          if (data.status == "success") {
            const link =
              "https://backend.amaderservice.com/api/ConfirmCart?userid=" +
              userInfo[0].id +
              "&zoneid=" +
              userZoneId +
              "&expectedTime="
              + completeDate + " " + timeString;
            const data = await fetch(link);
            const item = await data.json();
            if (item.orderid) {
              setOrderId(item.orderid)
              setModalShow(true);
            } else {
              alert("Error!");

            }
          } else {
            alert("Error!");
          }
        })

    } catch (error) {
      alert("Error!");
    }
  };


  return (
    <div>
      <NavBar></NavBar> <br /> <br /> <br />


      <div className="container-fluid " style={{ backgroundColor: "#e9e9e9" }}>

        <div className="checkout-container" >
          <div style={{ width: "100%", height: "2px", marginTop: "10px" }}></div>
          <Container>

            <Row>
              {/*left column */}
              <Col>
                <div>

                  <Container>
                    {isDesktopOrLaptop ?

                      <Row>
                        <div className="checkout-heading">
                          <h3 style={{ color: "33669A" }}>Expected Time of Service</h3>
                          <p style={{ color: "grey" }}>
                            Expert will deliver on the following day and time
                        </p>
                          <Row style={{ backgroundColor: "#FFFFFF", padding: "15px", borderRadius: "10px" }}>

                            <h4 style={{ color: "black", marginBottom: "15px", marginLeft: "-20px" }}>
                              <img style={{ width: "60px", height: "56px" }} src="img/AnotherPic/cal.png" alt="" /> Expected Time
                            </h4>
                            {/* <img style={{width:"70px", height:"56px"}} src="img/AnotherPic/cal.png" alt=""/> */}
                            <Col sm={6} >
                              <DatePicker
                                onChange={onChangeDate}
                                value={date}
                                format="dd-MM-y"
                                clearIcon={null}
                              />


                            </Col>
                            <Col sm={3}>

                              <div>
                                <div style={{ backgroundColor: timeEmpty ? "red" : "white", padding: timeEmpty ? 2 : 0, width: "10rem", marginTop: "10px" }}>
                                  <SelectSearch
                                    options={timeZone}
                                    onChange={handleTimeZone}
                                    placeholder="Select Time..."
                                  />
                                </div>
                                {timeEmpty ? <p style={{ color: "red" }}>Please Select an expected time of service</p> : <p></p>}
                              </div>


                            </Col>


                          </Row>



                        </div>
                      </Row>
                      :
                      <Row>
                        <div className="checkout-heading">
                          <h3 style={{ color: "33669A" }}>Expected Time of Service</h3>
                          <p style={{ color: "grey" }}>
                            Expert will deliver on the following day and time
                        </p>





                          <Col style={{ marginBottom: "20px" }}>
                            <DatePicker
                              onChange={onChangeDate}
                              value={date}
                              format="dd-MM-y"
                              clearIcon={null}
                            />


                          </Col>

                          <Col >

                            <div>
                              <div style={{ backgroundColor: timeEmpty ? "red" : "white", padding: timeEmpty ? 2 : 0, width: "16rem" }}>
                                <SelectSearch
                                  options={timeZone}
                                  onChange={handleTimeZone}
                                  placeholder="Select Time..."
                                />
                              </div>
                              {timeEmpty ? <p style={{ color: "red" }}>Please Select an expected time of service</p> : <p></p>}
                            </div>


                          </Col>




                        </div>
                      </Row>
                    }

                    {/* <Row>
                      <div className="checkout-heading">
                        <h3 style={{ color: "33669A" }}>Type of Payment</h3>
                        <p style={{ color: "grey" }}>
                          Would you like to pay by cash or through digital payment?
                        </p>
                        <Row>

                          <label>
                            <input type="radio"
                              defaultChecked={true}
                            //onChange={this.toggleChange}
                            />
                            {" "}Cash on Service Completion
                        </label>

                          <label style={{ marginTop: "20px" }}>
                            <input type="radio"
                              defaultChecked={false}
                              disabled={true}
                            //onChange={this.toggleChange}
                            />
                            {" "}Digital Payment
                        </label>
                        </Row>



                      </div>
                    </Row> */}

                    <Row>
                      <div className="checkout-heading">
                        {/* <h3 style={{ color: "33669A" }}> <img src="img/AnotherPic/userrr.png" style={{width:"70px"}} alt=""/> Contact Person</h3>
                        <p style={{ color: "grey" }}>
                          Expert will contact with the following person
                        </p> */}
                        <form action="" onSubmit={handleClick}>
                          <div style={{ backgroundColor: "#FFFFFF", margin: "-10px", padding: "10px", marginTop: "-50px", borderRadius: "10px" }}>
                            <h4 style={{ color: "black", marginBottom: "15px" }}>
                              <img src="img/AnotherPic/userrr.png" style={{ width: "70px" }} alt="" />  Contact Person
                        </h4>
                            <p style={{ color: "grey" }}>
                              Expert will contact with the following person
                        </p>
                            <div class="form-floating mb-3">
                              <input
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                              ></input>
                              <label for="floatingInput">Name</label>
                            </div>
                            <div class="form-floating mb-3">
                              <input
                                class="form-control"
                                id="floatingPassword"
                                placeholder="number"
                                value={number}
                                onChange={(event) => setNumber(event.target.value)}
                                required
                              ></input>
                              <label for="floatingPassword">Contact Number</label>
                            </div>
                          </div>

                          <div style={{ backgroundColor: "#FFFFFF", margin: "-10px", padding: "10px", marginTop: "20px", borderRadius: "10px" }}>
                            <h4 style={{ color: "black", marginBottom: "15px" }}>
                              <img src="img/AnotherPic/homeAddress.png" alt="" style={{ width: "80px" }} /> Address {address}
                            </h4>
                            <div className="row">

                              <div class="form-floating mb-3" className="col-md-6" style={{ marginBottom: "20px" }}>
                                <label for="floatingPassword">Apartment Number</label>

                                <input
                                  class="form-control"
                                  id="floatingPassword"
                                  placeholder="Apartment Number"
                                  value={apartment}
                                  style={{ height: "55px" }}
                                  onChange={(event) => setApartment(event.target.value)}
                                  required
                                ></input>
                              </div>
                              <div class="form-floating mb-3" className="col-md-6" style={{ marginBottom: "20px" }}>
                                <label for="floatingPassword">House Number</label>

                                <input
                                  class="form-control"
                                  id="floatingPassword"
                                  placeholder="House Number"
                                  value={house}
                                  style={{ height: "55px" }}
                                  onChange={(event) => setHouse(event.target.value)}
                                  required
                                ></input>
                              </div>

                              <div class="form-floating mb-3" className="col-md-6" style={{ marginBottom: "20px" }}>
                                <label for="floatingPassword">Road Number</label>

                                <input
                                  class="form-control"
                                  id="floatingPassword"
                                  placeholder="Road Number"
                                  value={road}
                                  style={{ height: "55px" }}
                                  onChange={(event) => setRoad(event.target.value)}
                                  required
                                ></input>
                              </div>
                              <div class="form-floating mb-3" className="col-md-6" style={{ marginBottom: "20px" }}>
                                <label for="floatingPassword">Area</label>

                                <input
                                  class="form-control"
                                  id="floatingPassword"
                                  placeholder="Bashundhara, Gulshan etc."
                                  value={area}
                                  style={{ height: "55px" }}
                                  onChange={(event) => setArea(event.target.value)}
                                  required
                                ></input>
                              </div>
                              <div class="form-floating mb-3" className="col-md-6" style={{ marginBottom: "20px" }}>
                                <label for="floatingPassword">City</label>

                                <input
                                  class="form-control"
                                  id="floatingPassword"
                                  placeholder="City Name"
                                  value={city}
                                  style={{ height: "55px" }}
                                  onChange={(event) => setCity(event.target.value)}
                                  required
                                ></input>
                              </div>
                              <div class="form-floating mb-3" className="col-md-6" style={{ marginBottom: "20px" }}>
                                <label for="floatingPassword">Postal Code</label>

                                <input
                                  class="form-control"
                                  id="floatingPassword"
                                  placeholder="Postal Code"
                                  value={postal}
                                  style={{ height: "55px" }}
                                  onChange={(event) => setPostal(event.target.value)}
                                  required
                                ></input>
                              </div>




                            </div>
                          </div>

                          {/* <div className="form-floation mb-3">
                            <input
                              className="btn btn-primary form-control"
                              type="submit"
                              value="Place Order"
                            />
                          </div> */}

                        </form>
                      </div>
                    </Row>

                  </Container>


                </div>
              </Col>
              {/*right column */}

              <Col>
                <div>
                  <Container>
                    <Row>
                      <div className="checkout-heading">
                        <h3 style={{ color: "black" }}>Order Summary</h3>
                        <p style={{ color: "grey" }}>
                          Our service provider will contact you to confirm the
                          following service
                        </p>

                        {promiseInProgress === true ? (
                          <div className="checkout-item">
                            <Row>
                              <p></p>
                            </Row>
                          </div>
                        ) : (
                          checkouts.map((checkout) => (
                            <div className="checkout-item">
                              <Row>
                                <Col xs={9}>
                                  <p
                                    style={{ margin: "0px", fontSize: "14px", fontWeight: '500' }}
                                    key={checkout.id}
                                  >
                                    {checkout.service}
                                  </p>
                                  <p
                                    style={{ margin: "0px", fontSize: "14px", fontWeight: '500' }}
                                    key={checkout.id}
                                  >
                                    {checkout.service_name}
                                  </p>
                                </Col>
                                <Col xs={3}>

                                  <p
                                    style={{ margin: "0px", textAlign: "center", fontSize: "14px", fontWeight: '500' }}
                                    key={checkout.id}
                                  >
                                    BDT {checkout.price}
                                  </p>
                                </Col>
                              </Row>

                            </div>
                          ))

                        )}
                        <Row>
                          <Col xs={9} style={{ backgroundColor: "" }}>
                            <p
                              style={{ margin: "0px", fontSize: "14px", textAlign: "right", fontWeight: '500' }}
                            >
                              Total Amount:
                                  </p>
                          </Col>
                          <Col xs={3} style={{ backgroundColor: "" }}>
                            <p
                              style={{ margin: "0px", textAlign: "center", fontSize: "14px", fontWeight: '500' }}
                            >
                              BDT  {checkouts.reduce(
                              (a, v) => (a = a + parseFloat(v.price)),
                              0
                            )}
                            </p>

                          </Col>
                        </Row>
                      </div>
                    </Row>

                    <from>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1"> <img src="img/AnotherPic/notes.png" style={{ width: "60px" }} alt="" /> Do you want to add any notes with your order?</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Type here…" rows="3"></textarea>
                      </div>
                    </from>
                    <Row>
                      <div className="checkout-heading">
                        <h3 style={{ color: "33669A" }}>Type of Payment</h3>
                        <p style={{ color: "grey" }}>
                          Would you like to pay by cash or through digital payment?
                        </p>
                        <Row>

                          <label>
                            <input type="radio"
                              defaultChecked={true}
                            //onChange={this.toggleChange}
                            />
                            {" "}Cash on Service Completion
                        </label>

                          <label style={{ marginTop: "10px" }}>
                            <input type="radio"
                              defaultChecked={false}
                              disabled={true}
                            //onChange={this.toggleChange}
                            />
                            {" "}Digital Payment <span> <img src="img/AnotherPic/ssl_logo.png" alt="ssl_logo.png" style={{width:"30%"}} /> </span>
                        </label>


                        </Row> <br />

                        <Row>

                          <label>
                            <input type="checkbox"
                              defaultChecked={true}
                            //onChange={this.toggleChange}
                            />
                            {" "} <a href="privacy_policy.html" target="_blank">I have read privacy policy,</a> <a href="term_condition.html" target="_blank"> terms and condition</a> &  <a href="refund_return_policy.html" target="_blank">refund and return policy.</a>
                          </label>
                         
                         
                        </Row>



                      </div>
                    </Row>


                    <div className="form-floation mb-3"><br />
                      <input
                        className="btn btn-success form-control"
                        type="submit"
                        value="Place Order"
                      />
                    </div>
                  </Container>

                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <ConfirmModal
        orderId={orderId}
        show={modalShow}
        userName={userInfo[0].name}
        onHide={() => modalHide()}
      ></ConfirmModal>
      {/* {isDesktopOrLaptop ?
        <Footer></Footer>
        :
        <FooterMobile></FooterMobile>
      } */}

    </div>
  );
}

export default Checkout;
