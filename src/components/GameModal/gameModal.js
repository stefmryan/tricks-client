import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';

const GameModal = () => {

    const [show, setShow] = useState(false);

    const modalClose = () => setShow(false);
    const modalShow = () => setShow(true);
    return (<div>
        <div className="App p-4">
            <Button variant="success" onClick={modalShow}>
                Launch demo modal
            </Button>
            <Modal show={show} onHide={modalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Title for Modal</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Body Content.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={modalClose}>Close Modal</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    </div>)
}
export default GameModal;