import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Toolbar,
  Header,
  PageHeader
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Crypto from "../components/Crypto";
import Stock from "../components/Stock";
import Forex from "../components/Forex";



const header = (props) => {
    const{
    Cryptoselected,setCryptoselected,
    Stockselected, setStockselected,
    Forexselected, setForexselected,
}= props

  return (
      <>
  <Navbar bg="secondary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  
);
}
export default header;
