import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SelectSearch from "react-select-search";
import NavBar from "../../NavBar/NavBar";
import { Modal, Button } from "react-bootstrap";
import { Table, Row, Col } from 'react-bootstrap';
import cartEmptyImage from "../../../images/cartEmpty.jpg";
import DatePicker from 'react-date-picker';

const AdminCreateUser = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartModalVisible, setCartModalVisible] = useState(false);
  const [modalSecond, setModalSecond] = useState(false);
  const [categoryId, setCategoryId] = useState();
  const [userInfo, setUserInfo] = useState([
    {
      id: 0,
      name: "",
      user_icon: null,
      email: "",
      email_verified_at: null,
      password: "",
      address: "",
      contact_number: "",
      remember_token: null,
      created_at: "",
      updated_at: "",
      contact_person: "",
      contact_person_number: "",
      order_address: "",
      zone_id: ""
    }
  ]);
  const [totalPrice, setTotalPrice] = useState();
  const [cartEmpty, setCartEmpty] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [subCategoryId, setSubCategoryId] = useState();
  const [serviceId, setServiceId] = useState();
  const [cart, setCart] = useState([]);

  const [query, setQuery] = useState("");
  const history = useHistory();
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

  const [optionsCatagory, setOptionsCatagory] = useState([]);
  const [optionsSubCategory, setOptionsSubCatagory] = useState([]);
  const [optionsService, setOptionsService] = useState([]);
  const [optionsFinalService, setOptionsFinalService] = useState([]);


  //modal

  const closeModal = () => {
    setCartModalVisible(false);
    setModalSecond(false)
  }
  const showCartModal = async (userInfo) => {
    setUserInfo(userInfo);
    setCartModalVisible(true);
    fetchItemCatagory();
    const link =
      "https://backend.amaderservice.com/api/ViewCart?userid=" +
      userInfo.id;
    const data = await fetch(link);
    const dataJSON = await data.json();
    setCart(dataJSON);
    cartEmptyHandler(dataJSON);

    const total = dataJSON.reduce((a, v) => (a = a + parseFloat(v.price)), 0);
    setTotalPrice(total);
  }



  //cart

  const addToCart = async (finalServiceId, unitPrice) => {
    const link =
      "https://backend.amaderservice.com/api/addCart?userid=" +
      userInfo.id +
      "&serviceid=" +
      finalServiceId
      + "&price="
      + unitPrice
      + "&area=0";
    const data = await fetch(link);
    const item = await data.json();
    viewCart();
  };

  const removeFromCart = async (orderId) => {
    const link =
      "https://backend.amaderservice.com/api/removeCart?userid=" +
      userInfo.id +
      "&id=" +
      orderId;
    const data = await fetch(link);
    const item = await data.json();
    viewCart();
  };

  const handleTimeZone = (value) => {
    setTimeString(value)

  }

  const viewCart = async () => {
    const link =
      "https://backend.amaderservice.com/api/ViewCart?userid=" +
      userInfo.id;
    const data = await fetch(link);
    const dataJSON = await data.json();
    setCart(dataJSON);
    cartEmptyHandler(dataJSON);

    const total = dataJSON.reduce((a, v) => (a = a + parseFloat(v.price)), 0);
    setTotalPrice(total);

  };

  const cartEmptyHandler = async (item) => {
    console.log("this is array of cart" + JSON.stringify(item))
    if (item.length == 0) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
  };

  //checkout

  const placeorder = async () => {
    try {
      
      const correctDateMonth = date.getMonth() + 1;

      const completeDate = date.getDate() + "-" + correctDateMonth + "-" + date.getFullYear();
      
            const link =
              "https://backend.amaderservice.com/api/ConfirmCart?userid=" +
              userInfo.id +
              "&zoneid=" +
              userInfo.zone_id +
              "&expectedTime="
              + completeDate + " " + timeString;
              const data = await fetch(link);
              const item = await data.json();
              if (item.orderid) {
                setOrderId(item.orderid)
                setModalSecond(true);
              } else {
                alert("Error!");

              }
         
      

    } catch (error) {
      alert("Error!");
    }
  };

  //fetching


  const fetchUser = async () => {
    fetch("https://backend.amaderservice.com/api/finduser?info=" + query)
      .then((response) => response.json())
      .then((data) => setUserList(data))
      .then(() => setLoading(false));
  };

  const fetchItemCatagory = async () => {
    const optionsCatagory = await fetch(
      `https://backend.amaderservice.com/api/showservice`
    );
    const itemCatagory = await optionsCatagory.json();
    const newArrayCatagory = itemCatagory.map(({ id, category_name }) => ({
      value: id,
      name: category_name,
    }));
    setOptionsCatagory(newArrayCatagory);
    setOptionsFinalService([])


  };

  const fetchItemSubCatagory = async (id) => {
    const optionsCatagory = await fetch(
      `https://backend.amaderservice.com/api/subcatagory?maincatagoryid=` + id
    );
    const itemCatagory = await optionsCatagory.json();
    const newArrayCatagory = itemCatagory.map(({ id, service_type_name }) => ({
      value: id,
      name: service_type_name,
    }));
    setOptionsSubCatagory(newArrayCatagory);
    setOptionsFinalService([])

  };

  const fetchItemService = async (id) => {
    const link = `https://backend.amaderservice.com/api/servicelist?subcatagoryid=` + id;
    const optionsCatagory = await fetch(link);
    const itemCatagory = await optionsCatagory.json();
    const newArrayCatagory = itemCatagory.map(({ id, service_name }) => ({
      value: id,
      name: service_name,
    }));
    setOptionsService(newArrayCatagory);
    setOptionsFinalService([])


  };

  const fetchItemFinalService = async (id) => {
    const link = `https://backend.amaderservice.com/api/finalServiceList?serviceid=` + id;
    const optionsCatagory = await fetch(link);
    const itemCatagory = await optionsCatagory.json();

    setOptionsFinalService(itemCatagory);
  };



  //handlers



  const handleCategory = (id) => {
    setCategoryId(id);
    fetchItemSubCatagory(id);
  }

  const handleSubCategory = (id) => {

    setSubCategoryId(id);
    fetchItemService(id);
  }

  const handleService = (id) => {
    fetchItemFinalService(id);
    setServiceId(id);
  }


  return (
    <div>
      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <div className="container pt-5">
        <h4>
          Home <span className="homeSpan">.</span> Place Order
        </h4>{" "}
        <br />
        <div className="row d-flex">
          <div className="col-md-2">
            <ol className="UserDashboardList">
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/account");
                }}
              >
                Admin Account
              </li>{" "}
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/addmainservice");
                }}
              >
                Add New Service
              </li>
              <li onClick={() => {
                  history.push("/admin/a6b1q35/addlocation");
                }}
              >
                Add New Location
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/pendingorder");
                }}
              >
                Pending Order
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/assignedorder");
                }}
              >
                Assigned Order
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/pendingquotation");
                }}
              >
                Pending Quotation
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/regusers");
                }}
              >
                Registered Users
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/regvendors");
                }}
              >
                Registered Vendors
              </li>
              <li
                className="UserDashboardListAccount"
              >
                Place Order
              </li>
            </ol>
          </div>
          <div className="col-md-10">
            <div className="container">
              <h1>Place order manually</h1>
              <div className="" style={{ marginTop: "00px", padding: "0px" }}>
                <h3 style={{ textAlign: "left", marginTop: 20, marginBottom: 20, color: "grey" }}>
                  Search for the user by name, mobile number or email
                </h3>
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="row justify-content-center">
                      <div className="col-md-4">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          style={{ height: "40px" }}
                          value={query}
                          onChange={(event) => setQuery(event.target.value)}
                          placeholder="Search by name, mobile or email"
                        />
                      </div>
                      <div className="col-md-4">
                        <button className="btn btn-success" onClick={() => fetchUser()}>Search</button>
                      </div>
                      <div className="col-md-4">
                      </div>
                    </div>
                  </div>
                  {loading ?
                    <div className="col-md-12"></div>
                    :
                    <div className="col-md-12" style={{ backgroundColor: "#d0d0d030", borderRadius: 10, marginTop: 20 }}>
                      <h3 style={{ textAlign: "left", marginTop: 30, marginBottom: 20, color: "black" }}>
                        Found {userList.length} match
                    </h3>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Created At</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userList.map((item) => (
                            <tr style={{cursor:"pointer"}} onClick={() => showCartModal(item)}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.contact_number}</td>
                              <td>{item.address}</td>
                              <td>{item.created_at.slice(0, -17)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  }
                  <Modal
                    size="lg"
                    show={cartModalVisible}
                    onHide={() => closeModal()}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    {modalSecond ?
                      <Modal.Body>
                        <h1 className="text-success">
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            width="140"
                            height="140"
                            fill="currentColor"
                            class="bi bi-check"
                            viewBox="0 0 16 16"
                          >
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                            Placed Order! Order Id #{orderId}
                        </h1>
                      </Modal.Body>
                      :

                      <Modal.Body>
                        <div className="row d-flex">


                          <div className="col-md-6">
                            <SelectSearch
                              id="test-id"
                              options={optionsCatagory}
                              onChange={handleCategory}
                              placeholder="Categories"
                            />
                            <SelectSearch
                              id="test-id"
                              options={optionsSubCategory}
                              onChange={handleSubCategory}
                              placeholder="Sub Categories"
                            />
                            <SelectSearch
                              id="test-id"
                              options={optionsService}
                              onChange={handleService}
                              placeholder="Services"
                            />
                            {optionsFinalService.length == 0 && <p style={{ marginTop: 40, marginLeft: 15 }}>No Services Found</p>}


                            {optionsFinalService.map((item) => (
                              <div className="cart-item" style={{ backgroundColor: "#33669A30" }}>

                                <Row style={{ margin: 0, alignItems: 'center' }}>
                                  <Col>
                                    <p
                                      style={{
                                        width: "100%",
                                        alignSelf: "center",
                                        marginLeft: "5px",
                                        fontSize: "12px",
                                        paddingTop: "0px",
                                      }}
                                      key={item.id}
                                    >
                                      {item.service_name}

                                    </p>
                                    <p style={{ fontSize: "12px", marginLeft: "5px", marginTop: "-10px", marginBottom: "0px" }}>
                                      BDT {item.price}
                                    </p>
                                  </Col>
                                  <Col>
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
                                  </Col>
                                </Row>



                              </div>
                            ))}
                          </div>

                          <div className="col-md-6">
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
                              {cartEmpty ?
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
                                :
                                <div>


                                  <Row>
                                    <div className="left-dash container-scroll">
                                      {cart.map((item) => (
                                        <div className="cart-item">
                                          <Row>
                                            <h4
                                              style={{
                                                width: "250px",
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
                                </div>

                              }
                            </Col>
                          </div>
                          <div className="col-md-12" style={{ marginTop: 10 }}>
                            <Row>


                              <p style={{ color: "grey" }}>
                                Expert will deliver on the following day and time
                              </p>




                              <Col md={4} style={{ marginBottom: "20px" }}>
                                <DatePicker
                                  onChange={onChangeDate}
                                  value={date}
                                  format="dd-MM-y"
                                  clearIcon={null}
                                />


                              </Col>

                              <Col md={3}>

                                <div>
                                  <div style={{ backgroundColor: "white", padding: 0, width: "10rem" }}>
                                    <SelectSearch
                                      options={timeZone}
                                      onChange={handleTimeZone}
                                      placeholder="Select Time..."
                                    />
                                  </div>
                                </div>


                              </Col>

                              <Col md={5}>

                                <Button onClick={placeorder}>Place Order for {userInfo.name}</Button>


                              </Col>




                            </Row>
                          </div>
                        </div>

                      </Modal.Body>
                    }
                  </Modal>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCreateUser;
