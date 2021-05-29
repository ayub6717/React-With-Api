import { useState } from "react";
import './ClientSay.css'
import Modal from 'react-bootstrap/Modal'
import { Button, Form, Row, Col } from 'react-bootstrap'



function CallNow() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div>
            <div> 
                <Modal size="lg" show={show} onHide={handleClose} animation={true} style={{borderRadious:"17px"}}>
                    <Modal.Header closeButton className="shadX">
                        <Modal.Title>Request for service</Modal.Title> 
                    </Modal.Header>
                    <Modal.Body> <br/>
                        <Form style={{paddingLeft:"60px", paddingRight:"60px"}}>
                            <Form.Group controlId="exampleForm.ControlSelect1" style={{width:"60%"}}>
                                <Form.Label>আপনার এলাকা ?</Form.Label>
                                <Form.Control as="select">
                                    <option>Select Location</option>
                                    <option>Mohammadpur</option>
                                    <option>Farmgate</option>
                                    <option>Dhanmondi</option>
                                    <option>Gulshan</option>
                                    <option>Mirpur</option>
                                    <option>Motijheel</option>
                                    <option>Malibag</option>
                                    <option>Banani</option>
                                    <option>Mirpur DOHS</option>
                                    <option>Mohakhali DOHS</option>
                                    <option>Baridhara DOHS</option>
                                    <option>Bashundhara R/A</option>
                                    <option>Khilkhet</option>
                                    <option>Nikunjo</option>
                                    <option>Badda</option>
                                    <option>Baridhara</option>
                                    <option>Bashabo</option>
                                    <option>Jatrabari</option>
                                    <option>Khilgaon</option>
                                    <option>Mogbazar</option>
                                    <option>Mohakhali</option>
                                    <option>Rampura</option>
                                    <option>Shahbag</option>
                                    <option>Tejgaon</option>
                                    <option>Cantonment</option>
                                </Form.Control>
                            </Form.Group> <br />

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>আপনার প্রয়োজনীয় সার্ভিসটি কি ?</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="উদাহরণ : আমার ফ্রিজ দিয়ে পানি পড়ছে…" />
                            </Form.Group> <br />

                            <Row>
                                <Form.Label>আপনার পরিচয় ?</Form.Label>
                                <Col>
                                    <Form.Control placeholder="আপনার নাম" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="আপনার ফোন নম্বর" />
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body> <br/>
                    <Modal.Footer>
                        <Modal.Title>      
                            <Button type="submit" style={{ backgroundColor: "#287883", textAlign: "center" }}>
                                Request Service
                            </Button></Modal.Title>
                    </Modal.Footer> <br/>
                </Modal>
            </div>

            <div className="call-bg">
                <div className="container">
                    <div className="row" style={{ padding: "3%" }}>
                        <div className="col-sm-5">
                            <div className="call-mid" style={{ padding: "20px" }}>
                                <h1>Did not find what you are looking? </h1>
                                <p>Please request your desire service </p>
                            </div>
                        </div>
                        <div className="col-sm-7" >
                            <div className="call-now">
                                <span><button className="call-btn"> <img src="img/AnotherPic/headset.svg" style={{ width: "20px", marginLeft: "23px" }} alt="" /> <b >Call Now</b></button> <button className="call-btn" onClick={handleShow}><b style={{ marginLeft: "20px" }}>Request a service</b></button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallNow
