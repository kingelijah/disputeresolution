import React, { useState,useEffect } from 'react'
import { Container, Card, Table, FormControl, Modal, Col, Row, Button, Form, ProgressBar} from 'react-bootstrap';
import Navbars from './navbar';
import Axios from "axios";

function Agentpage() {
  var datas = JSON.parse(localStorage.getItem("un"));
    let disputeList = datas.PendingDispute;

    const [ selectedfile, updateselectedfile] = useState({});
    const [ progress, updateprogress] = useState("");
    const [disputes, setdisputes] = useState(datas.PendingDispute);

    useEffect(() => {},[disputes])

    

   const fileSelectedHandler = Event => {
    updateselectedfile(Event.target.files[0])

        console.log(selectedfile)
    }
   const  fileUploadHandler  = Id => e =>  {
        console.log(selectedfile)

        if(selectedfile !== null){
        const data = new FormData();
        data.append("file", selectedfile)       
        console.log(data)
        Axios.post(`https://fbn.vasudamall.com/Agent/ReceiptUpload?disputeId=${Id}`,data,{
                headers: {
                    'Authorization': `Bearer ${datas.Token}`
                }
               
              }).then( res =>{  
                // const index = disputeList.indexOf(disputeList.find(o => o.Id === Id));
                //      if (index > -1) {
                //         disputeList.splice(index, 1)} 
                alert("file uploaded successfully")      
                const index = disputes.indexOf(disputes.find(o => o.Id === Id))
                if(index > -1){
                  disputes.splice(index,1);
                  setdisputes(disputes);
                }                    })
                     .catch( (error) => { alert(" upload failed")      });
                    }
       
        // Axios.post('https://fbn.vasudamall.com/Agent/ReceiptUpload?disputeId=e59c8fa4-2c98-4433-b562-4f4967196e9a',fd,{
        //     unUploadProgress: ProgressEvent => {
        //      console.log(ProgressEvent.loaded/ProgressEvent.total * 100 + '%');
        //     updateprogress(ProgressEvent.loaded/ProgressEvent.total * 100 + '%');
        //     }
        // })
        // .then( res =>{         
        //      console.log( res.data)
        // })
        // .catch()
    }
    const renderDisputeList = (dispute,index) => {
     
        return(
          <tr key={index}>
            <td>{dispute.PAN}</td>
            <td>{dispute.Stan}</td>
            <td>{dispute.CardType}</td>
            <td>{dispute.Category}</td>
            <td>{dispute.Channel}</td>
            <td><input type="file" onChange={fileSelectedHandler}/> </td>
            <td> <Button variant="primary"  onClick={ fileUploadHandler(dispute.Id)
                 } type="submit">
                Upload
  </Button></td>
          </tr>
        )
      };
      let displayProgress; 
      if(progress){
        displayProgress =  (  
            <ProgressBar now={progress} />    
            )
      }
      else{
        displayProgress = ('')
      };

    return (
        <div>
            <Navbars />
      <Container>
       
        <Card >
          <Card.Body>
            <div className="float-left">
              <h5><b>Agent Page</b></h5>
              {displayProgress}
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
                  <th>Upload File</th>
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
    )
}

export default Agentpage
