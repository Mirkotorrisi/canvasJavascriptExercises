import React from 'react'
import { Col, Navbar } from 'react-bootstrap';
import "../style.css"
function Header(){
    return(
<Navbar expand="lg"className="navbar bg-warning justify-content-between side-collapse-in">
<Navbar.Brand href="#home"><img width={100}src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" href="/home"/>
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse className="sidebar row justify-content-end navbar-left" id="basic-navbar-nav">

  <Col md={2}className="row justify-content-between mx-5">
    <div>Credits</div>
    <div >List</div>
  </Col>
  </Navbar.Collapse>

</Navbar>
    )};
    export default Header;