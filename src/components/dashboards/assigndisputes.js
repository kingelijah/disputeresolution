import React from 'react';
import './dashboard.css'
import { Container,Card,Table,FormControl,Form} from 'react-bootstrap';
import Navbars from './navbar';
import Eye from "./eye.png";
import Bin from "./bin.svg";


function assigndisputes() {
  return (
    <div className="dispute">
      <Navbars/>
      <Container>
      <div >
                  <h5>Assign Disputes</h5>
                </div>
      <Card >
              <Card.Body>
               
                <div className="float-right">
                <Form inline>
      
              <h5><FormControl type="text" placeholder="Dispute Id" className="mr-sm-10" /></h5> 
              <h5><FormControl type="text" placeholder="Category" className="mr-sm-2" /></h5> 
              <h5><FormControl type="text" placeholder="Channel" className="mr-sm-2" /></h5> 
              <h5><FormControl type="text" placeholder="Team Lead" className="mr-sm-2" /></h5>
              <div className="icon-dot float-right"></div>
 
              </Form>

                </div>
                <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Dispute Id</th>
      <th>Category</th>
      <th>Channel</th>
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
      <td><a href="/erh"><img src={Eye} /></a></td>
      <td><a href="/erh"><img src={Bin} /></a></td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
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
      <td><a href="/erh"><img src={Eye} /></a></td>
      <td><a href="/erh"><img src={Bin} /></a></td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
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
      <td><a href="/erh"><img src={Eye} /></a></td>
      <td><a href="/erh"><img src={Bin} /></a></td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
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

export default assigndisputes;
