import React, { useState } from "react";
import { Navbar,Nav,Container,} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Crypto from "../components/Crypto";
import Stock from "../components/Stock";
import Forex from "../components/Forex";

import cryptopic from '../images/crypto.jpg';
import forexpic from '../images/forex.jpg';
import stockpic from '../images/stock.jpg';



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
    <Navbar.Brand href="#home">MarketList</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#Crypto">Crypto</Nav.Link>
      <Nav.Link href="#Stock">Stock</Nav.Link>
      <Nav.Link href="#Forex">Forex</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  
);
}
export default header;
