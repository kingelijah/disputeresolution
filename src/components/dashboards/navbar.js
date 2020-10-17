import React from 'react';
import './dashboard.css';
import Logo from "./logo1.png";
import Bell from "./bell.png";
import User from "./user.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Dropdown } from 'react-bootstrap/';
import { Link }  from 'react-router-dom';



function navbar() {
  return (
    <div >
       <Navbar className="navbar" bg="light" variant="light">
        <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link ><Link to={'/Overview'}  className="navbar-nav"><b>Dashboard</b></Link></Nav.Link>
          <Nav.Link  ><Link to={'/Disputes'} className="navbar-nav"><b>Disputes</b></Link></Nav.Link>
          <Nav.Link  ><Link to={'/Users'} className="navbar-nav"><b>Users</b></Link></Nav.Link>
          <Nav.Link  ><Link to={'/Logs'} className="navbar-nav"><b>Log</b></Link></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="#memes" className="dropdown-basic">
            <Dropdown
            >
              <Dropdown.Toggle variant="light" >
                <img src={Bell} />  </Dropdown.Toggle>

              <Dropdown.Menu variant="pull-left">
              <Dropdown.Header>Dropdown header</Dropdown.Header>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>

          </Nav.Link>
          <Nav.Link href="#deets"><img src={User} />
          </Nav.Link>

        </Nav>
      </Navbar>
    </div>
  );
}

export default navbar;
