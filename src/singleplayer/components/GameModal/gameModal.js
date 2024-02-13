import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import React from 'react';
import Card from '../Card/card';
//import styles from '../GameModal/gameModal.module.css'
const GameModal = ({ show, setShow, winningCard, participantsArr }) => {



    const modalClose = () => setShow(false);
    //const modalShow = () => setShow(true);
    return (<div>
        <div className="App p-4">
            {/* <Button variant="success" onClick={modalShow}>
                Launch demo modal
            </Button> */}
            <Modal show={show} onHide={modalClose}
                size="lg">
                {/* <Modal.Header >
                    <Modal.Title>Title for Modal</Modal.Title>
                </Modal.Header> */}

                <Modal.Body>
                    <p>Cards Played</p>
                    <div className="d-flex flex-row">
                        {participantsArr.map((participant, index) => {
                            return (
                                <div key={index}>{participant.name}
                                    <img
                                        key={index}
                                        id={`${participant.cardPlayed[0] !== undefined ? participant.cardPlayed[0].suit : null}${participant.cardPlayed[0] !== undefined ? participant.cardPlayed[0].face : null}`}
                                        src={`./images/cards/face/${participant.cardPlayed[0] !== undefined ? participant.cardPlayed[0].image : null}`}
                                        alt='face'
                                        width={150}
                                        height={200}
                                    />
                                </div>
                            );
                        })}
                    </div>

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