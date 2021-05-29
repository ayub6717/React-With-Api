import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import './Orders.css'
import { FaLock, FaUser, FaUserAlt } from "react-icons/fa";
import { reactLocalStorage } from "reactjs-localstorage";
import { Redirect, useHistory } from "react-router-dom";



function Login() {







    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [modalShowFailure, setModalShowFailure] = useState(false);


    function handleClick(e) {
        login();
        e.preventDefault();
    }

    const history = useHistory();

    const login = async () => {
        try {
            const link =
                "https://backend.amaderservice.com/api/userLogin?email=" +
                email +
                "&password=" +
                password;

            const data = await fetch(link);
            const item = await data.json();

            if (typeof item[0].id !== "undefined") {
                //alert("login success")
                reactLocalStorage.set("isLoggedIn", true);
                reactLocalStorage.setObject("userInfo", item);
                reactLocalStorage.set("userZone", item[0].zone_name);
                reactLocalStorage.set("userZoneId", item[0].zone_id);
                history.push(`/`);
            } else {
                setModalShowFailure(true)
            }
        } catch (error) {
            setModalShowFailure(true)
        }
    };

    return (
        <>
            <span variant="primary" onClick={handleShow}>
                <b> Login</b>
            </span>


            <Modal
                show={modalShowFailure}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => setModalShowFailure(false)}
            >
                <Modal.Body>
                    <h1 className="text-danger" style={{ textAlign: "center" }}>

                        Login Failed!
                    </h1>
                </Modal.Body>
            </Modal>

            <Modal size="md" show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{ textAlign: "center", }}>WELCOME</h4>
                    <h6 style={{ textAlign: "center" }}>USER LOGIN</h6> <br />

                    <h2>{userInfo[0].name}</h2>
                    <Form action="" onSubmit={handleClick} style={{ padding: "10px" }}>
                        <Form.Label>Email address</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1" className="placeStyleOne"> <FaUser style={{ fontSize: "19px", height: "25px" }} /> </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl className="placeStyle"
                                placeholder="Enter Email"
                                type="Email"
                                aria-describedby="basic-addon1"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </InputGroup>

                        <Form.Label>Password </Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1" className="placeStyleOne"> <FaLock style={{ fontSize: "17px", height: "25px" }} /> </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl className="placeStyle"
                                placeholder="Enter Password"
                                type="password"
                                aria-describedby="basic-addon1"
                                value={password}
                                minLength={8}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </InputGroup>


                        {/* <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> <br /> */}
                        <div style={{ textAlign: "center" }}>
                            <button  class="btn btn-success" 
                            type="submit"
                            value="Login"><b> Login</b></button>
                        </div>

                    </Form>
                    <div style={{ padding: "20px" }}>
                        <span className="log-bt">Forgot Password</span> <span className="log-bt" style={{ float: "right", fontSize: "20px" }}>Create Account</span>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default Login
