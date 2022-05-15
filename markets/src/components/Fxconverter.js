import React, { useEffect, useState } from "react";
import "../App.css";
import Currencyrow from "./fxconverterimport";

export default function Fxconverter() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangerate] =useState();
  const [amount,setAmount]=useState(1)
  const [amountInFromCurrency,setAmountInFromCurrency]=useState(true)
  
let toamount, fromamount
if(amountInFromCurrency){
  fromamount = amount
  toamount= amount * exchangeRate
}else{
  toamount= amount
  fromamount= amount / exchangeRate
}

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "OO3LQyjtTLlIJsljTTnLetLHgKHXv6R0");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch("https://api.apilayer.com/exchangerates_data/latest?", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const firstcurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstcurrency);
        setExchangerate(data.rates[firstcurrency])
      })

      .catch((error) => console.log("error", error));
  }, []);


  function handleFromAmountChange(e){
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e){
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

 

  return (
    
       <><h1 className="convert">Convert</h1>
    <Currencyrow 
    currencyOptions={currencyOptions}
    selectedCurrency={fromCurrency}
    onchangeCurrency={e=>setFromCurrency(e.target.value)}
    onChangeAmount={handleFromAmountChange}
    amount={fromamount}/>
    
    <div className="equals"> To</div>
    <Currencyrow 
    currencyOptions={currencyOptions}
    selectedCurrency={toCurrency}
    onchangeCurrency={e=>setFromCurrency(e.target.value)}
    onChangeAmount={handleToAmountChange}
    amount={toamount}/>
    </>
   
    
  );
}
