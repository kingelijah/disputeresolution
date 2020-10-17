import React, { useState } from 'react';
import './dashboard.css'
import { Container,Card,Table,FormControl } from 'react-bootstrap';
import Navbars from './navbar';
import Eye from "./eye.png";
import Bin from "./bin.svg";
import { Button, Modal,Form } from 'react-bootstrap/';


function Manageuser() {

     const [lgShow, setLgShow] = useState(false);

  return (
      
    <div className="dispute">
      <Navbars/>
      <Container>
      <div>
                  <h5>Manage Users</h5>
                </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title classname="modal-title" id="example-modal-sizes-title-lg">
             <b> Add New User</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="float-left">
            <Form.Group size="sm" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control size="sm" as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Button variant="primary" type="submit">
    Add User
  </Button>
            </div>
            <div className="float-right">
            <Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" />
  </Form.Group>
</Form>
            <Button variant="primary" type="submit">
    Upload
  </Button>
            </div>

        </Modal.Body>
      </Modal>
      <Card >
              <Card.Body>
                
                <div className="icon-dot float-right">
                <Button onClick={() => setLgShow(true)} variant="light"></Button>
                </div>
                <div className="float-right">
              <h5><FormControl type="text" placeholder="Search" className="mr-sm-2" /></h5>
                </div>
              
                <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>User Id</th>
      <th>full Name</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>City </th>
      <th>Team Lead</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td><a href="/erh"><img src={Eye} /></a></td>
      <td><a href="/erh"><img src={Bin} /></a></td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td><a href="/erh"><img src={Eye} /></a></td>
      <td><a href="/erh"><img src={Bin} /></a></td>
      </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td><a href="/erh"><img src={Eye} /></a></td>
      <td><a href="/erh"><img src={Bin} /></a></td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td><a href="/erh"><img src={Eye} /></a></td>
      <td><a href="/erh"><img src={Bin} /></a></td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td><a href="/erh"><img src={Eye} /></a></td>
      <td><a href="/erh"><img src={Bin} /></a></td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td><a href="/erh"><img src={Eye} /></a></td>
      <td><a href="/erh"><img src={Bin} /></a></td>
    </tr>
    <tr>
    <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td><a href="/erh"><img src={Eye} /></a></td>
      <td><a href="/erh"><img src={Bin} /></a></td>
    </tr>
  </tbody>
</Table>
              </Card.Body>
            </Card>
      </Container>
    </div>
  );
}

export default Manageuser;
