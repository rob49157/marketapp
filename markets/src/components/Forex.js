import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

export default function Forex() {
  const [forex, setForex] = useState([]);
  // state for searchbar
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.exchangerate.host/latest?base=USD")
      .then((response) => {
        setForex(response.data);
        console.log(response.data);
      });
  }, []);

  // where the erros begin
  // const handlechange= (e)=>{
  //     setSearch(e.target.value)
  // }

  //   const filtermoney = forex.filter((symbol)=>
  //   symbol.rates.toLowerCase().includes(search.toLowerCase()))

  <Container>
    {forex.map((key) => {
git         
      return (
        <div className="forex-container">
          <div className="forex-row">
            <div className="forex">
              <p className="rates" key={key.rates}>
                {key.rates}fasdfas
              </p>
              <p classname="date" key={key.date}>
                {key.date}
              </p>
            </div>
          </div>
          
        </div>
      );
      })}
    
  </Container>;
}
