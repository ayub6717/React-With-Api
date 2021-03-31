import React from "react";
import { Modal, Button } from "react-bootstrap";
import tick from './../../icons/tick.jpg'
const QuotationModal = (props) => {
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
          <h4 style={{textAlign:"center", color:"black"}}>
            
            <br/>An email containing a quotation will be sent to <span style={{color:"#33669A"}}>{props.userEmail}</span>  very soon!
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button className="container btn" onClick={props.onHide}>
            Home
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default QuotationModal;
