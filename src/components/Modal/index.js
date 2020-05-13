import React, { useState } from "react";
import "./style.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

function ModalCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>

        <h4>
          Giftify
</h4>
        <picture>
          <source type="image/png" srcset="../../images/giftify/main-dashboard.png" />
          <img src="../../images/giftify/main-dashboard.png" alt="dashboard" />

        </picture>
      </div>
      <Button variant="primary" onClick={handleShow}>

      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Giftify</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>

            <h4>
              Giftify
            </h4>
            <picture>
              <source type="image/webp" srcset="../../images/giftify/main-dashboard.png" />
              <img src="../../images/giftify/main-dashboard.png" alt="dashboard" />

            </picture>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary" onClick={handleClose}>
            Launch App
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalCard