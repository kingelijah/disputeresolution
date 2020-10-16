import React from 'react';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Table, Navbar, Button, Nav, Dropdown } from 'react-bootstrap/';
import Doughnut from './doughnutChart';
import Navbars from './navbar';



function overview() {
  return (
    <div className="home">
     <Navbars/>
      <Container>

        <div>
          <h5><b>Overview</b></h5>
        </div>
        <Row>
          <Col sm={3}><Card >
            <Card.Body>
            <div className="float-left">
                <h6  className="disputes">DISPUTES</h6>
                <h5>Unresolved</h5>
              </div>
              <div className="float-right">
              <h5 className="unresolved"><b>256</b></h5>

              </div>

            </Card.Body>
            <Card.Footer className="footer text-center" variant="primary" ><a href="/hghf">see all</a></Card.Footer>
          </Card> </Col>
          <Col sm={3}><Card >
            <Card.Body>
            <div className="float-left">
                <h6  className="disputes">DISPUTES</h6>
                <h5>Resolved</h5>
              </div>
              <div className="float-right">
              <h5><b>256</b></h5>
              </div>

            </Card.Body>
            <Card.Footer className="footer text-center" variant="primary" ><a href="/hghf">see all</a></Card.Footer>
          </Card> </Col>
          <Col sm={3}><Card >
            <Card.Body>

            <div className="float-left">
                <h6  className="disputes">DISPUTES</h6>
                <h5>Assigned</h5>
              </div>
              <div className="float-right">
                <h5><b>256</b></h5>
              </div>
            </Card.Body>
            <Card.Footer className="footer text-center" variant="primary" ><a href="/hghf">see all</a></Card.Footer>
          </Card> </Col>
          <Col sm={3}><Card >
            <Card.Body>

            <div className="float-left">
                <h6  className="disputes">DISPUTES</h6> 
                <h5>Total</h5>
              </div>
              <div className="float-right">
                <h5><b>256</b></h5>
              </div>

            </Card.Body>
            <Card.Footer className="footer text-center" variant="primary" ><a href="/hghf">see all</a></Card.Footer>
          </Card> </Col>
        </Row>
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
      <th>Full Name</th>
      <th>Bank</th>
      <th>Category</th>
      <th>Channel</th>
      <th>Status</th>
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
      <td>...</td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>...</td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>...</td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>...</td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>...</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>...</td>
    </tr>
    <tr>
    <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>...</td>
    </tr>
  </tbody>
</Table>
              </Card.Body>
            </Card>



          </Col>
          <Col sm={6}>
            <Card >
              <Card.Body>
                <div variant="float-left">
                  <h5  className="disputes">Disputes</h5>
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

export default overview;
