import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import "./App.css";
import Header from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Crypto from "../src/components/Crypto";
import Forex from "../src/components/Forex";
import Stock from "../src/components/Stock";
import Home from "../src/components/Home";
import Calculator from "../src/components/Calculator"


import { Navbar, Container, Nav, Modal, Tab } from "react-bootstrap";


function App() {
  

  

    



  return (
    <div className="App">
      






      <Navbar className="navbar" bg="success" variant="dark">

        <Navbar.Brand Classname='metalgear' href="/home" element={Home}>MarketList</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" element={Home}>Home</Nav.Link>
          <Nav.Link href="/Crypto" element={Crypto}>Crypto</Nav.Link>
          <Nav.Link href="/Stock" element={Stock}>Stock</Nav.Link>
          <Nav.Link href="/Forex" element={Forex}>Forex</Nav.Link>




        </Nav>

      </Navbar>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route exact path="/Crypto" element={<Crypto  />} />
          <Route exact path="/Stock" element={Stock} />
          <Route exact path="/Forex" element={<Forex/>} />

        </Routes>
      </Router>


      

      
      


    </div>
  );
}

export default App;
