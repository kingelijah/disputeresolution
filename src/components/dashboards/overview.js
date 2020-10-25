import React, { Component } from 'react';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Table, Navbar, Button, Nav, Dropdown,Form,Modal } from 'react-bootstrap/';
import Doughnut from './doughnutChart';
import Navbars from './navbar';
import Axios from 'axios';



export default class overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
       lgShow:false,
       Team:""
    };
}
  render(){ 
     var datas = JSON.parse(localStorage.getItem("un"));
    let disputeList = datas.PendingDispute? datas.PendingDispute : [];
  
     
     
const renderDisputeList = (dispute,index) => {
   return(
     <tr key={index}>
       <td>{dispute.CardType}</td>
       <td>{dispute.Platform}</td>
       <td>{dispute.Category}</td>
       <td>{dispute.Channel}</td>
       <td>{dispute.Status}</td>
     </tr>
   )
}

const handleChange = e => {
  e.preventDefault();
  this.setState({Team :e.target.value})
}
const handleSubmit = e => {
 console.log(datas.Token)
  console.log(this.state.Team)
  Axios.post(`https://fbn.vasudamall.com/Admin/CreateTeam?team=${this.state.Team}`, {},{
    headers: {
      'Authorization': `Bearer ${datas.Token}`
    },
  })
  .then( res=>{ 
        console.log( res.data)
       alert('Team Created Successfully')
      
  
      })
      .catch((error) => {
      
        console.error(error)})
}

    let buttons;
  if(datas.Role === 'Admin'){
     buttons = (
      <Row>
          <Col sm={3}>
           <Card >
            <Card.Body>
              <div className="float-left">
                <h6 className="disputes">Total</h6>
                <h5>Users</h5>
              </div>
              <div className="float-right">
                <h1 className="unresolved"><b>256</b></h1>
              </div>
            </Card.Body>
            <Card.Footer className="footer text-center" variant="primary" ><a href="/hghf">see all</a></Card.Footer>
          </Card> </Col>
          <Col sm={9}><Card >
            <Card.Body className="user-card">
              <div className="float-right">
                <h6 ><a href='/Register'> Create user</a></h6>
                <h6 ><a href='/assigndisputes'> Profile a new user</a></h6>
                <h6 ><Button onClick={() => this.setState({lgShow:true})} variant="warning">Create Teams</Button></h6>
              </div>
             
            </Card.Body>
          </Card> </Col>
         
        </Row>
     )
  }
  else{
  buttons = (
    <Row>
    <Col sm={3}>
      <Card >
      <Card.Body>
        <div className="float-left">
          <h6 className="disputes">DISPUTES</h6>
          <h5>UnResolved</h5>
        </div>
        <div className="float-right">
          <h1 className="unresolved"><b>{ datas.TotalAssigned - datas.TotalResolved}</b></h1>

        </div>

      </Card.Body>
      <Card.Footer className="footer text-center" variant="primary" ><a href="/hghf">see all</a></Card.Footer>
    </Card> </Col>
    <Col sm={3}><Card >
      <Card.Body>
        <div className="float-left">
          <h6 className="disputes">DISPUTES</h6>
          <h5>Resolved</h5>
        </div>
        <div className="float-right">
          <h1><b>{datas.TotalResolved}</b></h1>
        </div>

      </Card.Body>
      <Card.Footer className="footer text-center" variant="primary" ><a href="/hghf">see all</a></Card.Footer>
    </Card> </Col>
    <Col sm={3}><Card >
      <Card.Body>

        <div className="float-left">
          <h6 className="disputes">DISPUTES</h6>
          <h5>Assigned</h5>
        </div>
        <div className="float-right">
          <h1><b>{datas.TotalAssigned}</b></h1>
        </div>
      </Card.Body>
      <Card.Footer className="footer text-center" variant="primary" ><a href="/hghf">see all</a></Card.Footer>
    </Card>
     </Col>
    <Col sm={3}><Card >
      <Card.Body>

        <div className="float-left">
          <h6 className="disputes">DISPUTES</h6>
          <h5>Total</h5>
        </div>
        <div className="float-right">
          <h1><b>{datas.TotalAssigned + datas.TotalResolved}</b></h1>
        </div>

      </Card.Body>
      <Card.Footer className="footer text-center" variant="primary" ><a href="/hghf">see all</a></Card.Footer>
    </Card> </Col>
  </Row>
  );
  }
  return (
    <div className="home">
      <Navbars />
      <Container>
      <h6 className = "modal-title">Welcome {datas.Role}</h6>
      <Modal
          size="lg"
          show={this.state.lgShow}
          onHide={() => this.setState({lgShow:false})}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title classname="modal-title" id="example-modal-sizes-title-lg">
              <b> Add New User</b>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="float-left">
            <input
                placeholder="Team"
                type="text"
                name="team"
                noValidate
                onChange={handleChange}
              />
             
              <Button variant="primary" onClick={handleSubmit} type="submit">
                Create Team
  </Button>
            </div>
           

          </Modal.Body>
        </Modal>
        <div>
          <h5><b>Overview</b></h5>
        </div>
       {buttons}
        <div>
          <h5><b>Disputes</b></h5>
        </div>
        <Row>
          <Col sm={6}>
            <Card >

              <Card.Body>
                <Button variant='btn btn-primary float-right'> see all</Button>

                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Card Type</th>
                      <th>Platform</th>
                      <th>Category</th>
                      <th>Channel</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {disputeList.map(renderDisputeList)}                  
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card >
              <Card.Body>
                <div variant="float-left">
                  <h5 className="disputes">Disputes</h5>
                  <h5>status</h5>
                </div>
                <Doughnut />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
}


