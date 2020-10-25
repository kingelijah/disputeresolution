import React, { useState} from 'react'
import { Container, Card, Row, Col, Form, Button, Nav, Tab, FormControl, Table,Modal } from 'react-bootstrap';
import Navbars from './navbar';
import Mask from "./mask.svg";

function Logs() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <div>
            <Navbars />
            <Container>
            <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title  id="example-modal-sizes-title-lg">
              <b>Notifications</b>
              <small><p>13 oct 2020</p></small>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Status:
    </Form.Label>
    <Col sm={10}>
        <p>thfhskjkak</p>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Mesage:
    </Form.Label>
    <Col sm={10}>
    <p>thfhskjkak</p>
    </Col>
  </Form.Group>
</Form>
          </Modal.Body>
        </Modal>
                <Card >
                    <Card.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={2}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first"><Button onClick={() => setLgShow(true)} variant="primary"> Notifications</Button></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Card >
                                                <Card.Body>
                                                    <div >
                                                        <h5><b>Notifications</b></h5>
                                                    </div>
                                                    <div className="float-right">
                                                        <Form inline>

                                                            <h5><FormControl type="text" placeholder="search logs" className="mr-sm-10" /></h5>
                                                            <h5><FormControl type="text"  placeholder="13/12/20" className="mr-sm-2" /></h5>

                                                        </Form>

                                                    </div>
                                                    <Table striped bordered hover size="sm">
                                                        <thead>
                                                            <tr>
                                                                <th>Status</th>
                                                                <th>Type</th>
                                                                <th>Message</th>
                                                                <th>Date</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>Otto</td>
                                                                <td>Otto</td>

                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>Otto</td>
                                                                <td>Otto</td>
                                                               
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>Otto</td>
                                                                <td>Otto</td>
                                                               
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Card.Body>
                                            </Card>        </Tab.Pane>

                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}

export default Logs
