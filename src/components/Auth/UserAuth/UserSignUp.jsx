import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import { reactLocalStorage } from "reactjs-localstorage";
import { Redirect, useHistory } from "react-router-dom";
import SelectSearch from "react-select-search";
import { Modal, Button } from "react-bootstrap";

const UserSignUp = () => {
  useEffect(() => {
    fetchZones();
  }, []);
  //local storage data read START

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([
    {
      id: "",
      name: "",
      email: "",
      address: "",
    },
  ]);

  //local storage data read END
  const [username, setUsername] = useState("");
  const [locationZones, setLocationZones] = useState([]);
  const [currLoc, setCurrLoc] = useState("Choose Your Default Location");
  const [currZoneId, setCurrZoneid] = useState();

  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [modalShow, setModalShow] = useState(false);
  
  const [modalShowFailure, setModalShowFailure] = useState(false);


  function handleClick(e) {
    register();
    e.preventDefault();
  }

  function handleRedirect(item) {
    
    history.push(`/`);
  }

  const history = useHistory();

  const handleZones = function (id, name) {

    setCurrLoc(name.name)
    setCurrZoneid(id)
  };

  const fetchZones = async () => {
    const options = await fetch(
      `https://kentradigital.com/api/serviceZone`
    );
    const item = await options.json();
    const newArray = item.map(({ id, zone }) => ({
      value: id,
      name: zone,
    }));
    setLocationZones(newArray);
  };
  function successModal(){
    return(
      <div>
        <h2>success</h2>
      </div>
    )
  }
  const register = async () => {
    try {
      const link =
        "https://kentradigital.com/api/userRegistration?name=" +
        username +
        "&email=" +
        email +
        "&password=" +
        password +
        "&re_password=" +
        rePassword +
        "&zoneid=" +
        currZoneId +
        "&contact_number=" +
        contact
        ;


      const data = await fetch(link);
      const item = await data.json();

      if (typeof item[0].id !== "undefined") {
        //alert("login success")
        setModalShow(true)
        reactLocalStorage.set("userZone", currLoc);
    reactLocalStorage.set("userZoneId", currZoneId);
    reactLocalStorage.set("isLoggedIn", true);
    reactLocalStorage.setObject("userInfo", item);
    
       
      } else {
        setModalShowFailure(true)
      }
    } catch (error) {
      setModalShowFailure(true)
    }
  };

  return (
    <div>
      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h1 className="text-success" style={{textAlign:"center"}}>
            
            <br/>Registration Complete!
          </h1>
        </Modal.Body>
        <Modal.Footer>
          <Button className="container btn-success" onClick={handleRedirect}>
            Start Browsing 
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalShowFailure}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={()=>setModalShowFailure(false)}
      >
        <Modal.Body>
          <h1 className="text-danger" style={{textAlign:"center"}}>
            
            Registration Failed!
          </h1>
        </Modal.Body>        
      </Modal>
      <div className="container pt-5" style={{ marginTop: "150px" }}>
        <h1 className="text-center">User Registration</h1> <br />
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form action="" onSubmit={handleClick}>
              <div class="form-floating mb-3">
                <input
                  type="name"
                  class="form-control"
                  id="name"
                  placeholder="name"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                ></input>
                <label for="floatingInput">Username</label>
              </div>              
              <div class="form-floating mb-3">
                <input
                  type="tel"
                  class="form-control"
                  id="contact"
                  placeholder="+880-12345678901"
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  required
                ></input>
                <label for="floatingInput">Mobile Number</label>
              </div>
              <div class="form-floating mb-3">
                <SelectSearch
                  options={locationZones}
                  onChange={handleZones}
                  placeholder={currLoc}
                  
                />
                <label for="location">Location</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                ></input>
                <label for="floatingInput">Email Address (Optional)</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  value={password}
                  minLength={8}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                ></input>
                <label for="floatingPassword">Password</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  value={rePassword}
                  minLength={8}
                  onChange={(event) => setRePassword(event.target.value)}
                  required
                ></input>
                <label for="floatingPassword">Confirm Password</label>
              </div>
              <div className="form-floation mb-3">
                <input
                  className="btn btn-primary form-control"
                  type="submit"
                  value="Register"
                />
              </div>
              <div className="form-floation mb-3 text-center">
              <p className="link-p">
                  <a  href="http://expert.amaderservice.com/"target="_blank"> <span style={{color:"#1700FF"}}>Are you a Vendor? Switch to Vendor!</span></a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
