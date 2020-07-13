import React, { useState } from 'react';
import{Link} from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
 
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="bg-info rounded">
      <Navbar color="" light expand="md">
       <Link className="m-2 font-weight-bold text-white" to="/home">home</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link className="m-2 font-weight-bold text-white" to="/profile">profile</Link>
            </NavItem>
            <NavItem>
            <Link className="m-2 font-weight-bold text-white" to="/dashboard">dashboard</Link>
            </NavItem>
            
           
          </Nav>
          <div className="">
          <Link  className="m-2 font-weight-normal text-white" to="/login">login</Link>
          <Link  className="m-2 font-weight-normal text-white" to="/signup">signUp</Link>
          

          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;