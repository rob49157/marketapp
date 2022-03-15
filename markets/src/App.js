import logo from "./logo.svg";
import React,{useState} from "react";
import "./App.css";
import Header from "../src/components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Crypto from "../src/components/Crypto";
import Forex from "../src/components/Forex";
import Stock from "../src/components/Stock";
import { Navbar, Container, Nav, Modal, Tab } from "react-bootstrap";

function App() {
  
 
  return (
    <div className="App">
      <Header/>
      
    </div>
  );
}

export default App;
