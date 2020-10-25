import React, { Component} from 'react';
import './dashboard.css';
import Logo from "./logo1.png";
import Bell from "./bell.png";
import User from "./user.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Dropdown, Card } from 'react-bootstrap/';
import { Link } from 'react-router-dom';

export default class navbar extends Component {
  render(){ 
    var datas = JSON.parse(localStorage.getItem("un"))
  let buttons;
  if(datas.Role === "Admin"){
     buttons = (
      <Nav className="mr-auto">
      <Nav.Link className="navbar-nav"><Link to={'/Overview'} ><b>Dashboard</b></Link></Nav.Link>
      <Nav.Link  ><Link to={'/Users'} className="navbar-nav"><b>Users</b></Link></Nav.Link>
      <Nav.Link  ><Link to={'/Logs'} className="navbar-nav"><b>Logs</b></Link></Nav.Link>
      <Nav.Link  ><Link to={'/Teams'} className="navbar-nav"><b>Teams</b></Link></Nav.Link>
      <Nav.Link  ><Link to={'/Process'} className="navbar-nav"><b>Processes</b></Link></Nav.Link>
      <Nav.Link  ><Link to={'/Logs'} className="navbar-nav"><b>Settings</b></Link></Nav.Link>
      </Nav>
     )
  }
  else{
  buttons = (
    <Nav className="mr-auto">
      <Nav.Link className="navbar-nav"><Link to={'/Overview'} ><b>Dashboard</b></Link></Nav.Link>
      <Nav.Link  ><Link to={'/assigndisputes'} className="navbar-nav"><b>Disputes</b></Link></Nav.Link>
      <Nav.Link  ><Link to={'/Users'} className="navbar-nav"><b>Users</b></Link></Nav.Link>
      <Nav.Link  ><Link to={'/Logs'} className="navbar-nav"><b>Logs</b></Link></Nav.Link>
      </Nav>
  );
  }
  return (
    <div >
      <Navbar className="navbar" bg="light" variant="light">
        <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
         { buttons}
        <Nav>
          {/* <Nav.Link eventKey={2} href="#memes" className="dropdown-basic">
            <Dropdown
            >
              <Dropdown.Toggle variant="light" >
                <img src={Bell} />  </Dropdown.Toggle>

              <Dropdown.Menu variant="pull-left">
                <Dropdown.Header>Notifications</Dropdown.Header>
                <Dropdown.Item href="#/action-1">
                  <small className="float-left">Resolved</small>
                  <small className="float-right">2 mins</small>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-1">
                  <small className="float-left">Resolved</small>
                  <small className="float-right">2 mins</small>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-1">
                  <small className="float-left">Resolved</small>
                  <small className="float-right">2 mins</small>
                </Dropdown.Item>
                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>

          </Nav.Link> */}
          <Nav.Link href="#deets" className="dropdown-basic"><img src={Bell} />
          </Nav.Link>
          <Nav.Link href="#deets" className="dropdown-classic"><img src={User} />
          </Nav.Link>

        </Nav>
      </Navbar>
    </div>
  );
  }
}

