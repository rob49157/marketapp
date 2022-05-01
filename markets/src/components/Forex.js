import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";



export default function Forex() {
  const [forex, setForex] = useState([]);
  // state for searchbar
  const [search, setSearch] = useState(" ");

  useEffect(()=>{
    getRates()
  })


  const getRates = async (base) =>{
    const res= await axios.get("https://api.exchangerate.host/latest?base=USD")
    const { rates } = res.data
    
    const ratesTemp=[]
    for(const[symbol,rate] of Object.entries(rates)){
      ratesTemp.push({ symbol, rate})
    }
    setForex(ratesTemp)
  }
  
  return(
    <div>
      {forex.map((d)=>(
        <h1 className="forex">{d.symbol}:{d.rate}</h1>
      
        
      ))}
    </div>
  )

  // useEffect(()=>{
  //   axios.get("https://api.exchangerate.host/latest?base=USD")
  //   .then((response)=>{
  //     setForex(response.data.rates)
  //     console.log(response.data)

  //   })
  //   .catch(error=>console.error(`Error:${error}`))

  // },[])
  

  // return(
  //   <div className="fxrates">
  //     <h1>
  //    {Object.keys(forex)}
  //    </h1>
     
  //   </div>
  // )

 

  
  
  
  


  }
 

  




      
    
  
