import React, { useState,useEffect } from 'react';
import { Container, Card, Table, FormControl, Modal, Col, Row, Button, Form } from 'react-bootstrap';
import Navbars from './navbar';
import Eye from "./eye.png";
import Bin from "./edit.svg";
import Axios from "axios";


function Reconpage() {
  
    var datas = JSON.parse(localStorage.getItem("un"));
  const [disputes, setdisputes] = useState(datas.PendingDispute);

    const renderDisputeList = (dispute,index) => {
        return(
          <tr key={index}>
            <td>{dispute.PAN}</td>
            <td>{dispute.Stan}</td>
            <td>{dispute.CardType}</td>
            <td>{dispute.Category}</td>
            <td>{dispute.Channel}</td>
            <td><Button onClick={acceptRefund(dispute.Id)} variant="primary">Accept</Button></td>
            <td><Button  variant="danger">Reject</Button></td>
          </tr>
        )
      };
      useEffect(() => {},[disputes])
      
    const  acceptRefund  = Id => e => {
        console.log(Id)
        Axios.post(`https://fbn.vasudamall.com/Recon/ApproveRequest?disputeId=${Id}`, {
          headers: {
            'Authorization': `token ${datas.Token}`
          }
        })
        .then((res) => {
          alert('successful')
          console.log(res.data)
        })
        .catch((error) => {
          const index = disputes.indexOf(disputes.find(o => o.Id === Id))
          if(index > -1){
            disputes.splice(index,1);
            setdisputes(disputes);
            console.log(disputes)
          }
          console.error(error)
        })
      }
    
    //   const  declineRefund  = Id => e => {
    //     console.log(Id)
    //     setimgdata('');
    //     Axios.get(`https://fbn.vasudamall.com/CloseDispute?disputeId=${Id}&accepted=false`, {
    //   headers: {
    //     'Authorization': `token ${datas.Token}`
    //   }
    // })
    // .then((res) => {
    //   console.log(res.data)
    // })
    // .catch((error) => {
    //   console.error(error)
    // })
    //   }

  return (
    <div className="dispute">
      <Navbars />
      <Container>
       
        <Card >
          <Card.Body>
            <div className="float-left">
              <h5><b>Reconcile Disputes</b></h5>
            </div>
            <div className="float-right">
              <h5><FormControl type="text" placeholder="Search" className="mr-sm-2" /></h5>
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

export default Reconpage;
