import React, { useState } from 'react';
import { Container, Card, Table, FormControl, Modal, Col, Row, Button, Form } from 'react-bootstrap';
import Navbars from './navbar';
import Eye from "./eye.png";
import Edit from "./edit.svg";
import Accept from "./accept.svg";

function Systemresolveddisputes() {
    const [lgShow, setLgShow] = useState(false);
    return (
        <div className="dispute">
            <Navbars />
            <Container>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title classname="modal-title" id="example-modal-sizes-title-lg">
                            <b> View/Edit Dispute</b>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <h5><b>John Doe</b></h5>
                                <small>Dispute No: 90090</small>
                                <hr></hr>
                                <Row>
                                    <Col sm={6}>
                                        <small>Bank</small>
                                        <h6><b>First Bank</b></h6>
                                    </Col>
                                    <Col sm={6}>
                                        <small>To</small>
                                        <h6><b>GT Bank</b></h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <small>Category</small>
                                        <h6><b>Issuing</b><img src={Edit} /></h6>
                                        <hr></hr>
                                    </Col>
                                    <Col sm={6}>
                                        <small>Channel</small>
                                        <h6><b>Mastercom </b><img src={Edit} /></h6>
                                        <hr></hr>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <small>Date added</small>
                                        <h6><b>12/10/20</b></h6>
                                    </Col>
                                    <Col sm={6}>
                                        <small>Expires</small>
                                        <h6><b>12/10/20</b></h6>
                                    </Col>
                                </Row>
                                <Button variant="primary" type="submit">
                                    View Journal
  </Button>
                            </Col>
                            <Col sm={6}>
                                <Row>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Control as="select" defaultValue="Assigned To">
                                            <option>Assigned To</option>
                                            <option>value...</option>
                                        </Form.Control>
                                    </Form.Group>

                                </Row>
                                <Row>
                                    <h5>System Resolved</h5>
                                </Row>
                                <Row>
                                    <Col sm={6}><Button variant="primary" type="submit">
                                        Accept
  </Button></Col>
                                    <Col sm={6}><Button variant="danger" type="submit">
                                        Decline
  </Button></Col>


                                </Row>

                            </Col>
                        </Row>

                    </Modal.Body>
                </Modal>
                <div >
                    <h5><b>System Resolved Disputes</b></h5>
                </div>
                <Card >
                    <Card.Body>

                        <div className="float-right">
                            <Button variant="primary" type="submit">
                                Accept All
  </Button>
                        </div>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Dispue Id</th>
                                    <th>Bank</th>
                                    <th>Category</th>
                                    <th>Channel</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <Button onClick={() => setLgShow(true)} variant="light"> <td><img src={Eye} /></td></Button>
                                    <td><a href="/erh"><img src={Accept} /></a></td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <Button onClick={() => setLgShow(true)} variant="light"> <td><img src={Eye} /></td></Button>
                                    <td><a href="/erh"><img src={Accept} /></a></td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <Button onClick={() => setLgShow(true)} variant="light"> <td><img src={Eye} /></td></Button>
                                    <td><img src={Accept} /></td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <Button onClick={() => setLgShow(true)} variant="light"> <td><img src={Eye} /></td></Button>
                                    <td><a href="/erh"><img src={Accept} /></a></td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <Button onClick={() => setLgShow(true)} variant="light"> <td><img src={Eye} /></td></Button>
                                    <td><a href="/erh"><img src={Accept} /></a></td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <Button onClick={() => setLgShow(true)} variant="light"> <td><img src={Eye} /></td></Button>
                                    <td><a href="/erh"><img src={Accept} /></a></td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <Button onClick={() => setLgShow(true)} variant="light"> <td><img src={Eye} /></td></Button>
                                    <td><a href="/erh"><img src={Accept} /></a></td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <Button onClick={() => setLgShow(true)} variant="light"> <td><img src={Eye} /></td></Button>
                                    <td><a href="/erh"><img src={Accept} /></a></td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <Button onClick={() => setLgShow(true)} variant="light"> <td><img src={Eye} /></td></Button>
                                    <td><a href="/erh"><img src={Accept} /></a></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Systemresolveddisputes
