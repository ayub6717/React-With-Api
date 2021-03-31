import React from "react";
import { Modal, Button } from "react-bootstrap";
import tick from './../../icons/tick.jpg'
const ConfirmModal = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <img src={tick} alt="" style={{height:"100px", width:"100px", margin:"auto", marginTop:"30px", marginBottom:"-40px"}} srcset=""/>
        <Modal.Body>
          <h1 style={{textAlign:"center", color:"#33669A"}}>
            
            <br/>{props.userName}, your order has been placed successfully!
          </h1>
          <h3 style={{textAlign:"center", color:"#33669A"}}>Your Order ID: {props.orderId}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button className="container btn" onClick={props.onHide}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
