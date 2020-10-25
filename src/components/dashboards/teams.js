import React, { useState, useEffect } from 'react';
import './dashboard.css'
import { Container, Card, Table, FormControl, Button, Modal, Form, Row, Image, Col } from 'react-bootstrap';
import Navbars from './navbar';
import Eye from "./eye.png";
import Bin from "./bin.svg";
import Profile from "./profile.svg";
import { } from 'react-bootstrap/';
import Axios from 'axios';


function Teams() {

  const [lgShow, setLgShow] = useState(false);
  const [lgShow1, setLgShow1] = useState(false);
  const [Teams, setTeams] = useState([]);
  const [valu, setValu] = useState([]);
  const [processes, setProcesses] = useState([]);
  var datas = JSON.parse(localStorage.getItem("un"));

  useEffect(() => {
    Axios.get('https://fbn.vasudamall.com/Admin/GetAllTeams', {
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

    const  getProcesses  = e => {
        Axios.get('https://fbn.vasudamall.com/Admin/GetAllProcesses', {
            headers: {
              'Authorization': `token ${datas.Token}`
            }
          })
          .then((res) => {
            console.log(res.data)
             setProcesses(res.data);
          })
          .catch((error) => {
            console.error(error)

    })
}
const  assign  = Id => e => {
console.log(Id)
const data = {
    ProcessIds : [Id],
    TeamId : valu.Id
}
console.log(data)
Axios.post('https://fbn.vasudamall.com/Admin/AssignProcess', data,{
            headers: {
              'Authorization': `token ${datas.Token}`
            }
          })
          .then((res) => {
              alert('successful')
            console.log(res.data)
          })
          .catch((error) => {
            console.error(error)

    })

}

const  Unassign  = Id => e => {
    console.log(Id)
    const data = {
        ProcessIds : [Id],
        TeamId : valu.Id
    }
    console.log(data)
    Axios.post('https://fbn.vasudamall.com/Admin/UnAssignProcess', data,{
                headers: {
                  'Authorization': `token ${datas.Token}`
                }
              })
              .then((res) => {
                  alert('successful')
                console.log(res.data)
              })
              .catch((error) => {
                console.error(error)
    
        })
    
    }
const  getTeamProcesses  = Id => e => {
    Axios.get('https://fbn.vasudamall.com/Admin/GetAllProcesses', {
        headers: {
          'Authorization': `token ${datas.Token}`
        }
      })
      .then((res) => {
        console.log(res.data)
         setProcesses(res.data);
      })
      .catch((error) => {
        console.error(error)

})
}

    const renderTeams = (dispute,index) => {
      return(
        <tr key={index}>
          <td>{dispute.Teams}</td>
          <td>{dispute.IsActive}</td>
          <td><Button onClick={() => {setLgShow(true);
        setValu(Teams.find(o => o.Id === dispute.Id))
        }} variant="primary"><small>Assign</small> </Button></td>
        <td><Button onClick={() => {setLgShow1(true);
        setValu(Teams.find(o => o.Id === dispute.Id))
        }} variant="primary"><small>UnAssign</small> </Button></td>
        </tr>
      )
   }
   const renderProcess = (dispute,index) => {
    return(
      <tr key={index}>
        <td>{dispute.ProcessName}</td>
        <td>{dispute.Platform}</td>
        <td><Button onClick={assign(dispute.Id)} variant="primary"> Assign process</Button></td>
      </tr>
    )
 }
 const renderProcessTeam = (dispute,index) => {
    return(
      <tr key={index}>
        <td>{dispute.ProcessName}</td>
        <td>{dispute.Platform}</td>
        <td><Button onClick={Unassign(dispute.Id)} variant="primary"> UnAssign process</Button></td>
      </tr>
    )
 }
  return (

    <div className="dispute">
      <Navbars />
      <Container>
        <div>
          <h5><b>manage teams</b></h5>
        </div>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title classname="modal-title" id="example-modal-sizes-title-lg">
              <b> Assign Process</b>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="float-left">
  <h6>Name : <b>{valu.Teams}</b></h6>
              
              <Button variant="primary" onClick={getProcesses} type="submit">
                fetch process
  </Button>
            </div>
            <div className="float-right">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>platform</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {processes.map(renderProcess)}                  

              </tbody>
            </Table>
            </div>

          </Modal.Body>
        </Modal>
        <Modal
          size="lg"
          show={lgShow1}
          onHide={() => setLgShow1(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title classname="modal-title" id="example-modal-sizes-title-lg">
              <b> UnAssign Process</b>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="float-left">
  <h6>Name : <b>{valu.Teams}</b></h6>
              
              <Button variant="primary" onClick={getTeamProcesses(valu.Id)} type="submit">
                fetch process
  </Button>
            </div>
            <div className="float-right">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>platform</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {processes.map(renderProcessTeam)}                  

              </tbody>
            </Table>
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
                  <th>Status</th>
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

export default Teams;
