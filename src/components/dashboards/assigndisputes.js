import React, { useState,useCallback } from 'react';
import './dashboard.css'
import { Container, Card, Table, FormControl, Form, Modal, Button, Row, Col, Image } from 'react-bootstrap';
import Navbars from './navbar';
import Eye from "./eye.png";
import Bin from "./bin.svg";
import Edit from "./edit.svg";
import Profile from "./profile.svg";
import Axios from "axios";



function Assigndisputes() {
  var datas = JSON.parse(localStorage.getItem("un"));
  const [lgShow, setLgShow] = useState(false);
  const [lgShow1, setLgShow1] = useState(false);
  const [valu, setValu] = useState({});
  const [disputes, setdisputes] = useState(datas.PendingDispute);
  let displayImage = ''; 

  // const  getImageData  = Id => e => {
  //   console.log(valu)
 
  // };
  const  acceptDispute  = Id => e => {
    console.log(Id)
    setLgShow(false)
    Axios.post(`https://fbn.vasudamall.com/Dispute/CloseDispute?disputeId=${Id}&accepted=true`, {
  headers: {
    'Authorization': `token ${datas.Token}`
  }
})
    .then((res) => {
      alert("successful")
      const index = disputes.indexOf(disputes.find(o => o.Id === Id))
            if(index > -1){
              disputes.splice(index,1);
              setdisputes(disputes);
            }
      console.log(res.data)
    })
    .catch((error) => {
      alert("failed")
      console.error(error)
    })
  }

  const  declineDispute  = Id => e => {
    console.log(Id)
    setLgShow(false)
    Axios.post(`https://fbn.vasudamall.com/Dispute/CloseDispute?disputeId=${Id}&accepted=false`, {
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
  if(valu.VerifyTransaction){
    displayImage = (<h5>Finnacle data</h5>)
   
  }
  else if(valu.VerifyTransaction === false){
    displayImage =  (  
      <img src={`data:image/jpeg;base64,${valu.Journal}`} />       
        )
  }
  else{
    displayImage = ('');

  }

  

  const renderDisputeList = (dispute,index) => {
    return(
      <tr key={index}>
        <td>{dispute.PAN}</td>
        <td>{dispute.Stan}</td>
        <td>{dispute.CardType}</td>
        <td>{dispute.Category}</td>
        <td>{dispute.Channel}</td>
        <td><Button onClick={() => {setLgShow(true);
        setValu(disputes.find(o => o.Id === dispute.Id))
        }} variant="light"> <img src={Eye} /></Button></td>
        <td><a href="/erh"><img src={Bin} /></a></td>
      </tr>
    )
  };
  
  

  return (
    <div className="dispute">
      <Navbars />
      <Container>
        <div >
          <h5><b> Disputes</b></h5>
        </div>
        
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
                <small>PAN No: {valu.PAN}</small>
                <hr></hr>
                <Row>
                <Col sm={6}>
                    <small>Stan:</small>
                   <h6><b>{valu.Stan }</b></h6>
                   </Col>
                </Row>
                <Row>
                <Col sm={6}>
                    <small>Card Type: <b>{valu.CardType }</b></small>
                   </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <small>Category</small>
                    <h6><b>{valu.Category}</b></h6>
                    <hr></hr>
                  </Col>
                  <Col sm={6}>
                    <small>Channel</small>
                    <h6><b>{valu.Channel} </b></h6>
                    <hr></hr>

                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <small>Date added</small>
                    <h6><b>{  Date(valu.DateCreated)}</b></h6>
                  </Col>
                </Row>
                {/* <Button variant="primary" onClick={getImageData(valu.Id)}  type="submit">
                  Verify/View Journal
  </Button> */}
              </Col>
              <Col sm={6}>
              
                <Row>
                  <Col sm={6}><Button variant="primary" onClick={acceptDispute(valu.Id)} type="submit">
                    Accept
  </Button></Col>
                  <Col sm={6}><Button variant="danger" onClick={declineDispute(valu.Id)} type="submit">
                    Decline
  </Button></Col>
 

                </Row>
                <Row>
                {displayImage}
                </Row>
              </Col>
            </Row>

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
                  <Col sm={6}>

                    <Col xs={6} md={4}>
                      <img src={Profile} />
                    </Col>
                  </Col>
                  <Col sm={6}>
                    <h6><b>Samuel Craig</b></h6>
                    <small>ID No: 234333</small>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <small>Team</small>
                    <h6><b>Mastercard Issuing </b></h6>
                  </Col>
                  <Col sm={6}>
                    <small>Phone Number</small>
                    <h6><b>08133333333 </b></h6>
                  </Col>
                  <Col sm={6}>
                    <small>email</small>
                    <h6><b>eww@gmail.com </b></h6>
                    <hr></hr>

                  </Col>
                </Row>

                <Row>
                  <Col sm={6}><Button variant="primary" type="submit">
                    Reassign
  </Button></Col>


                </Row>

              </Col>
            </Row>

          </Modal.Body>
        </Modal>
        <Card >
          <Card.Body>

            <div className="float-right">
              <Form inline>
                <h5><FormControl type="text" placeholder="Dispute Id" className="mr-sm-10" /></h5>
                <h5><Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" defaultValue="Category">
                    <option>Category</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group></h5>
                <h5><Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" defaultValue="Channel">
                    <option>Channel</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group></h5>
                <h5><Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" defaultValue="Team Lead">
                    <option>Team Lead</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group></h5>
                <div className="icon-dot float-right"> <Button onClick={() => setLgShow1(true)} variant="light"></Button>
                </div>

              </Form>

            </div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Pan</th>
                  <th>Stan</th>
                  <th>Card Type</th>
                  <th>Category</th>
                  <th>Channel</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
     
              {disputes.map(renderDisputeList)}                  

              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Assigndisputes;
