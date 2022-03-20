import logo from "./logo.svg";
import React,{useState} from "react";
import "./App.css";
import Header from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Crypto from "../src/components/Crypto";
import Forex from "../src/components/Forex";
import Stock from "../src/components/Stock";
import Home from "../src/components/Home";


import { Navbar, Container, Nav, Modal, Tab } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
 
  return (
    <div className="App">
     
     <Navbar className="navbar" bg="success" variant="dark">
    
    <Navbar.Brand href="#home">MarketList</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/" component={Home}>Home</Nav.Link>
      <Nav.Link href="/Crypto" component={Crypto}>Crypto</Nav.Link>
      <Nav.Link href="/Stock" component={Stock}>Stock</Nav.Link>
      <Nav.Link href="/Forex" component={Forex}>Forex</Nav.Link>
      
     
     

    </Nav>
    
  </Navbar>
  <Home/>
 
      
    </div>
  );
}

export default App;
