
import { Navbar,Nav,Container,Div,Img} from "react-bootstrap";


import Crypto from "../components/Crypto";
import Stock from "../components/Stock";
import Forex from "../components/Forex";

import cryptopic from '../images/crypto.jpg';
import forexpic from '../images/forex.jpg';
import stockpic from '../images/stock.jpg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import '../components/'



const header = (props) => {
    const{
    Cryptoselected,setCryptoselected,
    Stockselected, setStockselected,
    Forexselected, setForexselected,
}= props

  return (
    <div class="container">
    <h1 class="title">eFuse</h1>
    <h1 class="title title-large">eFuse</h1>
    <div id="img-1" class="img-container">   
      <img class="img" src={cryptopic}/>
    </div>
    <div id="img-1" class="img-container">   
      <img class="img" src={forexpic}/>
    </div>
    <div id="img-1" class="img-container">   
      <img class="img" src={stockpic}/>
    </div>
    
 
  
 
</div>

     
  
);
}
export default header;


