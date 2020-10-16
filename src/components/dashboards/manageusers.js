import React from 'react';
import { Container,Card,Table,FormControl } from 'react-bootstrap';
import Navbars from './navbar';
import Eye from "./eye.png";
import Bin from "./bin.svg";


function manageusers() {
  return (
    <div className="dispute">
      <Navbars/>
      <Container>
      <Card >
              <Card.Body>
                <div className="float-left">
                  <h5>Assign Disputes</h5>
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

export default manageusers;

