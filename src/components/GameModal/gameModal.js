import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import React from 'react';
import Card from '../Card/card';
const GameModal = ({ show, setShow, winningCard }) => {



    const modalClose = () => setShow(false);
    //const modalShow = () => setShow(true);
    return (<div>
        <div className="App p-4">
            {/* <Button variant="success" onClick={modalShow}>
                Launch demo modal
            </Button> */}
            <Modal show={show} onHide={modalClose}>
                <Modal.Header >
                    <Modal.Title>Title for Modal</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Winner of this Trick is: </p>
                    <Card
                        card={winningCard}
                        isOpponent={true} />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={modalClose}>Start next Hand</Button>
                    <Button variant="primary">View Score Table</Button>
                </Modal.Footer>
            </Modal>
        </div>
    </div>)
}
export default GameModal;