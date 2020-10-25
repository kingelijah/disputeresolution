import React, { useState, useEffect } from 'react';
import './dashboard.css'
import { Container, Card, Table, FormControl, Button, Modal, Form, Row, Image, Col } from 'react-bootstrap';
import Navbars from './navbar';
import Eye from "./eye.png";
import Bin from "./bin.svg";
import Profile from "./profile.svg";
import { } from 'react-bootstrap/';
import Axios from 'axios';


function Manageuser() {

  const [lgShow, setLgShow] = useState(false);
  const [users, setUsers] = useState([]);
  var datas = JSON.parse(localStorage.getItem("un"));

  useEffect(() => {
    Axios.get('https://fbn.vasudamall.com/Admin/GetAllUsers', {
      headers: {
        'Authorization': `token ${datas.Token}`
      }
    })
    .then((res) => {
      console.log(res.data)
       setUsers(res.data);
    })
    .catch((error) => {
      console.error(error)
    })  },[]);

    const  changeRole  = Id => e => {
      console.log(Id)
       var newarray = users.find(o => o.StaffId === Id);
       var role = newarray.Role;
       const data = {
         staffId : Id,
         Role : role
       }
       console.log(data)
      Axios.post(`https://fbn.vasudamall.com/Account/AddUserRole`,data, {
    headers: {
      'Authorization': `token ${datas.Token}`
    }
  })
  .then((res) => {
    alert("successful")
    console.log(res.data)
  })
  .catch((error) => {
    alert("failed")
    console.error(error)
  })
    }

    const  deleteUser  = Id => e => {
      console.log(Id)
       var newarray = users.find(o => o.StaffId === Id);
       var role = newarray.Role;
       const data = {
         staffId : Id,
         Role : role
       }
       console.log(data)
      Axios.post(`https://fbn.vasudamall.com/Account/RemoveUser`,data, {
    headers: {
      'Authorization': `token ${datas.Token}`
    }
  })
  .then((res) => {
    alert("successful")
    const index = users.indexOf(users.find(newarray))
    if(index > -1){
      users.splice(index,1);
      setUsers(users);
    }
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })
    }
    const renderUsers = (dispute,index) => {
      return(
        <tr key={index}>
          <td>{dispute.FirstName}</td>
          <td>{dispute.LastName}</td>
          <td>{dispute.Role}</td>
          <td>{dispute.Email}</td>
          <td>{dispute.StaffId}</td>
          <td><Button onClick={changeRole(dispute.StaffId)} variant="primary"><small>Change Role</small></Button></td>
          <td><Button onClick={deleteUser(dispute.StaffId)} variant="light"><img src={Bin} /></Button></td>
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

            {/* <div className="icon-dot float-right">
              <Button onClick={() => setLgShow(true)} variant="light"></Button>
            </div> */}
            <div className="float-right">
              <h5><FormControl type="text" placeholder="Search" className="mr-sm-2" /></h5>
            </div>

            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Role</th>
                  <th>Email </th>
                  <th>Staff Id </th>
                </tr>
              </thead>
              <tbody>
              {users.map(renderUsers)}                  

              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Manageuser;
