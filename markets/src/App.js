import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import "./App.css";
import Header from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Crypto from "../src/components/Crypto";
import {Forex} from "../src/components/Forex";
import Fxconverter from "../src/components/Fxconverter";
import Home from "../src/components/Home";
import Calculator from "../src/components/Calculator"


import { Navbar, Container, Nav, Modal, Tab } from "react-bootstrap";


function App() {
  

  

    



  return (
    <div className="App">
      






      <Navbar className="navbar" bg="success" variant="dark">

        <Navbar.Brand Classname='metalgear' href="/marketapp/" element={Home}>MarketList</Navbar.Brand>
        <Nav className="me-auto">
          
          <Nav.Link href="/marketapp/Crypto" element={Crypto}>Crypto</Nav.Link>
          <Nav.Link href="/marketapp/Forex" element={Forex}>Forex</Nav.Link>
          <Nav.Link href="/marketapp/Converter" element={Fxconverter}>Fxconverter</Nav.Link>




        </Nav>

        

      </Navbar>


      <BrowserRouter basename='/marketapp' >
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route exact path="/Crypto" element={<Crypto  />} />
          <Route exact path="/Converter" element={<Fxconverter/>} />
          <Route exact path="/Forex" element={<Forex/>} />

        </Routes>
      </BrowserRouter>
    
     


      

      
      


    </div>
  );
}

export default App;
