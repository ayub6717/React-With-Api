import React, { useEffect, useState, Text } from "react";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";
import NavBar from "../NavBar/NavBar";
import "./Quotation.css";
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
import QuotationModal from "./QuotationModal";
function Quotation({match}) {
  const [userInfo, setUserInfo] = useState(reactLocalStorage.getObject("userInfo"));
  const [userZoneId, setUserZoneId] = useState(reactLocalStorage.get("userZoneId"));

  const { promiseInProgress } = usePromiseTracker();
  const [checkouts, setCheckouts] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })

  const [area, setArea] = useState("");
  const [details, setDetails] = useState("");
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
      
      const correctDateMonth = date.getMonth() + 1;

      const completeDate = date.getDate() + "-" + correctDateMonth + "-" + date.getFullYear();

      fetch("https://backend.amaderservice.com/api/setquotations", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: userInfo[0].id,
          zoneid: userZoneId,
          serviceid: match.params.id,
          expectedTime: completeDate + " " + timeString,
          area: area,
          description: details
        }),
      })
        .then((res) => res.json())
        .then((response) =>  setModalShow(true))
        .catch((error) => console.error("Error:", error));
      

    } catch (error) {
      alert("Error!");
    }
  };


  return (
    <div>
      <NavBar></NavBar>


      <div className="container-fluid grey">

        <div className="checkout-container">
          <div style={{ backgroundColor: "#d1d1d150", width: "100%", height: "2px", marginTop: "10px" }}></div>
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
                          <Row>



                            <Col >
                              <DatePicker
                                onChange={onChangeDate}
                                value={date}
                                format="dd-MM-y"
                                clearIcon={null}
                              />


                            </Col>
                            <Col >

                              <div>
                                <div style={{ backgroundColor: timeEmpty ? "red" : "white", padding: timeEmpty ? 2 : 0, width:"16rem" }}>
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
                            <div style={{ backgroundColor: timeEmpty ? "red" : "white", padding: timeEmpty ? 2 : 0, width:"16rem" }}>
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

                    <Row>
                      <div className="checkout-heading">
                        <h3 style={{ color: "33669A" }}>Specification</h3>
                        <p style={{ color: "grey" }}>
                          Please enter details of your premises
                        </p>
                        <form action="" onSubmit={handleClick}>
                          <div style={{margin: "-10px", padding: "10px", marginBottom: "10px", borderRadius: "10px" }}>
                            
                            <div class="form-floating mb-3">
                              <input
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={area}
                                onChange={(event) => setArea(event.target.value)}
                                required
                              ></input>
                              <label for="floatingInput">Area in sqft.</label>
                            </div>
                            <div class="form-floating mb-3">
                              <input
                                class="form-control"
                                id="floatingPassword"
                                type="text"
                                placeholder="number"
                                value={details}
                                onChange={(event) => setDetails(event.target.value)}
                                required
                              ></input>
                              <label for="floatingPassword">Details</label>
                            </div>
                          </div>                          

                          <div className="form-floation mb-3">
                            <input
                              className="btn btn-primary form-control"
                              type="submit"
                              value="Ask for quotation"
                            />
                          </div>

                        </form>
                      </div>
                    </Row>

                  </Container>


                </div>
              </Col> 
              <Col></Col>
             
            </Row>
          </Container>
        </div>
      </div>
      <QuotationModal
        orderId={orderId}
        show={modalShow}
        userName={userInfo[0].name}
        userEmail={userInfo[0].email}

        onHide={() => modalHide()}
      ></QuotationModal>
      {/* {isDesktopOrLaptop ?
        <Footer></Footer>
        :
        <FooterMobile></FooterMobile>
      } */}

    </div>
  );
}

export default Quotation;
