import React from 'react'
import { Container,Card,Row,Col,Form,Button,Nav,FormControl,Table} from 'react-bootstrap';
import Navbars from './navbar';

function Logs() {
    return (
        <div>
            <Navbars/>
            <Container>
                <Card>
                <Row>
                <Col sm={2}>
                <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Active</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
</Nav>
                </Col>  
                <Col sm={10}>
                <Card >
              <Card.Body>
              <div >
                  <h5><b>Logs</b></h5>
                </div>
                <div className="float-right">
                <Form inline>
      
              <h5><FormControl type="text" placeholder="search logs" className="mr-sm-10" /></h5> 
              <h5><FormControl type="text"  className="mr-sm-2" /></h5>
 
              </Form>

                </div>
                <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Dispute Id</th>
      <th>Category</th>
      <th>Channel</th>
      <th>Team Lead</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    
      </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
     
    </tr>
  </tbody>
</Table>
              </Card.Body>
            </Card>
                </Col>
                </Row>      
                </Card>
            </Container>
            
        </div>
    )
}

export default Logs
