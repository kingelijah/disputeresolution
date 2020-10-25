import React, { useState, useEffect } from 'react';
import './dashboard.css'
import { Container, Card, Table, FormControl, Button, Modal, Form, Row, Image, Col } from 'react-bootstrap';
import Navbars from './navbar';
import Eye from "./eye.png";
import Bin from "./bin.svg";
import Profile from "./profile.svg";
import { } from 'react-bootstrap/';
import Axios from 'axios';


function Process() {

  const [lgShow, setLgShow] = useState(false);
  const [Teams, setTeams] = useState([]);
  var datas = JSON.parse(localStorage.getItem("un"));

  useEffect(() => {
    Axios.get('https://fbn.vasudamall.com/Admin/GetAllProcesses', {
      headers: {
        'Authorization': `token ${datas.Token}`
      }
    })
    .then((res) => {
      console.log(res.data)
       setTeams(res.data);
    })
    .catch((error) => {
      console.error(error)
    })  },[]);

    const renderTeams = (dispute,index) => {
      return(
        <tr key={index}>
          <td>{dispute.ProcessName}</td>
          <td>{dispute.Platform}</td>
          <td>{dispute.ResolutionPlatform}</td>
          <td>{dispute.Card}</td>
          <td>{dispute.Category}</td>         
          <td><a href="/erh"><img src={Bin} /></a></td>
        </tr>
      )
   }
  return (

    <div className="dispute">
      <Navbars />
      <Container>
        <div>
          <h5><b>Manage Users</b></h5>
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
              {/* <Button variant="primary" type="submit">
                Add User
  </Button> */}
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
                  <th>Name</th>
                  <th>Platform</th>
                  <th>Resolution Platform</th>
                  <th>Card</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
              {Teams.map(renderTeams)}                  

              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Process;
