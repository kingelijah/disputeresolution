import React from 'react'
import { Container,Card,Row,Col,Form,Button} from 'react-bootstrap';
import Bell from "./bell.png";
import Navbars from './navbar';


function Accountsettings() {
    return (
        <div>
                 <Navbars/>
            <Container>              
            <Row>
          <Col sm={6}>
          <Card bg="warning" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
    <img src={Bell} />
      <footer >
      <h6 >
        <b>Source Title</b> 
        </h6>
       
      </footer>
      <footer >
      <small className="text-muted">
         Source Title
        </small>
      
      </footer>
      <footer >
      <small >
        <b> Source Title</b>
        </small>
        
      </footer>
    </blockquote>
  </Card>



          </Col>
          <Col sm={6}>
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
    <Form.Group  controlId="formGridPassword">
      <Form.Label>Change Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group controlId="formGridPassword">
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Button variant="primary" type="submit">
    Save
  </Button>
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
