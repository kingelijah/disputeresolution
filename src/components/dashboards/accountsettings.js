import React from 'react'
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import Bell from "./bell.png";
import Profile from "./profile.svg";
import Logout from "./logout.svg";
import Navbars from './navbar';


function Accountsettings() {
  return (
    <div>
      <Navbars />
      <Container>
        <div>
          <h5><b>Account Settings</b></h5>
        </div>
        <Row>
          <Col sm={4}>
            <Card bg="warning" className="text-center p-3">
              <blockquote className="blockquote mb-0 card-body">
                <img src={Profile} />
                <footer >
                  <h6 >
                    <b>Joshua Browder</b>
                  </h6>

                </footer>
                <footer >
                  <small className="text-muted">
                    ID NO: 22332
        </small>

                </footer>
                <footer >
                  <small >
                    <b> Team Lead</b>
                  </small>

                </footer>
              </blockquote>
            </Card>



          </Col>
          <Col sm={8}>
            <Card >
              <Card.Body>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="last name" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" placeholder=" email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="city" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                  </Form.Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Accountsettings
