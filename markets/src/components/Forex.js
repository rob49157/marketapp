import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import '../App.css'
import axios from "axios";



export default function Forex() {
  const [forex, setForex] = useState([]);
  // state for searchbar
  const [ratessearch, setRatessearch] = useState("");


  useEffect(()=>{
    getRates()
  
  },[])


  const getRates = async (base) =>{
    const res= await axios.get("https://api.exchangerate.host/latest?base=USD")
    const { rates } = res.data
    
    const ratesTemp=[]
    for(const[symbol,rate, ] of Object.entries(rates)){
      ratesTemp.push({ symbol, rate })
      
    }
    setForex(ratesTemp)
   
  }



  const handlechangefx = (e) => {
    setRatessearch(e.target.value);
  };

  //create function to filter thru coins and display what users types in

  const Filteredfx = forex.filter((fx) =>
    fx.symbol.toLowerCase().includes(ratessearch.toLowerCase())
  );

 


  return(
  
    
    
    <div className="fxrates">
      <div className="searchbarfx">
        <form>
          <input
          type="text"
          placeholder="Search forex"
          onChange={handlechangefx}></input>
        </form>
      </div>
      { Object.keys(ratessearch).map((key)=>
      <Filteredfx
      key={key.id}
      symbol={key.symbol}/>)}
     



      {forex.map((d)=>(
        <h1 className="forex">{d.symbol}/USD : {d.rate}</h1>
      
        
      ))}
    </div>
  )



 

  
  
  
  


  }
 

  




      
    
  
