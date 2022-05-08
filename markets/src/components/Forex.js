import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import '../App.css'
import axios from "axios";



export default function Forex() {
  const [forex, setForex] = useState([]);
  // state for searchbar
  const [ratessearch, setRatessearch] = useState(" ");


  useEffect(()=>{
    getRates()
  })


  const getRates = async (base) =>{
    const res= await axios.get("https://api.exchangerate.host/latest?base=USD")
    const { rates } = res.data
    
    const ratesTemp=[]
    for(const[symbol,rate, ] of Object.entries(rates)){
      ratesTemp.push({ symbol, rate })
      
    }
    setForex(ratesTemp)
    setRatessearch(ratesTemp)
  }



 


  return(
    
    
    <div className="fxrates">
      {/* // searchbar */}
      <input placeholder="Enter Forex"  type='text' onChange={event => setRatessearch(event.target.value)} />
     
     {ratessearch.filter((s)=>{
       if(ratessearch === " "){
         return s
       }else if(s.symbol.toLowerCase().includes(ratessearch.toLowerCase())){
         return s
       }
       console.log(ratessearch)
     })}



      {forex.map((d)=>(
        <h1 className="forex">{d.symbol}/USD : {d.rate}</h1>
      
        
      ))}
    </div>
  )



 

  
  
  
  


  }
 

  




      
    
  
